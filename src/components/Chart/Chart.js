import React from 'react';
import {cn} from "@bem-react/classname";
import {Title} from "../common /Title/Title";
import {ChartBar} from "./ChartBar/ChartBar";
import './Chart.scss'
import {ChartProfile} from "./ChartProfile/ChartProfile";

const ChartCN = cn('chart')

export const Chart = props => {
  const {title, subtitle, users, values} = props.data
  let max = 0;
  let v = values
     // .slice(4, 13)
    .reverse()
    .map((el) => {
    max = Math.max(max, el.value);
    return el
  })
  v.map(el => {
    el.height = (el.value * 70 / max) + '%'
    el.height = el.height !== '0%' ? el.height : 8;
  })
  const u = users.slice(0, 2).map((el, i, arr) => {
    return (<>
      <ChartProfile user={el}/>
      {arr.length-1===i? '' :<div className={ChartCN('line')}/>
      }
    </>)
  });
  const bars = v.map((el, i) => <><ChartBar {...el}/></>)
  return (<div className={ChartCN('container')}>
    <Title text={title} subtitle={subtitle}/>
    <div className={ChartCN('chart-section')}>
      <div className={ChartCN('chart-container')}>
        {bars}
      </div>
      <div className={ChartCN('chart-list')}>
        {u}
      </div>
    </div>
  </div>)
}

