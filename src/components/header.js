import PropTypes from "prop-types"
import React from "react"
import "./header.css"

const Header = ({ siteTitle }) => (
  <header className="header">
    <h1 className="header__title">{siteTitle}</h1>
    <p>Version 0.0.1</p>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
