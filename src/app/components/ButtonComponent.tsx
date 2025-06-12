import React from 'react'
import style from './style.module.css'

const ButtonComponent = () => {
  return (
    <div>
      <button className={style['custom-style-button']}>

        click me
      </button>
    </div>
  )
}

export default ButtonComponent
