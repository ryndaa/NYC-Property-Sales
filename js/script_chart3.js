google.charts.load('current', {packages: ['corechart', 'bar']});
google.charts.setOnLoadCallback(drawBasic);

function drawBasic() {

    var data = google.visualization.arrayToDataTable([        
        ['Land Area Category', 'Sale Price', {type: 'string', role: 'annotation'}],
        ['<10K', 37679864103, '37.7B' ],           
        ['10-30K', 7894771318, '7.9B' ],           
        ['30-50K', 2278982050, '2.3B'],
        ['50-100k', 4479019715, '4.5B'], 
        ['100-500k', 1393389493, '1.4B'], 
        ['>500K', 91198702, '91,2M'] 
     ]);

      var options = {
        colors: ['#B67352'],
        legend: { position: "none" },
        title: 'Total Land Area with Price',
        hAxis: {
          title: 'Land Area Category',
          }
        };

      var chart = new google.visualization.ColumnChart(
        document.getElementById('chart5'));

      chart.draw(data, options);
    }

    google.charts.load('current', {'packages':['table']});
      google.charts.setOnLoadCallback(drawTable);

      function drawTable() {
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Borough');
        data.addColumn('string', 'Residential');
        data.addColumn('string', 'Commercial');
               data.addRows([
          ['Queens', '24.414', '4.580'],
          ['Manhattan', '19.538', '2.270'],
          ['Brooklyn', '26.657', '1.677'],
          ['Bronx', '15.508', '690'],
          ['Staten Island',    '6.999', '501']
        ]);

        var table = new google.visualization.Table(document.getElementById('chart6'));
        table.draw(data, {showRowNumber: true, width: '100%', height: '100%'});
      }