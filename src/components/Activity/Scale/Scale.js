import React from 'react'
import {cn} from "@bem-react/classname";
import './Scale.scss'

const ScaleCN = cn('scale')
export const Scale = () => {
  return (<div className={ScaleCN('container')}>
    <div className={ScaleCN('vertical')}/>
    <div className={ScaleCN('horizontal')}/>
    <div className={ScaleCN('vertical')}/>

  </div>)
}
