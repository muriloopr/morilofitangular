/* Cores base */
:root {
  --primary-color: #673AB7; /* Roxo */
  --accent-color: #9575CD;  /* Roxo claro */
  --background-color: #121212; /* Preto escuro */
  --card-background: #1E1E1E;
  --text-color: #FFFFFF;
  --secondary-text: #B0BEC5;
}

/* Estilo geral da página */
body {
  background-color: var(--background-color);
  color: var(--text-color);
  margin: 0;
  font-family: 'Roboto', sans-serif;
}

/* Hero Banner */
.hero-banner {
  background: linear-gradient(to right, #512DA8, #673AB7);
  text-align: center;
  padding: 60px 20px;
  color: white;
}

.hero-banner h1 {
  font-size: 2.5rem;
  margin-bottom: 20px;
}

/* Destaques */
.highlights {
  display: flex;
  justify-content: space-around;
  padding: 40px 20px;
  background-color: var(--background-color);
  flex-wrap: wrap;
  gap: 20px;
}

mat-card {
  background-color: var(--card-background);
  color: var(--text-color);
  padding: 20px;
  text-align: center;
  flex: 1 1 200px;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.4);
  transition: transform 0.3s ease;
}

mat-card:hover {
  transform: translateY(-5px);
}

mat-icon {
  font-size: 48px;
  color: var(--accent-color);
  margin-bottom: 10px;
}

/* Call to Action */
.cta-section {
  background-color: var(--card-background);
  text-align: center;
  padding: 50px 20px;
  color: var(--text-color);
}

.cta-section h2 {
  margin-bottom: 20px;
  font-size: 2rem;
}
