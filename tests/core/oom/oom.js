'use strict';

var fs = require('fs');

const list = [];
setInterval(()=> {
  const record = new MyRecord();
  list.push(record);
},10);
function MyRecord() {
  this.data = fs.readFileSync('output.dat',
            {encoding:'utf8'});
}
setInterval(()=> {
  console.log(process.memoryUsage())
},10000);