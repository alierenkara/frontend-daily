import React from 'react'
import './app.scss'

function Content(props) {
  return <div className='content'>{props.component && props.component}</div>
}

export default Content
