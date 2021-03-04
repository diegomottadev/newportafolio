import React from "react"
import Title from "./Title"
import {  FaAngleDoubleRight } from "react-icons/fa"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"

const query = graphql`
{
  allStrapiJobs(sort: {fields: strapiId, order: DESC}) {
    nodes {
      strapiId
      company
      date
      position
      description {
        name
        id
      }
      company_short
      place
    }
  }
}
`



const Jobs = () => {

  const data = useStaticQuery(query);
  const {allStrapiJobs:{nodes:jobs}} = data;
  const [value,setValue] = React.useState(0);
  const {company,position,date,description,place,company_short} = jobs[value];

  return (
      <section className="section jobs">
          <Title title="Experiencias"/>
          <div className="jobs-center">
            {/* btn container*/}
            <div className="btn-container">
              {jobs.map((item,index)=>{

                  return (<button key={item.strapiId} 
                          onClick={()=>setValue(index)}
                          className={`job-btn ${index===value && 
                          'active-btn'}`}> 
                          {item.company_short}
                          </button>
                  )
              })}
            </div>
            <article className="job-info">
                <h3>{position}</h3>
                <h4>{company}</h4>
                <h5 className="job-date">{date}{' | '}{place}</h5>
                <br></br>
                {
                  description.map((item)=>{
                    return <div key={item.id} className="job-desc ">
                      <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
                      <p>{item.name}</p>
                    </div>
                  })
                }
            </article>
          </div>
          <Link to="/about" className="btn center-btn">
             Sobre mi
          </Link>
      </section>
    )
}

export default Jobs
