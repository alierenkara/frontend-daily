import React, { useEffect, useState } from 'react'
import Menu from './Menu'
import Content from './Content'
import './app.scss'

function Layout(props) {
  const [showingComponent, setShowingComponent] = useState([])
  const setContent = (component) => {
    setShowingComponent(component)
  }

  return (
    <div className='layout'>
      <Menu menuArray={props.menuArray} setContent={setContent} />
      <Content component={showingComponent} />
    </div>
  )
}

export default Layout
