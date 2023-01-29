const moment = require('moment');

let date = moment().format('LL'); 

const dateContainer = document.querySelector("#date");
dateContainer.innerHTML = date;



