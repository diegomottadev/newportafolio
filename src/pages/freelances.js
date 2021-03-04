import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import SEO from "../components/SEO"
import Freelances from "../components/Freelances"
// ...GatsbyImageSharpFluid

const FrelancePage = ({data:{allStrapiFreelances:{nodes:freelances}}}) =>{

  return (
    <Layout page={''}>
      <SEO title="Proyectos Freelances" description="Mis desarrollos de proyectos freelances"/>
      <section className="projects-page">
        <Freelances projects={freelances} title="Proyectos freelances"/>
      </section>
    </Layout>
  )
}
export const query = graphql`{
  allStrapiFreelances(filter: {feature: {eq: false}}) {
    nodes {
      id
      title
      description
      site
      image {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      stack {
        id
        skill
      }
    }
  }
}
`;
export default FrelancePage
