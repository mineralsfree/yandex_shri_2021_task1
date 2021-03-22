import React from 'react'
import {PieChart} from "recharts/es6/chart/PieChart";
import {Cell} from "recharts/es6/component/Cell";
import {Pie} from 'recharts/es6/polar/Pie';
import {cn} from "@bem-react/classname";
import {Brown, DarkGrey, Grey, Yellow} from "./SVGEffects/Dark";
import {LightBrown, LightDarkGrey, LightGrey, LightYellow} from "./SVGEffects/Light";


const DonatCN = cn('donat')
export const Donut = props => {
  const {height, categories, width, totalText, differenceText, light} = props;
  const sum = categories.reduce((a, c) => Number(c.valueText.split(' ')[0]) + a, 0);
  let data = categories.map((el, i) => {
    let value = Number(el.valueText.split(' ')[0])
    value = (value / sum * 360) - 1;
    return {value, id: i}
  })
    .reverse()
  return (<div className={DonatCN('container')}>
      <div className={DonatCN('text-container')}>
        <div className={DonatCN('text', {total: true})}>{totalText}</div>
        <div className={DonatCN('text', {diff: true})}>{differenceText}</div>
      </div>
      <PieChart isAnimationActive={false} width={width} height={height} className={DonatCN('svg')}>
        <defs>
          {!light ? <>
            <Yellow size={width / 2}/>
            <Brown size={width / 2}/>
            <Grey size={width / 2}/>
            <DarkGrey size={width / 2}/>
          </> : <>
            <LightBrown size={width / 2}/>
            <LightDarkGrey size={width / 2}/>
            <LightGrey size={width / 2}/>
            <LightYellow size={width / 2}/>
          </>
          }
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
              return <Cell
                key={`cell-${index}`}
                fill={`url(#paint${entry.id + (light ? '_light' : '') })`}
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