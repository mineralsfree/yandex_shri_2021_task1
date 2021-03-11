import React from 'react'
import {Cell, Pie, PieChart, Label} from "recharts";
import {cn} from "@bem-react/classname";


const DonatCN = cn('donat')
export const Donut = props => {
  const {height, categories, width, totalText, differenceText} = props;
  console.log(props);
  const data = categories.map(el => {
    return {value: Number(el.valueText.split(' ')[0])}
  })
  return (<div className={DonatCN('container')}>
      <div className={DonatCN('text-container')} style={{width, height}}>
        <div className={DonatCN('text totalText')}>{totalText}</div>
        <div className={DonatCN('text differenceText')}>{differenceText}</div>
      </div>
      <PieChart isAnimationActive={false} width={width} height={height}>
        <defs>
          <radialGradient xmlns="http://www.w3.org/2000/svg" id="paint1">
            <stop offset="71.875%" stop-color="#FFA300"/>
            <stop offset="100%" stop-color="#5B3A00"/>
          </radialGradient>
          <radialGradient xmlns="http://www.w3.org/2000/svg" id="paint3">
            <stop offset="71.875%" stop-color="#9B9B9B"/>
            <stop offset="100%" stop-color="#382900"/>
          </radialGradient>
          <radialGradient xmlns="http://www.w3.org/2000/svg" id="paint2">
            <stop offset="71.875%" stop-color="#4D4D4D"/>
            <stop offset="100%" stop-color="#382900"/>
          </radialGradient>
          <radialGradient xmlns="http://www.w3.org/2000/svg" id="paint0">
            <stop offset="72.9167%" stop-color="#633F00"/>
            <stop offset="100%" stop-color="#0F0900"/>
          </radialGradient>
        </defs>

        <Pie paddingAngle={1} startAngle={0} isAnimationActive={false} data={data} dataKey="value"
             cx="50%" cy="50%" innerRadius={Math.floor(width / 2 * 0.7)} outerRadius={width / 2}
             cornerRadius={6}>
          {
            data.map((entry, index) => {
              return <Cell key={`cell-${index}`} fill={`url(#paint${index})`} stroke={'none'}/>
            })
          }
        </Pie>
      </PieChart>
    </div>
  )
}