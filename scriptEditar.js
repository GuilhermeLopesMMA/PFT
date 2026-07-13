* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

:root {
    --red: #d81f26;
    --green: #1fa036;
    --ink: #0a0a0a;
}

html { scroll-behavior: smooth; }

body {
    font-family: 'Inter', 'Arial', sans-serif;
    background: #0a0a0a;
    color: #fff;
    overflow-x: hidden;
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
}

h1, h2, h3, .section-title, .logo-text strong, .stat-num {
    font-family: 'Oswald', 'Arial Narrow', sans-serif;
    font-weight: 600;
    letter-spacing: 0.5px;
}

header {
    position: fixed;
    top: 0;
    width: 100%;
    background: rgba(10, 10, 10, 0.95);
    backdrop-filter: blur(10px);
    padding: 1.5rem 5%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 1000;
    border-bottom: 1px solid rgba(216, 31, 38, 0.3);
}

.logo {
    display: flex;
    align-items: center;
    gap: 0.7rem;
    text-decoration: none;
}

.logo img {
    height: 52px;
    width: 52px;
}

.logo-text {
    display: flex;
    flex-direction: column;
    line-height: 1.1;
}

.logo-text strong {
    font-size: 1.35rem;
    color: #fff;
    text-transform: uppercase;
    letter-spacing: 1px;
}

.logo-text small {
    font-size: 0.68rem;
    color: var(--red);
    text-transform: uppercase;
    letter-spacing: 2px;
    margin-top: 2px;
}

nav {
    display: flex;
    gap: 2rem;
    align-items: center;
}

nav a {
    color: #fff;
    text-decoration: none;
    font-weight: 500;
    transition: all 0.3s;
    position: relative;
}

nav a:hover {
    color: #d81f26;
}

nav a::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background: #d81f26;
    transition: width 0.3s;
}

nav a:hover::after {
    width: 100%;
}

.auth-button {
    padding: 0.6rem 1.5rem;
    background: #d81f26;
    color: #fff;
    border: none;
    border-radius: 25px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s;
}

.auth-button:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(216, 31, 38, 0.4);
}

.user-info {
    display: none;
    align-items: center;
    gap: 1rem;
}

.user-name {
    color: #d81f26;
    font-weight: 600;
}

.logout-btn {
    padding: 0.5rem 1rem;
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid #d81f26;
    color: #fff;
    border-radius: 20px;
    cursor: pointer;
    transition: all 0.3s;
}

.logout-btn:hover {
    background: #d81f26;
}

/* ========== MODAL ========== */

.modal {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    backdrop-filter: blur(5px);
    z-index: 2000;
    justify-content: center;
    align-items: center;
    animation: fadeIn 0.3s;
}

@keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
}

.modal-content {
    background: #141414;
    padding: 3rem;
    border-radius: 20px;
    width: 90%;
    max-width: 450px;
    border: 1px solid rgba(216, 31, 38, 0.3);
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
    animation: slideUp 0.3s;
    position: relative;
}

@keyframes slideUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.close-modal {
    position: absolute;
    top: 1rem;
    right: 1rem;
    background: none;
    border: none;
    color: #999;
    font-size: 2rem;
    cursor: pointer;
    transition: color 0.3s;
}

.close-modal:hover {
    color: #d81f26;
}

.modal-title {
    font-size: 2rem;
    margin-bottom: 0.5rem;
    color: #d81f26;
    text-align: center;
}

.modal-subtitle {
    text-align: center;
    color: #999;
    margin-bottom: 2rem;
    font-size: 0.9rem;
}

.tab-buttons {
    display: flex;
    gap: 1rem;
    margin-bottom: 2rem;
}

.tab-btn {
    flex: 1;
    padding: 0.8rem;
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(216, 31, 38, 0.2);
    color: #999;
    border-radius: 10px;
    cursor: pointer;
    transition: all 0.3s;
    font-weight: 600;
}

.tab-btn.active {
    background: #d81f26;
    color: #fff;
    border-color: #d81f26;
}

.auth-form {
    display: none;
}

.auth-form.active {
    display: block;
}

/* ========== FORMULÁRIO ========== */

.form-group {
    margin-bottom: 1.5rem;
}

.form-group label {
    display: block;
    color: #aaa;
    margin-bottom: 0.5rem;
    font-size: 0.9rem;
}

.form-group input,
.form-group select {
    width: 100%;
    padding: 0.8rem;
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(216, 31, 38, 0.2);
    border-radius: 8px;
    color: #fff;
    font-size: 1rem;
    transition: all 0.3s;
}

.form-group input:focus,
.form-group select:focus {
    outline: none;
    border-color: #d81f26;
    background: rgba(255, 255, 255, 0.08);
}

.form-group select {
    appearance: none;
    -webkit-appearance: none;
    cursor: pointer;
    background-color: rgba(255, 255, 255, 0.05);
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%2322c55e' d='M6 8L1 3h10z'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: right 12px center;
    padding-right: 2.5rem;
}

.form-group select option {
    background-color: #1a1a1a;
    color: #fff;
    padding: 0.8rem;
}

.form-group select option:first-child {
    color: #666;
}

.submit-btn {
    width: 100%;
    padding: 1rem;
    background: #d81f26;
    border: none;
    border-radius: 10px;
    color: #fff;
    font-weight: 600;
    font-size: 1rem;
    cursor: pointer;
    transition: all 0.3s;
    margin-top: 1rem;
}

.submit-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 25px rgba(216, 31, 38, 0.4);
}

.submit-btn:disabled {
    opacity: 0.5;
    cursor: not-allowed;
}

.error-message {
    background: rgba(239, 68, 68, 0.1);
    border: 1px solid rgba(239, 68, 68, 0.3);
    color: #ef4444;
    padding: 0.8rem;
    border-radius: 8px;
    margin-bottom: 1rem;
    display: none;
    font-size: 0.9rem;
}

.success-message {
    background: rgba(216, 31, 38, 0.1);
    border: 1px solid rgba(216, 31, 38, 0.3);
    color: #d81f26;
    padding: 0.8rem;
    border-radius: 8px;
    margin-bottom: 1rem;
    display: none;
    font-size: 0.9rem;
}

.loading {
    display: none;
    text-align: center;
    color: #d81f26;
    margin-top: 1rem;
}

/* ========== HERO COM SLIDESHOW ========== */

.hero {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
}

/* Container do slideshow */
.hero-slideshow {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
}

/* Cada slide individual */
.slide {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    opacity: 0;
    transition: opacity 2s ease-in-out;
    animation: kenBurns 20s infinite;
}

/* Efeito Ken Burns (zoom suave) */
@keyframes kenBurns {
    0% {
        transform: scale(1);
    }
    50% {
        transform: scale(1.1);
    }
    100% {
        transform: scale(1);
    }
}

/* Slide ativo */
.slide.active {
    opacity: 1;
    z-index: 1;
}

/* Overlay escuro para manter texto legível */
.hero-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.72);
    z-index: 2;
}

/* Efeito de pulso no overlay 
.hero-overlay::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
        transparent,
        transparent;
    animation: pulse 4s ease-in-out infinite;
}
*/

@keyframes pulse {
    0%, 100% { opacity: 0.5; }
    50% { opacity: 1; }
}

/* Conteúdo do hero */
.hero-content {
    text-align: center;
    z-index: 3;
    max-width: 900px;
    padding: 2rem;
    position: relative;
}

.hero h1 {
    font-size: 4rem;
    margin-bottom: 1rem;
    text-transform: uppercase;
    letter-spacing: 3px;
    animation: slideUpHero 1s ease-out;
}

.hero .subtitle {
    font-size: 1.5rem;
    color: #d81f26;
    margin-bottom: 2rem;
    animation: slideUpHero 1s ease-out 0.2s backwards;
    text-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
}

.hero p {
    font-size: 1.2rem;
    color: #ddd;
    margin-bottom: 2rem;
    line-height: 1.8;
    animation: slideUpHero 1s ease-out 0.4s backwards;
    text-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
}

@keyframes slideUpHero {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.cta-button {
    display: inline-block;
    padding: 1rem 3rem;
    background: #d81f26;
    color: #fff;
    text-decoration: none;
    font-weight: bold;
    font-size: 1.1rem;
    border-radius: 50px;
    transition: all 0.3s;
    animation: slideUpHero 1s ease-out 0.6s backwards;
    box-shadow: 0 10px 30px rgba(216, 31, 38, 0.3);
}

.cta-button:hover {
    transform: translateY(-3px);
    box-shadow: 0 15px 40px rgba(216, 31, 38, 0.5);
}

/* Indicadores de slide */
.slide-indicators {
    position: absolute;
    bottom: 3rem;
    left: 50%;
    transform: translateX(-50%);
    z-index: 3;
    display: flex;
    gap: 1rem;
}

.indicator {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.3);
    border: 2px solid rgba(255, 255, 255, 0.5);
    cursor: pointer;
    transition: all 0.3s;
}

.indicator:hover {
    background: rgba(255, 255, 255, 0.5);
    transform: scale(1.2);
}

.indicator.active {
    background: #d81f26;
    border-color: #d81f26;
    box-shadow: 0 0 10px rgba(216, 31, 38, 0.6);
}

/* ========== SECTIONS ========== */

section {
    padding: 5rem 5%;
}

.section-title {
    font-size: 2.6rem;
    text-align: center;
    margin-bottom: 0.8rem;
    text-transform: uppercase;
    letter-spacing: 2px;
}

.section-title::after {
    content: '';
    display: block;
    width: 70px;
    height: 4px;
    background: var(--red);
    margin: 0.9rem auto 0;
}

.section-lead {
    text-align: center;
    color: #aaa;
    max-width: 620px;
    margin: 0 auto 3rem;
    font-size: 1.02rem;
}

/* ========== CLASSES ========== */

.classes {
    background: #0f0f0f;
}

.classes-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    max-width: 1200px;
    margin: 0 auto;
}

.class-card {
    background: #141414;
    padding: 2rem;
    border-radius: 15px;
    border: 1px solid rgba(216, 31, 38, 0.2);
    transition: all 0.3s;
    cursor: pointer;
}

.class-card:hover {
    transform: translateY(-10px);
    border-color: #d81f26;
    box-shadow: 0 20px 40px rgba(216, 31, 38, 0.2);
}

.class-card h3 {
    font-size: 1.8rem;
    margin-bottom: 1rem;
    color: #d81f26;
}

.class-card p {
    color: #aaa;
    line-height: 1.8;
    margin-bottom: 1rem;
}

.class-card ul {
    list-style: none;
    margin-top: 1rem;
}

.class-card li {
    padding: 0.5rem 0;
    color: #999;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.class-card li:last-child {
    border-bottom: none;
}

/* ========== BENEFITS ========== */

.benefits {
    background: #0a0a0a;
}

.benefits-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
    max-width: 1200px;
    margin: 0 auto;
}

.benefit-item {
    text-align: center;
    padding: 2rem;
    transition: transform 0.3s;
}

.benefit-item:hover {
    transform: scale(1.05);
}

.benefit-icon {
    font-size: 3rem;
    margin-bottom: 1rem;
}

.benefit-item h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    color: #d81f26;
}

.benefit-item p {
    color: #aaa;
    line-height: 1.6;
}

/* ========== CONTACT ========== */

.contact {
    background: #0a0a0a;
    text-align: center;
}

.contact-info {
    max-width: 800px;
    margin: 2rem auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
}

.contact-item {
    padding: 2rem;
    background: #1a1a1a;
    border-radius: 15px;
    border: 1px solid rgba(216, 31, 38, 0.2);
}

.contact-item h3 {
    color: #d81f26;
    margin-bottom: 1rem;
}

/* ========== FOOTER ========== */

footer {
    background: #000;
    padding: 2rem 5%;
    text-align: center;
    color: #666;
    border-top: 1px solid rgba(216, 31, 38, 0.3);
}

/* ========== RESPONSIVE ========== */

@media (max-width: 768px) {
    .hero h1 {
        font-size: 2.5rem;
    }

    .hero .subtitle {
        font-size: 1.2rem;
    }

    .hero p {
        font-size: 1rem;
    }

    nav {
        gap: 1rem;
    }

    .modal-content {
        padding: 2rem;
        width: 95%;
    }
    
    .slide-indicators {
        bottom: 2rem;
    }
    
    .indicator {
        width: 10px;
        height: 10px;
    }
}
/* ========== TREINADOR / COACH ========== */
.coach {
    padding: 6rem 5%;
    background: #0a0a0a;
}
.coach-card {
    max-width: 760px;
    margin: 0 auto;
    background: #141414;
    border: 1px solid rgba(216,31,38,0.35);
    border-radius: 20px;
    padding: 3rem 2.5rem;
    text-align: center;
}
.coach-badge {
    display: inline-block;
    background: #d81f26;
    color: #fff;
    font-weight: 700;
    font-size: 0.85rem;
    padding: 0.45rem 1.2rem;
    border-radius: 25px;
    margin-bottom: 1.2rem;
}
.coach-card h3 {
    font-size: 2.2rem;
    margin-bottom: 0.3rem;
    background: #d81f26;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}
.coach-role {
    color: #1fa036;
    font-weight: 600;
    margin-bottom: 1.4rem;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-size: 0.95rem;
}
.coach-card > p {
    color: #cfcfcf;
    line-height: 1.7;
    max-width: 640px;
    margin: 0 auto 1.8rem;
}
.coach-creds {
    display: flex;
    flex-wrap: wrap;
    gap: 0.6rem;
    justify-content: center;
}
.coach-creds span {
    background: rgba(255,255,255,0.05);
    border: 1px solid rgba(31,160,54,0.4);
    color: #eaeaea;
    padding: 0.5rem 1rem;
    border-radius: 20px;
    font-size: 0.85rem;
}

/* ========== PROFESSIONAL UPGRADES ========== */

/* keep spacing under titles that have no lead paragraph */
.classes .section-title,
.coach .section-title,
.benefits .section-title { margin-bottom: 2.6rem; }

.eyebrow, .hero-eyebrow {
    display: inline-block;
    font-family: 'Oswald', sans-serif;
    text-transform: uppercase;
    letter-spacing: 3px;
    font-size: 0.8rem;
    color: var(--red);
    margin-bottom: 1rem;
}
.hero-eyebrow {
    border: 1px solid rgba(216,31,38,0.5);
    padding: 0.35rem 1rem;
    border-radius: 30px;
    color: #fff;
}

.hero h1 img { max-width: 520px; width: 100%; height: auto; }
.hero .subtitle { font-family: 'Oswald', sans-serif; letter-spacing: 1px; }

.hero-cta {
    display: flex;
    gap: 1rem;
    justify-content: center;
    flex-wrap: wrap;
    animation: slideUpHero 1s ease-out 0.6s backwards;
}
.cta-outline {
    background: transparent;
    border: 2px solid #fff;
    box-shadow: none;
}
.cta-outline:hover {
    background: #fff;
    color: #0a0a0a;
    box-shadow: none;
}

/* ---- ABOUT ---- */
.about { background: #0f0f0f; }
.about-inner {
    max-width: 1150px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1.1fr 1fr;
    gap: 3.5rem;
    align-items: center;
}
.about-text h2 {
    font-size: 2.4rem;
    text-transform: uppercase;
    line-height: 1.1;
    margin-bottom: 1.3rem;
}
.about-text p { color: #b5b5b5; margin-bottom: 1rem; font-size: 1.02rem; }
.link-arrow {
    display: inline-block;
    margin-top: 0.8rem;
    color: var(--red);
    font-weight: 600;
    text-decoration: none;
    border-bottom: 2px solid transparent;
    transition: border-color 0.3s;
}
.link-arrow:hover { border-color: var(--red); }

.stats-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
}
.stat {
    background: #141414;
    border: 1px solid rgba(255,255,255,0.06);
    border-left: 4px solid var(--red);
    border-radius: 10px;
    padding: 1.6rem 1.4rem;
}
.stat:nth-child(even) { border-left-color: var(--green); }
.stat-num {
    display: block;
    font-size: 2.6rem;
    line-height: 1;
    color: #fff;
    margin-bottom: 0.4rem;
}
.stat-label { color: #9a9a9a; font-size: 0.9rem; }

/* ---- SCHEDULE ---- */
.schedule { background: #0f0f0f; }
.schedule-wrap { max-width: 900px; margin: 0 auto; overflow-x: auto; }
.schedule-table {
    width: 100%;
    border-collapse: collapse;
    background: #141414;
    border-radius: 14px;
    overflow: hidden;
}
.schedule-table th, .schedule-table td {
    padding: 1rem 1.2rem;
    text-align: left;
    border-bottom: 1px solid rgba(255,255,255,0.06);
}
.schedule-table thead th {
    background: #d81f26;
    color: #fff;
    font-family: 'Oswald', sans-serif;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: 600;
}
.schedule-table td:first-child {
    font-family: 'Oswald', sans-serif;
    text-transform: uppercase;
    color: #fff;
    letter-spacing: 1px;
}
.schedule-table tbody tr:hover { background: rgba(255,255,255,0.03); }
.tag {
    display: inline-block;
    padding: 0.35rem 0.9rem;
    border-radius: 20px;
    font-size: 0.82rem;
    font-weight: 600;
}
.tag-red { background: rgba(216,31,38,0.15); color: #ff6b6b; border: 1px solid rgba(216,31,38,0.4); }
.tag-green { background: rgba(31,160,54,0.15); color: #5bd97a; border: 1px solid rgba(31,160,54,0.4); }

/* ---- CONTACT ---- */
.contact-layout {
    max-width: 1100px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    align-items: stretch;
    text-align: left;
}
.contact-cards {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
}
.contact-item { margin: 0; }
.contact-item p { color: #aaa; }
.contact-item a { color: #fff; text-decoration: none; border-bottom: 1px solid var(--red); }
.contact-item a:hover { color: var(--red); }
.contact-map {
    border-radius: 15px;
    overflow: hidden;
    border: 1px solid rgba(216,31,38,0.25);
    min-height: 320px;
}
.contact-map iframe { width: 100%; height: 100%; min-height: 320px; border: 0; filter: grayscale(0.3) contrast(1.1); }

/* ---- FOOTER ---- */
footer { padding: 0; }
.footer-inner {
    max-width: 1150px;
    margin: 0 auto;
    padding: 3rem 5% 2rem;
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    justify-content: space-between;
    align-items: center;
}
.footer-brand { display: flex; align-items: center; gap: 0.9rem; }
.footer-brand img { height: 54px; width: 54px; }
.footer-brand strong {
    display: block;
    color: #fff;
    font-family: 'Oswald', sans-serif;
    text-transform: uppercase;
    letter-spacing: 1px;
}
.footer-brand span { font-size: 0.82rem; color: #888; }
.footer-links { display: flex; flex-wrap: wrap; gap: 1.3rem; }
.footer-links a { color: #bbb; text-decoration: none; font-size: 0.92rem; transition: color 0.3s; }
.footer-links a:hover { color: var(--red); }
.footer-social { display: flex; gap: 0.8rem; }
.footer-social a {
    color: #ddd;
    text-decoration: none;
    font-size: 0.82rem;
    border: 1px solid rgba(255,255,255,0.15);
    padding: 0.45rem 0.9rem;
    border-radius: 20px;
    transition: all 0.3s;
}
.footer-social a:hover { border-color: var(--red); color: var(--red); }
.footer-bottom {
    text-align: center;
    padding: 1.2rem 5%;
    border-top: 1px solid rgba(255,255,255,0.06);
    color: #666;
    font-size: 0.85rem;
}

/* ---- RESPONSIVE ---- */
@media (max-width: 860px) {
    .about-inner, .contact-layout { grid-template-columns: 1fr; }
    .logo-text small { display: none; }
    header { padding: 1rem 5%; }
    nav { gap: 0.9rem; flex-wrap: wrap; }
    .section-title { font-size: 2rem; }
    .about-text h2 { font-size: 1.8rem; }
    .contact-cards { grid-template-columns: 1fr; }
    .footer-inner { flex-direction: column; text-align: center; }
}

/* ========== THEME TOGGLE + LIGHT MODE ========== */
.theme-toggle {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: transparent;
    border: 1px solid rgba(255,255,255,0.25);
    color: #fff;
    font-size: 1.1rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s;
    line-height: 1;
}
.theme-toggle:hover { border-color: var(--red); color: var(--red); transform: rotate(20deg); }

body { transition: background 0.3s ease, color 0.3s ease; }

/* ---------- LIGHT THEME ---------- */
[data-theme="light"] body { background: #f4f4f5; color: #18181b; }
[data-theme="light"] header {
    background: rgba(244,244,245,0.92);
    border-bottom: 1px solid rgba(216,31,38,0.25);
}
[data-theme="light"] .logo-text strong { color: #141414; }
[data-theme="light"] nav a { color: #333; }
[data-theme="light"] nav a:hover { color: var(--red); }
[data-theme="light"] .theme-toggle { border-color: rgba(0,0,0,0.2); color: #222; }
[data-theme="light"] .logout-btn { color: #222; }

[data-theme="light"] .about,
[data-theme="light"] .classes,
[data-theme="light"] .schedule { background: #ffffff; }
[data-theme="light"] .benefits,
[data-theme="light"] .contact,
[data-theme="light"] .coach { background: #f4f4f5; }

[data-theme="light"] .section-lead,
[data-theme="light"] .about-text p,
[data-theme="light"] .class-card p,
[data-theme="light"] .benefit-item p,
[data-theme="light"] .coach-card > p,
[data-theme="light"] .contact-item p { color: #555; }
[data-theme="light"] .class-card li { color: #555; border-bottom: 1px solid rgba(0,0,0,0.08); }
[data-theme="light"] .stat-label { color: #666; }

[data-theme="light"] .class-card {
    background: #fff;
    border: 1px solid rgba(0,0,0,0.08);
    box-shadow: 0 4px 14px rgba(0,0,0,0.05);
}
[data-theme="light"] .class-card:hover { box-shadow: 0 16px 34px rgba(216,31,38,0.15); }
[data-theme="light"] .coach-card { background: #fff; border-color: rgba(216,31,38,0.3); box-shadow: 0 6px 20px rgba(0,0,0,0.06); }
[data-theme="light"] .coach-creds span { background: #f2f2f3; color: #333; }
[data-theme="light"] .stat { background: #f7f7f8; border-color: rgba(0,0,0,0.06); }
[data-theme="light"] .stat-num { color: #141414; }

[data-theme="light"] .contact-item {
    background: #fff;
    border: 1px solid rgba(0,0,0,0.08);
    box-shadow: 0 4px 14px rgba(0,0,0,0.05);
}
[data-theme="light"] .contact-item a { color: #141414; }
[data-theme="light"] .contact-map { border-color: rgba(216,31,38,0.3); }
[data-theme="light"] .contact-map iframe { filter: none; }

[data-theme="light"] .schedule-table { background: #fff; box-shadow: 0 4px 14px rgba(0,0,0,0.05); }
[data-theme="light"] .schedule-table th,
[data-theme="light"] .schedule-table td { border-bottom: 1px solid rgba(0,0,0,0.08); }
[data-theme="light"] .schedule-table td:first-child { color: #141414; }
[data-theme="light"] .schedule-table tbody tr:hover { background: rgba(0,0,0,0.03); }
[data-theme="light"] .tag-red { color: #b81a1a; }
[data-theme="light"] .tag-green { color: #14742a; }

[data-theme="light"] .modal-content { background: #fff; border-color: rgba(0,0,0,0.1); }
[data-theme="light"] .modal-subtitle { color: #666; }
[data-theme="light"] .close-modal { color: #666; }
[data-theme="light"] .form-group label { color: #555; }
[data-theme="light"] .form-group input,
[data-theme="light"] .form-group select {
    background: #f1f1f2;
    border: 1px solid rgba(0,0,0,0.15);
    color: #141414;
}
[data-theme="light"] .form-group select option { background-color: #fff; color: #141414; }
[data-theme="light"] .tab-btn { background: #eee; color: #555; border-color: rgba(0,0,0,0.1); }
[data-theme="light"] .tab-btn.active { background: var(--red); color: #fff; }

[data-theme="light"] footer { background: #eaeaeb; }
[data-theme="light"] .footer-brand strong { color: #141414; }
[data-theme="light"] .footer-brand span { color: #666; }
[data-theme="light"] .footer-links a { color: #444; }
[data-theme="light"] .footer-links a:hover { color: var(--red); }
[data-theme="light"] .footer-social a { color: #333; border-color: rgba(0,0,0,0.15); }
[data-theme="light"] .footer-bottom { color: #777; border-top: 1px solid rgba(0,0,0,0.08); }

/* ========== MOBILE NAV + RESPONSIVE (v2) ========== */
.nav-toggle {
    display: none;
    flex-direction: column;
    justify-content: center;
    gap: 5px;
    width: 44px;
    height: 44px;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 9px;
    z-index: 1200;
}
.nav-toggle span {
    display: block;
    height: 3px;
    width: 100%;
    background: #fff;
    border-radius: 3px;
    transition: transform 0.3s ease, opacity 0.2s ease;
}
.nav-toggle.is-open span:nth-child(1) { transform: translateY(8px) rotate(45deg); }
.nav-toggle.is-open span:nth-child(2) { opacity: 0; }
.nav-toggle.is-open span:nth-child(3) { transform: translateY(-8px) rotate(-45deg); }
[data-theme="light"] .nav-toggle span { background: #141414; }

@media (max-width: 860px) {
    header { padding: 0.9rem 5%; }
    .logo img { height: 42px; width: 42px; }
    .logo-text strong { font-size: 1.1rem; }
    .logo-text small { display: none; }

    .nav-toggle { display: flex; }

    nav {
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        flex-direction: column;
        align-items: stretch;
        gap: 0;
        background: rgba(10, 10, 10, 0.98);
        border-bottom: 1px solid rgba(216, 31, 38, 0.3);
        padding: 0 6%;
        max-height: 0;
        overflow: hidden;
        transition: max-height 0.35s ease, padding 0.35s ease;
    }
    nav.open {
        max-height: 85vh;
        padding: 0.6rem 6% 1.4rem;
        overflow-y: auto;
    }
    [data-theme="light"] nav { background: rgba(244, 244, 245, 0.99); }

    nav a {
        width: 100%;
        padding: 0.95rem 0.2rem;
        border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        font-size: 1.05rem;
    }
    [data-theme="light"] nav a { border-bottom-color: rgba(0, 0, 0, 0.08); }
    nav a::after { display: none; }

    .theme-toggle { margin: 1rem 0 0.4rem; }
    .auth-button { width: 100%; padding: 0.9rem; }
    .user-info { width: 100%; justify-content: space-between; margin-top: 0.6rem; }

    .hero h1 img { max-width: 300px; }
    .hero .subtitle { font-size: 1.05rem; }
    .hero p { font-size: 1rem; }
    .hero-eyebrow { font-size: 0.7rem; }
    .hero-cta { flex-direction: column; align-items: stretch; width: 100%; max-width: 340px; margin: 0 auto; }
    .hero-cta .cta-button { width: 100%; text-align: center; padding: 0.95rem 1rem; }

    section { padding: 3.5rem 6%; }
    .section-title { font-size: 1.95rem; }
    .section-lead { font-size: 0.96rem; margin-bottom: 2.2rem; }
    .about-inner { gap: 2rem; }
    .about-text h2 { font-size: 1.7rem; }
    .coach { padding: 4rem 6%; }
    .coach-card { padding: 2rem 1.3rem; }
    .coach-card h3 { font-size: 1.9rem; }
    .classes-grid, .benefits-grid { gap: 1.2rem; }
}

@media (max-width: 480px) {
    .stats-grid { grid-template-columns: 1fr 1fr; gap: 0.7rem; }
    .stat { padding: 1.2rem 1rem; }
    .stat-num { font-size: 2.1rem; }
    .section-title { font-size: 1.7rem; }
    .schedule-table th, .schedule-table td { padding: 0.7rem 0.6rem; font-size: 0.82rem; }
    .tag { font-size: 0.72rem; padding: 0.3rem 0.6rem; }
    .contact-cards { grid-template-columns: 1fr; }
    .footer-links { justify-content: center; gap: 1rem 1.3rem; }
    .modal-content { padding: 2rem 1.4rem; }
}
