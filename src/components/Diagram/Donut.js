import React from 'react'
import {Cell, Pie, PieChart} from "recharts";
import {cn} from "@bem-react/classname";
import {Brown, DarkGrey, Grey, Yellow} from "./SVGEffects/Dark";


const DonatCN = cn('donat')
export const Donut = props => {
  const {height, categories, width, totalText, differenceText} = props;
  const sum = categories.reduce((a, c) => Number(c.valueText.split(' ')[0]) + a, 0);
  let data = categories.map((el, i) => {
    let value = Number(el.valueText.split(' ')[0])
    console.log(value / sum * 360);
    value = true ? (value / sum * 360) - 1 : value;
    return {value, id: i}
  })
    .reverse()
  // data =   [data[1], data[0], data[3], data[2]]
  return (<div className={DonatCN('container')}>
      <div className={DonatCN('text-container')} style={{width, height}}>
        <div className={DonatCN('text', {total: true})}>{totalText}</div>
        <div className={DonatCN('text', {diff: true})}>{differenceText}</div>
      </div>
      <PieChart isAnimationActive={false} width={width} height={height}>
        <defs>
          <Yellow/>
          <Brown/>
          <Grey/>
          <DarkGrey/>
        </defs>

        <Pie
          paddingAngle={1}
          startAngle={120}
          endAngle={480}
          isAnimationActive={false}
          data={data}
          dataKey="value"

          innerRadius={'71.5%'}
          outerRadius={width / 2}
          cornerRadius={6}>

          {
            data.map((entry, index) => {
              console.log(entry, index);
              return <Cell
                key={`cell-${index}`}
                fill={`url(#paint${entry.id})`}
                fillOpacity={index === 3 ? 0.8 : 0.5}
                // filter={`url(#filter${entry.id})`}
                stroke={'none'}/>
            })
          }
        </Pie>
      </PieChart>
    </div>
  )
}