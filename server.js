const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const expressLayouts = require('express-ejs-layouts')

const indexRouter = require('./routes/index')


app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')
app.set('layout', 'layouts/layout')
app.use(expressLayouts)
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())
app.use('/', indexRouter)


const port = process.env.PORT || 3000;
app.listen(port, () => {
 console.log(`Server is up at port ${port}`)
})
