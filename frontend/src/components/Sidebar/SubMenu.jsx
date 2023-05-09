import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom'
import './subMenu.css';


const SubMenu = ({item}) => {
    const [subnav, setSubnav] = useState(false)

    const showSubnav = () => setSubnav(!subnav)

  return (
    <>
      <Link className={'sidebar_link'} to={item.path} onClick={item.subNav && showSubnav}>
        <div>
            {item.icon}
            <span className='sidebar_label'>{item.title}</span>
        </div>

        <div>
            {(item.subNav && subnav) ? item.iconOpened : (item.subNav ? item.iconClosed : null)}
        </div>
      </Link>

      {subnav && item.subNav.map((item, index) => {
        return (
            <Link className='dropdown_menu' key={index} to={item.path}>
                {item.icon}
                <span className='sidebar_label'>{item.title}</span>
            </Link>
        )
      })}
    </>
  )
}

export default SubMenu
