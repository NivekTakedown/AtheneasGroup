import React, { useState } from 'react';

const SubscribeSection = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para enviar el correo electrónico al servidor
    console.log(`Suscrito con el correo: ${email}`);
    setEmail('');
  };

  return (
    <section className="subscribe-section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <h2 className="text-center mb-4">Nunca te pierdas una noticia</h2>
            <p className="text-center mb-4">
              Mantente actualizado sobre las últimas noticias y artículos de nuestra empresa.
            </p>
            <form onSubmit={handleSubmit} className="subscribe-form">
              <div className="input-group">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Ingresa tu correo electrónico"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button type="submit" className="btn btn-primary">
                  Suscribirse
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubscribeSection;