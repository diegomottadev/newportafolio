import React from "react"
import Links from "../constants/links"
import SocialLinks from "../constants/socialLinks"
import { FaTimes } from "react-icons/fa"
const Sidebar = ({isOpen,toggleSiderbar}) => {
  return (
    <aside className={`sidebar ${isOpen? 'show-sidebar': ""}`}>
      <button className="close-btn" onClick={toggleSiderbar}>
        <FaTimes/>
      </button>
      <div className="side-container">
        <Links styleClass={`${isOpen ? "sidebar-links":""}`}/>
        <SocialLinks styleClass="sidebar-icons"/>
      </div>
    </aside>
  )
}

export default Sidebar
