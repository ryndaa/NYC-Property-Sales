const cht4 = document.getElementById('chart4');
  
    fetch("json/bq4.json")
    .then((res) => res.json())
    .then((result) => {

    const date = result.map(value => value.SALE_DATE)
    const Manhattan = result.map(value => value.Manhattan)
    const Bronx = result.map(value => value.Bronx)
    const Staten_Island = result.map(value => value.Staten_Island)
    const Brooklynn = result.map(value => value.Brooklynn)
    const Queens = result.map(value => value.Queens)

    console.log(date);

    new Chart(cht4, {
        type: 'line',
        data: {
          labels: date,
          datasets: [{
            label: ['Manhattan'],
            data: Manhattan,
            borderWidth: 1
          },
          {
            label: ['Bronx'],
            data: Bronx,
            borderWidth: 1
          },
          {
            label: ['Staten Island'],
            data: Staten_Island,
            borderWidth: 1
          },
          {
            label: ['Brooklynn'],
            data: Brooklynn,
            borderWidth: 1
          },
          {
            label: ['Queens'],
            data: Queens,
            borderWidth: 1
          },
        ]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });

    });
