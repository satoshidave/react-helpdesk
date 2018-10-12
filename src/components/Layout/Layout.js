import React from 'react'
import './Layout.css';

const Layout = (props) => {
  return (
    <div className="main--layout" >
      {props.children}
    </div>
  )
}

export default Layout;