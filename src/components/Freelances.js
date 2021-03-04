import React from "react"
import Title from "./Title"
import { Link } from "gatsby"
import Freelance from "./Freelance"

const Freelances = ({projects,title,showLink}) => {
  return (

    <section className="section projects">
      <Title title={title}/>
      <div className="section-center projects-center">
        {projects.map((project,index)=>{
          return <Freelance key={project.id} index={index} {...project}/>
        })}

      </div>
      {
        showLink && <Link to="/freelances" className="btn center-btn">Más proyectos freelance</Link>
      }
    </section>
  )
}

export default Freelances
