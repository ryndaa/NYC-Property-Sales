google.charts.load('current', {packages: ['corechart', 'bar']});
google.charts.setOnLoadCallback(drawBarColors);

function drawBarColors() {
      var data = google.visualization.arrayToDataTable([
        ['Borough', 'Total Sales', {type: 'string', role: 'annotation'}],
        ['Queens', 28986, '29K'],
        ['Brooklyn', 28517, '28.5K'],
        ['Manhattan', 21800, '21.8K'],
        ['Bronx', 16205, '16.2K'],
        ['Staten Island', 7494, '7.5K']
      ]);
      
      var options = {
        legend: { position: "none" },
        title: 'Total Property Sold',
        chartArea: {width: '50%'},
        colors: ['#B67352'],
        hAxis: {
          title: 'Total Sales',
          minValue: 0
        },
        vAxis: {
          title: 'Borough'
        }
      };
      
      var chart = new google.visualization.BarChart(document.getElementById('chart1'));
      chart.draw(data, options);
      var data = google.visualization.arrayToDataTable([
        ['Borough', 'Sale Price', {type: 'string', role: 'annotation'}],
        ['Manhattan', 18837118248, '18.8B'],
        ['Brooklyn', 18076546319, '18.1B'],
        ['Queens', 10156152368, '10.2B'],
        ['Bronx', 4000893976, '4B'],
        ['Staten Island', 2746514470, '2.7B']
      ]);
      
      var options = {
        legend: { position: "none" },
        title: 'Average Cost (Location)',
        chartArea: {width: '50%'},
        colors: ['#B67352'],
        hAxis: {
          title: 'Sale Price',
          minValue: 0
        },
        vAxis: {
          title: 'Borough'
        }
      };
      var chart = new google.visualization.BarChart(document.getElementById('chart2'));
      chart.draw(data, options);
    }
    
    google.charts.load('current', {packages: ['corechart', 'bar']});
    google.charts.setOnLoadCallback(drawBasic);
    
    function drawBasic() {
    
          var data = google.visualization.arrayToDataTable([
            ['Building Category', 'Sale Price',{type: 'string', role: 'annotation'}],
            ['CONDOS - ELEVATOR APARTMENTS', 10031447362, '10B'],
            ['ONE FAMILY DWELLINGS', 8264384997, '8.3B'],
            ['TWO FAMILY DWELLINGS', 7618649512, '7.6B'],
            ['RENTALS - WALKUP APARTMENTS', 6003020045, '6B'],
            ['CONDO COOPS', 3486036810, '35B'],         
            ['THREE FAMILY DWELLINGS', 2786478606, '2.8B'],
            ['COOPS - ELEVATOR APARTMENTS', 2501238765, '2.5B'],
            ['OFFICE BUILDINGS', 1987259619, '2B'],
            ['STORE BUILDINGS', 1694877313, '1.7B'],
            ['CONDOS - 2-10 UNIT RESIDENTIAL', 1663055685, '1.7B']
          ]);
    
          var options = {
            legend: { position: "none" },
            colors: ['#B67352'],
            title: 'Building with High Price Sale',
            chartArea: {width: '50%'},
            hAxis: {
              title: 'Sale Price',
              minValue: 0
            },
            vAxis: {
              title: 'Building Category'
            }
          };
    
          var chart = new google.visualization.BarChart(document.getElementById('chart7'));
    
          chart.draw(data, options);
        }