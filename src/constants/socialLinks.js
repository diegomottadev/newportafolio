import React from "react"
import {
  FaLinkedin,
  FaDribbbleSquare,
  FaBehanceSquare,
  FaInstagram,
  FaReddit,
  FaGithub,
  FaGitlab,
} from "react-icons/fa"

const data = [
  {
    id: 1,
    icon: <FaLinkedin className="social-icon"></FaLinkedin>,
    url: "https://www.linkedin.com/in/diegoivanmotta/",
  },
  {
    id: 2,
    icon: <FaInstagram className="social-icon"></FaInstagram>,
    url: "https://www.instagram.com/diegomottadev/",
  },
  {
    id: 3,
    icon: <FaReddit className="social-icon"></FaReddit>,
    url: "https://www.reddit.com/user/diegomottadev",
  },
  {
    id: 4,
    icon: <FaGithub className="social-icon"></FaGithub>,
    url: "https://github.com/diegomottadev",
  },
  {
    id: 5,
    icon: <FaGitlab className="social-icon"></FaGitlab>,
    url: "https://gitlab.com/diegomotta18",
  },
]
const links = data.map(link => {
  return (
    <li key={link.id}>
      <a href={link.url} className="social-link">
        {link.icon}
      </a>
    </li>
  )
})

export default ({ styleClass }) => {
  return (
    <ul className={`social-links ${styleClass ? styleClass : ""}`}>{links}</ul>
  )
}
