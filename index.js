const express = require('express')
const path = require('path')
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 5000

const app = express();

app.use(bodyParser.urlencoded( { extended: false }));
app.use(bodyParser.json());

require('./routes.js')(app);

  app
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
