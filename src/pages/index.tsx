import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import * as React from 'react';

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
  const [currentSlide, setCurrentSlide] = useState(0);
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
      'main-title': '🎯 Calculadora de Apuestas BetMentor - Herramienta Profesional',
      'main-subtitle': 'La calculadora de apuestas más precisa y completa - Múltiples tipos de apuestas con evaluación de riesgo en tiempo real por BetMentor',
      'calculator-title': 'Calculadora de Apuestas BetMentor',
      'btn-single': 'Simple',
      'btn-parlay': 'Combinada',
      'btn-accumulator': 'Acumuladora',
      'btn-calculate': '🧮 Calcular Ganancias',
      'label-stake': 'Cantidad de Apuesta (€)',
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

  // Carousel auto-play effect
  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Animated counter effect
  const [counters, setCounters] = React.useState({
    users: 0,
    calculations: 0,
    types: 0
  });

  React.useEffect(() => {
    const animateCounter = (target: number, key: keyof typeof counters, duration: number) => {
      let start = 0;
      const increment = target / (duration / 50);
      const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
          setCounters(prev => ({ ...prev, [key]: target }));
          clearInterval(timer);
        } else {
          setCounters(prev => ({ ...prev, [key]: Math.floor(start) }));
        }
      }, 50);
    };

    // Start animations with delays
    setTimeout(() => animateCounter(50000, 'users', 2000), 500);
    setTimeout(() => animateCounter(1000000, 'calculations', 2500), 1000);
    setTimeout(() => animateCounter(15, 'types', 1500), 1500);
  }, []);

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
    <div className="main-page-container">
      <Head>
        <title>Calculadora de Apuestas BetMentor | Herramienta Profesional de Apuestas Deportivas</title>
        <meta name="description" content="Calculadora de Apuestas BetMentor - La herramienta más precisa para calcular apuestas deportivas. Calculadora gratuita con múltiples tipos de apuestas: simples, combinadas y acumuladoras. ¡Prueba BetMentor ahora!" />
        <meta name="keywords" content="calculadora apuestas,calculadora apuestas deportivas,betmentor,calculadora de apuestas gratis,apuestas deportivas españa,cuotas deportivas,calculadora combinadas,apuestas simples" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="BetMentor España" />
        <link rel="canonical" href="https://bet-calculator-betmentor.com/" />
        <link rel="alternate" hrefLang="es" href="https://bet-calculator-betmentor.com/" />
        <link rel="alternate" hrefLang="en" href="https://bet-calculator-betmentor.com/en/" />
        <link rel="alternate" hrefLang="pt" href="https://bet-calculator-betmentor.com/pt/" />
        <link rel="alternate" hrefLang="x-default" href="https://bet-calculator-betmentor.com/" />
        <meta httpEquiv="content-language" content="es" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Calculadora de Apuestas BetMentor | Herramienta Profesional de Apuestas Deportivas" />
        <meta property="og:description" content="La calculadora de apuestas más precisa de España. Calcula tus ganancias en apuestas simples, combinadas y acumuladoras con BetMentor. ¡Gratis y fácil de usar!" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://bet-calculator-betmentor.com/" />
        <meta property="og:image" content="https://bet-calculator-betmentor.com/icons8-bet-100.png" />
        <meta property="og:site_name" content="Calculadora de Apuestas BetMentor" />
        <meta property="og:locale" content="es_ES" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              "name": "Calculadora de Apuestas BetMentor",
              "alternateName": "BetMentor Calculadora",
              "description": "Calculadora de Apuestas BetMentor - Herramienta profesional para calcular apuestas deportivas con evaluación avanzada de riesgos y múltiples tipos de apuestas",
              "url": "https://bet-calculator-betmentor.com/",
              "applicationCategory": "FinanceApplication",
              "operatingSystem": "Navegador Web",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "EUR"
              },
              "featureList": ["Calculadora Simple", "Combinadas", "Acumuladoras", "Evaluación de Riesgo", "Múltiples Formatos de Cuotas"],
              "inLanguage": ["es", "en", "pt"],
              "provider": {
                "@type": "Organization",
                "name": "Calculadora de Apuestas BetMentor"
              },
              "audience": {
                "@type": "Audience",
                "geographicArea": "España"
              }
            })
          }}
        />
      </Head>

      <div className="casino-decoration">
        <div className="casino-chip chip-1"></div>
        <div className="casino-chip chip-2"></div>
        <div className="casino-chip chip-3"></div>
        <div className="casino-chip chip-4"></div>
      </div>

      <div className="floating-icons">
        <div className="floating-icon icon-1">💰</div>
        <div className="floating-icon icon-2">🎯</div>
        <div className="floating-icon icon-3">🔥</div>
      </div>

      <div className="particle-bg">
        <div className="particle particle-1"></div>
        <div className="particle particle-2"></div>
        <div className="particle particle-3"></div>
      </div>

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

        <div className="floating-icons">
          <div className="floating-icon icon-1">💰</div>
          <div className="floating-icon icon-2">🎯</div>
          <div className="floating-icon icon-3">🎲</div>
          <div className="floating-icon icon-4">💎</div>
          <div className="floating-icon icon-5">🔥</div>
          <div className="floating-icon icon-6">⚡</div>
        </div>
        <header className="header">
          <h1>{t('main-title')}</h1>
          <p>{t('main-subtitle')}</p>
        </header>

        <section className="hero-carousel">
          <div className="carousel-container">
            <div className={`carousel-slide ${currentSlide === 0 ? 'active' : ''}`}>
              <div className="slide-content">
                <h2>🎰 ¡Gana Como un Profesional!</h2>
                <p>Calculadora BetMentor: La herramienta secreta de apostadores exitosos</p>
                <div className="slide-stats">
                  <span className="stat">+50,000 usuarios</span>
                  <span className="stat">1M+ cálculos</span>
                  <span className="stat">Precisión 100%</span>
                </div>
              </div>
            </div>
            <div className={`carousel-slide ${currentSlide === 1 ? 'active' : ''}`}>
              <div className="slide-content">
                <h2>💰 Maximiza tus Ganancias</h2>
                <p>Estrategias avanzadas de bankroll y gestión de riesgo</p>
                <div className="slide-stats">
                  <span className="stat">15+ tipos de apuestas</span>
                  <span className="stat">5 formatos de cuotas</span>
                  <span className="stat">Análisis en tiempo real</span>
                </div>
              </div>
            </div>
            <div className={`carousel-slide ${currentSlide === 2 ? 'active' : ''}`}>
              <div className="slide-content">
                <h2>🔥 ¡El Secreto de los Pros!</h2>
                <p>Descubre las estrategias que usan los apostadores profesionales</p>
                <div className="slide-stats">
                  <span className="stat">ROI optimizado</span>
                  <span className="stat">Riesgo controlado</span>
                  <span className="stat">Resultados garantizados</span>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-indicators">
            <span 
              className={`indicator ${currentSlide === 0 ? 'active' : ''}`}
              onClick={() => setCurrentSlide(0)}
            ></span>
            <span 
              className={`indicator ${currentSlide === 1 ? 'active' : ''}`}
              onClick={() => setCurrentSlide(1)}
            ></span>
            <span 
              className={`indicator ${currentSlide === 2 ? 'active' : ''}`}
              onClick={() => setCurrentSlide(2)}
            ></span>
          </div>
        </section>

        <section className="visual-showcase">
          <h2>🎰 ¡Apuesta como un Profesional!</h2>
          <div className="showcase-grid">
            <Link href="/estrategias-profesionales" className="showcase-item clickable">
              <div className="visual-element roulette">
                <div className="roulette-wheel">
                  <div className="roulette-ball"></div>
                </div>
              </div>
              <h3>Estrategias Profesionales</h3>
              <p>Calcula probabilidades exactas como los expertos</p>
              <div className="click-indicator">👆 Haz clic para aprender</div>
            </Link>
            <Link href="/metodos-ganadores" className="showcase-item clickable">
              <div className="visual-element cards">
                <div className="card card-1"></div>
                <div className="card card-2"></div>
                <div className="card card-3"></div>
              </div>
              <h3>Métodos Ganadores</h3>
              <p>Técnicas comprobadas de apostadores exitosos</p>
              <div className="click-indicator">👆 Haz clic para descubrir</div>
            </Link>
            <Link href="/maximiza-ganancias" className="showcase-item clickable">
              <div className="visual-element coins">
                <div className="coin coin-1"></div>
                <div className="coin coin-2"></div>
                <div className="coin coin-3"></div>
              </div>
              <h3>Maximiza Ganancias</h3>
              <p>ROI optimizado y gestión avanzada de bankroll</p>
              <div className="click-indicator">👆 Haz clic para maximizar</div>
            </Link>
          </div>
        </section>

        <section className="educational-resources">
          <h2>📚 Aprende Apuestas Deportivas con BetMentor</h2>
          <div className="resources-grid">
            <div className="resource-card">
              <div className="resource-icon">🎯</div>
              <h3>Tutoriales Completos</h3>
              <p>Aprende desde cero con nuestros tutoriales paso a paso de apuestas deportivas</p>
              <Link href="/tutoriales-apuestas-deportivas" className="resource-link">Ver Tutoriales</Link>
            </div>
            <div className="resource-card">
              <div className="resource-icon">🎲</div>
              <h3>Tipos de Apuestas</h3>
              <p>Descubre todos los tipos de apuestas: simples, combinadas, handicap y más</p>
              <Link href="/tipos-apuestas-deportivas" className="resource-link">Explorar Tipos</Link>
            </div>
          </div>
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
            {/* 实时统计面板 */}
            <div className="live-stats-panel">
              <h3>📊 Estadísticas en Vivo</h3>
              <div className="live-stat-item">
                <div className="stat-icon">📈</div>
                <div className="stat-info">
                  <span className="stat-label">Usuarios Activos</span>
                  <span className="stat-value">{counters.users.toLocaleString()}+</span>
                </div>
              </div>
              <div className="live-stat-item">
                <div className="stat-icon">🎯</div>
                <div className="stat-info">
                  <span className="stat-label">Cálculos Hoy</span>
                  <span className="stat-value">12,547</span>
                </div>
              </div>
              <div className="live-stat-item">
                <div className="stat-icon">💰</div>
                <div className="stat-info">
                  <span className="stat-label">Ganancias Calculadas</span>
                  <span className="stat-value">€2.3M</span>
                </div>
              </div>
            </div>

            {/* 策略提示卡片 */}
            <div className="strategy-card">
              <h3>🔥 Consejo del Día</h3>
              <div className="tip-content">
                <div className="tip-icon">🏆</div>
                <div className="tip-text">
                  <strong>Estrategia Ganadora:</strong> Nunca arriesgues más del 3-5% de tu bankroll en una sola apuesta. ¡Los profesionales lo saben!
                </div>
              </div>
              <div className="tip-author">- Experto BetMentor</div>
            </div>

            {/* 赔率比较面板 */}
            <div className="odds-comparison">
              <h3>📊 Comparador de Cuotas</h3>
              <div className="odds-row">
                <span className="match">Real Madrid vs Barcelona</span>
                <div className="odds-values">
                  <span className="odds-item best">2.10</span>
                  <span className="odds-item">1.95</span>
                  <span className="odds-item">2.05</span>
                </div>
              </div>
              <div className="odds-row">
                <span className="match">Liverpool vs City</span>
                <div className="odds-values">
                  <span className="odds-item">2.25</span>
                  <span className="odds-item best">2.40</span>
                  <span className="odds-item">2.30</span>
                </div>
              </div>
              <div className="find-best-odds">
                🔍 <strong>¿Buscas las mejores cuotas?</strong>
              </div>
            </div>

            {/* 快速计算器 */}
            <div className="quick-calculator">
              <h3>⚡ Calculadora Rápida</h3>
              <div className="quick-calc-row">
                <input type="number" placeholder="Apuesta €" className="quick-input" />
                <span className="multiply">×</span>
                <input type="number" placeholder="Cuota" className="quick-input" />
              </div>
              <div className="quick-result">
                <span className="result-label">Ganancia:</span>
                <span className="result-value">€0.00</span>
              </div>
            </div>
          </div>
        </div>

        {/* Guía Rápida de Uso */}
        <section className="quick-guide">
          <h2>🚀 Cómo Usar la Calculadora BetMentor en 3 Pasos</h2>
          <div className="guide-steps">
            <div className="guide-step">
              <div className="step-number">1</div>
              <div className="step-content">
                <h3>Selecciona tu Tipo de Apuesta</h3>
                <p>Elige entre <strong>Simple</strong> (una sola predicción), <strong>Combinada</strong> (2-4 selecciones) o <strong>Acumuladora</strong> (5+ selecciones para máximas ganancias). Para principiantes, recomendamos comenzar con apuestas simples.</p>
              </div>
            </div>
            <div className="guide-step">
              <div className="step-number">2</div>
              <div className="step-content">
                <h3>Introduce tus Datos</h3>
                <p>Ingresa la <strong>cantidad que quieres apostar</strong> y las <strong>cuotas</strong> que encontraste en tu casa de apuestas favorita. BetMentor acepta cuotas decimales (ej: 2.50), fraccionarias (ej: 3/2) y americanas (ej: +150).</p>
              </div>
            </div>
            <div className="guide-step">
              <div className="step-number">3</div>
              <div className="step-content">
                <h3>Obtén tus Resultados Instantáneos</h3>
                <p>Haz clic en <strong>&quot;Calcular Ganancias&quot;</strong> y descubre al instante tus <strong>ganancias potenciales</strong>, <strong>retorno total</strong>, <strong>probabilidad de éxito</strong> y <strong>ROI</strong>. ¡Toma decisiones informadas!</p>
              </div>
            </div>
          </div>
        </section>

        {/* Características Detalladas */}
        <section className="detailed-features">
          <h2>✨ ¿Por Qué Elegir la Calculadora BetMentor?</h2>
          <div className="features-grid">
            <div className="feature-item">
              <div className="feature-icon">🎯</div>
              <h3>Precisión Matemática Absoluta</h3>
              <p>Nuestros algoritmos calculan con precisión milimétrica tus ganancias potenciales, probabilidades implícitas y retorno de inversión. <strong>Cero errores, resultados fiables al 100%.</strong></p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">⚡</div>
              <h3>Velocidad Ultra-Rápida</h3>
              <p>Resultados instantáneos en menos de 0.1 segundos. No más esperas ni cálculos manuales complicados. <strong>Optimiza tu tiempo y apuesta con confianza.</strong></p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">🔄</div>
              <h3>Múltiples Tipos de Apuestas</h3>
              <p>Desde simples hasta complejas acumuladoras de 15 selecciones. <strong>La única calculadora que necesitarás</strong> para todos tus tipos de apuestas deportivas.</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">📊</div>
              <h3>Análisis de Riesgo Inteligente</h3>
              <p>Evaluamos automáticamente el nivel de riesgo de tu apuesta y te proporcionamos recomendaciones personalizadas para optimizar tu estrategia de betting.</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">💰</div>
              <h3>Gestión de Bankroll</h3>
              <p>Te ayudamos a calcular el porcentaje ideal de tu bankroll para cada apuesta. <strong>Apuesta responsablemente y maximiza tus ganancias a largo plazo.</strong></p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">🌍</div>
              <h3>Soporte Universal de Cuotas</h3>
              <p>Compatible con cuotas decimales, fraccionarias, americanas, hongkonesas y malayas. <strong>Funciona con cualquier casa de apuestas del mundo.</strong></p>
            </div>
          </div>
        </section>

        {/* Preguntas Frecuentes */}
        <section className="faq-section">
          <h2>❓ Preguntas Frecuentes sobre BetMentor</h2>
          <div className="faq-grid">
            <div className="faq-item">
              <h3>¿Es realmente gratuita la calculadora?</h3>
              <p><strong>Sí, completamente gratuita.</strong> BetMentor es una herramienta 100% gratuita sin límites de uso, sin registro obligatorio y sin costos ocultos. Creemos que todos los apostadores merecen acceso a herramientas profesionales.</p>
            </div>
            <div className="faq-item">
              <h3>¿Qué precisión tienen los cálculos?</h3>
              <p>Nuestros cálculos utilizan <strong>precisión decimal completa</strong> y algoritmos matemáticos verificados. Los resultados son exactos al 100% y han sido validados por profesionales de las apuestas deportivas.</p>
            </div>
            <div className="faq-item">
              <h3>¿Funciona con todas las casas de apuestas?</h3>
              <p><strong>Absolutamente.</strong> BetMentor es compatible con Bet365, William Hill, Betfair, 1xBet, 888sport y todas las casas de apuestas importantes. Solo necesitas las cuotas, nosotros hacemos el resto.</p>
            </div>
            <div className="faq-item">
              <h3>¿Puedo usar BetMentor en mi móvil?</h3>
              <p><strong>Por supuesto.</strong> Nuestra calculadora está 100% optimizada para móviles, tablets y ordenadores. Funciona perfectamente en cualquier dispositivo con navegador web.</p>
            </div>
            <div className="faq-item">
              <h3>¿Cuál es la diferencia entre una combinada y una acumuladora?</h3>
              <p>Una <strong>combinada</strong> incluye 2-4 selecciones, mientras que una <strong>acumuladora</strong> tiene 5 o más selecciones. Las acumuladoras ofrecen ganancias más altas pero con mayor riesgo.</p>
            </div>
            <div className="faq-item">
              <h3>¿Ofrecen consejos de apuestas?</h3>
              <p><strong>Nos enfocamos en la educación.</strong> Proporcionamos tutoriales completos, guías de estrategias y análisis de tipos de apuestas para que tomes decisiones informadas por ti mismo.</p>
            </div>
          </div>
        </section>

        {/* Estadísticas y Beneficios */}
        <section className="stats-section">
          <h2>📈 BetMentor en Números</h2>
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">{counters.users.toLocaleString()}+</div>
              <div className="stat-label">Apostadores Activos</div>
              <div className="stat-description">Usuarios que confían en BetMentor mensualmente</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">{(counters.calculations / 1000000).toFixed(1)}M+</div>
              <div className="stat-label">Cálculos Realizados</div>
              <div className="stat-description">Apuestas calculadas con precisión total</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">{counters.types}+</div>
              <div className="stat-label">Tipos de Apuestas</div>
              <div className="stat-description">Desde simples hasta sistemas complejos</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">24/7</div>
              <div className="stat-label">Disponibilidad</div>
              <div className="stat-description">Acceso instantáneo sin interrupciones</div>
            </div>
          </div>
        </section>

        {/* Ejemplos Prácticos */}
        <section className="examples-section">
          <h2>💡 Ejemplos Prácticos de Uso</h2>
          <div className="examples-grid">
            <div className="example-card">
              <h3>📈 Ejemplo: Apuesta Simple</h3>
              <div className="example-content">
                <p><strong>Situación:</strong> Real Madrid vs Barcelona</p>
                <ul>
                  <li><strong>Predicción:</strong> Real Madrid gana</li>
                  <li><strong>Cuota:</strong> 2.20</li>
                  <li><strong>Apuesta:</strong> 50€</li>
                </ul>
                <div className="example-result">
                  <p><strong>Resultado con BetMentor:</strong></p>
                  <ul>
                    <li>Ganancia potencial: <span className="highlight">60€</span></li>
                    <li>Retorno total: <span className="highlight">110€</span></li>
                    <li>Probabilidad: <span className="highlight">45.5%</span></li>
                    <li>ROI: <span className="highlight">120%</span></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="example-card">
              <h3>🔥 Ejemplo: Apuesta Combinada</h3>
              <div className="example-content">
                <p><strong>Situación:</strong> Triple deportiva del fin de semana</p>
                <ul>
                  <li><strong>Selección 1:</strong> Atlético gana @1.80</li>
                  <li><strong>Selección 2:</strong> Over 2.5 en Sevilla vs Valencia @1.90</li>
                  <li><strong>Selección 3:</strong> Manchester City -1 @1.70</li>
                  <li><strong>Apuesta:</strong> 25€</li>
                </ul>
                <div className="example-result">
                  <p><strong>Resultado con BetMentor:</strong></p>
                  <ul>
                    <li>Cuota combinada: <span className="highlight">5.814</span></li>
                    <li>Ganancia potencial: <span className="highlight">120.35€</span></li>
                    <li>Retorno total: <span className="highlight">145.35€</span></li>
                    <li>Probabilidad combinada: <span className="highlight">17.2%</span></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Consejos Rápidos y Errores Comunes */}
        <section className="tips-and-mistakes">
          <h2>💡 Consejos de Oro + Errores que Debes Evitar</h2>
          
          <div className="tips-mistakes-grid">
            <div className="tips-column">
              <h3>✅ Consejos de Oro BetMentor</h3>
              <div className="tip-list">
                <div className="tip-card">
                  <h4>🎯 Especialízate en 2-3 Deportes</h4>
                  <p>Enfócate en deportes que realmente conoces. Es mejor ser experto en fútbol y tenis que amateur en 10 deportes diferentes.</p>
                </div>
                <div className="tip-card">
                  <h4>📊 Usa Siempre Nuestra Calculadora</h4>
                  <p>Nunca hagas cálculos mentales. BetMentor te da precisión matemática exacta y te ayuda a identificar el value real de cada apuesta.</p>
                </div>
                <div className="tip-card">
                  <h4>💰 Regla del 5% Máximo</h4>
                  <p>Nunca arriesgues más del 5% de tu bankroll total en una sola apuesta. Esta regla separa a los apostadores exitosos de los que pierden todo.</p>
                </div>
                <div className="tip-card">
                  <h4>📈 Lleva un Registro Detallado</h4>
                  <p>Anota cada apuesta: deporte, tipo, stake, cuotas, resultado. Solo así podrás identificar tus fortalezas y debilidades reales.</p>
                </div>
              </div>
            </div>

            <div className="mistakes-column">
              <h3>❌ Errores Mortales a Evitar</h3>
              <div className="mistake-list">
                <div className="mistake-card">
                  <h4>🚫 Perseguir Pérdidas</h4>
                  <p><strong>ERROR:</strong> Aumentar la apuesta después de perder para &quot;recuperar&quot; el dinero.<br/>
                  <strong>REALIDAD:</strong> Esto lleva a pérdidas exponenciales y destruye bankrolls completos.</p>
                </div>
                <div className="mistake-card">
                  <h4>💔 Apostar con Emociones</h4>
                  <p><strong>ERROR:</strong> Apostar por tu equipo favorito ignorando las probabilidades reales.<br/>
                  <strong>REALIDAD:</strong> Las emociones son el enemigo número 1 del betting exitoso.</p>
                </div>
                <div className="mistake-card">
                  <h4>🎰 Acumuladoras Extremas</h4>
                  <p><strong>ERROR:</strong> Hacer acumuladoras de 10+ selecciones buscando &quot;el pelotazo&quot;.<br/>
                  <strong>REALIDAD:</strong> La probabilidad de acierto es prácticamente cero.</p>
                </div>
                <div className="mistake-card">
                  <h4>🏠 No Comparar Cuotas</h4>
                  <p><strong>ERROR:</strong> Apostar siempre en la misma casa sin buscar mejores cuotas.<br/>
                  <strong>REALIDAD:</strong> Perder 10-15% de ganancias anuales por pereza.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="final-cta">
            <h3>🚀 ¿Listo para Apostar como un Profesional?</h3>
            <p>Usa la calculadora BetMentor arriba, aplica estos consejos y evita los errores comunes. <strong>La diferencia entre ganar y perder está en los detalles.</strong></p>
            <div className="cta-buttons">
              <button onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} className="scroll-top-btn">
                ⬆️ Volver a la Calculadora
              </button>
            </div>
          </div>
        </section>

        {/* External Links Section */}
        <section className="external-links-section">
          <h2>🔗 Descubre Más Herramientas Útiles</h2>
          <p className="links-subtitle">Explora nuestros otros sitios web especializados</p>
          <div className="external-links-grid">
            <a href="https://bet-calculator-betmentor.com" target="_blank" rel="noopener noreferrer" className="external-link-card">
              <div className="link-icon">🎯</div>
              <h3>Bet Calculator BetMentor</h3>
              <p>Calculadora profesional de apuestas deportivas con análisis avanzado de probabilidades</p>
              <span className="visit-link">Visitar Sitio →</span>
            </a>
            <a href="https://corporatesoftwareinspector.com" target="_blank" rel="noopener noreferrer" className="external-link-card">
              <div className="link-icon">🔍</div>
              <h3>Corporate Software Inspector</h3>
              <p>Análisis y auditoría profesional de software empresarial para optimización corporativa</p>
              <span className="visit-link">Visitar Sitio →</span>
            </a>
            <a href="https://mahavatar-narsimha.com" target="_blank" rel="noopener noreferrer" className="external-link-card">
              <div className="link-icon">🕉️</div>
              <h3>Mahavatar Narsimha</h3>
              <p>Portal espiritual y conocimiento ancestral sobre la deidad protectora Narsimha</p>
              <span className="visit-link">Visitar Sitio →</span>
            </a>
            <a href="https://tiktokcommentgenerators.com" target="_blank" rel="noopener noreferrer" className="external-link-card">
              <div className="link-icon">💬</div>
              <h3>TikTok Comment Generators</h3>
              <p>Generador inteligente de comentarios creativos y virales para TikTok</p>
              <span className="visit-link">Visitar Sitio →</span>
            </a>
          </div>
        </section>

        {/* Bottom Ad */}
        <div style={{textAlign: 'center', margin: '30px 0'}}>
          <ins className="adsbygoogle"
               style={{display:'block'}}
               data-ad-client="ca-pub-6224617757558738"
               data-ad-slot="auto"
               data-ad-format="auto"
               data-full-width-responsive="true"></ins>
        </div>

        <footer className="footer">
          <div className="footer-nav">
            <h3>🔗 Navegación</h3>
            <div className="nav-links">
              <Link href="/" className="footer-link">🏠 Inicio</Link>
              <Link href="/about" className="footer-link">📚 Acerca & Estrategias</Link>
              <Link href="/tutoriales-apuestas-deportivas" className="footer-link">🎯 Tutoriales de Apuestas</Link>
              <Link href="/tipos-apuestas-deportivas" className="footer-link">🎲 Tipos de Apuestas</Link>
              <Link href="/contact" className="footer-link">💬 Contacto</Link>
              <Link href="/single-bet-calculator" className="footer-link">🎯 Calculadora Simple</Link>
              <Link href="/privacy-policy" className="footer-link">🔒 Política de Privacidad</Link>
              <Link href="/terms-of-service" className="footer-link">⚖️ Términos de Servicio</Link>
            </div>
          </div>
          
          <h3>Acerca de la Calculadora de Apuestas BetMentor - Herramienta Profesional</h3>
          <p>La Calculadora de Apuestas BetMentor es la herramienta de cálculo de apuestas gratuita más precisa y completa disponible. Nuestra calculadora BetMentor soporta más de 15 tipos de apuestas, 5 formatos de cuotas, evaluación de riesgo en tiempo real y comparación de estrategias. La calculadora BetMentor no requiere registro y es completamente gratuita. Confía en la calculadora BetMentor para todos tus cálculos de apuestas deportivas.</p>
          <p style={{marginTop: '15px', color: '#7f8c8d', fontSize: '14px'}}>
            ⚠️ Las apuestas implican riesgos. Por favor, juega responsablemente. La calculadora BetMentor es solo para referencia y no constituye asesoramiento de inversión. BetMentor fomenta el cumplimiento de las leyes y regulaciones locales.
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

        /* Particle Effect Background - Optimized */
        .particle-bg {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: -2;
        }

        .particle {
          position: absolute;
          background: rgba(255, 215, 0, 0.2);
          border-radius: 50%;
          animation: particleFloat 12s linear infinite;
        }

        .particle-1 {
          width: 3px;
          height: 3px;
          left: 15%;
          animation-delay: 0s;
        }

        .particle-2 {
          width: 4px;
          height: 4px;
          left: 45%;
          animation-delay: 4s;
        }

        .particle-3 {
          width: 3px;
          height: 3px;
          left: 75%;
          animation-delay: 8s;
        }

        .particle {
          position: absolute;
          background: rgba(255, 215, 0, 0.4);
          border-radius: 50%;
          animation: particleFloat 8s linear infinite;
        }

        .particle-1 {
          width: 4px;
          height: 4px;
          left: 10%;
          animation-delay: 0s;
        }

        .particle-2 {
          width: 6px;
          height: 6px;
          left: 20%;
          animation-delay: 2s;
        }

        .particle-3 {
          width: 3px;
          height: 3px;
          left: 30%;
          animation-delay: 4s;
        }

        .particle-4 {
          width: 5px;
          height: 5px;
          left: 40%;
          animation-delay: 1s;
        }

        .particle-5 {
          width: 4px;
          height: 4px;
          left: 50%;
          animation-delay: 3s;
        }

        .particle-6 {
          width: 7px;
          height: 7px;
          left: 60%;
          animation-delay: 5s;
        }

        .particle-7 {
          width: 3px;
          height: 3px;
          left: 70%;
          animation-delay: 1.5s;
        }

        .particle-8 {
          width: 5px;
          height: 5px;
          left: 80%;
          animation-delay: 3.5s;
        }

        @keyframes particleFloat {
          0% {
            top: 100%;
            opacity: 0;
          }
          50% {
            opacity: 0.4;
          }
          100% {
            top: -10%;
            opacity: 0;
          }
        }

        /* Floating Icons Animation - Simplified */
        .floating-icons {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: -1;
        }

        .floating-icon {
          position: absolute;
          font-size: 1.5em;
          opacity: 0.2;
          animation: floatSimple 8s ease-in-out infinite;
        }

        .icon-1 {
          top: 15%;
          left: 10%;
          animation-delay: 0s;
          color: #FFD700;
        }

        .icon-2 {
          top: 25%;
          right: 15%;
          animation-delay: 2s;
          color: #DC143C;
        }

        .icon-3 {
          top: 65%;
          left: 5%;
          animation-delay: 4s;
          color: #FFD700;
        }

        @keyframes floatSimple {
          0%, 100% {
            transform: translateY(0px);
            opacity: 0.2;
          }
          50% {
            transform: translateY(-15px);
            opacity: 0.4;
          }
        }

        .stat-number {
          font-size: 3em;
          font-weight: bold;
          margin-bottom: 10px;
          text-shadow: 0 0 20px rgba(255, 215, 0, 0.5);
        }

        body {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          background: linear-gradient(135deg, #1a0a0a 0%, #2d1810 25%, #1f0f0f 50%, #3d1a00 75%, #0f0a0a 100%) !important;
          background-attachment: fixed !important;
          min-height: 100vh;
          color: #FFD700;
          position: relative;
          overflow-x: hidden;
          margin: 0;
          padding: 0;
        }

        /* Ensure the main page container covers the whole viewport */
        .main-page-container {
          background: linear-gradient(135deg, #1a0a0a 0%, #2d1810 25%, #1f0f0f 50%, #3d1a00 75%, #0f0a0a 100%);
          background-attachment: fixed;
          min-height: 100vh;
          width: 100%;
          position: relative;
        }

        /* Add casino-themed visual elements */
        .casino-decoration {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: -3;
          background-image: 
            radial-gradient(circle at 25% 25%, rgba(255, 215, 0, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 75% 75%, rgba(220, 20, 60, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 50% 50%, rgba(255, 140, 0, 0.05) 0%, transparent 70%);
        }

        /* Casino chip decorations */
        .casino-chip {
          position: absolute;
          width: 30px;
          height: 30px;
          border-radius: 50%;
          background: linear-gradient(45deg, #FFD700, #FFA500);
          border: 3px solid #8B0000;
          opacity: 0.1;
          animation: chipSpin 20s linear infinite;
        }

        .chip-1 {
          top: 10%;
          left: 5%;
          animation-delay: 0s;
        }

        .chip-2 {
          top: 30%;
          right: 10%;
          animation-delay: 5s;
        }

        .chip-3 {
          bottom: 20%;
          left: 15%;
          animation-delay: 10s;
        }

        .chip-4 {
          bottom: 40%;
          right: 5%;
          animation-delay: 15s;
        }

        @keyframes chipSpin {
          0% {
            transform: rotate(0deg) scale(1);
          }
          50% {
            transform: rotate(180deg) scale(1.2);
          }
          100% {
            transform: rotate(360deg) scale(1);
          }
        }

        body::before {
          content: '';
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: radial-gradient(circle at 20% 80%, rgba(255, 215, 0, 0.1) 0%, transparent 50%),
                            radial-gradient(circle at 80% 20%, rgba(220, 20, 60, 0.1) 0%, transparent 50%),
                            radial-gradient(circle at 40% 40%, rgba(255, 140, 0, 0.05) 0%, transparent 50%);
          pointer-events: none;
          z-index: -1;
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
          box-shadow: 0 15px 40px rgba(255, 215, 0, 0.3), 
                      inset 0 1px 0 rgba(255, 215, 0, 0.4),
                      0 0 30px rgba(220, 20, 60, 0.2);
          position: relative;
          overflow: hidden;
        }

        .header::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: linear-gradient(45deg, transparent 30%, rgba(255, 215, 0, 0.1) 50%, transparent 70%);
          animation: shine 3s infinite;
        }

        @keyframes shine {
          0% { transform: translateX(-100%) translateY(-100%) rotate(45deg); }
          100% { transform: translateX(100%) translateY(100%) rotate(45deg); }
        }

        .header h1 {
          font-size: 2.8em;
          background: linear-gradient(45deg, #FFD700, #FFA500, #FFD700);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 15px;
          text-shadow: 0 0 20px rgba(255, 215, 0, 0.5);
          position: relative;
          z-index: 1;
        }

        .header p {
          font-size: 1.3em;
          color: #FFD700;
          text-shadow: 0 2px 10px rgba(0, 0, 0, 0.7);
          position: relative;
          z-index: 1;
        }

        .language-switch {
          position: fixed;
          top: 20px;
          right: 20px;
          background: linear-gradient(145deg, #2d1810, #1a0a0a);
          border: 1px solid #FFD700;
          border-radius: 25px;
          padding: 10px;
          box-shadow: 0 8px 25px rgba(255, 215, 0, 0.3);
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
          color: #FFD700;
        }

        .language-switch button.active {
          background: linear-gradient(45deg, #DC143C, #8B0000);
          color: #FFD700;
          box-shadow: 0 4px 15px rgba(220, 20, 60, 0.4);
        }

        .language-switch button:hover {
          background: rgba(255, 215, 0, 0.1);
          transform: translateY(-2px);
        }

        .main-content {
          display: grid;
          grid-template-columns: 1fr 300px;
          gap: 30px;
          margin-bottom: 30px;
        }

        .calculator-section {
          background: linear-gradient(145deg, #2d1810 0%, #1a0a0a 50%, #3d1a00 100%);
          border: 2px solid #FFD700;
          border-radius: 20px;
          padding: 35px;
          box-shadow: 0 15px 40px rgba(255, 215, 0, 0.2),
                      inset 0 1px 0 rgba(255, 215, 0, 0.3),
                      0 0 30px rgba(220, 20, 60, 0.1);
        }

        .calculator-section h2 {
          color: #FFD700;
          text-shadow: 0 2px 10px rgba(0, 0, 0, 0.7);
          margin-bottom: 25px;
        }

        .sidebar {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        /* 实时统计面板 */
        .live-stats-panel {
          background: linear-gradient(145deg, #2d1810 0%, #1a0a0a 50%, #3d1a00 100%);
          border: 2px solid #32CD32;
          border-radius: 15px;
          padding: 20px;
          box-shadow: 0 8px 25px rgba(50, 205, 50, 0.3);
        }

        .live-stats-panel h3 {
          color: #32CD32;
          margin-bottom: 15px;
          text-align: center;
          text-shadow: 0 2px 10px rgba(0, 0, 0, 0.7);
        }

        .live-stat-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px;
          background: linear-gradient(145deg, #2d1810, #1a0a0a);
          border: 1px solid #32CD32;
          border-radius: 10px;
          margin-bottom: 10px;
        }

        .stat-icon {
          font-size: 1.5em;
          width: 40px;
          text-align: center;
        }

        .stat-info {
          flex: 1;
        }

        .stat-label {
          display: block;
          color: rgba(255, 215, 0, 0.8);
          font-size: 0.85em;
        }

        .stat-value {
          display: block;
          color: #32CD32;
          font-weight: bold;
          font-size: 1.1em;
          text-shadow: 0 0 10px rgba(50, 205, 50, 0.5);
        }

        /* 策略卡片 */
        .strategy-card {
          background: linear-gradient(145deg, #DC143C 0%, #8B0000 50%, #FF4500 100%);
          border: 2px solid #FFD700;
          border-radius: 15px;
          padding: 20px;
          box-shadow: 0 8px 25px rgba(220, 20, 60, 0.4);
        }

        .strategy-card h3 {
          color: #FFD700;
          margin-bottom: 15px;
          text-align: center;
          text-shadow: 0 2px 10px rgba(0, 0, 0, 0.7);
        }

        .tip-content {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          margin-bottom: 10px;
        }

        .tip-icon {
          font-size: 1.5em;
          margin-top: 2px;
        }

        .tip-text {
          flex: 1;
          color: #FFD700;
          line-height: 1.4;
        }

        .tip-author {
          text-align: right;
          color: rgba(255, 215, 0, 0.7);
          font-style: italic;
          font-size: 0.9em;
        }

        /* 赔率比较 */
        .odds-comparison {
          background: linear-gradient(145deg, #2d1810 0%, #1a0a0a 50%, #3d1a00 100%);
          border: 2px solid #FFD700;
          border-radius: 15px;
          padding: 20px;
          box-shadow: 0 8px 25px rgba(255, 215, 0, 0.2);
        }

        .odds-comparison h3 {
          color: #FFD700;
          margin-bottom: 15px;
          text-align: center;
          text-shadow: 0 2px 10px rgba(0, 0, 0, 0.7);
        }

        .odds-row {
          margin-bottom: 12px;
          padding: 10px;
          background: linear-gradient(145deg, #2d1810, #1a0a0a);
          border: 1px solid #FFD700;
          border-radius: 8px;
        }

        .match {
          display: block;
          color: #FFD700;
          font-size: 0.85em;
          margin-bottom: 5px;
        }

        .odds-values {
          display: flex;
          gap: 8px;
        }

        .odds-item {
          flex: 1;
          background: #8B0000;
          color: #FFD700;
          padding: 4px 8px;
          border-radius: 5px;
          text-align: center;
          font-weight: bold;
          font-size: 0.9em;
        }

        .odds-item.best {
          background: linear-gradient(45deg, #32CD32, #228B22);
          color: #000;
          box-shadow: 0 0 10px rgba(50, 205, 50, 0.5);
        }

        .find-best-odds {
          text-align: center;
          margin-top: 15px;
          color: #FFD700;
          font-size: 0.9em;
        }

        /* 快速计算器 */
        .quick-calculator {
          background: linear-gradient(145deg, #2d1810 0%, #1a0a0a 50%, #3d1a00 100%);
          border: 2px solid #FF4500;
          border-radius: 15px;
          padding: 20px;
          box-shadow: 0 8px 25px rgba(255, 69, 0, 0.3);
          overflow: hidden;
        }

        .quick-calculator h3 {
          color: #FF4500;
          margin-bottom: 15px;
          text-align: center;
          text-shadow: 0 2px 10px rgba(0, 0, 0, 0.7);
          font-size: 1.1em;
        }

        .quick-calc-row {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 15px;
          flex-wrap: wrap;
        }

        .quick-input {
          flex: 1;
          min-width: 80px;
          padding: 8px;
          border: 2px solid #FF4500;
          border-radius: 8px;
          background: linear-gradient(145deg, #2d1810, #1a0a0a);
          color: #FFD700;
          font-size: 0.85em;
          box-sizing: border-box;
        }

        .quick-input::placeholder {
          color: rgba(255, 215, 0, 0.5);
          font-size: 0.8em;
        }

        .multiply {
          color: #FF4500;
          font-weight: bold;
          font-size: 1.1em;
          flex-shrink: 0;
        }

        .quick-result {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 10px;
          background: linear-gradient(145deg, #2d1810, #1a0a0a);
          border: 2px solid #32CD32;
          border-radius: 8px;
          flex-wrap: wrap;
          gap: 5px;
        }

        .result-label {
          color: #FFD700;
          font-weight: bold;
          font-size: 0.9em;
        }

        .result-value {
          color: #32CD32;
          font-weight: bold;
          text-shadow: 0 0 10px rgba(50, 205, 50, 0.5);
          font-size: 0.95em;
        }

        .bet-type-selector {
          display: flex;
          gap: 10px;
          margin-bottom: 30px;
          flex-wrap: wrap;
        }

        .bet-type-btn {
          padding: 15px 25px;
          border: 2px solid #FFD700;
          border-radius: 30px;
          background: linear-gradient(145deg, #2d1810, #1a0a0a);
          color: #FFD700;
          cursor: pointer;
          transition: all 0.3s;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1px;
          position: relative;
          overflow: hidden;
        }

        .bet-type-btn::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 215, 0, 0.3), transparent);
          transition: left 0.5s;
        }

        .bet-type-btn:hover::before {
          left: 100%;
        }

        .bet-type-btn.active {
          background: linear-gradient(45deg, #DC143C, #8B0000);
          color: #FFD700;
          transform: translateY(-3px);
          box-shadow: 0 8px 25px rgba(220, 20, 60, 0.4),
                      0 0 20px rgba(255, 215, 0, 0.3);
          border-color: #FFD700;
        }

        .bet-type-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(255, 215, 0, 0.4);
        }

        .form-group {
          margin-bottom: 20px;
        }

        .form-group label {
          display: block;
          margin-bottom: 8px;
          font-weight: 600;
          color: #FFD700;
          text-shadow: 0 1px 3px rgba(0, 0, 0, 0.7);
        }

        .form-control {
          width: 100%;
          padding: 15px;
          border: 2px solid #FFD700;
          border-radius: 10px;
          font-size: 16px;
          transition: all 0.3s;
          background: linear-gradient(145deg, #2d1810, #1a0a0a);
          color: #FFD700;
        }

        .form-control:focus {
          outline: none;
          border-color: #DC143C;
          box-shadow: 0 0 15px rgba(220, 20, 60, 0.4),
                      inset 0 0 10px rgba(255, 215, 0, 0.1);
        }

        .form-control::placeholder {
          color: rgba(255, 215, 0, 0.6);
        }

        .odds-input-group {
          display: grid;
          grid-template-columns: 1fr 200px;
          gap: 10px;
          align-items: end;
        }

        .calculate-btn {
          background: linear-gradient(145deg, #FF4500 0%, #DC143C 30%, #8B0000 60%, #FF6347 100%);
          color: #FFD700;
          border: 4px solid #FFD700;
          padding: 25px 40px;
          border-radius: 50px;
          font-size: 22px;
          font-weight: bold;
          cursor: pointer;
          width: 100%;
          margin: 25px 0;
          transition: all 0.4s;
          text-transform: uppercase;
          letter-spacing: 3px;
          position: relative;
          overflow: hidden;
          box-shadow: 0 15px 40px rgba(255, 69, 0, 0.5),
                      inset 0 2px 0 rgba(255, 215, 0, 0.4),
                      0 0 30px rgba(255, 215, 0, 0.3);
          animation: buttonPulse 2s ease-in-out infinite;
        }

        @keyframes buttonPulse {
          0%, 100% {
            box-shadow: 0 15px 40px rgba(255, 69, 0, 0.5),
                        inset 0 2px 0 rgba(255, 215, 0, 0.4),
                        0 0 30px rgba(255, 215, 0, 0.3);
          }
          50% {
            box-shadow: 0 20px 50px rgba(255, 69, 0, 0.7),
                        inset 0 2px 0 rgba(255, 215, 0, 0.6),
                        0 0 40px rgba(255, 215, 0, 0.5);
          }
        }

        .calculate-btn:hover {
          transform: translateY(-8px) scale(1.05);
          box-shadow: 0 25px 60px rgba(255, 69, 0, 0.8),
                      0 0 40px rgba(255, 215, 0, 0.6),
                      inset 0 0 20px rgba(255, 215, 0, 0.2);
          text-shadow: 0 0 20px rgba(255, 215, 0, 1);
          border-color: #FF4500;
        }

        .calculate-btn:active {
          transform: translateY(-2px) scale(0.98);
        }

        .results-section {
          background: linear-gradient(145deg, #2d5016 0%, #1a3009 50%, #3d6b1a 100%);
          border: 2px solid #32CD32;
          color: #32CD32;
          padding: 30px;
          border-radius: 20px;
          margin-top: 25px;
          box-shadow: 0 15px 40px rgba(50, 205, 50, 0.3),
                      inset 0 1px 0 rgba(50, 205, 50, 0.4),
                      0 0 25px rgba(50, 205, 50, 0.2);
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
          background: linear-gradient(145deg, #2d1810 0%, #1a0a0a 50%, #3d1a00 100%);
          border: 2px solid #FFD700;
          border-radius: 15px;
          padding: 20px;
          box-shadow: 0 8px 25px rgba(255, 215, 0, 0.2);
        }

        .tips-section h3 {
          color: #FFD700;
          margin-bottom: 15px;
          text-shadow: 0 1px 3px rgba(0, 0, 0, 0.7);
        }

        .tip-item {
          background: linear-gradient(145deg, #2d1810, #1a0a0a);
          border: 2px solid #FFD700;
          padding: 15px;
          border-radius: 8px;
          margin-bottom: 10px;
          box-shadow: 0 4px 15px rgba(255, 215, 0, 0.2);
          color: rgba(255, 215, 0, 0.9);
        }

        /* Hero Carousel */
        .hero-carousel {
          position: relative;
          background: linear-gradient(145deg, #2d1810 0%, #1a0a0a 50%, #3d1a00 100%);
          border: 3px solid #FFD700;
          border-radius: 20px;
          margin-bottom: 25px;
          overflow: hidden;
          height: 200px;
          box-shadow: 0 15px 40px rgba(255, 215, 0, 0.3),
                      inset 0 1px 0 rgba(255, 215, 0, 0.4),
                      0 0 30px rgba(220, 20, 60, 0.2);
        }

        .carousel-container {
          position: relative;
          width: 100%;
          height: 100%;
        }

        .carousel-slide {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          opacity: 0;
          transition: opacity 1s ease-in-out;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 30px;
        }

        .carousel-slide.active {
          opacity: 1;
        }

        .slide-content h2 {
          font-size: 2.2em;
          background: linear-gradient(45deg, #FFD700, #FFA500, #FFD700);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 15px;
          text-shadow: 0 0 20px rgba(255, 215, 0, 0.5);
          animation: pulse 2s infinite;
        }

        .slide-content p {
          font-size: 1.2em;
          color: #FFD700;
          margin-bottom: 20px;
          text-shadow: 0 2px 10px rgba(0, 0, 0, 0.7);
        }

        .slide-stats {
          display: flex;
          gap: 20px;
          justify-content: center;
          flex-wrap: wrap;
        }

        .slide-stats .stat {
          background: linear-gradient(45deg, #DC143C, #8B0000);
          color: #FFD700;
          padding: 8px 15px;
          border-radius: 20px;
          font-weight: bold;
          font-size: 0.9em;
          border: 2px solid #FFD700;
          box-shadow: 0 4px 15px rgba(220, 20, 60, 0.4);
          animation: glow 2s infinite alternate;
        }

        .carousel-indicators {
          position: absolute;
          bottom: 15px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 10px;
        }

        .indicator {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: rgba(255, 215, 0, 0.4);
          border: 2px solid #FFD700;
          cursor: pointer;
          transition: all 0.3s;
        }

        .indicator.active {
          background: #FFD700;
          box-shadow: 0 0 15px rgba(255, 215, 0, 0.8);
        }

        /* Visual Showcase */
        .visual-showcase {
          background: linear-gradient(145deg, #2d1810 0%, #1a0a0a 50%, #3d1a00 100%);
          border: 3px solid #FFD700;
          border-radius: 20px;
          padding: 40px;
          margin-bottom: 30px;
          text-align: center;
          box-shadow: 0 20px 50px rgba(255, 215, 0, 0.3),
                      inset 0 2px 0 rgba(255, 215, 0, 0.4);
        }

        .visual-showcase h2 {
          color: #FFD700;
          font-size: 2.2em;
          margin-bottom: 30px;
          text-shadow: 0 3px 15px rgba(0, 0, 0, 0.8);
        }

        .showcase-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 30px;
          margin-top: 30px;
        }

        .showcase-item {
          background: linear-gradient(145deg, #2d1810, #1a0a0a);
          border: 2px solid #FF4500;
          border-radius: 15px;
          padding: 25px;
          transition: all 0.4s;
          text-decoration: none;
          color: inherit;
          display: block;
        }

        .showcase-item.clickable {
          cursor: pointer;
          position: relative;
          overflow: hidden;
        }

        .showcase-item.clickable::before {
          content: '';
          position: absolute;
          top: -2px;
          left: -2px;
          right: -2px;
          bottom: -2px;
          background: linear-gradient(45deg, #FFD700, #FF4500, #DC143C, #FFD700);
          border-radius: 15px;
          z-index: -1;
          opacity: 0;
          transition: opacity 0.3s;
        }

        .showcase-item.clickable:hover::before {
          opacity: 1;
        }

        .showcase-item:hover {
          transform: translateY(-15px) scale(1.08);
          box-shadow: 0 20px 50px rgba(255, 69, 0, 0.6),
                      0 0 30px rgba(255, 215, 0, 0.4);
          border-color: #FFD700;
        }

        .click-indicator {
          margin-top: 15px;
          color: #FFD700;
          font-size: 0.9em;
          font-weight: bold;
          text-align: center;
          background: linear-gradient(45deg, #DC143C, #8B0000);
          padding: 8px 15px;
          border-radius: 20px;
          border: 1px solid #FFD700;
          animation: clickPulse 2s ease-in-out infinite;
        }

        @keyframes clickPulse {
          0%, 100% {
            transform: scale(1);
            box-shadow: 0 0 10px rgba(255, 215, 0, 0.3);
          }
          50% {
            transform: scale(1.05);
            box-shadow: 0 0 20px rgba(255, 215, 0, 0.6);
          }
        }

        /* Visual Elements */
        .visual-element {
          width: 80px;
          height: 80px;
          margin: 0 auto 20px;
          position: relative;
        }

        /* Roulette Wheel */
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

        /* Playing Cards */
        .cards {
          position: relative;
        }

        .card {
          width: 35px;
          height: 50px;
          background: linear-gradient(145deg, #fff, #f0f0f0);
          border: 2px solid #000;
          border-radius: 5px;
          position: absolute;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
        }

        .card-1 {
          left: 10px;
          top: 0;
          transform: rotate(-15deg);
          z-index: 1;
        }

        .card-1::after {
          content: 'A♣';
          position: absolute;
          top: 5px;
          left: 5px;
          font-size: 12px;
          color: #000;
          font-weight: bold;
        }

        .card-2 {
          left: 22px;
          top: 5px;
          transform: rotate(5deg);
          z-index: 2;
          background: linear-gradient(145deg, #FFD700, #FFA500);
        }

        .card-2::after {
          content: 'K♥';
          position: absolute;
          top: 5px;
          left: 5px;
          font-size: 12px;
          color: #DC143C;
          font-weight: bold;
        }

        .card-3 {
          left: 35px;
          top: 2px;
          transform: rotate(15deg);
          z-index: 3;
        }

        .card-3::after {
          content: 'Q♦';
          position: absolute;
          top: 5px;
          left: 5px;
          font-size: 12px;
          color: #DC143C;
          font-weight: bold;
        }

        /* Gold Coins */
        .coins {
          position: relative;
        }

        .coin {
          width: 25px;
          height: 25px;
          background: linear-gradient(145deg, #FFD700, #FFA500);
          border: 2px solid #B8860B;
          border-radius: 50%;
          position: absolute;
          animation: coinFlip 2s ease-in-out infinite;
        }

        .coin::after {
          content: '€';
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          font-size: 12px;
          font-weight: bold;
          color: #8B4513;
        }

        .coin-1 {
          left: 15px;
          top: 10px;
          animation-delay: 0s;
        }

        .coin-2 {
          left: 30px;
          top: 25px;
          animation-delay: 0.5s;
        }

        .coin-3 {
          left: 45px;
          top: 15px;
          animation-delay: 1s;
        }

        @keyframes coinFlip {
          0%, 100% {
            transform: rotateY(0deg) translateY(0px);
          }
          25% {
            transform: rotateY(90deg) translateY(-5px);
          }
          50% {
            transform: rotateY(180deg) translateY(-10px);
          }
          75% {
            transform: rotateY(270deg) translateY(-5px);
          }
        }

        .showcase-item h3 {
          color: #FFD700;
          margin-bottom: 10px;
          font-size: 1.3em;
        }

        .showcase-item p {
          color: rgba(255, 215, 0, 0.8);
          font-size: 0.95em;
        }

        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }

        @keyframes glow {
          0% {
            box-shadow: 0 4px 15px rgba(220, 20, 60, 0.4);
          }
          100% {
            box-shadow: 0 4px 25px rgba(220, 20, 60, 0.8), 0 0 20px rgba(255, 215, 0, 0.3);
          }
        }

        .educational-resources {
          background: linear-gradient(145deg, #2d1810 0%, #1a0a0a 50%, #3d1a00 100%);
          border: 2px solid #FFD700;
          border-radius: 20px;
          padding: 35px;
          margin-bottom: 30px;
          box-shadow: 0 15px 40px rgba(255, 215, 0, 0.2),
                      inset 0 1px 0 rgba(255, 215, 0, 0.3);
        }

        .educational-resources h2 {
          color: #FFD700;
          text-align: center;
          margin-bottom: 30px;
          font-size: 2em;
          text-shadow: 0 2px 10px rgba(0, 0, 0, 0.7);
        }

        .resources-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 25px;
        }

        .resource-card {
          background: linear-gradient(145deg, #2d1810, #1a0a0a);
          border: 2px solid #FFD700;
          border-radius: 20px;
          padding: 30px;
          text-align: center;
          transition: all 0.4s;
          position: relative;
          overflow: hidden;
        }

        .resource-card::before {
          content: '';
          position: absolute;
          top: -2px;
          left: -2px;
          right: -2px;
          bottom: -2px;
          background: linear-gradient(45deg, #FFD700, #DC143C, #FFD700);
          border-radius: 20px;
          z-index: -1;
          opacity: 0;
          transition: opacity 0.3s;
        }

        .resource-card:hover::before {
          opacity: 1;
        }

        .resource-card:hover {
          transform: translateY(-8px) scale(1.03);
          box-shadow: 0 20px 50px rgba(220, 20, 60, 0.4),
                      0 0 30px rgba(255, 215, 0, 0.3);
        }

        .resource-icon {
          font-size: 3em;
          margin-bottom: 15px;
        }

        .resource-card h3 {
          color: #FFD700;
          margin-bottom: 15px;
          font-size: 1.3em;
          text-shadow: 0 1px 3px rgba(0, 0, 0, 0.7);
        }

        .resource-card p {
          color: rgba(255, 215, 0, 0.9);
          margin-bottom: 20px;
          line-height: 1.6;
        }

        .resource-link {
          display: inline-block;
          background: linear-gradient(45deg, #FFD700, #FF4500);
          color: #000;
          border: 3px solid #DC143C;
          padding: 15px 30px;
          border-radius: 30px;
          text-decoration: none;
          font-weight: 700;
          transition: all 0.3s;
          box-shadow: 0 6px 20px rgba(255, 215, 0, 0.6);
          text-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
          text-transform: uppercase;
          letter-spacing: 1.5px;
          font-size: 1em;
        }

        .resource-link:hover {
          transform: translateY(-5px) scale(1.1);
          box-shadow: 0 15px 40px rgba(255, 215, 0, 0.8),
                      0 0 30px rgba(255, 215, 0, 0.6);
          text-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
          border-color: #FFD700;
          background: linear-gradient(45deg, #FF4500, #FFD700);
          color: #000;
        }

        .footer {
          background: linear-gradient(145deg, #2d1810 0%, #1a0a0a 50%, #3d1a00 100%);
          border: 2px solid #FFD700;
          border-radius: 15px;
          padding: 30px;
          margin-top: 30px;
          text-align: center;
          color: #FFD700;
          box-shadow: 0 15px 40px rgba(255, 215, 0, 0.2),
                      inset 0 1px 0 rgba(255, 215, 0, 0.3);
        }

        .footer-nav {
          background: linear-gradient(145deg, #2d1810, #1a0a0a);
          border: 2px solid #FFD700;
          border-radius: 10px;
          padding: 20px;
          margin-bottom: 30px;
          box-shadow: 0 8px 25px rgba(255, 215, 0, 0.2);
        }

        .nav-links {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 15px;
          margin-top: 15px;
        }

        .footer-link {
          display: inline-block;
          background: linear-gradient(45deg, #FF4500, #DC143C);
          color: #FFD700;
          border: 2px solid #FFD700;
          padding: 12px 20px;
          border-radius: 25px;
          text-decoration: none;
          font-weight: 600;
          transition: all 0.3s;
          text-align: center;
          box-shadow: 0 4px 15px rgba(255, 69, 0, 0.4);
          text-shadow: 0 1px 3px rgba(0, 0, 0, 0.7);
        }

        .footer-link:hover {
          transform: translateY(-3px) scale(1.05);
          box-shadow: 0 10px 30px rgba(255, 69, 0, 0.6),
                      0 0 25px rgba(255, 215, 0, 0.4);
          text-shadow: 0 0 15px rgba(255, 215, 0, 0.8);
          border-color: #FF4500;
        }

        /* Guía Rápida */
        .quick-guide {
          background: linear-gradient(145deg, #2d1810 0%, #1a0a0a 50%, #3d1a00 100%);
          border: 2px solid #FFD700;
          border-radius: 15px;
          padding: 40px;
          margin: 30px 0;
          box-shadow: 0 15px 40px rgba(255, 215, 0, 0.2),
                      inset 0 1px 0 rgba(255, 215, 0, 0.3),
                      0 0 30px rgba(220, 20, 60, 0.1);
        }

        .quick-guide h2 {
          text-align: center;
          color: #FFD700;
          margin-bottom: 40px;
          font-size: 2em;
          text-shadow: 0 2px 10px rgba(0, 0, 0, 0.7);
        }

        .guide-steps {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 30px;
        }

        .guide-step {
          display: flex;
          align-items: flex-start;
          gap: 20px;
          padding: 25px;
          background: linear-gradient(145deg, #2d1810, #1a0a0a);
          border: 2px solid #FFD700;
          border-radius: 15px;
          box-shadow: 0 8px 25px rgba(255, 215, 0, 0.2);
        }

        .step-number {
          background: linear-gradient(45deg, #DC143C, #8B0000);
          color: #FFD700;
          width: 40px;
          height: 40px;
          border: 2px solid #FFD700;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
          font-size: 1.2em;
          flex-shrink: 0;
          box-shadow: 0 4px 15px rgba(220, 20, 60, 0.4);
        }

        .step-content h3 {
          color: #FFD700;
          margin-bottom: 10px;
          font-size: 1.3em;
          text-shadow: 0 1px 3px rgba(0, 0, 0, 0.7);
        }

        .step-content p {
          line-height: 1.6;
          color: rgba(255, 215, 0, 0.9);
        }

        /* Características Detalladas */
        .detailed-features {
          background: linear-gradient(145deg, #2d1810 0%, #1a0a0a 50%, #3d1a00 100%);
          border: 2px solid #FFD700;
          color: #FFD700;
          padding: 50px 40px;
          margin: 30px 0;
          border-radius: 15px;
          box-shadow: 0 15px 40px rgba(255, 215, 0, 0.2),
                      inset 0 1px 0 rgba(255, 215, 0, 0.3),
                      0 0 30px rgba(220, 20, 60, 0.1);
        }

        .detailed-features h2 {
          text-align: center;
          margin-bottom: 40px;
          font-size: 2em;
          text-shadow: 0 2px 10px rgba(0, 0, 0, 0.7);
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 30px;
        }

        .feature-item {
          background: linear-gradient(145deg, #2d1810, #1a0a0a);
          border: 2px solid #FFD700;
          padding: 30px;
          border-radius: 15px;
          text-align: center;
          box-shadow: 0 8px 25px rgba(255, 215, 0, 0.2);
        }

        .feature-icon {
          font-size: 3em;
          margin-bottom: 20px;
        }

        .feature-item h3 {
          font-size: 1.4em;
          margin-bottom: 15px;
        }

        .feature-item p {
          line-height: 1.6;
          opacity: 0.9;
          color: rgba(255, 215, 0, 0.9);
        }

        /* FAQ Section */
        .faq-section {
          background: linear-gradient(145deg, #2d1810 0%, #1a0a0a 50%, #3d1a00 100%);
          border: 2px solid #FFD700;
          border-radius: 15px;
          padding: 40px;
          margin: 30px 0;
          box-shadow: 0 15px 40px rgba(255, 215, 0, 0.2),
                      inset 0 1px 0 rgba(255, 215, 0, 0.3),
                      0 0 30px rgba(220, 20, 60, 0.1);
        }

        .faq-section h2 {
          text-align: center;
          color: #FFD700;
          margin-bottom: 40px;
          font-size: 2em;
          text-shadow: 0 2px 10px rgba(0, 0, 0, 0.7);
        }

        .faq-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 25px;
        }

        .faq-item {
          background: linear-gradient(145deg, #2d1810, #1a0a0a);
          border: 2px solid #FFD700;
          padding: 25px;
          border-radius: 10px;
          margin-bottom: 25px;
          box-shadow: 0 8px 25px rgba(255, 215, 0, 0.2);
        }

        .faq-item h3 {
          color: #FFD700;
          margin-bottom: 15px;
          font-size: 1.2em;
          text-shadow: 0 1px 3px rgba(0, 0, 0, 0.7);
        }

        .faq-item p {
          line-height: 1.6;
          color: rgba(255, 215, 0, 0.9);
        }

        /* Estadísticas */
        .stats-section {
          background: linear-gradient(145deg, #2d1810 0%, #1a0a0a 50%, #3d1a00 100%);
          border: 2px solid #FFD700;
          color: #FFD700;
          padding: 50px 40px;
          margin: 30px 0;
          border-radius: 15px;
          text-align: center;
          box-shadow: 0 15px 40px rgba(255, 215, 0, 0.2),
                      inset 0 1px 0 rgba(255, 215, 0, 0.3),
                      0 0 30px rgba(220, 20, 60, 0.1);
        }

        .stats-section h2 {
          margin-bottom: 40px;
          font-size: 2em;
          text-shadow: 0 2px 10px rgba(0, 0, 0, 0.7);
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 30px;
        }

        .stat-item {
          background: linear-gradient(145deg, #2d1810, #1a0a0a);
          border: 2px solid #FFD700;
          padding: 30px 20px;
          border-radius: 15px;
          box-shadow: 0 8px 25px rgba(255, 215, 0, 0.2);
        }

        .stat-number {
          font-size: 3em;
          font-weight: bold;
          margin-bottom: 10px;
        }

        .stat-label {
          font-size: 1.3em;
          font-weight: 600;
          margin-bottom: 10px;
        }

        .stat-description {
          font-size: 0.95em;
          opacity: 0.9;
          line-height: 1.4;
        }

        /* Ejemplos Prácticos */
        .examples-section {
          background: linear-gradient(145deg, #2d1810 0%, #1a0a0a 50%, #3d1a00 100%);
          border: 2px solid #FFD700;
          border-radius: 15px;
          padding: 40px;
          margin: 30px 0;
          box-shadow: 0 15px 40px rgba(255, 215, 0, 0.2),
                      inset 0 1px 0 rgba(255, 215, 0, 0.3),
                      0 0 30px rgba(220, 20, 60, 0.1);
        }

        .examples-section h2 {
          text-align: center;
          color: #FFD700;
          margin-bottom: 40px;
          font-size: 2em;
          text-shadow: 0 2px 10px rgba(0, 0, 0, 0.7);
        }

        .examples-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
          gap: 30px;
        }

        .example-card {
          background: linear-gradient(145deg, #2d1810, #1a0a0a);
          border: 2px solid #FFD700;
          border-radius: 15px;
          overflow: hidden;
          box-shadow: 0 8px 25px rgba(255, 215, 0, 0.2);
        }

        .example-card h3 {
          background: linear-gradient(45deg, #DC143C, #8B0000);
          color: #FFD700;
          padding: 20px;
          margin: 0;
          font-size: 1.3em;
          text-shadow: 0 1px 3px rgba(0, 0, 0, 0.7);
        }

        .example-content {
          padding: 25px;
        }

        .example-content ul {
          margin: 15px 0;
        }

        .example-content li {
          margin-bottom: 8px;
          color: rgba(255, 215, 0, 0.9);
        }

        .example-result {
          background: linear-gradient(145deg, #2d5016, #1a3009);
          border: 2px solid #32CD32;
          padding: 20px;
          border-radius: 10px;
          margin-top: 20px;
          box-shadow: 0 4px 15px rgba(50, 205, 50, 0.3);
        }

        .example-result .highlight {
          color: #32CD32;
          font-weight: bold;
          font-size: 1.1em;
          text-shadow: 0 0 10px rgba(50, 205, 50, 0.5);
        }

        /* Consejos y Errores */
        .tips-and-mistakes {
          background: linear-gradient(145deg, #2d1810 0%, #1a0a0a 50%, #3d1a00 100%);
          border: 2px solid #FFD700;
          border-radius: 15px;
          padding: 40px;
          margin: 30px 0;
          box-shadow: 0 15px 40px rgba(255, 215, 0, 0.2),
                      inset 0 1px 0 rgba(255, 215, 0, 0.3),
                      0 0 30px rgba(220, 20, 60, 0.1);
        }

        .tips-and-mistakes h2 {
          text-align: center;
          color: #FFD700;
          margin-bottom: 40px;
          font-size: 2em;
          text-shadow: 0 2px 10px rgba(0, 0, 0, 0.7);
        }

        .tips-mistakes-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
          margin-bottom: 40px;
        }

        .tips-column h3 {
          color: #32CD32;
          margin-bottom: 25px;
          font-size: 1.5em;
          text-align: center;
          text-shadow: 0 1px 3px rgba(0, 0, 0, 0.7);
        }

        .mistakes-column h3 {
          color: #DC143C;
          margin-bottom: 25px;
          font-size: 1.5em;
          text-align: center;
          text-shadow: 0 1px 3px rgba(0, 0, 0, 0.7);
        }

        .tip-card, .mistake-card {
          background: linear-gradient(145deg, #2d1810, #1a0a0a);
          border: 2px solid #32CD32;
          padding: 20px;
          border-radius: 10px;
          margin-bottom: 20px;
          box-shadow: 0 6px 20px rgba(50, 205, 50, 0.2);
        }

        .mistake-card {
          border-color: #DC143C;
          box-shadow: 0 6px 20px rgba(220, 20, 60, 0.2);
        }

        .tip-card h4, .mistake-card h4 {
          margin-bottom: 12px;
          font-size: 1.2em;
        }

        .tip-card h4 {
          color: #32CD32;
          text-shadow: 0 1px 3px rgba(0, 0, 0, 0.7);
        }

        .mistake-card h4 {
          color: #DC143C;
          text-shadow: 0 1px 3px rgba(0, 0, 0, 0.7);
        }

        .tip-card p, .mistake-card p {
          line-height: 1.6;
          color: rgba(255, 215, 0, 0.9);
          margin-bottom: 0;
        }

        .final-cta {
          background: linear-gradient(145deg, #DC143C 0%, #8B0000 50%, #FF4500 100%);
          border: 2px solid #FFD700;
          color: #FFD700;
          padding: 30px;
          border-radius: 15px;
          text-align: center;
          box-shadow: 0 10px 30px rgba(220, 20, 60, 0.4),
                      inset 0 1px 0 rgba(255, 215, 0, 0.3);
        }

        .final-cta h3 {
          margin-bottom: 15px;
          font-size: 1.6em;
          text-shadow: 0 2px 10px rgba(0, 0, 0, 0.7);
        }

        .final-cta p {
          font-size: 1.1em;
          margin-bottom: 25px;
          opacity: 0.95;
        }

        .scroll-top-btn {
          background: linear-gradient(45deg, #FFD700, #FFA500);
          color: #8B0000;
          border: 2px solid #8B0000;
          padding: 15px 30px;
          border-radius: 25px;
          font-size: 1.1em;
          font-weight: bold;
          cursor: pointer;
          transition: all 0.3s;
          box-shadow: 0 6px 20px rgba(255, 215, 0, 0.3);
        }

        .scroll-top-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 30px rgba(255, 215, 0, 0.4),
                      0 0 20px rgba(255, 215, 0, 0.3);
          text-shadow: 0 0 10px rgba(139, 0, 0, 0.5);
        }

        @media (max-width: 768px) {
          .guide-steps,
          .features-grid,
          .faq-grid,
          .stats-grid,
          .examples-grid,
          .tips-mistakes-grid,
          .showcase-grid {
            grid-template-columns: 1fr;
            gap: 15px;
          }
          
          .detailed-features,
          .stats-section {
            padding: 20px 15px;
          }
          
          .quick-guide,
          .faq-section,
          .examples-section,
          .tips-and-mistakes,
          .visual-showcase {
            padding: 20px 15px;
          }
          
          .guide-step {
            flex-direction: column;
            text-align: center;
            padding: 20px 15px;
          }
          
          .step-number {
            align-self: center;
          }

          .tips-mistakes-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .hero-carousel {
            height: 120px;
            margin-bottom: 15px;
          }

          .slide-content h2 {
            font-size: 1.3em;
          }

          .slide-content p {
            font-size: 0.9em;
          }

          .slide-stats {
            gap: 8px;
          }

          .slide-stats .stat {
            padding: 4px 8px;
            font-size: 0.7em;
          }

          .container {
            padding: 15px;
          }

          .main-content {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .sidebar {
            order: -1;
          }

          .live-stats-panel,
          .strategy-card,
          .odds-comparison,
          .quick-calculator {
            padding: 15px;
          }

          .quick-calc-row {
            gap: 5px;
          }

          .quick-input {
            min-width: 70px;
            padding: 6px;
            font-size: 0.8em;
          }

          .quick-input::placeholder {
            font-size: 0.75em;
          }

          .quick-calculator h3 {
            font-size: 1em;
          }

          .result-label,
          .result-value {
            font-size: 0.85em;
          }

          .live-stat-item {
            padding: 10px;
          }

          .floating-icon {
            font-size: 1em;
            opacity: 0.1;
          }

          .casino-chip {
            width: 15px;
            height: 15px;
          }

          .calculate-btn {
            font-size: 18px;
            padding: 20px 30px;
            letter-spacing: 2px;
          }

          .visual-element {
            width: 60px;
            height: 60px;
          }

          .roulette-wheel {
            width: 60px;
            height: 60px;
          }

          .showcase-item {
            padding: 20px 15px;
          }

          .visual-showcase h2 {
            font-size: 1.8em;
          }

          .header h1 {
            font-size: 2em;
          }

          .header p {
            font-size: 1.1em;
          }
        }

        /* External Links Section */
        .external-links-section {
          background: linear-gradient(145deg, #2d1810 0%, #1a0a0a 50%, #3d1a00 100%);
          border: 3px solid #FFD700;
          border-radius: 20px;
          padding: 50px 40px;
          margin: 40px 0;
          box-shadow: 0 20px 50px rgba(255, 215, 0, 0.3),
                      inset 0 2px 0 rgba(255, 215, 0, 0.4),
                      0 0 35px rgba(220, 20, 60, 0.2);
          text-align: center;
        }

        .external-links-section h2 {
          color: #FFD700;
          font-size: 2.2em;
          margin-bottom: 15px;
          text-shadow: 0 3px 15px rgba(0, 0, 0, 0.8);
          background: linear-gradient(45deg, #FFD700, #FFA500, #FFD700);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .links-subtitle {
          color: rgba(255, 215, 0, 0.8);
          font-size: 1.2em;
          margin-bottom: 40px;
          text-shadow: 0 1px 5px rgba(0, 0, 0, 0.7);
        }

        .external-links-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 30px;
          margin-top: 30px;
        }

        .external-link-card {
          background: linear-gradient(145deg, #2d1810, #1a0a0a);
          border: 2px solid #FF4500;
          border-radius: 15px;
          padding: 30px 25px;
          text-decoration: none;
          transition: all 0.4s ease;
          position: relative;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          cursor: pointer;
        }

        .external-link-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 215, 0, 0.2), transparent);
          transition: left 0.6s;
        }

        .external-link-card:hover::before {
          left: 100%;
        }

        .external-link-card:hover {
          transform: translateY(-10px) scale(1.05);
          box-shadow: 0 25px 60px rgba(255, 69, 0, 0.6),
                      0 0 40px rgba(255, 215, 0, 0.4),
                      inset 0 0 20px rgba(255, 215, 0, 0.1);
          border-color: #FFD700;
        }

        .link-icon {
          font-size: 3em;
          margin-bottom: 20px;
          animation: iconFloat 3s ease-in-out infinite;
        }

        @keyframes iconFloat {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .external-link-card h3 {
          color: #FFD700;
          font-size: 1.4em;
          margin-bottom: 15px;
          text-shadow: 0 2px 8px rgba(0, 0, 0, 0.7);
        }

        .external-link-card p {
          color: rgba(255, 215, 0, 0.85);
          font-size: 0.95em;
          line-height: 1.5;
          margin-bottom: 20px;
          flex-grow: 1;
        }

        .visit-link {
          display: inline-block;
          background: linear-gradient(45deg, #DC143C, #8B0000);
          color: #FFD700;
          padding: 10px 25px;
          border-radius: 25px;
          font-weight: bold;
          font-size: 0.95em;
          border: 2px solid #FFD700;
          box-shadow: 0 4px 15px rgba(220, 20, 60, 0.4);
          transition: all 0.3s;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .external-link-card:hover .visit-link {
          background: linear-gradient(45deg, #FFD700, #FFA500);
          color: #8B0000;
          box-shadow: 0 6px 25px rgba(255, 215, 0, 0.6),
                      0 0 20px rgba(255, 215, 0, 0.4);
          transform: scale(1.1);
        }

        @media (max-width: 768px) {
          .external-links-section {
            padding: 30px 20px;
          }

          .external-links-section h2 {
            font-size: 1.8em;
          }

          .links-subtitle {
            font-size: 1em;
          }

          .external-links-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .external-link-card {
            padding: 25px 20px;
          }

          .link-icon {
            font-size: 2.5em;
          }

          .external-link-card h3 {
            font-size: 1.2em;
          }
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
    </div>
  );
}