import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Projects from "../components/Projects"
import SEO from "../components/SEO"
// ...GatsbyImageSharpFluid

const ProjectsPage = ({data:{allStrapiProjects:{nodes:projects}}}) =>{

  return (
    <Layout page={''}>
        <SEO title="Proyectos" description="Mis desarrollos de proyectos personales para aprender nuevas habilidades de programación"/>
        <section className="projects-page">
          <Projects projects={projects} title="Proyectos personales"/>
        </section>
      </Layout>
    )
}
export const query = graphql`{
  allStrapiProjects(filter: {feature: {eq: false}}) {
    nodes {
      github
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
export default ProjectsPage
