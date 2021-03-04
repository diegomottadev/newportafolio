import React from "react"
import Image from "gatsby-image"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"
import SocialLinks from "../constants/socialLinks"
import Typed from "react-typed"
// ...GatsbyImageSharpFluid
const query = graphql`
{
  file(relativePath: {eq: "hero-img.png"}) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid
      }
    }
  }
}
`;
const Hero = () => {
  const { file: { childImageSharp: { fluid }, } } = useStaticQuery(query)

  return <header className="hero">
    <div className="section-center hero-center">
      <article className="hero-info">
        <div>
          <div className="underline"></div>
            <h1>Diego Motta</h1>
            <h3>
              <Typed loop
                    typeSpeed={80}
                    backSpeed={20}
                    strings={[
                      "Lic. en Sistemas",
                      "Desarrollador Full Stack Web",
                    ]} 
                    smartBackspace
                    backDelay={1000}
                    loopCount={0}
                    showCursor
                    cursorChar="|"
                    className="typed" 
                    />
              </h3>
              <h4>¿Tenes un proyecto o una idea ?</h4>
            <Link to="/contact" className="btn">Contactame</Link>
            <SocialLinks/>
        </div>
      </article>
      <Image fluid={fluid} className="hero-img" ></Image>

    </div>
  </header>
}

export default Hero
