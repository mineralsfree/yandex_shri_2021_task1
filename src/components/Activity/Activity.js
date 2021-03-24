import React from 'react'
import {cn} from "@bem-react/classname";
import './Activity.scss'
import {Title} from "../common /Title/Title";
import {Scale} from "./Scale/Scale";
import {Table} from "./Table/Table";
import {getRange} from "./MaxHelper";
import {Bars} from "./Bars/Bars";

export const ActivityCN = cn('activity');
export const Activity = props => {
  const {data: {title, subtitle, data}} = props;
  const [rangeLength, max, resolveObject] = getRange(data);
  let dataArr = Object.values(data);
  dataArr = dataArr[0].map((_, colIndex) => dataArr.map(row => row[colIndex]));
  let landscapeArr = [];
  for (let i = 0; i < dataArr.length; i+=2) {
    let tArr = []
    for (let j = 0; j < dataArr[0].length; j++) {
      tArr.push(dataArr[i][j] + dataArr[i+1][j]);
    }
    landscapeArr.push(tArr);
  }
  landscapeArr = landscapeArr[0].map((_, colIndex) => landscapeArr.map(row => row[colIndex]));
  const [rangeLengthLandscape, maxLandscape,resolveObjectLandscape] = getRange(landscapeArr);


  return (<div className={ActivityCN('container')}>
    <Title text={title} subtitle={subtitle}/>
    <div className={ActivityCN('table-container')}>
        <Table data={dataArr} landscape={false} resolveObject={resolveObject}/>
        <Table data={landscapeArr} landscape={true} resolveObject={resolveObjectLandscape}/>
      <div className={ActivityCN('scale-bar')}>
        <div>
          <Scale/>
          <div className={ActivityCN('scale-bar-text', {horizontal: true})}>2 часa</div>
          <div className={ActivityCN('scale-bar-text', {vertical: true})}>1 час</div>
        </div>
        <Bars maxLandscape={maxLandscape}
              rangeLengthLandscape={rangeLengthLandscape}
              max={max}
              rangeLength={rangeLength}
        />
      </div>
    </div>
  </div>)
}