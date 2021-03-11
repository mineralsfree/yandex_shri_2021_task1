import React from 'react'
import {cn} from "@bem-react/classname";
import './ChartBar.scss'

const ChartBarCN = cn('chart-bar')
export const ChartBar = props => {
  const {title, value, active, height} = props;

  return (
  <div className={ChartBarCN('', {active})} style={{height}}>
    <div className={ChartBarCN('value', {active})}>{value>0 ? value: ''}</div>
    <div className={ChartBarCN('title', {active})}>{title}</div>
  </div>)

}