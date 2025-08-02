import Head from 'next/head';
import Link from 'next/link';
import GoogleAnalytics from '../components/GoogleAnalytics';

export default function About() {
  return (
    <>
      <Head>
        <title>Guías y Estrategias de Apuestas | BetCalc Pro - Aprende a Ganar</title>
        <meta name="description" content="Guías completas de apuestas deportivas, estrategias avanzadas, análisis de mercado y técnicas profesionales. Aprende a apostar como un experto." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://bet-calculator-betmentor.com/about" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon.svg" />
        
      </Head>

      <GoogleAnalytics />

      <div className="container">
        <div className="header">
          <Link href="/" className="nav-link">← Volver a la Calculadora</Link>
          <h1>📚 Guías y Estrategias de Apuestas</h1>
          <p>Aprende estrategias avanzadas, técnicas profesionales y cómo maximizar tus ganancias</p>
        </div>
        
        <div className="content">
          <div className="highlight">
            <p><strong>🎯 Bienvenido al Centro de Aprendizaje:</strong> Aquí encontrarás las estrategias más efectivas, análisis detallados de mercados deportivos y técnicas profesionales para convertirte en un apostador más informado y exitoso.</p>
          </div>
          
          <h2>🚀 Estrategias Fundamentales</h2>
          
          <h3>1. Análisis de Valor (Value Betting)</h3>
          <p>La estrategia más importante para cualquier apostador serio. Se basa en identificar apuestas donde las probabilidades reales son mayores que las implicadas por las cuotas ofrecidas.</p>
          
          <div className="highlight">
            <p><strong>Fórmula del Valor:</strong> Valor = (Probabilidad Real × Cuota) - 1</p>
            <p><strong>Ejemplo:</strong> Si calculas una probabilidad del 60% y la casa ofrece cuota 2.00, el valor es (0.6 × 2.0) - 1 = 0.2 (20% de valor positivo)</p>
          </div>
          
          <h4>📈 Cómo Identificar Valor:</h4>
          <ul>
            <li><strong>Análisis Estadístico:</strong> Usa datos históricos y tendencias</li>
            <li><strong>Modelos Predictivos:</strong> Crea sistemas de rating personalizados</li>
            <li><strong>Comparación de Mercados:</strong> Contrasta cuotas de diferentes casas</li>
            <li><strong>Factores Cualitativos:</strong> Lesiones, motivación, clima, etc.</li>
          </ul>
          
          <h3>2. Gestión de Bankroll - Kelly Criterion</h3>
          <p>El criterio de Kelly determina el porcentaje óptimo de tu bankroll a apostar basado en la ventaja que tienes.</p>
          
          <div className="highlight">
            <p><strong>Fórmula de Kelly:</strong> f = (bp - q) / b</p>
            <p>Donde: <strong>f</strong> = fracción a apostar, <strong>b</strong> = ganancia neta por peso apostado, <strong>p</strong> = probabilidad de ganar, <strong>q</strong> = probabilidad de perder</p>
          </div>
          
          <h4>💰 Ejemplo Práctico:</h4>
          <ul>
            <li>Cuota: 2.50 (ganancia neta = 1.50)</li>
            <li>Tu probabilidad estimada: 50%</li>
            <li>Cálculo: f = (1.5 × 0.5 - 0.5) / 1.5 = 0.167 (16.7%)</li>
            <li><strong>Recomendación:</strong> Usa Kelly fraccionado (25-50% del resultado)</li>
          </ul>
          
          <h3>3. Arbitraje de Apuestas</h3>
          <p>Técnica que garantiza ganancias aprovechando diferencias de cuotas entre casas de apuestas.</p>
          
          <h4>⚡ Identificación de Oportunidades:</h4>
          <ul>
            <li><strong>Monitoreo continuo:</strong> Usa comparadores de cuotas</li>
            <li><strong>Cálculo rápido:</strong> (1/Cuota1) + (1/Cuota2) &lt; 1</li>
            <li><strong>Distribución:</strong> Cantidad1 = Total × (1/Cuota1) / (1/Cuota1 + 1/Cuota2)</li>
            <li><strong>Ejecución:</strong> Coloca ambas apuestas simultáneamente</li>
          </ul>
          
          <h2>🎯 Análisis por Deportes</h2>
          
          <div className="team-grid">
            <div className="team-card">
              <h3>⚽ Fútbol</h3>
              <p><strong>Mercados Rentables:</strong></p>
              <ul style={{textAlign: 'left', marginLeft: '20px'}}>
                <li>Asian Handicap</li>
                <li>Over/Under 2.5</li>
                <li>Both Teams to Score</li>
                <li>Correct Score</li>
              </ul>
              <p><strong>ROI Promedio:</strong> 3-8%</p>
            </div>
            <div className="team-card">
              <h3>🏀 Baloncesto</h3>
              <p><strong>Mercados Rentables:</strong></p>
              <ul style={{textAlign: 'left', marginLeft: '20px'}}>
                <li>Spread (Handicap)</li>
                <li>Totales por Cuarto</li>
                <li>Performance Individual</li>
                <li>Live Betting</li>
              </ul>
              <p><strong>ROI Promedio:</strong> 4-12%</p>
            </div>
            <div className="team-card">
              <h3>🎾 Tenis</h3>
              <p><strong>Mercados Rentables:</strong></p>
              <ul style={{textAlign: 'left', marginLeft: '20px'}}>
                <li>Set Betting</li>
                <li>Game Handicap</li>
                <li>Break Points</li>
                <li>In-Play Trading</li>
              </ul>
              <p><strong>ROI Promedio:</strong> 5-15%</p>
            </div>
            <div className="team-card">
              <h3>🏈 Fútbol Americano</h3>
              <p><strong>Mercados Rentables:</strong></p>
              <ul style={{textAlign: 'left', marginLeft: '20px'}}>
                <li>Point Spread</li>
                <li>Player Props</li>
                <li>Team Totals</li>
                <li>Live Betting</li>
              </ul>
              <p><strong>ROI Promedio:</strong> 4-10%</p>
            </div>
          </div>
          
          <div style={{textAlign: 'center', margin: '30px 0'}}>
            <Link href="/" className="cta-button">🧮 Usar Calculadora</Link>
            <Link href="/contact" className="cta-button">💬 Hacer Pregunta</Link>
          </div>
          
          <div className="highlight">
            <h3>🎯 Recordatorio Final</h3>
            <p>Las apuestas deportivas requieren disciplina, paciencia y educación continua. Nunca apuestes más de lo que puedes permitirte perder, y siempre ve las apuestas como entretenimiento, no como una forma de generar ingresos garantizados.</p>
            <p><strong>Si sientes que tienes problemas con el juego, busca ayuda profesional inmediatamente.</strong></p>
          </div>
        </div>
      </div>

      <style jsx>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        body {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          line-height: 1.6;
          color: #333;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          min-height: 100vh;
        }
        
        .container {
          max-width: 800px;
          margin: 0 auto;
          padding: 20px;
        }
        
        .header {
          text-align: center;
          background: rgba(255, 255, 255, 0.95);
          border-radius: 15px;
          padding: 30px;
          margin-bottom: 30px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        }
        
        .content {
          background: rgba(255, 255, 255, 0.95);
          border-radius: 15px;
          padding: 40px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          margin-bottom: 30px;
        }
        
        .nav-link {
          display: inline-block;
          margin: 10px 0;
          color: #3498db;
          text-decoration: none;
          font-weight: 600;
        }
        
        .nav-link:hover {
          text-decoration: underline;
        }
        
        h1 {
          color: #2c3e50;
          margin-bottom: 20px;
        }
        
        h2 {
          color: #2c3e50;
          margin-top: 30px;
          margin-bottom: 15px;
          border-bottom: 2px solid #3498db;
          padding-bottom: 5px;
        }
        
        h3 {
          color: #34495e;
          margin-top: 20px;
          margin-bottom: 10px;
        }
        
        p {
          margin-bottom: 15px;
          text-align: justify;
        }
        
        ul {
          margin-left: 20px;
          margin-bottom: 15px;
        }
        
        li {
          margin-bottom: 5px;
        }
        
        .highlight {
          background: #f8f9fa;
          padding: 15px;
          border-left: 4px solid #3498db;
          margin: 20px 0;
        }
        
        .team-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 20px;
          margin: 30px 0;
        }
        
        .team-card {
          background: #f8f9fa;
          padding: 20px;
          border-radius: 10px;
          text-align: center;
        }
        
        .cta-button {
          display: inline-block;
          background: linear-gradient(45deg, #3498db, #2980b9);
          color: white;
          padding: 15px 30px;
          border-radius: 25px;
          text-decoration: none;
          font-weight: bold;
          margin: 20px 10px;
          transition: transform 0.3s;
        }
        
        .cta-button:hover {
          transform: translateY(-2px);
        }
      `}</style>
    </>
  );
}