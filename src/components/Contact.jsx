import React, { useState } from 'react';
//import emailjs from 'emailjs-com';

function Contact() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [organization, setOrganization] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    /*emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', { email, name, organization, message }, 'YOUR_USER_ID')
      .then((response) => {
         console.log('SUCCESS!', response.status, response.text);
      }, (err) => {
         console.log('FAILED...', err);
      });*/
  }

  return (
    <section>
      <div>
        <div className="container" id="contacto">
          <h2 className="text-center display-4 m-5">Contacto</h2>
        </div>
        <div className="container">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">Dirección de email</label>
              <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="e.g tecnologia@example.com" value={email} onChange={(e) => setEmail(e.target.value)} />
              <div id="emailHelp" className="form-text">Nunca compartiremos tu correo electrónico con nadie.</div>
            </div>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Nombre</label>
              <input type="text" className="form-control" id="nombre" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div className="mb-3">
              <label htmlFor="organization" className="form-label">Empresa</label>
              <input type="text" className="form-control" id="empresa" value={organization} onChange={(e) => setOrganization(e.target.value)} />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">Mensaje</label>
              <textarea className="form-control" id="message" rows="3" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
            </div>
            <button type="submit" className="btn btn-primary custom-button wow fadeInUp" data-wow-delay="0.4s">Enviar</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;