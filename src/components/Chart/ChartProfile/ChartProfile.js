import React from 'react'
import {cn} from "@bem-react/classname";
import {importAll} from '../../../helpers/imageImport'
import './ChartProfile.scss'

const ChartProfileCN = cn('chart-profile')
const images = importAll('4x');
export const ChartProfile = props => {
  const {name = '', avatar, id, valueText,} = props.user;
  return (<div className={ChartProfileCN('container',)}>
    <img src={(images[avatar]).default} className={ChartProfileCN('image',)} alt={'avatar'}/>
    <div className={ChartProfileCN('text-container')}>
      <div className={ChartProfileCN('name')}>{name}</div>
      <div className={ChartProfileCN('bottom_text', {colored: props.titleColored})}>{valueText}</div>
    </div>
  </div>)
}
