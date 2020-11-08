import React, { useState } from 'react'
import cn from 'classnames'
import './app.scss'

function Menu(props) {
  const menu = props.menuArray
  return (
    <div className='menu'>
      <div className='menu--header'>Ali Erenkara</div>
      {menu.map((item) => (
        <MenuItem item={item} setContent={props.setContent} />
      ))}
    </div>
  )
}

function MenuItem(props) {
  const [isClicked, setIsClicked] = useState(false)

  let subMenu = cn('sub--menu', {
    isClicked: isClicked,
  })
  return (
    <div
      className='menu--item'
      onClick={() => {
        setIsClicked(!isClicked)
      }}
    >
      {props.item.name}
      {props.item.items.length > 0 &&
        props.item.items.map((item) => {
          return (
            <div
              className={subMenu}
              onClick={(e) => {
                props.setContent(item.component)
                e.stopPropagation()
              }}
            >
              <div className='sub--menu--name'>{item.name}</div>
            </div>
          )
        })}
    </div>
  )
}

export default Menu
