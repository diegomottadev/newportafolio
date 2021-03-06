import React from "react"
import PropTypes from "prop-types"
import Image from "gatsby-image"
import { FaShareSquare } from "react-icons/fa"
const Freelance = ({description,title,stack,site,image,index}) => {
  return (
    <article className="project">
      {image &&
      <Image fluid={image.childImageSharp.fluid} className="project-img"/>
      }
      <div className="project-info">
        <span className="project-number"> {index + 1}</span>
        <h3 className="project-title">{title || "defaul title"}</h3>
        <p className="project-desc">{description}</p>
        <div className="about-stack">
          {stack.map((item)=>{
            return <span key={item.id}>{item.skill}</span>
          })}
        </div>
        <br></br>
        <div className="project-links">

          {
            site !== null &&
            <a href={site}>
              <FaShareSquare className="project-icon"/>
            </a>
          }

        </div>
      </div>

    </article>
  )
}

// Project.propTypes = {
//   title: PropTypes.string.isRequired,
//   github: PropTypes.string.isRequired,
//   site: PropTypes.string.isRequired,
//   description: PropTypes.string.isRequired,
//   image: PropTypes.object.isRequired,
//   stack: PropTypes.arrayOf(PropTypes.object).isRequired,



// }

export default Freelance
