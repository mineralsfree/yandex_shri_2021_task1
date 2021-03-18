import React from 'react'
import {Leaders} from './components/Leaders/Leaders.js'
import {Chart} from "./components/Chart/Chart";
import {Vote} from "./components/Vote/Vote";
import {Diagram} from "./components/Diagram/Diagram";
import {Global} from "recharts";
import {Activity} from "./components/Activity/Activity";
import {data} from './data.js'
const storiesMap = {
  leaders: <Leaders/>,
  chart: <Chart/>,
  vote: <Vote/>,
  diagram: <Diagram/>,
  activity: <Activity/>
}

export const App = ({alias, data} )=>{
  Global.isSsr = true;
  return (React.cloneElement(storiesMap[alias], {data} ))
  {/*<div data-action="go-prev"></div>*/}
  {/*<div data-action="go-next"></div>*/}
}