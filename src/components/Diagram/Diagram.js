import React from 'react'
import {cn} from "@bem-react/classname";

import {Title} from "../common /Title/Title";
import "./Diagram.scss"
import './Donut.scss'
import {Donut} from "./Donut";

const DiagramCN = cn('diagram')
export const Diagram = props => {
  const {title, subtitle, categories, totalText, differenceText} = props.data;
  const info = categories.map((el, i) => {
    return (<><div className={DiagramCN('table')}>
      <div className={DiagramCN('circle-container')}>
        <div className={DiagramCN('circle', {[i]: true})}/>
        <div className={DiagramCN('title')}>{el.title}</div>
      </div>
      <div className={DiagramCN('value-container')}>
        <div className={DiagramCN('diff-text')}>{el.differenceText.split(' ')[0]}</div>
        <div className={DiagramCN('value-text')}>{el.valueText.split(' ')[0]}</div>
      </div>
    </div>
      {i!==categories.length-1? (<div className={DiagramCN('line')}/>) : (<></>) }
    </>)
  })
  return (<div className={DiagramCN('container')}>
    <Title text={title} subtitle={subtitle}/>

    <div className={DiagramCN('')}>
      <div className={DiagramCN('dark')}>
        <Donut height={328} width={328} categories={categories} totalText={totalText} differenceText={differenceText} light={false}/>
      </div>
      <div className={DiagramCN('light')}>
        <Donut height={328} width={328} categories={categories} totalText={totalText} differenceText={differenceText} light/>
      </div>
      <div className={DiagramCN('info')}>{info}</div>

    </div>

  </div>)
}
