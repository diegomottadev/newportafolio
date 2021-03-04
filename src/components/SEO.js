import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"


export const query = graphql`
  {
    site {
      siteMetadata {
        author
        siteDesc: description
        image
        siteUrl
        siteTitle: title
        twitterUsername
      }
    }
  }
`

const SEO = ({title,description}) => {
  const {site} = useStaticQuery(query);
  const {siteDesc,siteTitle,siteUrl,image,twitterUsername} = site.siteMetadata;
  return <Helmet
            htmlAttributes={{ lang:"es" }}
            title={`${title} | ${siteTitle}`}>
            <meta name="description" content={description || siteDesc}/>
            <meta name="image" content={image}/>
          </Helmet>
}

export default SEO
