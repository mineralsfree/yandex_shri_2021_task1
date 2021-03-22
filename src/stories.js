import React from 'react'
import ReactDOMServer from 'react-dom/server'
import './_colors.scss'
import './style.scss'
import {App} from './App'
function renderTemplate(kek, lol) {
  return ReactDOMServer.renderToStaticMarkup(<App alias={kek} data={lol}/>)
}
window.renderTemplate = renderTemplate;
