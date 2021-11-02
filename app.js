const express = require('express')
const app = express();
const schedule = require('node-schedule'); 
const { schedulingWeather } = require('./weatherScheduller');
require('dotenv').config();
app.use(express.json());
app.use(express.urlencoded({extended: true}));
const port = 4700;




app.listen(port, () => {
  console.log(`Scheduling at http://localhost:${port}`)
  schedule.scheduleJob('*/20 * * * * *', function(){
    console.log('20초경과, 스케쥴링을 시작합니다');
    schedulingWeather();
  })
})