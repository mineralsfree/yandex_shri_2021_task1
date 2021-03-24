const express = require('express')
const path = require('path')
const data = require('./src/data/data.json')

const app = express()
const PORT = 8080;

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static('build', {index: false}));

app.get('/', (req, res) => {
  let {slide, theme} = req.query;
  if (slide===undefined) slide=1;
  let enabled_theme =theme === 'light' ?  'theme_light' : 'theme_dark';
  const index = Number(slide);
  if (isNaN(index) ||  index<1 || index >11 ){
    res.render('404');
    return;
  }
  res.render('page', {...data[slide-1], theme: enabled_theme});
})

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`)
})