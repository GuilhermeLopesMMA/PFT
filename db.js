// ============================================
// LIGAÇÃO À BASE DE DADOS - db.js (PRODUÇÃO)
// ============================================

const mongoose = require("mongoose");

const mongoUri = process.env.MONGODB_URI;

if (!mongoUri) {
  console.error("ERRO FATAL: variável de ambiente MONGODB_URI não está definida.");
  console.error("Define MONGODB_URI nas Environment Variables do Render.");
  process.exit(1);
}

// Evita que queries feitas antes da ligação fiquem em buffer infinito
mongoose.set("bufferCommands", false);
mongoose.set("strictQuery", true);

async function startDatabase() {
  const maxTentativas = 5;

  for (let tentativa = 1; tentativa <= maxTentativas; tentativa++) {
    try {
      await mongoose.connect(mongoUri, {
        serverSelectionTimeoutMS: 10000,
        socketTimeoutMS: 45000,
        maxPoolSize: 10,
        retryWrites: true,
      });
      console.log("MongoDB conectado");
      return;
    } catch (error) {
      console.error(
        `Falha a ligar ao MongoDB (tentativa ${tentativa}/${maxTentativas}):`,
        error.message
      );

      if (tentativa === maxTentativas) {
        console.error("Não foi possível ligar ao MongoDB. A encerrar.");
        throw error;
      }

      // Backoff exponencial: 2s, 4s, 8s, 16s
      const espera = 2000 * Math.pow(2, tentativa - 1);
      console.log(`A tentar novamente em ${espera / 1000}s...`);
      await new Promise((r) => setTimeout(r, espera));
    }
  }
}

// O Mongoose reconecta sozinho — não matamos o processo por uma quebra transitória
mongoose.connection.on("disconnected", () => {
  console.warn("MongoDB desconectado. O Mongoose vai tentar reconectar.");
});

mongoose.connection.on("reconnected", () => {
  console.log("MongoDB reconectado.");
});

mongoose.connection.on("error", (error) => {
  console.error("Erro no MongoDB:", error.message);
});

module.exports = startDatabase;
