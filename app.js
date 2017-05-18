'use strict';
// var firstAndPike = {
//   name: '1st And Pike',
//   minCust: 23,
//   maxCust: 65,
//   avgCookieSale: 6.3,
// };

function Store(storeName, minCust, maxCust, avgCookieSale){
  this.storeName = storeName;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookieSale = avgCookieSale;
  this.hourly = [];
}

Store.prototype.cookiePerHour = function () {
  var people = Math.floor(Math.random() * (this.maxCust - this.minCust)) + this.minCust;
  return people * this.avgCookieSale;
};




// var seaTacAirport = {
//   name: 'SeaTac Airport',
//   minCust: 3,
//   maxCust: 24,
//   avgCookieSale: 1.2,
// };
//
// var seattleCenter = {
//   name: 'Seattle Center',
//   minCust: 11,
//   maxCust: 38,
//   avgCookieSale: 3.7,
// };
//
// var capitolHill = {
//   name: 'Capitol Hill',
//   minCust: 20,
//   maxCust: 38,
//   avgCookieSale: 2.3,
// };
//
// var Alki = {
//   name: 'Alki',
//   minCust: 2,
//   maxCust: 16,
//   avgCookieSale: 4.6,
// };

Store.prototype.hourlySales = function() {
  var total = 0;


  for (var i = 0; i < 15; i++) {
    var cookiehour = Math.floor(this.cookiePerHour());
    this.hourly.push(cookiehour);
    total = total + cookiehour;
    console.log('thishour:',total);
  }


  console.log('total:',total);


  // var list = document.createElement('ul');
  // var list_arr = [];
  //
  // for (var b=0; b < 15; b++) {
  //   list_arr.push('<li>' + hourly[b] + '</li>');
  // }

  // list_arr.unshift('<li>' + eachStore.storeName + '</li>');
  // list_arr.push('<li> total: ' + total + '</li>');
  // var full_list = list_arr.join('');
  // list.innerHTML = full_list;
  // document.body.appendChild(list);

  var table = document.getElementById('shell');
  var data = ['<td>' + this.storeName + '</td>' ];
  for (i = 0; i < this.hourly.length; i++) {
    data.push('<td>' + this.hourly[i] + '</td>');
  }
  console.log('data:', data);

  data.push('<td>' + total + '</td>');

  var new_row = document.createElement('tr');
  new_row.innerHTML = data.join('');
  table.appendChild(new_row);

};

var firstAndPike = new Store('1st and Pike', 23, 65, 6.3);
var seaTacAirport = new Store('SeaTac Airport', 3, 24, 1.2);
var seattleCenter = new Store('Seattle Center', 11, 38, 3.7);
var capitolHill = new Store('Capitol Hill', 20, 38, 2.3);
var Alki = new Store('Alki', 2, 16, 4.6);

firstAndPike.hourlySales();
seaTacAirport.hourlySales();
seattleCenter.hourlySales();
capitolHill.hourlySales();
Alki.hourlySales();
