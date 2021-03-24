import React from 'react'
import ReactDOMServer from 'react-dom/server'
import './_colors.scss'
import './style.scss'
import {App} from './App'
function renderTemplate(alias, data) {
  return ReactDOMServer.renderToStaticMarkup(<App alias={alias} data={data}/>)
}
window.renderTemplate = renderTemplate;
