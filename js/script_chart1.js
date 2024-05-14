google.charts.load('current', {packages: ['corechart', 'line']});
google.charts.setOnLoadCallback(drawBasic);
function drawBasic() {

    var data = new google.visualization.DataTable();
    data.addColumn('number', 'X');
    data.addColumn('number', 'Sale Price');

    data.addRows([
      [0, 0],   
      [1,521],  [3, 315],  [5, 70],  [7, 192],  [9, 235],
      [11,287],  [13, 212],  [15, 139],  [17, 109],  [19, 88],
      [21,96],  [23, 76],  [25, 85],  [27, 134],  [29, 124],
      [31,110],  [33, 46],  [35, 32],  [37, 115],  [39, 33],
      [41,111],  [43, 29],  [45, 10],  [47, 233],  [49, 29],
      [51,200],  [53, 143],  [55, 141],  [57, 423],  [59, 120],
      [61,521],  [63, 23],  [65, 17],  [67, 18],  [69, 9],
      [71,222],  [73, 18],  [75, 33],  [77, 442],  [79, 40],
      [81,260],  [83, 28],  [85, 285],  [87, 731],  [89, 185],
      [91,522],  [93, 86],  [95, 36],  [97, 875],  [99, 14],
      [101,186],  [103, 47],  [105, 33],  [107, 631],  [109, 12],
      [111,117],  [113, 12],  [115, 265],  [117, 425],  [119, 1],

    ]);

    var options = {
        legend: { position: "none" },
        title: 'Age and Average Price Properties',     
         colors: ['#B67352'],
      hAxis: {
        title: 'Property Age'
      },
      vAxis: {
        title: 'Sale Price'
      }
    };

    var chart = new google.visualization.LineChart(document.getElementById('chart3'));
    chart.draw(data, options);
  }

  google.charts.load('current', {packages:['corechart']});
google.charts.setOnLoadCallback(drawChart);

      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Month', 'Manhattan', 'Bronx', 'Staten Island', 'Queens', 'Brooklyn'],
          ['Sep 2016', 140, 441, 515, 971, 1336],   ['Oct 2016', 72, 399, 424, 929, 1028],  ['Nov 2016', 77, 373, 476, 957, 1139],   ['Dec 2016', 142, 421, 481, 1066, 1349],  ['Jan 2017', 97, 345, 455, 856, 1179],
          ['Feb 2017', 66, 368, 394, 820, 1096],   ['Mar 2017', 61, 424, 472, 1000, 1338],  ['Apr 2017', 59, 420, 408, 826, 1073],  ['May 2017', 78, 406, 430, 965, 1214],  ['Jun 2017', 80, 477, 508, 1047, 1440], 
          ['Jul 2017', 66, 369, 409, 871, 1085], ['Aug 2017', 75, 307, 201, 810, 1018], 
        ]);

        var options = {
          title: 'Total Sold (Month)',
          legend: { position: 'top' }
        };

        var chart = new google.visualization.LineChart(document.getElementById('chart4'));

        chart.draw(data, options);
      }