import React from 'react'
import ReactDOMServer from 'react-dom/server'
import './_colors.scss'
import './style.scss'
import {App} from './App'
import {data} from './data'

function renderTemplate(kek, lol) {
  const item = data[8];
  return ReactDOMServer.renderToStaticMarkup(<App alias={item.alias} data={item.data}/>)
}

window.renderTemplate = renderTemplate;
