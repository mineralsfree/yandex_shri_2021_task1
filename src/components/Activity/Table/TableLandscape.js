import React from "react";
import {getRange} from "../MaxHelper";
import './Table.scss';
import {TableCN} from "./Table";


export const TableLandscape = props => {
  const {data} = props;
  let dataArr = Object.values(data);
   dataArr = dataArr[0].map((_, colIndex) => dataArr.map(row => row[colIndex]));
  let newArr = [];
  for (let i = 0; i < dataArr.length; i+=2) {
    let tArr = []
    for (let j = 0; j < dataArr[0].length; j++) {
      tArr.push(dataArr[i][j] + dataArr[i+1][j]);
    }
    newArr.push(tArr);
  }
  newArr = newArr[0].map((_, colIndex) => newArr.map(row => row[colIndex]));
  const [rangeLength, max, resolveObject] =getRange(newArr);

  return   (<div className={TableCN('table', {landscape: true,})}> {
    newArr.map((row, index) => {
      return (<>
        {
          row.map((item, i) => {
            return (<div className={TableCN('table-item', {landscape: true, odd: !!(index % 2), size: resolveObject[item]})}
                         style={{zIndex: index}}>
              <img className={TableCN('table-image', {landscape: true ,[resolveObject[item]]: true} )}/>
            </div>)
          })
        }
      </>)
    })
  }</div>)
}

