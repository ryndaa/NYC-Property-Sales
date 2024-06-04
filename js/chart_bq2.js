const ctx = document.getElementById('chart2');

    fetch("json/bq2.json")
    .then((res) => res.json())
    .then((result) => {
        const Borough = result.map(value => value.BOROUGH);
        const SalePrice = result.map(value => value.average_sale_price);
        console.log(SalePrice);

        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: Borough,  // Kategori bangunan pada sumbu y
                datasets: [{
                    label: 'Average Cost (Location)',
                    data: SalePrice,
                    borderWidth: 1,
                }]
            },
            options: {
                indexAxis: 'y',  // Membuat sumbu y sebagai kategori
                scales: {
                    x: {
                        beginAtZero: true,
                        title: {
                            display: true,
                            text: 'Sale Price'
                        }
                    },
                    y: {
                        title: {
                            display: true,
                            text: 'Borough'
                        }
                    }
                }
            }
        });
    });

