import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Title from "../components/Title"
import Image from "gatsby-image"
import SEO from "../components/SEO"
import ReactMarkdown from "react-markdown"
const About = ({data:{about:{nodes}}}) => {

  const {title,description,image,stack} = nodes[0];

  return (
    <Layout page={''}>
      <SEO title="Sobre mi" description="¿Quién soy?"/>
      <section className="about-page">
        <div className="section-center about-center">
          <Image fluid={image.childImageSharp.fluid} className="about-img"/>
          <article className="about-text">
            <Title title={title}/>
            <p><ReactMarkdown source={description}/></p>
            
            <div className="about-stack">
              {stack.map(item =>{
                return <span className="" key={item.id}>{item.skill}</span>
              })}
            </div>
          </article>
        </div>
      </section>
    </Layout>

  )
}

export const query = graphql`
  {
    about:allStrapiAbout {
      nodes {
        stack {
          id
          skill
        }
        title
        description
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
export default About
