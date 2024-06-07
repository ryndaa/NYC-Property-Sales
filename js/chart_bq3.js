const cht3 = document.getElementById('chart3');
  
    fetch("json/bq3.json")
    .then((res) => res.json())
    .then((result) => {

    // Mengurutkan data berdasarkan usia properti
     result.sort((a, b) => a.property_age - b.property_age);

    const age = result.map(value => value.property_age)
    const AveragePrice = result.map(value => value.avg_sale_price)
    console.log(age);

    new Chart(cht3, {
        type: 'line',
        data: {
          labels: age,
          datasets: [{
            label: 'Age and Average Price Properties',
            data: AveragePrice,
            borderWidth: 1
          }]
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
