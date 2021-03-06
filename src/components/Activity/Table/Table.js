import React from "react";
import {getRange} from "../MaxHelper";
import {cn} from "@bem-react/classname";
import './Table.scss';

export const TableCN = cn('table')
export const Table = props => {
  const {data, landscape, resolveObject} = props;
  return (<div className={TableCN('table', {landscape: landscape})}>
    {data.map((row, index) => {
      return (<>
        {
          row.map((item, i) => {
            return (
              <div key={i} className={TableCN('table-item', {odd: !!(index % 2), size: resolveObject[item], landscape: landscape})}
                   style={{zIndex: index}}>
                <img className={TableCN('table-image', {[resolveObject[item]]: true, landscape: landscape})}/>
              </div>
            )
          })
        }
      </>)
    })}</div>)

}