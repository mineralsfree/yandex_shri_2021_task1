import React from 'react'
import {cn} from "@bem-react/classname";
import './Activity.scss'
import {Title} from "../common /Title/Title";
import {Scale} from "./Scale/Scale";
import {Table} from "./Table/Table";
import {getRange} from "./MaxHelper";
import {TableLandscape} from "./Table/TableLandscape";

export const ActivityCN = cn('activity');
export const Activity = props => {

  const {data: {title, subtitle, data}} = props;
  const [rangeLength, max] = getRange(data);
  const bars = [{color: 'black', text: '0'},
    {color: 'grey', text: '1 — ' +rangeLength}
    ,{color: 'brown',text: 1+rangeLength + ' — ' +rangeLength*2},
    {color: 'gold', text: 1+rangeLength*2 +' — ' + max}].map((el,i)=>{
      return (    <div key={i + el.color} className={ActivityCN('scale-bar-item')}>
        <div className={ActivityCN('scale-bar-bar', {[el.color] : true})}/>
        <div className={ActivityCN('scale-bar-text')}>{el.text}</div>
      </div>)
  })
  return (<div className={ActivityCN('container')}>
    <Title text={title} subtitle={subtitle}/>
    <div className={ActivityCN('table-container')}>
        <TableLandscape data={data}/>
        <Table data={data}/>
      <div className={ActivityCN('scale-bar')}>
        <div>
          <Scale/>
          <div className={ActivityCN('scale-bar-text', {horizontal: true})}>2 часa</div>
          <div className={ActivityCN('scale-bar-text', {vertical: true})}>1 час</div>
        </div>
        {bars}
      </div>
    </div>
  </div>)
}