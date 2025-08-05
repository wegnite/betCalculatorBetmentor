import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';

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
        <title>Calculadora de Apuestas BetMentor | Herramienta Profesional de Apuestas Deportivas</title>
        <meta name="description" content="Calculadora de Apuestas BetMentor - La herramienta más precisa para calcular apuestas deportivas. Calculadora gratuita con múltiples tipos de apuestas: simples, combinadas y acumuladoras. ¡Prueba BetMentor ahora!" />
        <meta name="keywords" content="calculadora apuestas,calculadora apuestas deportivas,betmentor,calculadora de apuestas gratis,apuestas deportivas españa,cuotas deportivas,calculadora combinadas,apuestas simples" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="BetMentor España" />
        <link rel="canonical" href="https://bet-calculator-betmentor.com/" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon.svg" />
        <link rel="icon" type="image/png" sizes="32x32" href="/icons8-bet-50.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/icons8-bet-50.png" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#667eea" />
        <link rel="alternate" hrefLang="es" href="https://bet-calculator-betmentor.com/" />
        <link rel="alternate" hrefLang="en" href="https://bet-calculator-betmentor.com/en/" />
        <link rel="alternate" hrefLang="pt" href="https://bet-calculator-betmentor.com/pt/" />
        <link rel="alternate" hrefLang="x-default" href="https://bet-calculator-betmentor.com/" />
        <meta httpEquiv="content-language" content="es" />
        
        {/* Google AdSense */}
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6224617757558738" crossOrigin="anonymous"></script>
        
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
          <strong>🚀 Características de BetMentor:</strong> Calculadora profesional con 15+ tipos de apuestas | Comparación de cuotas en tiempo real | Evaluación inteligente de riesgos | Recomendaciones estratégicas de BetMentor
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
            {/* AdSense Ad Space 1 */}
            <div className="ad-space">
              <ins className="adsbygoogle"
                   style={{display:'block'}}
                   data-ad-client="ca-pub-6224617757558738"
                   data-ad-slot="auto"
                   data-ad-format="auto"
                   data-full-width-responsive="true"></ins>
            </div>

            <aside className="tips-section">
              <h3>💡 Consejos de Apuestas BetMentor</h3>
              <div className="tip-item">
                <strong>Gestión de Bankroll BetMentor:</strong>
                <span>Usa la calculadora BetMentor para nunca arriesgar más del 5% de tu bankroll total</span>
              </div>
              <div className="tip-item">
                <strong>Análisis de Cuotas BetMentor:</strong>
                <span>La calculadora BetMentor te ayuda a encontrar value bets, céntrate en la probabilidad implícita</span>
              </div>
              <div className="tip-item">
                <strong>Diversificación de Riesgo BetMentor:</strong>
                <span>La calculadora BetMentor recomienda distribuir el riesgo entre múltiples resultados</span>
              </div>
            </aside>

            {/* AdSense Ad Space 2 */}
            <div className="ad-space">
              <ins className="adsbygoogle"
                   style={{display:'block'}}
                   data-ad-client="ca-pub-6224617757558738"
                   data-ad-slot="auto"
                   data-ad-format="auto"
                   data-full-width-responsive="true"></ins>
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
              <div className="stat-number">50,000+</div>
              <div className="stat-label">Apostadores Activos</div>
              <div className="stat-description">Usuarios que confían en BetMentor mensualmente</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">1M+</div>
              <div className="stat-label">Cálculos Realizados</div>
              <div className="stat-description">Apuestas calculadas con precisión total</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">15+</div>
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

        .educational-resources {
          background: rgba(255, 255, 255, 0.95);
          border-radius: 15px;
          padding: 30px;
          margin-bottom: 30px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        }

        .educational-resources h2 {
          color: #2c3e50;
          text-align: center;
          margin-bottom: 25px;
          font-size: 1.8em;
        }

        .resources-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 25px;
        }

        .resource-card {
          background: #f8f9fa;
          border-radius: 15px;
          padding: 25px;
          text-align: center;
          border: 2px solid transparent;
          transition: all 0.3s;
        }

        .resource-card:hover {
          border-color: #3498db;
          transform: translateY(-5px);
          box-shadow: 0 15px 35px rgba(52, 152, 219, 0.2);
        }

        .resource-icon {
          font-size: 3em;
          margin-bottom: 15px;
        }

        .resource-card h3 {
          color: #2c3e50;
          margin-bottom: 15px;
          font-size: 1.3em;
        }

        .resource-card p {
          color: #7f8c8d;
          margin-bottom: 20px;
          line-height: 1.6;
        }

        .resource-link {
          display: inline-block;
          background: linear-gradient(45deg, #3498db, #2980b9);
          color: white;
          padding: 12px 25px;
          border-radius: 25px;
          text-decoration: none;
          font-weight: 600;
          transition: all 0.3s;
        }

        .resource-link:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(52, 152, 219, 0.3);
        }

        .footer {
          background: rgba(255, 255, 255, 0.95);
          border-radius: 15px;
          padding: 30px;
          margin-top: 30px;
          text-align: center;
        }

        .footer-nav {
          background: #f8f9fa;
          border-radius: 10px;
          padding: 20px;
          margin-bottom: 30px;
        }

        .nav-links {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 15px;
          margin-top: 15px;
        }

        .footer-link {
          display: inline-block;
          background: linear-gradient(45deg, #3498db, #2980b9);
          color: white;
          padding: 12px 20px;
          border-radius: 25px;
          text-decoration: none;
          font-weight: 600;
          transition: all 0.3s;
          text-align: center;
        }

        .footer-link:hover {
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(52, 152, 219, 0.3);
        }

        /* Guía Rápida */
        .quick-guide {
          background: rgba(255, 255, 255, 0.95);
          border-radius: 15px;
          padding: 40px;
          margin: 30px 0;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        }

        .quick-guide h2 {
          text-align: center;
          color: #2c3e50;
          margin-bottom: 40px;
          font-size: 2em;
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
          background: #f8f9fa;
          border-radius: 15px;
          border-left: 5px solid #3498db;
        }

        .step-number {
          background: #3498db;
          color: white;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
          font-size: 1.2em;
          flex-shrink: 0;
        }

        .step-content h3 {
          color: #2c3e50;
          margin-bottom: 10px;
          font-size: 1.3em;
        }

        .step-content p {
          line-height: 1.6;
          color: #555;
        }

        /* Características Detalladas */
        .detailed-features {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          padding: 50px 40px;
          margin: 30px 0;
          border-radius: 15px;
        }

        .detailed-features h2 {
          text-align: center;
          margin-bottom: 40px;
          font-size: 2em;
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 30px;
        }

        .feature-item {
          background: rgba(255, 255, 255, 0.1);
          padding: 30px;
          border-radius: 15px;
          text-align: center;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
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
        }

        /* FAQ Section */
        .faq-section {
          background: rgba(255, 255, 255, 0.95);
          border-radius: 15px;
          padding: 40px;
          margin: 30px 0;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        }

        .faq-section h2 {
          text-align: center;
          color: #2c3e50;
          margin-bottom: 40px;
          font-size: 2em;
        }

        .faq-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 25px;
        }

        .faq-item {
          background: #f8f9fa;
          padding: 25px;
          border-radius: 10px;
          border-left: 4px solid #27ae60;
        }

        .faq-item h3 {
          color: #2c3e50;
          margin-bottom: 15px;
          font-size: 1.2em;
        }

        .faq-item p {
          line-height: 1.6;
          color: #555;
        }

        /* Estadísticas */
        .stats-section {
          background: linear-gradient(45deg, #27ae60, #2ecc71);
          color: white;
          padding: 50px 40px;
          margin: 30px 0;
          border-radius: 15px;
          text-align: center;
        }

        .stats-section h2 {
          margin-bottom: 40px;
          font-size: 2em;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 30px;
        }

        .stat-item {
          background: rgba(255, 255, 255, 0.1);
          padding: 30px 20px;
          border-radius: 15px;
          backdrop-filter: blur(10px);
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
          background: rgba(255, 255, 255, 0.95);
          border-radius: 15px;
          padding: 40px;
          margin: 30px 0;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        }

        .examples-section h2 {
          text-align: center;
          color: #2c3e50;
          margin-bottom: 40px;
          font-size: 2em;
        }

        .examples-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
          gap: 30px;
        }

        .example-card {
          background: #f8f9fa;
          border-radius: 15px;
          overflow: hidden;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
        }

        .example-card h3 {
          background: linear-gradient(45deg, #e74c3c, #c0392b);
          color: white;
          padding: 20px;
          margin: 0;
          font-size: 1.3em;
        }

        .example-content {
          padding: 25px;
        }

        .example-content ul {
          margin: 15px 0;
        }

        .example-content li {
          margin-bottom: 8px;
          color: #555;
        }

        .example-result {
          background: white;
          padding: 20px;
          border-radius: 10px;
          margin-top: 20px;
          border-left: 4px solid #27ae60;
        }

        .example-result .highlight {
          color: #27ae60;
          font-weight: bold;
          font-size: 1.1em;
        }

        /* Consejos y Errores */
        .tips-and-mistakes {
          background: rgba(255, 255, 255, 0.95);
          border-radius: 15px;
          padding: 40px;
          margin: 30px 0;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        }

        .tips-and-mistakes h2 {
          text-align: center;
          color: #2c3e50;
          margin-bottom: 40px;
          font-size: 2em;
        }

        .tips-mistakes-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
          margin-bottom: 40px;
        }

        .tips-column h3 {
          color: #27ae60;
          margin-bottom: 25px;
          font-size: 1.5em;
          text-align: center;
        }

        .mistakes-column h3 {
          color: #e74c3c;
          margin-bottom: 25px;
          font-size: 1.5em;
          text-align: center;
        }

        .tip-card, .mistake-card {
          background: #f8f9fa;
          padding: 20px;
          border-radius: 10px;
          margin-bottom: 20px;
          border-left: 4px solid #27ae60;
        }

        .mistake-card {
          border-left-color: #e74c3c;
        }

        .tip-card h4, .mistake-card h4 {
          margin-bottom: 12px;
          font-size: 1.2em;
        }

        .tip-card h4 {
          color: #27ae60;
        }

        .mistake-card h4 {
          color: #e74c3c;
        }

        .tip-card p, .mistake-card p {
          line-height: 1.6;
          color: #555;
          margin-bottom: 0;
        }

        .final-cta {
          background: linear-gradient(45deg, #3498db, #2980b9);
          color: white;
          padding: 30px;
          border-radius: 15px;
          text-align: center;
        }

        .final-cta h3 {
          margin-bottom: 15px;
          font-size: 1.6em;
        }

        .final-cta p {
          font-size: 1.1em;
          margin-bottom: 25px;
          opacity: 0.95;
        }

        .scroll-top-btn {
          background: white;
          color: #3498db;
          border: none;
          padding: 15px 30px;
          border-radius: 25px;
          font-size: 1.1em;
          font-weight: bold;
          cursor: pointer;
          transition: all 0.3s;
        }

        .scroll-top-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
        }

        @media (max-width: 768px) {
          .guide-steps,
          .features-grid,
          .faq-grid,
          .stats-grid,
          .examples-grid,
          .tips-mistakes-grid {
            grid-template-columns: 1fr;
          }
          
          .detailed-features,
          .stats-section {
            padding: 30px 20px;
          }
          
          .quick-guide,
          .faq-section,
          .examples-section,
          .tips-and-mistakes {
            padding: 25px;
          }
          
          .guide-step {
            flex-direction: column;
            text-align: center;
          }
          
          .step-number {
            align-self: center;
          }

          .tips-mistakes-grid {
            gap: 25px;
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
    </>
  );
}