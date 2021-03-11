import React from 'react'
import {cn} from "@bem-react/classname";
import './Bar.scss'
import {getStylesForBar, getStylesForNumber} from "./BarHelper";

const BarCN = cn('bar')
export const Bar = props => {
  const {number, color} = props
  return (<div className={BarCN('', {[color]: true, [number > 5 ? 5 : number]: true})}
               style={{...getStylesForBar(number)}}>
    <div className={BarCN('number',)} style={{...getStylesForNumber(number,)}}>{number}</div>
  </div>)
}