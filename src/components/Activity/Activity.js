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
  console.log(data);
  const [rangeLength, max] = getRange(data);
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
        <div className={ActivityCN('scale-bar-item')}>
          <div className={ActivityCN('scale-bar-bar', {'black' : true})}/>
          <div className={ActivityCN('scale-bar-text')}>0</div>
        </div>
        <div className={ActivityCN('scale-bar-item')}>
          <div className={ActivityCN('scale-bar-bar', {'grey' : true})}/>
          <div className={ActivityCN('scale-bar-text')}>1 — {rangeLength}</div>
        </div>
         {/*TODO://рефакторинг массив и тд */}
        <div className={ActivityCN('scale-bar-item')}>
          <div className={ActivityCN('scale-bar-bar', {'brown' : true})}/>
          <div className={ActivityCN('scale-bar-text')}>{1+rangeLength} — {rangeLength*2}</div>
        </div>
        <div className={ActivityCN('scale-bar-item')}>
          <div className={ActivityCN('scale-bar-bar', {'gold' : true})}/>
          <div className={ActivityCN('scale-bar-text')}>{1+rangeLength*2} — {max}</div>
        </div>


      </div>
    </div>
  </div>)
}