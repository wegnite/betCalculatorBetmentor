import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';

export default function EstrategiasProfesionales() {
  const [selectedStrategy, setSelectedStrategy] = useState('');

  return (
    <div className="main-page-container">
      <Head>
        <title>Estrategias Profesionales de Apuestas | BetMentor España</title>
        <meta name="description" content="Descubre las estrategias profesionales de apuestas deportivas más efectivas. Técnicas avanzadas de bankroll, probabilidades y análisis de riesgo con BetMentor." />
        <meta name="keywords" content="estrategias apuestas profesionales,técnicas betting,bankroll management,análisis probabilidades,BetMentor estrategias" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://bet-calculator-betmentor.com/estrategias-profesionales" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      </Head>

      <div className="container">
        <header className="header">
          <Link href="/" className="nav-link">← Volver a la Calculadora</Link>
          <h1>🎯 Estrategias Profesionales de Apuestas</h1>
          <p>Domina las técnicas que usan los apostadores más exitosos del mundo</p>
        </header>

        <section className="strategy-intro">
          <div className="roulette-visual">
            <div className="roulette-wheel">
              <div className="roulette-ball"></div>
            </div>
          </div>
          <h2>🏆 Conviértete en un Apostador Profesional</h2>
          <p>Las estrategias que aprenderás aquí han sido utilizadas por profesionales durante décadas. No son trucos ni fórmulas mágicas, sino métodos matemáticamente probados para maximizar tus ganancias y minimizar los riesgos.</p>
        </section>

        <section className="strategies-grid">
          <div className="strategy-card">
            <div className="strategy-icon">📊</div>
            <h3>Gestión de Bankroll Profesional</h3>
            <div className="strategy-content">
              <h4>🔹 Regla del 1-3%</h4>
              <p>Nunca arriesgues más del 1-3% de tu bankroll total en una sola apuesta. Los profesionales usan exactamente esta regla.</p>
              
              <h4>🔹 Sistema de Unidades</h4>
              <p>Divide tu bankroll en 100 unidades. Una unidad = 1% del bankroll. Apuesta según la confianza: 1-5 unidades máximo.</p>
              
              <h4>🔹 Revisión Mensual</h4>
              <p>Recalcula tu bankroll cada mes. Si has ganado, aumenta el tamaño de las unidades. Si has perdido, redúcelas.</p>
            </div>
          </div>

          <div className="strategy-card">
            <div className="strategy-icon">🎯</div>
            <h3>Análisis de Value Betting</h3>
            <div className="strategy-content">
              <h4>🔹 Fórmula del Value</h4>
              <p>Value = (Probabilidad Real × Cuota) - 1. Si el resultado es positivo, tienes value.</p>
              
              <h4>🔹 Ejemplo Práctico</h4>
              <p>Real Madrid tiene 60% de probabilidad de ganar. Cuota: 1.80<br/>
              Value = (0.60 × 1.80) - 1 = 0.08 = 8% de value positivo</p>
              
              <h4>🔹 Registro de Value</h4>
              <p>Anota todas las apuestas con value positivo. A largo plazo, siempre serán rentables.</p>
            </div>
          </div>

          <div className="strategy-card">
            <div className="strategy-icon">⚖️</div>
            <h3>Sistema Kelly Criterion</h3>
            <div className="strategy-content">
              <h4>🔹 Fórmula Kelly</h4>
              <p>% a apostar = (bp - q) / b<br/>
              b = cuota - 1, p = probabilidad de ganar, q = probabilidad de perder</p>
              
              <h4>🔹 Kelly Fraccionario</h4>
              <p>Usa solo 25-50% del Kelly completo para reducir volatilidad manteniendo rentabilidad.</p>
              
              <h4>🔹 Cuándo NO usar Kelly</h4>
              <p>En mercados con margins altos o cuando no estés seguro de tus probabilidades.</p>
            </div>
          </div>

          <div className="strategy-card">
            <div className="strategy-icon">🔄</div>
            <h3>Arbitraje Deportivo</h3>
            <div className="strategy-content">
              <h4>🔹 Identificar Oportunidades</h4>
              <p>Busca diferencias de cuotas entre casas. Si (1/cuota1) + (1/cuota2) < 1, hay arbitraje.</p>
              
              <h4>🔹 Cálculo de Stakes</h4>
              <p>Stake1 = Bankroll × (1/cuota1) / suma_inversos<br/>
              Stake2 = Bankroll × (1/cuota2) / suma_inversos</p>
              
              <h4>🔹 Riesgos a Considerar</h4>
              <p>Límites de apuesta, cambios de cuotas, y restricciones de cuentas en casas.</p>
            </div>
          </div>
        </section>

        <section className="advanced-techniques">
          <h2>🚀 Técnicas Avanzadas</h2>
          
          <div className="technique-item">
            <h3>📈 Trading de Cuotas</h3>
            <p>Compra apuestas cuando las cuotas están altas y véndelas (lay) cuando bajan. Requiere acceso a exchanges como Betfair.</p>
            <div className="example">
              <strong>Ejemplo:</strong> Respalda al Real Madrid a cuota 3.0 antes del partido. Si baja a 2.0, haz lay para asegurar ganancia.
            </div>
          </div>

          <div className="technique-item">
            <h3>🎲 Apuestas de Sistema</h3>
            <p>Combina múltiples selecciones en sistemas como Trixie, Patent, o Yankee. Permite ganar incluso si algunas selecciones fallan.</p>
            <div className="example">
              <strong>Trixie:</strong> 3 selecciones = 4 apuestas (3 dobles + 1 triple). Necesitas mínimo 2 aciertos para ganar.
            </div>
          </div>

          <div className="technique-item">
            <h3>⏰ Timing del Mercado</h3>
            <p>Las cuotas cambian según información nueva. Anticípate a los movimientos del mercado.</p>
            <div className="example">
              <strong>Estrategia:</strong> Apuesta temprano en favoritos (cuotas más altas) y tarde en outsiders (más información).
            </div>
          </div>
        </section>

        <section className="warning-section">
          <h2>⚠️ Advertencias Importantes</h2>
          <div className="warning-grid">
            <div className="warning-item">
              <h3>🚫 Nunca Persigas Pérdidas</h3>
              <p>La estrategia #1 para la bancarrota. Mantén tu sistema sin importar las rachas.</p>
            </div>
            <div className="warning-item">
              <h3>📊 Lleva Registros Detallados</h3>
              <p>Sin datos, no puedes mejorar. Anota: fecha, evento, tipo, stake, cuota, resultado.</p>
            </div>
            <div className="warning-item">
              <h3>🧠 Controla las Emociones</h3>
              <p>Las decisiones emocionales destruyen bankrolls. Sigue tu estrategia mecánicamente.</p>
            </div>
          </div>
        </section>

        <div className="cta-section">
          <h2>🎯 ¿Listo para Aplicar estas Estrategias?</h2>
          <p>Usa nuestra calculadora profesional para implementar estas técnicas</p>
          <Link href="/" className="cta-button">🧮 Ir a la Calculadora</Link>
        </div>
      </div>

      <style jsx>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .main-page-container {
          background: linear-gradient(135deg, #1a0a0a 0%, #2d1810 25%, #1f0f0f 50%, #3d1a00 75%, #0f0a0a 100%);
          background-attachment: fixed;
          min-height: 100vh;
          color: #FFD700;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 20px;
        }

        .header {
          text-align: center;
          background: linear-gradient(145deg, #2d1810 0%, #1a0a0a 50%, #3d1a00 100%);
          border: 2px solid #FFD700;
          border-radius: 20px;
          padding: 35px;
          margin-bottom: 30px;
          box-shadow: 0 15px 40px rgba(255, 215, 0, 0.3), inset 0 1px 0 rgba(255, 215, 0, 0.4);
        }

        .header h1 {
          color: #FFD700;
          margin-bottom: 15px;
          font-size: 2.5em;
          text-shadow: 0 2px 10px rgba(0, 0, 0, 0.7);
        }

        .header p {
          color: rgba(255, 215, 0, 0.9);
          font-size: 1.2em;
        }

        .nav-link {
          display: inline-block;
          margin-bottom: 20px;
          color: #FF4500;
          text-decoration: none;
          font-weight: 600;
          padding: 8px 16px;
          background: linear-gradient(45deg, #2d1810, #1a0a0a);
          border: 1px solid #FF4500;
          border-radius: 20px;
          transition: all 0.3s;
        }

        .nav-link:hover {
          background: linear-gradient(45deg, #FF4500, #DC143C);
          color: #FFD700;
          transform: translateY(-2px);
        }

        .strategy-intro {
          text-align: center;
          background: linear-gradient(145deg, #2d1810 0%, #1a0a0a 50%, #3d1a00 100%);
          border: 2px solid #FFD700;
          border-radius: 20px;
          padding: 40px;
          margin-bottom: 30px;
          position: relative;
        }

        .roulette-visual {
          display: flex;
          justify-content: center;
          margin-bottom: 20px;
        }

        .roulette-wheel {
          width: 80px;
          height: 80px;
          border: 4px solid #FFD700;
          border-radius: 50%;
          background: conic-gradient(from 0deg, #DC143C 0deg 45deg, #000 45deg 90deg, #DC143C 90deg 135deg, #000 135deg 180deg, #DC143C 180deg 225deg, #000 225deg 270deg, #DC143C 270deg 315deg, #000 315deg 360deg);
          position: relative;
          animation: rouletteSpin 3s linear infinite;
        }

        .roulette-ball {
          width: 8px;
          height: 8px;
          background: #FFD700;
          border-radius: 50%;
          position: absolute;
          top: 10px;
          left: 50%;
          transform: translateX(-50%);
          animation: ballSpin 3s linear infinite reverse;
        }

        @keyframes rouletteSpin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        @keyframes ballSpin {
          0% { transform: translateX(-50%) rotate(0deg) translateX(30px) rotate(0deg); }
          100% { transform: translateX(-50%) rotate(-360deg) translateX(30px) rotate(360deg); }
        }

        .strategy-intro h2 {
          color: #FFD700;
          margin-bottom: 20px;
          font-size: 2em;
        }

        .strategies-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
          gap: 30px;
          margin-bottom: 40px;
        }

        .strategy-card {
          background: linear-gradient(145deg, #2d1810, #1a0a0a);
          border: 2px solid #FF4500;
          border-radius: 15px;
          padding: 30px;
          transition: all 0.3s;
        }

        .strategy-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 40px rgba(255, 69, 0, 0.4);
          border-color: #FFD700;
        }

        .strategy-icon {
          font-size: 3em;
          text-align: center;
          margin-bottom: 20px;
        }

        .strategy-card h3 {
          color: #FFD700;
          text-align: center;
          margin-bottom: 20px;
          font-size: 1.4em;
        }

        .strategy-content h4 {
          color: #FF4500;
          margin-bottom: 10px;
          margin-top: 15px;
        }

        .strategy-content p {
          color: rgba(255, 215, 0, 0.9);
          line-height: 1.6;
          margin-bottom: 15px;
        }

        .advanced-techniques {
          background: linear-gradient(145deg, #2d1810 0%, #1a0a0a 50%, #3d1a00 100%);
          border: 2px solid #32CD32;
          border-radius: 20px;
          padding: 40px;
          margin-bottom: 30px;
        }

        .advanced-techniques h2 {
          color: #32CD32;
          text-align: center;
          margin-bottom: 30px;
          font-size: 2em;
        }

        .technique-item {
          background: linear-gradient(145deg, #2d1810, #1a0a0a);
          border: 1px solid #32CD32;
          border-radius: 10px;
          padding: 25px;
          margin-bottom: 20px;
        }

        .technique-item h3 {
          color: #32CD32;
          margin-bottom: 15px;
        }

        .technique-item p {
          color: rgba(255, 215, 0, 0.9);
          line-height: 1.6;
          margin-bottom: 15px;
        }

        .example {
          background: linear-gradient(145deg, #1a3009, #2d5016);
          border: 1px solid #32CD32;
          padding: 15px;
          border-radius: 8px;
          color: #32CD32;
          font-size: 0.95em;
        }

        .warning-section {
          background: linear-gradient(145deg, #8B0000 0%, #DC143C 50%, #8B0000 100%);
          border: 2px solid #FFD700;
          border-radius: 20px;
          padding: 40px;
          margin-bottom: 30px;
        }

        .warning-section h2 {
          color: #FFD700;
          text-align: center;
          margin-bottom: 30px;
          font-size: 2em;
        }

        .warning-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 20px;
        }

        .warning-item {
          background: linear-gradient(145deg, #2d1810, #1a0a0a);
          border: 2px solid #FFD700;
          border-radius: 10px;
          padding: 20px;
        }

        .warning-item h3 {
          color: #FFD700;
          margin-bottom: 10px;
        }

        .warning-item p {
          color: rgba(255, 215, 0, 0.9);
          line-height: 1.6;
        }

        .cta-section {
          text-align: center;
          background: linear-gradient(145deg, #2d1810 0%, #1a0a0a 50%, #3d1a00 100%);
          border: 2px solid #FFD700;
          border-radius: 20px;
          padding: 40px;
        }

        .cta-section h2 {
          color: #FFD700;
          margin-bottom: 20px;
          font-size: 2em;
        }

        .cta-section p {
          color: rgba(255, 215, 0, 0.9);
          margin-bottom: 30px;
          font-size: 1.2em;
        }

        .cta-button {
          display: inline-block;
          background: linear-gradient(145deg, #FF4500 0%, #DC143C 30%, #8B0000 60%, #FF6347 100%);
          color: #FFD700;
          border: 3px solid #FFD700;
          padding: 20px 40px;
          border-radius: 30px;
          text-decoration: none;
          font-size: 1.3em;
          font-weight: bold;
          transition: all 0.3s;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .cta-button:hover {
          transform: translateY(-5px) scale(1.05);
          box-shadow: 0 15px 40px rgba(255, 69, 0, 0.6);
          text-shadow: 0 0 15px rgba(255, 215, 0, 0.8);
        }

        @media (max-width: 768px) {
          .strategies-grid {
            grid-template-columns: 1fr;
          }
          
          .header h1 {
            font-size: 2em;
          }
          
          .container {
            padding: 15px;
          }
          
          .strategy-card,
          .advanced-techniques,
          .warning-section,
          .cta-section {
            padding: 25px 20px;
          }
        }
      `}</style>
    </div>
  );
}