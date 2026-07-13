# Deploy — Pavia Fight Team

## 0. URGENTE: rodar as credenciais expostas

O antigo `.env.example` estava a ser commitado para o GitHub **com credenciais reais**.
Antes de fazer deploy, revoga-as:

1. **MongoDB Atlas** → Database Access → muda a password de `guixlopesx2007_db_user`
2. **Google** → https://myaccount.google.com/apppasswords → revoga a app password
3. **JWT_SECRET** → gera um novo:
   ```bash
   node -e "console.log(require('crypto').randomBytes(48).toString('hex'))"
   ```

---

## 1. MongoDB Atlas

1. Cria um cluster gratuito (M0).
2. **Database Access** → cria um utilizador com password forte.
3. **Network Access** → adiciona `0.0.0.0/0` (o Render não tem IP fixo no plano free).
4. **Connect** → copia a connection string:
   ```
   mongodb+srv://UTILIZADOR:PASSWORD@cluster.mongodb.net/lfa
   ```

---

## 2. Render

1. **New → Web Service** → liga o repositório do GitHub.
2. Configuração:

   | Campo | Valor |
   |---|---|
   | Root Directory | *(vazio)* |
   | Runtime | Node |
   | Build Command | `npm ci --omit=dev` |
   | Start Command | `npm start` |
   | Health Check Path | `/healthz` |
   | Instance Type | Free |

3. **Environment Variables:**

   | Chave | Valor |
   |---|---|
   | `NODE_ENV` | `production` |
   | `MONGODB_URI` | a connection string do Atlas |
   | `JWT_SECRET` | a chave aleatória gerada acima |
   | `ALLOWED_ORIGIN` | `https://o-teu-servico.onrender.com` |

4. **Create Web Service.**

---

## 3. Verificar

```
https://o-teu-servico.onrender.com/healthz
```

Resposta esperada:
```json
{ "estado": "ok", "baseDados": "ligado", "uptime": 12 }
```

Se `baseDados` não for `"ligado"`, o problema está na `MONGODB_URI` ou no Network Access do Atlas.

---

## Notas importantes

**Cold start.** No plano gratuito o serviço adormece ao fim de 15 min sem tráfego.
O primeiro acesso a seguir demora ~30-60s. É normal — avisa quem for ver a demo da PAP.

**Emails.** O Render free bloqueia as portas SMTP (25/465/587), por isso o Gmail
não funciona lá. A app está preparada para isso: se as variáveis `EMAIL_*` estiverem
vazias, os emails são simplesmente desativados e **nada crasha**.
Se precisares mesmo de emails, usa um serviço com API HTTP (ex.: Resend, Brevo),
que não depende de portas SMTP.

**Fotos.** Passam a ser guardadas na base de dados e servidas em `/api/foto/:id`.
Antes eram escritas em disco — e o disco do Render é apagado a cada restart,
por isso as fotos desapareciam sozinhas.

---

## Desenvolvimento local

```bash
cp .env.example .env    # e preenche os valores
npm install
npm start
```
