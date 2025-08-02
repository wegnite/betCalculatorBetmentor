import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import GoogleAnalytics from '../components/GoogleAnalytics';

export default function SingleBetCalculator() {
  const [stake, setStake] = useState('');
  const [oddsFormat, setOddsFormat] = useState('decimal');
  const [odds, setOdds] = useState('');
  const [results, setResults] = useState({
    totalReturn: 0,
    profit: 0,
    roi: 0,
    probability: 0
  });
  const [showResults, setShowResults] = useState(false);

  const convertOdds = (odds: string, fromFormat: string): number => {
    let decimal: number;
    switch (fromFormat) {
      case 'decimal':
        decimal = parseFloat(odds);
        break;
      case 'fractional':
        const parts = odds.split('/');
        decimal = (parseFloat(parts[0]) / parseFloat(parts[1])) + 1;
        break;
      case 'american':
        const american = parseFloat(odds);
        decimal = american > 0 ? (american / 100) + 1 : (100 / Math.abs(american)) + 1;
        break;
      case 'hongkong':
        decimal = parseFloat(odds) + 1;
        break;
      case 'malay':
        const malay = parseFloat(odds);
        decimal = malay > 0 ? malay + 1 : (1 / Math.abs(malay)) + 1;
        break;
      default:
        decimal = parseFloat(odds);
    }
    return decimal;
  };

  const calculateSingleBet = () => {
    const stakeAmount = parseFloat(stake) || 0;
    
    if (stakeAmount <= 0 || !odds) {
      alert('Por favor ingrese una cantidad de apuesta y cuotas válidas');
      return;
    }
    
    try {
      const decimalOdds = convertOdds(odds, oddsFormat);
      const totalReturn = stakeAmount * decimalOdds;
      const profit = totalReturn - stakeAmount;
      const roi = ((profit / stakeAmount) * 100);
      const probability = (1 / decimalOdds) * 100;
      
      setResults({
        totalReturn,
        profit,
        roi,
        probability
      });
      setShowResults(true);
    } catch (error) {
      alert('Error de cálculo, por favor verifique el formato de las cuotas');
    }
  };

  return (
    <>
      <Head>
        <title>Calculadora Apuesta Simple | Single Bet Calculator Pro</title>
        <meta name="description" content="Calculadora de apuesta simple GRATIS. Calcula ganancias de apuestas individuales con precisión. Soporta múltiples formatos de cuotas. Sin registro." />
        <meta name="keywords" content="calculadora apuesta simple,single bet calculator,apuesta individual,calcular cuotas simples,betting calculator" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://bet-calculator-betmentor.com/single-bet-calculator" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon.svg" />
        
        
        {/* Open Graph */}
        <meta property="og:title" content="Calculadora Apuesta Simple | Single Bet Calculator Pro" />
        <meta property="og:description" content="Calculadora gratuita para apuestas simples. Calcula ganancias instantáneamente." />
        <meta property="og:url" content="https://bet-calculator-betmentor.com/single-bet-calculator" />
        <meta property="og:type" content="website" />
        
        {/* JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              "name": "Calculadora de Apuesta Simple",
              "description": "Calculadora profesional para apuestas individuales con soporte múltiples formatos de cuotas",
              "url": "https://bet-calculator-betmentor.com/single-bet-calculator",
              "applicationCategory": "FinanceApplication",
              "operatingSystem": "Web Browser"
            })
          }}
        />
      </Head>

      <GoogleAnalytics />

      <div className="container">
        <h1>🎯 Calculadora de Apuesta Simple</h1>
        
        <div className="calculator">
          <div className="form-group">
            <label htmlFor="stake">Cantidad de Apuesta ($)</label>
            <input 
              type="number" 
              id="stake" 
              placeholder="Ingrese cantidad de apuesta" 
              min="0" 
              step="0.01"
              value={stake}
              onChange={(e) => setStake(e.target.value)}
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="odds-format">Formato de Cuotas</label>
            <select 
              id="odds-format"
              value={oddsFormat}
              onChange={(e) => setOddsFormat(e.target.value)}
            >
              <option value="decimal">Decimal (2.50)</option>
              <option value="fractional">Fraccionario (3/2)</option>
              <option value="american">Americano (+150)</option>
              <option value="hongkong">Hong Kong (1.50)</option>
              <option value="malay">Malayo (-0.67)</option>
            </select>
          </div>
          
          <div className="form-group">
            <label htmlFor="odds">Cuotas</label>
            <input 
              type="text" 
              id="odds" 
              placeholder="Ingrese las cuotas"
              value={odds}
              onChange={(e) => setOdds(e.target.value)}
            />
          </div>
          
          <button className="calculate-btn" onClick={calculateSingleBet}>
            🧮 Calcular Apuesta Simple
          </button>
        </div>
        
        {showResults && (
          <div className="results">
            <h3>Resultados del Cálculo</h3>
            <div className="result-grid">
              <div className="result-item">
                <div>Retorno Total</div>
                <div className="result-value">${results.totalReturn.toFixed(2)}</div>
              </div>
              <div className="result-item">
                <div>Ganancia Neta</div>
                <div className="result-value">${results.profit.toFixed(2)}</div>
              </div>
              <div className="result-item">
                <div>ROI</div>
                <div className="result-value">{results.roi.toFixed(1)}%</div>
              </div>
              <div className="result-item">
                <div>Probabilidad</div>
                <div className="result-value">{results.probability.toFixed(1)}%</div>
              </div>
            </div>
          </div>
        )}
        
        <Link href="/" className="back-link">← Volver a la Calculadora Principal</Link>
        
        <section style={{marginTop: '40px'}}>
          <h2>¿Qué es una Apuesta Simple?</h2>
          <p>Una apuesta simple es el tipo más básico de apuesta deportiva donde seleccionas un solo resultado. Es perfecta para principiantes porque:</p>
          <ul>
            <li>✅ Fácil de entender y calcular</li>
            <li>✅ Menor riesgo comparado con apuestas combinadas</li>
            <li>✅ Control total sobre tu inversión</li>
            <li>✅ Ideal para analizar cada apuesta individualmente</li>
          </ul>
          
          <h3>Cómo Usar la Calculadora</h3>
          <ol>
            <li>Ingresa el monto que quieres apostar</li>
            <li>Selecciona el formato de cuotas de tu casa de apuestas</li>
            <li>Introduce las cuotas del evento</li>
            <li>Haz clic en &quot;Calcular&quot; para ver tus ganancias potenciales</li>
          </ol>
        </section>
      </div>

      <style jsx>{`
        body {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          min-height: 100vh;
          margin: 0;
          padding: 20px;
        }
        .container {
          max-width: 800px;
          margin: 0 auto;
          background: rgba(255, 255, 255, 0.95);
          border-radius: 15px;
          padding: 30px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        }
        h1 {
          color: #2c3e50;
          text-align: center;
          margin-bottom: 30px;
        }
        h2 {
          color: #2c3e50;
          margin-top: 30px;
          margin-bottom: 15px;
        }
        h3 {
          color: #34495e;
          margin-top: 20px;
          margin-bottom: 10px;
        }
        .calculator {
          display: grid;
          gap: 20px;
          margin-bottom: 30px;
        }
        .form-group {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        label {
          font-weight: 600;
          color: #2c3e50;
        }
        input, select {
          padding: 12px;
          border: 2px solid #ecf0f1;
          border-radius: 8px;
          font-size: 16px;
        }
        input:focus, select:focus {
          outline: none;
          border-color: #3498db;
          box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.1);
        }
        .calculate-btn {
          background: linear-gradient(45deg, #3498db, #2980b9);
          color: white;
          border: none;
          padding: 15px 30px;
          border-radius: 25px;
          font-size: 18px;
          font-weight: bold;
          cursor: pointer;
          margin: 20px 0;
          transition: all 0.3s;
        }
        .calculate-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(52, 152, 219, 0.3);
        }
        .results {
          background: linear-gradient(45deg, #27ae60, #219a52);
          color: white;
          padding: 25px;
          border-radius: 15px;
          margin-top: 20px;
        }
        .result-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
          gap: 15px;
        }
        .result-item {
          text-align: center;
          background: rgba(255, 255, 255, 0.1);
          padding: 15px;
          border-radius: 10px;
        }
        .result-value {
          font-size: 24px;
          font-weight: bold;
          margin-top: 5px;
        }
        .back-link {
          display: inline-block;
          margin-top: 20px;
          color: #3498db;
          text-decoration: none;
          font-weight: 600;
        }
        .back-link:hover {
          text-decoration: underline;
        }
        p {
          margin-bottom: 15px;
          line-height: 1.6;
        }
        ul {
          margin: 15px 0;
          padding-left: 20px;
        }
        ol {
          margin: 15px 0;
          padding-left: 20px;
        }
        li {
          margin-bottom: 8px;
        }
      `}</style>
    </>
  );
}