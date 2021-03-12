import React from 'react'
import {cn} from "@bem-react/classname";
import {importAll} from '../../helpers/imageImport'
import './Activity.scss'
import {Title} from "../common /Title/Title";
import {Scale} from "./Scale/Scale";

const ActivityCN = cn('activity');
const images = importAll('4x');
export const Activity = props => {
  const {data: {title, subtitle, data}} = props;
  const tempArr = []
  let dataArr = Object.values(data);
  dataArr.forEach((row) => tempArr.push(Math.max.apply(null, row)));
  dataArr = dataArr[0].map((_, colIndex) => dataArr.map(row => row[colIndex]));
  const max = Math.max.apply(null, tempArr);
  const rangeLength = Math.floor(max / 3);
  const resolveObject =  {0: 'min'};
  for (let i = 1; i <= max; i++) {
    const val = i / rangeLength
    if (val <= 1) {
      resolveObject[i] = 'mid';
    } else if (val <= 2) {
      resolveObject[i] = 'max';
    } else {
      resolveObject[i] = 'extra';
    }
  }

  const table = dataArr.map((row, index) => {
    return (<>
      {

        row.map((item, i) => {
          return (<div className={ActivityCN('table-item', {odd: !!(index % 2), size: resolveObject[item]})}
                       style={{zIndex: index}}
          >
            <img src={images[resolveObject[item] + '-dark.png'].default} className={ActivityCN('table-image', {[resolveObject[item]]: true} )}/>
          </div>)
        })
      }
    </>)
  })
  return (<div className={ActivityCN('container')}>
    <Title text={title} subtitle={subtitle}/>
    <div className={ActivityCN('table-container')}>
      <div className={ActivityCN('table')}>
        {table}
      </div>
      <div className={ActivityCN('scale-bar')}>
        <div>
          <Scale/>
          <div className={ActivityCN('scale-bar-text')}>1 час</div>
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
          <div className={ActivityCN('scale-bar-text')}>{1+rangeLength*2} — {rangeLength*3}</div>
        </div>


      </div>
    </div>
  </div>)
}