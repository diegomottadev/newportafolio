import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"

const contact = () => {

  return (
    <Layout page={''}>
      <SEO title="Contacto" description="Contáctame"/>
        <section className="contact-page">
          <article className="contact-form">
            <h3>
              Hablemos!
            </h3>
            <form action="https://formspree.io/f/mwkwjrve"
                  method="POST">
              <div className="form-group"> 
                <input type="text" name="name" placeholder="Nombre" className="form-control"/>
                <input type="email" name="email" placeholder="Email" className="form-control"/>
                <textarea name="message"  rows="5" placeholder="Mensaje" className="form-control"></textarea>
              </div>    
              <button type="submit" className="submit-btn btn">Enviar</button>
            </form>
          </article>
        </section>
    </Layout>
  )
}

export default contact
