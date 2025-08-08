import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import GoogleAnalytics from '../components/GoogleAnalytics';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    priority: 'medium'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Gracias por tu mensaje. Aunque este es un formulario de demostración, en la implementación real recibiríamos tu consulta y responderíamos en 24-48 horas.\n\nPor ahora, puedes contactarnos directamente por email a: hello@betcalc-pro.com');
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
      priority: 'medium'
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  return (
    <>
      <Head>
        <title>Centro de Apoyo y Sugerencias | BetCalc Pro - Contacta con Nosotros</title>
        <meta name="description" content="¿Tienes preguntas sobre estrategias de apuestas? ¿Necesitas ayuda con la calculadora? ¿Quieres sugerir nuevas funciones? Contáctanos aquí." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://bet-calculator-betmentor.com/contact" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon.svg" />
        
      </Head>

      <GoogleAnalytics />

      <div className="container">
        <div className="header">
          <Link href="/" className="nav-link">← Volver a la Calculadora</Link>
          <h1>💬 Centro de Apoyo y Sugerencias</h1>
          <p>Estamos aquí para ayudarte con estrategias, calculadoras y cualquier pregunta sobre apuestas</p>
        </div>
        
        <div className="content">
          <p>En BetCalc Pro valoramos enormemente la comunicación con nuestros usuarios. Si tienes preguntas sobre <strong>estrategias de apuestas</strong>, necesitas ayuda con nuestras <strong>calculadoras</strong>, quieres <strong>sugerir nuevas funciones</strong>, o simplemente quieres compartir tu experiencia, no dudes en contactarnos.</p>
          
          <div style={{background: 'linear-gradient(135deg, #3498db, #2980b9)', color: 'white', padding: '20px', borderRadius: '10px', margin: '20px 0', textAlign: 'center'}}>
            <h3 style={{marginBottom: '15px'}}>🚀 ¿Tienes Ideas para Nuevas Funciones?</h3>
            <p style={{marginBottom: '15px', opacity: 0.9}}>Siempre estamos buscando maneras de mejorar. Compártenos qué herramientas o guías te gustaría ver.</p>
            <p style={{fontSize: '14px', opacity: 0.8}}>Las mejores sugerencias se implementan en futuras actualizaciones</p>
          </div>
          
          <div className="contact-grid">
            <div className="contact-card">
              <div className="contact-icon">📧</div>
              <h3>Email General</h3>
              <p><strong>hello@betcalc-pro.com</strong></p>
              <p>Para consultas generales, sugerencias y feedback</p>
              <p><em>Respuesta en 24-48 horas</em></p>
            </div>
            
            <div className="contact-card">
              <div className="contact-icon">🛠️</div>
              <h3>Soporte Técnico</h3>
              <p><strong>support@betcalc-pro.com</strong></p>
              <p>Para reportar errores o problemas técnicos</p>
              <p><em>Respuesta prioritaria en 12-24 horas</em></p>
            </div>
            
            <div className="contact-card">
              <div className="contact-icon">🤝</div>
              <h3>Colaboraciones</h3>
              <p><strong>partnerships@betcalc-pro.com</strong></p>
              <p>Para propuestas de colaboración y partnerships</p>
              <p><em>Evaluación en 3-5 días laborables</em></p>
            </div>
            
            <div className="contact-card">
              <div className="contact-icon">⚖️</div>
              <h3>Legal</h3>
              <p><strong>legal@betcalc-pro.com</strong></p>
              <p>Para asuntos legales, privacidad y términos</p>
              <p><em>Respuesta en 72 horas</em></p>
            </div>
          </div>
          
          <h2>Formulario de Contacto</h2>
          
          <form onSubmit={handleSubmit} style={{marginTop: '30px'}}>
            <div className="form-group">
              <label htmlFor="name">Nombre *</label>
              <input 
                type="text" 
                id="name" 
                className="form-control" 
                required 
                placeholder="Tu nombre completo"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email *</label>
              <input 
                type="email" 
                id="email" 
                className="form-control" 
                required 
                placeholder="tu@email.com"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="subject">Asunto *</label>
              <select 
                id="subject" 
                className="form-control" 
                required
                value={formData.subject}
                onChange={handleChange}
              >
                <option value="">Selecciona un asunto</option>
                <option value="bug">Reporte de Error</option>
                <option value="feature">Solicitud de Función</option>
                <option value="question">Pregunta General</option>
                <option value="feedback">Feedback/Sugerencia</option>
                <option value="partnership">Propuesta de Colaboración</option>
                <option value="legal">Asunto Legal</option>
                <option value="other">Otro</option>
              </select>
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Mensaje *</label>
              <textarea 
                id="message" 
                className="form-control" 
                required 
                placeholder="Describe tu consulta, sugerencia o problema en detalle..."
                value={formData.message}
                onChange={handleChange}
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="priority">Prioridad</label>
              <select 
                id="priority" 
                className="form-control"
                value={formData.priority}
                onChange={handleChange}
              >
                <option value="low">Baja - No es urgente</option>
                <option value="medium">Media - Respuesta normal</option>
                <option value="high">Alta - Requiere atención prioritaria</option>
              </select>
            </div>
            
            <button type="submit" className="btn-submit">📨 Enviar Mensaje</button>
          </form>
          
          <div className="contact-info">
            <p><strong>📍 Ubicación:</strong> Operamos completamente online desde España, sirviendo usuarios globalmente.</p>
            <p><strong>🕒 Horario de Atención:</strong> Lunes a Viernes, 9:00 - 18:00 CET (revisamos emails 7 días a la semana)</p>
            <p><strong>🌍 Idiomas:</strong> Español, Inglés, Portugués</p>
          </div>
          
          <h2>Preguntas Frecuentes</h2>
          
          <div className="faq-item">
            <div className="faq-question">¿BetCalc Pro es realmente gratuito?</div>
            <div className="faq-answer">Sí, completamente gratuito. No hay costos ocultos, sin límites de uso, sin registro requerido. Nos financiamos através de publicidad no intrusiva.</div>
          </div>
          
          <div className="faq-item">
            <div className="faq-question">¿Los cálculos son precisos?</div>
            <div className="faq-answer">Utilizamos algoritmos matemáticos probados y testeos extensivos. Sin embargo, siempre recomendamos verificar cálculos importantes independientemente.</div>
          </div>
          
          <div className="faq-item">
            <div className="faq-question">¿Guardan mis datos de apuestas?</div>
            <div className="faq-answer">No. Toda la calculadora funciona en tu navegador. No enviamos ni almacenamos tus cálculos en nuestros servidores.</div>
          </div>
          
          <div className="faq-item">
            <div className="faq-question">¿Puedo usar BetCalc Pro en mi móvil?</div>
            <div className="faq-answer">Absolutamente. Nuestro diseño es completamente responsive y funciona perfectamente en móviles y tablets.</div>
          </div>
        </div>

        {/* External Links Section */}
        <div className="external-links" style={{
          background: 'linear-gradient(145deg, #2d1810 0%, #1a0a0a 50%, #3d1a00 100%)',
          border: '2px solid #FFD700',
          borderRadius: '15px',
          padding: '30px',
          marginTop: '30px',
          boxShadow: '0 15px 40px rgba(255, 215, 0, 0.2), inset 0 1px 0 rgba(255, 215, 0, 0.3)'
        }}>
          <h2 style={{textAlign: 'center', marginBottom: '25px', color: '#FFD700'}}>🔗 Recursos Adicionales</h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '20px'
          }}>
            <a href="https://corporatesoftwareinspector.com" target="_blank" rel="noopener noreferrer" style={{
              background: 'linear-gradient(45deg, #DC143C, #8B0000)',
              color: '#FFD700',
              padding: '15px',
              borderRadius: '10px',
              textDecoration: 'none',
              textAlign: 'center',
              border: '2px solid #FFD700',
              transition: 'transform 0.3s',
              display: 'block'
            }}>
              <div style={{fontSize: '1.5em', marginBottom: '5px'}}>🔍</div>
              <div>Corporate Software Inspector</div>
            </a>
            <a href="https://mahavatar-narsimha.com" target="_blank" rel="noopener noreferrer" style={{
              background: 'linear-gradient(45deg, #DC143C, #8B0000)',
              color: '#FFD700',
              padding: '15px',
              borderRadius: '10px',
              textDecoration: 'none',
              textAlign: 'center',
              border: '2px solid #FFD700',
              transition: 'transform 0.3s',
              display: 'block'
            }}>
              <div style={{fontSize: '1.5em', marginBottom: '5px'}}>🕉️</div>
              <div>Mahavatar Narsimha</div>
            </a>
            <a href="https://tiktokcommentgenerators.com" target="_blank" rel="noopener noreferrer" style={{
              background: 'linear-gradient(45deg, #DC143C, #8B0000)',
              color: '#FFD700',
              padding: '15px',
              borderRadius: '10px',
              textDecoration: 'none',
              textAlign: 'center',
              border: '2px solid #FFD700',
              transition: 'transform 0.3s',
              display: 'block'
            }}>
              <div style={{fontSize: '1.5em', marginBottom: '5px'}}>💬</div>
              <div>TikTok Comment Generators</div>
            </a>
            <a href="https://vibemeet.ai" target="_blank" rel="noopener noreferrer" style={{
              background: 'linear-gradient(45deg, #DC143C, #8B0000)',
              color: '#FFD700',
              padding: '15px',
              borderRadius: '10px',
              textDecoration: 'none',
              textAlign: 'center',
              border: '2px solid #FFD700',
              transition: 'transform 0.3s',
              display: 'block'
            }}>
              <div style={{fontSize: '1.5em', marginBottom: '5px'}}>🤖</div>
              <div>VibeMeet AI</div>
            </a>
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
          color: #FFD700;
          background: linear-gradient(135deg, #1a0a0a 0%, #2d1810 25%, #1f0f0f 50%, #3d1a00 75%, #0f0a0a 100%) !important;
          background-attachment: fixed !important;
          min-height: 100vh;
        }
        
        .container {
          max-width: 800px;
          margin: 0 auto;
          padding: 20px;
        }
        
        .header {
          text-align: center;
          background: linear-gradient(145deg, #2d1810 0%, #1a0a0a 50%, #3d1a00 100%);
          border: 2px solid #FFD700;
          border-radius: 15px;
          padding: 30px;
          margin-bottom: 30px;
          box-shadow: 0 15px 40px rgba(255, 215, 0, 0.3),
                      inset 0 1px 0 rgba(255, 215, 0, 0.4);
        }
        
        .content {
          background: linear-gradient(145deg, #2d1810 0%, #1a0a0a 50%, #3d1a00 100%);
          border: 2px solid #FFD700;
          border-radius: 15px;
          padding: 40px;
          box-shadow: 0 15px 40px rgba(255, 215, 0, 0.2),
                      inset 0 1px 0 rgba(255, 215, 0, 0.3);
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
          color: #FFD700;
          margin-bottom: 20px;
          text-shadow: 0 2px 10px rgba(0, 0, 0, 0.7);
        }
        
        h2 {
          color: #FFD700;
          margin-top: 30px;
          margin-bottom: 15px;
          border-bottom: 2px solid #FF4500;
          padding-bottom: 5px;
          text-shadow: 0 1px 3px rgba(0, 0, 0, 0.7);
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
        
        .contact-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 30px;
          margin: 30px 0;
        }
        
        .contact-card {
          background: #f8f9fa;
          padding: 30px;
          border-radius: 15px;
          text-align: center;
        }
        
        .contact-icon {
          font-size: 3em;
          margin-bottom: 15px;
        }
        
        .contact-info {
          background: #e8f4f8;
          padding: 20px;
          border-radius: 10px;
          margin: 20px 0;
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
        
        textarea.form-control {
          min-height: 120px;
          resize: vertical;
        }
        
        .btn-submit {
          background: linear-gradient(145deg, #FF4500 0%, #DC143C 30%, #8B0000 60%, #FF6347 100%);
          color: #FFD700;
          border: 3px solid #FFD700;
          padding: 15px 30px;
          border-radius: 25px;
          font-size: 18px;
          font-weight: bold;
          cursor: pointer;
          transition: all 0.3s;
          text-transform: uppercase;
          letter-spacing: 1px;
          box-shadow: 0 8px 25px rgba(255, 69, 0, 0.4);
        }
        
        .btn-submit:hover {
          transform: translateY(-3px) scale(1.05);
          box-shadow: 0 12px 35px rgba(255, 69, 0, 0.6),
                      0 0 25px rgba(255, 215, 0, 0.4);
          text-shadow: 0 0 15px rgba(255, 215, 0, 0.8);
        }
        
        .faq-item {
          background: #f8f9fa;
          padding: 20px;
          border-radius: 10px;
          margin-bottom: 15px;
          border-left: 4px solid #3498db;
        }
        
        .faq-question {
          font-weight: bold;
          color: #2c3e50;
          margin-bottom: 8px;
        }
        
        .faq-answer {
          color: #7f8c8d;
        }
      `}</style>
    </>
  );
}