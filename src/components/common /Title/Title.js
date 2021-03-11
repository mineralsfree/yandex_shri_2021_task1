import React from 'react'
import './Title.scss'

export const Title = props => {
  const {text, subtitle} = props
  return (<>
    <div className={'title-container'}>
      <div className={'title-title'}>{text}</div>
      <div className={'title-subtitle'}>{subtitle}</div>
    </div>
  </>)
}