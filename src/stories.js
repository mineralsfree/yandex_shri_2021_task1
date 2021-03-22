import React from 'react'
import ReactDOMServer from 'react-dom/server'
import './_colors.scss'
import './style.scss'
import {App} from './App'
import {data} from './data'
function renderTemplate(kek, lol) {
  const item = data[4]
  return ReactDOMServer.renderToStaticMarkup(<App alias={kek} data={lol}/>)
}
window.renderTemplate = renderTemplate;
