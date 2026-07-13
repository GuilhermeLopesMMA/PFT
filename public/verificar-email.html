<!DOCTYPE html>
<html lang="pt-PT">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Verificar Email - Pavia Fight Team</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background: #111111;
            min-height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 20px;
        }

        .container {
            background: #141414;
            border: 2px solid #d81f26;
            border-radius: 20px;
            padding: 40px;
            max-width: 500px;
            width: 100%;
            box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
        }

        .logo {
            text-align: center;
            margin-bottom: 30px;
        }

        .logo h1 {
            color: #d81f26;
            font-size: 36px;
            margin-bottom: 5px;
            letter-spacing: 2px;
        }

        .logo p {
            color: #ccc;
            font-size: 14px;
        }

        .verification-box {
            background: rgba(216, 31, 38, 0.1);
            border: 1px solid rgba(216, 31, 38, 0.3);
            border-radius: 15px;
            padding: 25px;
            margin-bottom: 30px;
        }

        .verification-box h2 {
            color: #d81f26;
            font-size: 24px;
            margin-bottom: 15px;
            text-align: center;
        }

        .verification-box p {
            color: #ddd;
            font-size: 14px;
            line-height: 1.6;
            text-align: center;
        }

        .email-display {
            background: rgba(0, 0, 0, 0.3);
            padding: 10px;
            border-radius: 8px;
            margin: 15px 0;
            text-align: center;
        }

        .email-display strong {
            color: #d81f26;
            font-size: 16px;
        }

        .form-group {
            margin-bottom: 25px;
        }

        .form-group label {
            display: block;
            color: #d81f26;
            font-size: 14px;
            font-weight: 600;
            margin-bottom: 8px;
        }

        .code-input {
            width: 100%;
            padding: 15px;
            font-size: 32px;
            text-align: center;
            letter-spacing: 10px;
            background: rgba(255, 255, 255, 0.05);
            border: 2px solid rgba(216, 31, 38, 0.3);
            border-radius: 10px;
            color: #fff;
            font-family: 'Courier New', monospace;
            font-weight: bold;
            transition: all 0.3s;
        }

        .code-input:focus {
            outline: none;
            border-color: #d81f26;
            background: rgba(216, 31, 38, 0.1);
        }

        .btn {
            width: 100%;
            padding: 15px;
            font-size: 16px;
            font-weight: 600;
            border: none;
            border-radius: 10px;
            cursor: pointer;
            transition: all 0.3s;
            margin-bottom: 15px;
        }

        .btn-primary {
            background: #d81f26;
            color: #000;
        }

        .btn-primary:hover {
            transform: translateY(-2px);
            box-shadow: 0 10px 25px rgba(216, 31, 38, 0.3);
        }

        .btn-primary:disabled {
            opacity: 0.5;
            cursor: not-allowed;
            transform: none;
        }

        .btn-secondary {
            background: transparent;
            border: 2px solid #d81f26;
            color: #d81f26;
        }

        .btn-secondary:hover {
            background: rgba(216, 31, 38, 0.1);
        }

        .message {
            padding: 15px;
            border-radius: 10px;
            margin-bottom: 20px;
            display: none;
            text-align: center;
            font-size: 14px;
        }

        .message.success {
            background: rgba(216, 31, 38, 0.2);
            border: 1px solid #d81f26;
            color: #d81f26;
        }

        .message.error {
            background: rgba(239, 68, 68, 0.2);
            border: 1px solid #ef4444;
            color: #ef4444;
        }

        .loading {
            display: none;
            text-align: center;
            color: #d81f26;
            margin: 15px 0;
        }

        .loading::after {
            content: '...';
            animation: dots 1.5s infinite;
        }

        @keyframes dots {
            0%, 20% { content: '.'; }
            40% { content: '..'; }
            60%, 100% { content: '...'; }
        }

        .info-box {
            background: rgba(59, 130, 246, 0.1);
            border: 1px solid rgba(59, 130, 246, 0.3);
            border-radius: 10px;
            padding: 15px;
            margin-top: 20px;
        }

        .info-box p {
            color: #93c5fd;
            font-size: 13px;
            margin-bottom: 8px;
        }

        .info-box p:last-child {
            margin-bottom: 0;
        }

        .timer {
            text-align: center;
            color: #d81f26;
            font-size: 14px;
            margin-top: 10px;
        }

        .timer.expired {
            color: #ef4444;
        }

        @media (max-width: 600px) {
            .container {
                padding: 25px;
            }

            .logo h1 {
                font-size: 28px;
            }

            .code-input {
                font-size: 24px;
                letter-spacing: 6px;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="logo">
            <h1>🥋 PFT</h1>
            <p>VERIFICAÇÃO DE EMAIL</p>
        </div>

        <div class="verification-box">
            <h2>Verifica o Teu Email</h2>
            <p>Enviámos um código de verificação de 6 dígitos para:</p>
            <div class="email-display">
                <strong id="emailDisplay">email@exemplo.com</strong>
            </div>
            <p style="margin-top: 15px; font-size: 12px; color: #999;">
                ⏰ O código expira em <strong>15 minutos</strong>
            </p>
        </div>

        <div id="successMessage" class="message success"></div>
        <div id="errorMessage" class="message error"></div>

        <form id="verificationForm">
            <div class="form-group">
                <label for="codigoInput">Código de Verificação</label>
                <input 
                    type="text" 
                    id="codigoInput" 
                    class="code-input" 
                    maxlength="6" 
                    placeholder="000000"
                    pattern="[0-9]{6}"
                    required
                    autocomplete="off"
                >
            </div>

            <button type="submit" class="btn btn-primary" id="verifyBtn">
                Verificar Código
            </button>

            <div class="loading" id="loading">A verificar</div>
        </form>

        <button type="button" class="btn btn-secondary" id="resendBtn">
            Reenviar Código
        </button>

        <div class="info-box">
            <p>📧 Não recebeste o email?</p>
            <p>• Verifica a pasta de spam/lixo</p>
            <p>• Aguarda alguns minutos (pode demorar até 5 min)</p>
            <p>• Clica em "Reenviar Código" se necessário</p>
        </div>
    </div>

    <script>
        // Obter email da URL ou localStorage
        const urlParams = new URLSearchParams(window.location.search);
        const emailVerificar = urlParams.get('email') || localStorage.getItem('emailPendente');

        if (!emailVerificar) {
            window.location.href = '/index.html';
        }

        // Mostrar email na página
        document.getElementById('emailDisplay').textContent = emailVerificar;

        // Elementos
        const verificationForm = document.getElementById('verificationForm');
        const codigoInput = document.getElementById('codigoInput');
        const verifyBtn = document.getElementById('verifyBtn');
        const resendBtn = document.getElementById('resendBtn');
        const loading = document.getElementById('loading');
        const successMessage = document.getElementById('successMessage');
        const errorMessage = document.getElementById('errorMessage');

        // Auto-focus no input
        codigoInput.focus();

        // Permitir apenas números
        codigoInput.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/[^0-9]/g, '');
        });

        // Funções de mensagem
        function showSuccess(msg) {
            successMessage.textContent = msg;
            successMessage.style.display = 'block';
            errorMessage.style.display = 'none';
        }

        function showError(msg) {
            errorMessage.textContent = msg;
            errorMessage.style.display = 'block';
            successMessage.style.display = 'none';
        }

        function hideMessages() {
            successMessage.style.display = 'none';
            errorMessage.style.display = 'none';
        }

        // Verificar código
        verificationForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            hideMessages();

            const codigo = codigoInput.value.trim();

            if (codigo.length !== 6) {
                showError('❌ O código deve ter 6 dígitos!');
                return;
            }

            verifyBtn.disabled = true;
            loading.style.display = 'block';

            try {
                const response = await fetch('/api/verificar-email', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ 
                        email: emailVerificar, 
                        codigo 
                    })
                });

                const data = await response.json();

                if (response.ok) {
                    // Email verificado com sucesso!
                    showSuccess('✅ ' + data.mensagem);
                    
                    // Guardar token e utilizador
                    localStorage.setItem('token', data.token);
                    localStorage.setItem('utilizador', JSON.stringify(data.utilizador));
                    localStorage.removeItem('emailPendente');

                    // Redirecionar após 2 segundos
                    setTimeout(() => {
                        window.location.href = '/index.html';
                    }, 2000);
                } else {
                    if (data.codigoExpirado) {
                        showError('⏰ ' + data.erro);
                    } else {
                        showError('❌ ' + data.erro);
                    }
                    codigoInput.value = '';
                    codigoInput.focus();
                }
            } catch (error) {
                console.error('Erro:', error);
                showError('❌ Erro de conexão. Tenta novamente.');
            } finally {
                verifyBtn.disabled = false;
                loading.style.display = 'none';
            }
        });

        // Reenviar código
        resendBtn.addEventListener('click', async () => {
            hideMessages();
            resendBtn.disabled = true;
            resendBtn.textContent = 'A enviar...';

            try {
                const response = await fetch('/api/reenviar-codigo', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ email: emailVerificar })
                });

                const data = await response.json();

                if (response.ok) {
                    showSuccess('📧 ' + data.mensagem);
                    
                    // Mostrar código de debug se email não foi enviado
                    if (data.codigoDebug) {
                        console.log('🔐 CÓDIGO DE DEBUG:', data.codigoDebug);
                        showSuccess('📧 Novo código gerado (ver console): ' + data.codigoDebug);
                    }
                    
                    codigoInput.value = '';
                    codigoInput.focus();
                } else {
                    showError('❌ ' + data.erro);
                }
            } catch (error) {
                console.error('Erro:', error);
                showError('❌ Erro de conexão. Tenta novamente.');
            } finally {
                resendBtn.disabled = false;
                resendBtn.textContent = 'Reenviar Código';
            }
        });
    </script>
</body>
</html>
