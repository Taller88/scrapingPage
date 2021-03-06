const express = require('express');
const nunjucks = require('nunjucks');
const path = require('path');

const morgan = require('morgan')
const cors = require('cors')
const indexRouter = require('./routes/index');
const hometaxRouter = require('./routes/hometax');

const app = express();
app.set('port', process.env.ports||80);
app.set('view engine','html');
nunjucks.configure('views',{
    express:app,
    watch:true
})
app.use(morgan('combined'));
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.json())
app.use(express.urlencoded({extended:true}));
app.use(cors({
    origin:true,
    credentials:true
}))

app.use('/',indexRouter);
app.use('/hometax',hometaxRouter);

app.use((req, res, next)=>{
    const error = new Error("url 주소를 잘못 입력하셨습니다.")
    error.status = 404
    next(error);
})


app.use((err, req, res, next) => {
    res.locals.message = err.message;
    res.locals.error = process.env.NODE_ENV !== 'production' ? err : {};
    res.status(err.status || 500);
    res.render('error');
  });

app.listen(app.get('port'),()=>{
    console.log("[Server] open : "+ app.get('port'))
})