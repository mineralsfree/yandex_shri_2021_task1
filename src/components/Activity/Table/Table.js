import React from "react";
import {getRange} from "../MaxHelper";
import {cn} from "@bem-react/classname";
import './Table.scss';

export const TableCN = cn('table')
export const Table = props => {
  const {data} = props;
  let dataArr = Object.values(data);
  dataArr = dataArr[0].map((_, colIndex) => dataArr.map(row => row[colIndex]));
  const [__, _, resolveObject] = getRange(data);
  return (<div className={TableCN('table')}>
    {dataArr.map((row, index) => {
      return (<>
        {
          row.map((item, i) => {
            return (
              <div className={TableCN('table-item', {odd: !!(index % 2), size: resolveObject[item]})}
                   style={{zIndex: index}}>
                <img className={TableCN('table-image', {[resolveObject[item]]: true})}/>
              </div>
            )
          })
        }
      </>)
    })}</div>)

}