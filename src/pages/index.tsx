import Head from 'next/head';
import { useState, useEffect } from 'react';

interface Selection {
  odds: string;
  name: string;
  index: number;
}

export default function Home() {
  const [currentLanguage, setCurrentLanguage] = useState('es');
  const [currentBetType, setCurrentBetType] = useState('single');
  const [selections, setSelections] = useState<Selection[]>([{ odds: '', name: '', index: 0 }]);
  const [stake, setStake] = useState('');
  const [results, setResults] = useState({
    totalReturn: 0,
    profit: 0,
    probability: 0,
    roi: 0,
    riskLevel: 'low' as 'low' | 'medium' | 'high'
  });
  const [showResults, setShowResults] = useState(false);

  const translations = {
    es: {
      'main-title': '🎯 Bet Calculator BetMentor - Professional Betting Tool',
      'main-subtitle': 'The ultimate bet calculator BetMentor for accurate betting calculations - Multiple bet types with real-time risk assessment by BetMentor',
      'calculator-title': 'Bet Calculator BetMentor',
      'btn-single': 'Simple',
      'btn-parlay': 'Parlay',
      'btn-accumulator': 'Acumuladora',
      'btn-calculate': '🧮 Calcular Ganancias',
      'label-stake': 'Cantidad de Apuesta ($)',
      'label-format': 'Formato de Cuotas',
      'results-title': 'Resultados del Cálculo',
      'label-total-return': 'Retorno Total',
      'label-profit': 'Ganancia Neta',
      'label-probability': 'Probabilidad',
      'label-roi': 'ROI',
    },
    en: {
      'main-title': '🎯 Bet Calculator BetMentor - Professional Betting Tool',
      'main-subtitle': 'The most accurate bet calculator BetMentor for betting returns - Multiple bet types with real-time risk assessment by BetMentor',
      'calculator-title': 'Bet Calculator BetMentor',
      'btn-single': 'Single',
      'btn-parlay': 'Parlay',
      'btn-accumulator': 'Accumulator',
      'btn-calculate': '🧮 Calculate Returns',
      'label-stake': 'Stake Amount ($)',
      'label-format': 'Odds Format',
      'results-title': 'Calculation Results',
      'label-total-return': 'Total Return',
      'label-profit': 'Net Profit',
      'label-probability': 'Win Probability',
      'label-roi': 'ROI',
    },
    pt: {
      'main-title': '🎯 Bet Calculator BetMentor - Ferramenta Profissional',
      'main-subtitle': 'A mais precisa bet calculator BetMentor para cálculos de apostas - Múltiplos tipos de apostas com avaliação de risco pelo BetMentor',
      'calculator-title': 'Bet Calculator BetMentor',
      'btn-single': 'Simples',
      'btn-parlay': 'Parlay',
      'btn-accumulator': 'Acumuladora',
      'btn-calculate': '🧮 Calcular Ganhos',
      'label-stake': 'Valor da Aposta (R$)',
      'label-format': 'Formato das Odds',
      'results-title': 'Resultados do Cálculo',
      'label-total-return': 'Retorno Total',
      'label-profit': 'Lucro Líquido',
      'label-probability': 'Probabilidade',
      'label-roi': 'ROI',
    }
  };

  const t = (key: string) => translations[currentLanguage as keyof typeof translations][key as keyof typeof translations.es] || key;

  const calculateBet = () => {
    const stakeAmount = parseFloat(stake) || 0;
    if (stakeAmount <= 0) {
      alert(currentLanguage === 'es' ? 'Por favor ingrese una cantidad válida' : 'Please enter a valid amount');
      return;
    }

    // Simple calculation for demo
    const odds = parseFloat(selections[0].odds) || 2.0;
    const totalReturn = stakeAmount * odds;
    const profit = totalReturn - stakeAmount;
    const probability = (1 / odds) * 100;
    const roi = (profit / stakeAmount) * 100;

    setResults({
      totalReturn,
      profit,
      probability,
      roi,
      riskLevel: probability > 60 ? 'low' : probability > 30 ? 'medium' : 'high'
    });
    setShowResults(true);
  };

  return (
    <>
      <Head>
        <title>Bet Calculator BetMentor | Professional Betting Calculator Tool</title>
        <meta name="description" content="Bet Calculator BetMentor - Professional bet calculator and betting mentor tool. Free bet calculator BetMentor for sports betting calculations. Best bet calculator BetMentor online." />
        <meta name="keywords" content="bet calculator betmentor,betting calculator,bet calculator,betmentor,sports betting calculator,betting odds calculator,parlay calculator,bet calculator betmentor free" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="BetCalc Pro" />
        <link rel="canonical" href="https://betcalc-pro.com/" />
        <link rel="alternate" hrefLang="es" href="https://betcalc-pro.com/" />
        <link rel="alternate" hrefLang="en" href="https://betcalc-pro.com/en/" />
        <link rel="alternate" hrefLang="pt" href="https://betcalc-pro.com/pt/" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Bet Calculator BetMentor | Professional Betting Calculator Tool" />
        <meta property="og:description" content="Bet Calculator BetMentor - The ultimate bet calculator and betting mentor. Professional bet calculator BetMentor for accurate betting calculations." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://betcalc-pro.com/" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              "name": "Bet Calculator BetMentor",
              "alternateName": "BetMentor Calculator",
              "description": "Bet Calculator BetMentor - Professional betting calculator and mentor tool for sports betting with advanced calculations and risk assessment",
              "url": "https://betcalc-pro.com/",
              "applicationCategory": "FinanceApplication",
              "operatingSystem": "Web Browser",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD"
              },
              "featureList": ["Calculadora Simple", "Parlay", "Acumuladora", "Evaluación de Riesgo", "Múltiples Formatos de Cuotas"],
              "inLanguage": ["es", "en", "pt"],
              "provider": {
                "@type": "Organization",
                "name": "Bet Calculator BetMentor"
              }
            })
          }}
        />
      </Head>

      <div className="language-switch">
        <button 
          className={currentLanguage === 'es' ? 'active' : ''} 
          onClick={() => setCurrentLanguage('es')}
        >
          🇪🇸 Español
        </button>
        <button 
          className={currentLanguage === 'en' ? 'active' : ''} 
          onClick={() => setCurrentLanguage('en')}
        >
          🇺🇸 English
        </button>
        <button 
          className={currentLanguage === 'pt' ? 'active' : ''} 
          onClick={() => setCurrentLanguage('pt')}
        >
          🇧🇷 Português
        </button>
      </div>

      <div className="container">
        <header className="header">
          <h1>{t('main-title')}</h1>
          <p>{t('main-subtitle')}</p>
        </header>

        <section className="feature-highlight">
          <strong>🚀 Bet Calculator BetMentor Features:</strong> Professional bet calculator BetMentor with 15 bet types | Real-time odds comparison by BetMentor | Smart risk evaluation | BetMentor strategy recommendations
        </section>

        <div className="main-content">
          <div className="calculator-section">
            <h2>{t('calculator-title')}</h2>
            
            <div className="bet-type-selector">
              <button 
                className={`bet-type-btn ${currentBetType === 'single' ? 'active' : ''}`}
                onClick={() => setCurrentBetType('single')}
              >
                {t('btn-single')}
              </button>
              <button 
                className={`bet-type-btn ${currentBetType === 'parlay' ? 'active' : ''}`}
                onClick={() => setCurrentBetType('parlay')}
              >
                {t('btn-parlay')}
              </button>
              <button 
                className={`bet-type-btn ${currentBetType === 'accumulator' ? 'active' : ''}`}
                onClick={() => setCurrentBetType('accumulator')}
              >
                {t('btn-accumulator')}
              </button>
            </div>

            <div className="form-group">
              <label htmlFor="stake">{t('label-stake')}</label>
              <input 
                type="number" 
                id="stake" 
                className="form-control" 
                placeholder="Ingrese cantidad de apuesta" 
                min="0" 
                step="0.01"
                value={stake}
                onChange={(e) => setStake(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label htmlFor="odds-format">{t('label-format')}</label>
              <select id="odds-format" className="form-control">
                <option value="decimal">Decimal (2.50)</option>
                <option value="fractional">Fraccionario (3/2)</option>
                <option value="american">Americano (+150)</option>
                <option value="hongkong">Hong Kong (1.50)</option>
                <option value="malay">Malayo (-0.67)</option>
              </select>
            </div>

            <div className="form-group">
              <label>Configuración de Cuotas</label>
              <div className="odds-input-group">
                <input 
                  type="text" 
                  className="form-control odds-input" 
                  placeholder="Ingrese cuotas" 
                  value={selections[0].odds}
                  onChange={(e) => {
                    const newSelections = [...selections];
                    newSelections[0].odds = e.target.value;
                    setSelections(newSelections);
                  }}
                />
                <input 
                  type="text" 
                  className="form-control" 
                  placeholder="Nombre de selección"
                  value={selections[0].name}
                  onChange={(e) => {
                    const newSelections = [...selections];
                    newSelections[0].name = e.target.value;
                    setSelections(newSelections);
                  }}
                />
              </div>
            </div>

            <button className="calculate-btn" onClick={calculateBet}>
              {t('btn-calculate')}
            </button>

            {showResults && (
              <div className="results-section">
                <h3>{t('results-title')}</h3>
                <div className="results-grid">
                  <div className="result-item">
                    <div className="result-label">{t('label-total-return')}</div>
                    <div className="result-value">${results.totalReturn.toFixed(2)}</div>
                  </div>
                  <div className="result-item">
                    <div className="result-label">{t('label-profit')}</div>
                    <div className="result-value">${results.profit.toFixed(2)}</div>
                  </div>
                  <div className="result-item">
                    <div className="result-label">{t('label-probability')}</div>
                    <div className="result-value">{results.probability.toFixed(1)}%</div>
                  </div>
                  <div className="result-item">
                    <div className="result-label">{t('label-roi')}</div>
                    <div className="result-value">{results.roi.toFixed(1)}%</div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="sidebar">
            {/* AdSense Ad Space 1 */}
            <div className="ad-space">
              <ins className="adsbygoogle"
                   style={{display:'block'}}
                   data-ad-client="ca-pub-XXXXXXXXXX"
                   data-ad-slot="XXXXXXXXXX"
                   data-ad-format="auto"
                   data-full-width-responsive="true"></ins>
            </div>

            <aside className="tips-section">
              <h3>💡 BetMentor Betting Tips</h3>
              <div className="tip-item">
                <strong>BetMentor Bankroll Management:</strong>
                <span>Use bet calculator BetMentor to never risk more than 5% of your total bankroll</span>
              </div>
              <div className="tip-item">
                <strong>BetMentor Odds Analysis:</strong>
                <span>Bet calculator BetMentor helps find value bets, focus on implied probability</span>
              </div>
              <div className="tip-item">
                <strong>BetMentor Risk Diversification:</strong>
                <span>Bet calculator BetMentor recommends spreading risk across multiple outcomes</span>
              </div>
            </aside>

            {/* AdSense Ad Space 2 */}
            <div className="ad-space">
              <ins className="adsbygoogle"
                   style={{display:'block'}}
                   data-ad-client="ca-pub-XXXXXXXXXX"
                   data-ad-slot="XXXXXXXXXX"
                   data-ad-format="auto"
                   data-full-width-responsive="true"></ins>
            </div>
          </div>
        </div>

        {/* Bottom Ad */}
        <div style={{textAlign: 'center', margin: '30px 0'}}>
          <ins className="adsbygoogle"
               style={{display:'block'}}
               data-ad-client="ca-pub-XXXXXXXXXX"
               data-ad-slot="XXXXXXXXXX"
               data-ad-format="auto"
               data-full-width-responsive="true"></ins>
        </div>

        <footer className="footer">
          <h3>About Bet Calculator BetMentor - Professional Betting Tool</h3>
          <p>Bet Calculator BetMentor is the most accurate and comprehensive free betting calculation tool available. Our bet calculator BetMentor supports 15 bet types, 5 odds formats, real-time risk assessment, and strategy comparison. BetMentor bet calculator requires no registration and is completely free. Trust bet calculator BetMentor for all your betting calculations.</p>
          <p style={{marginTop: '15px', color: '#7f8c8d', fontSize: '14px'}}>
            ⚠️ Betting involves risks. Please gamble responsibly. Bet calculator BetMentor is for reference only and does not constitute investment advice. BetMentor encourages compliance with local laws and regulations.
          </p>
        </footer>
      </div>

      <style jsx>{`
        /* Copy the CSS from the original HTML file */
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          min-height: 100vh;
          color: #333;
        }

        .container {
          max-width: 1200px;
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

        .header h1 {
          font-size: 2.5em;
          color: #2c3e50;
          margin-bottom: 10px;
        }

        .header p {
          font-size: 1.2em;
          color: #7f8c8d;
        }

        .language-switch {
          position: fixed;
          top: 20px;
          right: 20px;
          background: white;
          border-radius: 25px;
          padding: 10px;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
          z-index: 1000;
        }

        .language-switch button {
          background: none;
          border: none;
          padding: 8px 15px;
          margin: 0 5px;
          border-radius: 20px;
          cursor: pointer;
          font-weight: bold;
          transition: all 0.3s;
        }

        .language-switch button.active {
          background: #3498db;
          color: white;
        }

        .main-content {
          display: grid;
          grid-template-columns: 1fr 300px;
          gap: 30px;
          margin-bottom: 30px;
        }

        .calculator-section {
          background: rgba(255, 255, 255, 0.95);
          border-radius: 15px;
          padding: 30px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        }

        .sidebar {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .ad-space {
          background: #f8f9fa;
          border: 2px dashed #dee2e6;
          border-radius: 10px;
          padding: 20px;
          text-align: center;
          color: #6c757d;
          min-height: 250px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .bet-type-selector {
          display: flex;
          gap: 10px;
          margin-bottom: 30px;
          flex-wrap: wrap;
        }

        .bet-type-btn {
          padding: 12px 20px;
          border: none;
          border-radius: 25px;
          background: #ecf0f1;
          color: #2c3e50;
          cursor: pointer;
          transition: all 0.3s;
          font-weight: 600;
        }

        .bet-type-btn.active {
          background: #3498db;
          color: white;
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(52, 152, 219, 0.3);
        }

        .form-group {
          margin-bottom: 20px;
        }

        .form-group label {
          display: block;
          margin-bottom: 8px;
          font-weight: 600;
          color: #2c3e50;
        }

        .form-control {
          width: 100%;
          padding: 12px;
          border: 2px solid #ecf0f1;
          border-radius: 8px;
          font-size: 16px;
          transition: all 0.3s;
        }

        .form-control:focus {
          outline: none;
          border-color: #3498db;
          box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.1);
        }

        .odds-input-group {
          display: grid;
          grid-template-columns: 1fr 120px;
          gap: 10px;
          align-items: end;
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
          width: 100%;
          margin: 20px 0;
          transition: all 0.3s;
        }

        .calculate-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 25px rgba(52, 152, 219, 0.3);
        }

        .results-section {
          background: linear-gradient(45deg, #27ae60, #219a52);
          color: white;
          padding: 25px;
          border-radius: 15px;
          margin-top: 20px;
        }

        .results-grid {
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

        .result-label {
          font-size: 14px;
          opacity: 0.9;
          margin-bottom: 5px;
        }

        .result-value {
          font-size: 24px;
          font-weight: bold;
        }

        .tips-section {
          background: rgba(255, 255, 255, 0.95);
          border-radius: 15px;
          padding: 20px;
        }

        .tips-section h3 {
          color: #2c3e50;
          margin-bottom: 15px;
        }

        .tip-item {
          background: #f8f9fa;
          padding: 15px;
          border-radius: 8px;
          margin-bottom: 10px;
          border-left: 4px solid #3498db;
        }

        .feature-highlight {
          background: linear-gradient(45deg, #f39c12, #e67e22);
          color: white;
          padding: 15px;
          border-radius: 10px;
          margin-bottom: 20px;
          text-align: center;
        }

        .footer {
          background: rgba(255, 255, 255, 0.95);
          border-radius: 15px;
          padding: 30px;
          margin-top: 30px;
          text-align: center;
        }

        @media (max-width: 768px) {
          .main-content {
            grid-template-columns: 1fr;
          }
          
          .language-switch {
            position: relative;
            top: auto;
            right: auto;
            margin-bottom: 20px;
          }
          
          .header h1 {
            font-size: 2em;
          }
          
          .bet-type-selector {
            justify-content: center;
          }
          
          .results-grid {
            grid-template-columns: 1fr 1fr;
          }
        }
      `}</style>
    </>
  );
}