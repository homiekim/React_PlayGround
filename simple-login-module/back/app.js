const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const userRouter = require('./routes/user');
const db = require('./models');
const morgan = requre('morgan');

const app = express();
dotenv.config();

db.sequelize.sync()
  .then(() => {
    console.log('db 연결 성공');
  })  
  .catch(console.error);

app.use(morgan('dev'));

app.use(cors({
  origin: ['http://localhost:3000'],
  credentials: true,
}))

app.use(express.json());
app.use(express.urlencoded({ extended : true}));
app.use(cookieParser(process.env.COOKIE_SECRET));


app.get('/', (req,res) => {
  res.send('hello express 3080');
});

app.use('/user', userRouter);

app.listen(3080, () => {
  console.log('3080 포트 서버 실행 중 ...!');
})