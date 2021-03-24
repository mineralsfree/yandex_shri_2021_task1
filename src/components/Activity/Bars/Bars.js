import React from 'react'
import {ActivityCN} from "../Activity";
export const Bars = props=>{
  const { rangeLength, max, rangeLengthLandscape, maxLandscape }= props;
  const bars = [
    {color: 'black', text: '0'},
    rangeLength >0 && {color: 'grey', text: '1 — ' +rangeLength, landscape: false},
    rangeLength >0 && {color: 'brown',text: 1+rangeLength + ' — ' +rangeLength*2, landscape: false},
    {color: 'gold', text: 1+rangeLength*2 +' — ' + max, landscape: false},
    rangeLength >0 && {color: 'grey', text: '1 — ' +rangeLengthLandscape, landscape: true},
    rangeLength >0 && {color: 'brown',text: 1+rangeLengthLandscape + ' — ' +rangeLengthLandscape*2, landscape: true},
    {color: 'gold', text: 1+rangeLengthLandscape*2 +' — ' + maxLandscape, landscape: true}

    ].map((el,i)=>{
    return (  el &&  <div key={i + el.color} className={ActivityCN('scale-bar-item', {landscape: el.landscape})}>
      <div className={ActivityCN('scale-bar-bar', {[el.color] : true})}/>
      <div className={ActivityCN('scale-bar-text')}>{el.text}</div>
    </div>)
  });

  return bars
}