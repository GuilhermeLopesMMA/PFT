// ============================================
// CONFIGURAÇÃO DE EMAIL - emailConfig.js
// ============================================

const nodemailer = require('nodemailer');

// Timeouts curtos: nunca deixar um pedido HTTP pendurado à espera do SMTP.
// (Importante no Render free, que bloqueia as portas 25/465/587.)
const TIMEOUTS = {
  connectionTimeout: 8000,
  greetingTimeout: 8000,
  socketTimeout: 10000
};

// Configuração do transporter (usando variáveis de ambiente)
const createTransporter = () => {
  // Sem credenciais => não há serviço de email. Não é erro fatal.
  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASSWORD) {
    return null;
  }

  // Se EMAIL_HOST está definido, usar SMTP customizado
  if (process.env.EMAIL_HOST) {
    return nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: parseInt(process.env.EMAIL_PORT || '587'),
      secure: process.env.EMAIL_SECURE === 'true',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD
      },
      ...TIMEOUTS
    });
  }

  // Caso contrário, usar serviço predefinido (Gmail, Outlook, etc.)
  const service = process.env.EMAIL_SERVICE || 'gmail';

  return nodemailer.createTransport({
    service: service,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD
    },
    ...TIMEOUTS
  });
};

// Criar transporter (nunca deita o servidor abaixo)
let transporter = null;
try {
  transporter = createTransporter();
  if (transporter) {
    console.log('Nodemailer configurado.');
  } else {
    console.warn('EMAIL_USER/EMAIL_PASSWORD não definidos: emails desativados.');
  }
} catch (error) {
  console.error('Erro ao configurar Nodemailer:', error.message);
  console.warn('O sistema continua a funcionar, mas os emails NÃO serão enviados.');
  transporter = null;
}

// ============================================
// TEMPLATES DE EMAIL
// ============================================

const emailTemplates = {
  // Email com código de verificação
  codigoVerificacao: (nome, codigo) => ({
    subject: '🔐 Código de Verificação - Pavia Fight Team',
    html: `
      <!DOCTYPE html>
      <html lang="pt-PT">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
          body {
            font-family: Arial, sans-serif;
            background-color: #0a0a0a;
            color: #ffffff;
            margin: 0;
            padding: 0;
          }
          .container {
            max-width: 600px;
            margin: 0 auto;
            background: linear-gradient(135deg, #1a1a1a, #0f0f0f);
            border: 2px solid #d81f26;
            border-radius: 15px;
            overflow: hidden;
          }
          .header {
            background: linear-gradient(135deg, #d81f26, #1fa036);
            padding: 40px 20px;
            text-align: center;
          }
          .header h1 {
            margin: 0;
            color: #000;
            font-size: 32px;
            text-transform: uppercase;
            letter-spacing: 2px;
          }
          .content {
            padding: 40px 30px;
          }
          .welcome-text {
            font-size: 18px;
            line-height: 1.8;
            color: #ddd;
            margin-bottom: 30px;
          }
          .highlight {
            color: #d81f26;
            font-weight: bold;
          }
          .code-box {
            background: linear-gradient(135deg, #d81f26, #1fa036);
            border-radius: 15px;
            padding: 30px;
            text-align: center;
            margin: 30px 0;
          }
          .code {
            font-size: 48px;
            font-weight: bold;
            color: #000;
            letter-spacing: 8px;
            font-family: 'Courier New', monospace;
          }
          .code-label {
            color: #000;
            font-size: 14px;
            margin-top: 10px;
            font-weight: bold;
          }
          .warning-box {
            background: rgba(255, 0, 0, 0.1);
            border: 1px solid rgba(255, 0, 0, 0.3);
            border-radius: 10px;
            padding: 15px;
            margin: 25px 0;
          }
          .warning-box p {
            margin: 5px 0;
            color: #ff6b6b;
            font-size: 14px;
          }
          .footer {
            background: #000;
            padding: 30px 20px;
            text-align: center;
            color: #666;
            border-top: 1px solid #d81f26;
          }
          .footer p {
            margin: 5px 0;
          }
          .footer a {
            color: #d81f26;
            text-decoration: none;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>🥋 PAVIA FIGHT TEAM</h1>
            <p style="color: #000; margin: 10px 0 0; font-size: 14px;">VERIFICAÇÃO DE EMAIL</p>
          </div>
          
          <div class="content">
            <p class="welcome-text">
              Olá <strong class="highlight">${nome}</strong>,
            </p>
            
            <p class="welcome-text">
              Bem-vindo à família PFT! Para completar o teu registo, precisamos que verifiques o teu email.
            </p>
            
            <p class="welcome-text">
              Usa o código abaixo para ativar a tua conta:
            </p>
            
            <div class="code-box">
              <div class="code">${codigo}</div>
              <div class="code-label">CÓDIGO DE VERIFICAÇÃO</div>
            </div>
            
            <p class="welcome-text" style="text-align: center;">
              <strong>Insere este código na página de verificação</strong><br>
              para ativar a tua conta e começar a treinar!
            </p>
            
            <div class="warning-box">
              <p><strong>⚠️ IMPORTANTE:</strong></p>
              <p>• Este código expira em <strong>15 minutos</strong></p>
              <p>• Não partilhes este código com ninguém</p>
              <p>• Se não solicitaste este registo, ignora este email</p>
            </div>
            
            <p class="welcome-text" style="margin-top: 30px; font-size: 14px; color: #999;">
              Se tiveres problemas, podes solicitar um novo código na página de verificação.
            </p>
          </div>
          
          <div class="footer">
            <p><strong>Pavia Fight Team</strong></p>
            <p>📍 R. Luís Calado Nunes 20A, 2870-350 Montijo</p>
            <p>📧 <a href="mailto:geral@paviafightteam.pt">geral@paviafightteam.pt</a> | 📱 +351 963 844 433</p>
            <p style="margin-top: 15px; font-size: 12px; color: #555;">
              Este email foi enviado automaticamente. Por favor, não responda diretamente a esta mensagem.
            </p>
          </div>
        </div>
      </body>
      </html>
    `,
    text: `
🥋 PAVIA FIGHT TEAM - VERIFICAÇÃO DE EMAIL

Olá ${nome},

Bem-vindo à família PFT! Para completar o teu registo, precisamos que verifiques o teu email.

CÓDIGO DE VERIFICAÇÃO: ${codigo}

Insere este código na página de verificação para ativar a tua conta.

⚠️ IMPORTANTE:
• Este código expira em 15 minutos
• Não partilhes este código com ninguém
• Se não solicitaste este registo, ignora este email

---
Pavia Fight Team
📧 geral@paviafightteam.pt | 📱 +351 963 844 433
    `
  }),

  // Email de boas-vindas ao criar conta
  boasVindas: (nome, email) => ({
    subject: '🥋 Bem-vindo à Pavia Fight Team!',
    html: `
      <!DOCTYPE html>
      <html lang="pt-PT">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
          body {
            font-family: Arial, sans-serif;
            background-color: #0a0a0a;
            color: #ffffff;
            margin: 0;
            padding: 0;
          }
          .container {
            max-width: 600px;
            margin: 0 auto;
            background: linear-gradient(135deg, #1a1a1a, #0f0f0f);
            border: 2px solid #d81f26;
            border-radius: 15px;
            overflow: hidden;
          }
          .header {
            background: linear-gradient(135deg, #d81f26, #1fa036);
            padding: 40px 20px;
            text-align: center;
          }
          .header h1 {
            margin: 0;
            color: #000;
            font-size: 32px;
            text-transform: uppercase;
            letter-spacing: 2px;
          }
          .content {
            padding: 40px 30px;
          }
          .welcome-text {
            font-size: 18px;
            line-height: 1.8;
            color: #ddd;
            margin-bottom: 30px;
          }
          .highlight {
            color: #d81f26;
            font-weight: bold;
          }
          .info-box {
            background: rgba(216, 31, 38, 0.1);
            border: 1px solid #d81f26;
            border-radius: 10px;
            padding: 20px;
            margin: 25px 0;
          }
          .info-box h2 {
            color: #d81f26;
            margin-top: 0;
            font-size: 20px;
          }
          .info-box p {
            margin: 10px 0;
            color: #ccc;
          }
          .belt-info {
            background: rgba(255, 255, 255, 0.05);
            border-left: 4px solid #fff;
            padding: 15px;
            margin: 20px 0;
          }
          .footer {
            background: #000;
            padding: 30px 20px;
            text-align: center;
            color: #666;
            border-top: 1px solid #d81f26;
          }
          .footer p {
            margin: 5px 0;
          }
          .footer a {
            color: #d81f26;
            text-decoration: none;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>🥋 PAVIA FIGHT TEAM</h1>
            <p style="color: #000; margin: 10px 0 0; font-size: 14px;">LUTA E FORMAÇÃO ATLÉTICA</p>
          </div>
          
          <div class="content">
            <p class="welcome-text">
              Olá <strong class="highlight">${nome}</strong>,
            </p>
            
            <p class="welcome-text">
              É com grande satisfação que te damos as boas-vindas à <strong class="highlight">família PFT</strong>! 🎉
            </p>
            
            <p class="welcome-text">
              A tua conta foi criada com sucesso e estás pronto para começar a tua jornada no mundo das artes marciais.
            </p>
            
            <div class="info-box">
              <h2>📋 Detalhes da Tua Conta</h2>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Graduação inicial:</strong> Faixa Branca</p>
              <p><strong>Nível de acesso:</strong> Utilizador</p>
            </div>
            
            <div class="belt-info">
              <p style="color: #fff; margin: 0;">
                <strong>🤍 Faixa Branca</strong><br>
                Todos os novos atletas começam com a Faixa Branca. É o início da tua jornada! 
                Com dedicação e treino, irás progredir através das graduações até alcançares a excelência.
              </p>
            </div>
            
            <p class="welcome-text">
              <strong>Próximos Passos:</strong>
            </p>
            <p class="welcome-text" style="margin-left: 20px;">
              ✅ Acede à plataforma com o teu email e password<br>
              ✅ Completa o teu perfil com informações adicionais<br>
              ✅ Consulta o calendário de aulas disponíveis<br>
              ✅ Inscreve-te nas aulas que mais te interessam<br>
              ✅ Acompanha as tuas mensalidades
            </p>
            
            <p class="welcome-text" style="margin-top: 30px;">
              Se tiveres alguma dúvida ou precisares de ajuda, não hesites em contactar-nos. 
              Estamos aqui para te apoiar em cada passo do caminho!
            </p>
            
            <p class="welcome-text">
              Bem-vindo à família PFT! 💪🥋
            </p>
          </div>
          
          <div class="footer">
            <p><strong>Pavia Fight Team</strong></p>
            <p>📍 R. Luís Calado Nunes 20A, 2870-350 Montijo</p>
            <p>📧 <a href="mailto:geral@paviafightteam.pt">geral@paviafightteam.pt</a> | 📱 +351 963 844 433</p>
            <p style="margin-top: 15px; font-size: 12px; color: #555;">
              Este email foi enviado automaticamente. Por favor, não responda diretamente a esta mensagem.
            </p>
          </div>
        </div>
      </body>
      </html>
    `,
    text: `
🥋 BEM-VINDO À PAVIA FIGHT TEAM!

Olá ${nome},

É com grande satisfação que te damos as boas-vindas à família PFT!

A tua conta foi criada com sucesso:
- Email: ${email}
- Graduação inicial: Faixa Branca
- Nível de acesso: Utilizador

Todos os novos atletas começam com a Faixa Branca. É o início da tua jornada!

Próximos passos:
✅ Aceder à plataforma com o teu email e password
✅ Completar o teu perfil
✅ Consultar o calendário de aulas
✅ Inscrever-te nas aulas
✅ Acompanhar as tuas mensalidades

Bem-vindo à família PFT!

---
Pavia Fight Team
📧 geral@paviafightteam.pt | 📱 +351 963 844 433
    `
  })
};

// ============================================
// FUNÇÃO PARA ENVIAR EMAIL
// ============================================

const enviarEmail = async (destinatario, template) => {
  if (!transporter) {
    console.warn('⚠️  Email NÃO enviado - Nodemailer não configurado!');
    console.warn('💡 Configure as variáveis EMAIL_* no ficheiro .env');
    return {
      sucesso: false,
      erro: 'Serviço de email não configurado'
    };
  }

  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASSWORD) {
    console.warn('⚠️  Email NÃO enviado - Credenciais faltando!');
    return {
      sucesso: false,
      erro: 'EMAIL_USER ou EMAIL_PASSWORD não configurados'
    };
  }

  try {
    const mailOptions = {
      from: {
        name: process.env.EMAIL_FROM_NAME || 'Pavia Fight Team',
        address: process.env.EMAIL_FROM_ADDRESS || process.env.EMAIL_USER
      },
      to: destinatario,
      subject: template.subject,
      html: template.html,
      text: template.text
    };

    console.log(`📧 Enviando email para: ${destinatario}`);
    const info = await transporter.sendMail(mailOptions);
    console.log('✅ Email enviado com sucesso!');
    console.log(`📬 Message ID: ${info.messageId}`);
    
    return {
      sucesso: true,
      messageId: info.messageId
    };

  } catch (error) {
    console.error('❌ Erro ao enviar email:', error.message);
    
    if (error.message.includes('Invalid login')) {
      console.error('💡 SOLUÇÃO: Verificar EMAIL_USER e EMAIL_PASSWORD no .env');
      console.error('💡 Se usar Gmail, criar App Password em: https://myaccount.google.com/apppasswords');
    }
    
    return {
      sucesso: false,
      erro: error.message
    };
  }
};

// ============================================
// EXPORTAR
// ============================================

module.exports = {
  transporter,
  enviarEmail,
  emailTemplates
};
