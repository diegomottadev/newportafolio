import React from "react"
import { Link } from "gatsby"
const data = [
  {
    id: 1,
    text: "home",
    url: "/",
  },
  {
    id: 2,
    text: "sobre mi",
    url: "/about/",
  },
  {
    id: 3,
    text: "proyectos",
    url: "/projects/",
  },
  {
    id: 4,
    text: "freelances",
    url: "/freelances/",
  },
 
  {
    id: 5,
    text: "contacto",
    url: "/contact/",
  },
]

// {
//   id: 4,
//   text: "blog",
//   url: "/blog/",
// },

const tempLinks = data.map(link => {
  return (
    <li key={link.id}>
      <Link to={link.url}>{link.text}</Link>
    </li>
  )
})
// I KNOW WE CAN COMBINE IT !!!!!

export default ({ styleClass,page }) => {
  console.log(page)
  return (
    <ul className={`page-links ${styleClass ? styleClass  : ""} ${page==undefined ? ""  : "navbar-font"}`}>
      {tempLinks}
    </ul>
  )
}
