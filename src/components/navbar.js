import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"



const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `rgba(0,0,0,0)`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        display:`flex`,
        flexDirection: `row`,
        justifyContent:`space-between`,
        margin: `2rem auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `#866bde`,
            textDecoration: `none`,
            filter: `drop-shadow(-0px 0px 15px rgba(53, 42, 87, 0.3))`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>

      <div style={{ 

        display:`flex`, 
        flexDirection: `row`,
        justifyContent:`flex-end`,
        alignItems : 'center',
        filter: `drop-shadow(-0px 0px 15px rgba(53, 42, 87, 0.3))`,
      }} >
        <h3 style={{ margin: 0 }}>
        <Link
          to="/team"
          style={{
            padding:`10px`,
            color: `#866bde`,
            textDecoration: `none`,

          }}
        >
          Team
        </Link>
      </h3>

      <h3 style={{ margin: 0 }}>
        <Link
          to="/about"
          style={{
            padding:`10px`,
            color: `#866bde`,
            textDecoration: `none`,
          }}
        >
          About
        </Link>
      </h3>
      </div>
    </div>

  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
