const cht7 = document.getElementById('chart7');

    fetch("json/bq7.json")
    .then((res) => res.json())
    .then((result) => {
        const BuildingCategory = result.map(value => value.BUILDING_CATEGORY);
        const AveragePrice = result.map(value => value.avg_sale_price);
        console.log(BuildingCategory);
        new Chart(cht7, {
            type: 'bar',
            data: {
                labels: BuildingCategory,  // Kategori bangunan pada sumbu y
                datasets: [{
                    label: 'Building with High Price Sale',
                    data: AveragePrice,
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
                            text: 'Building Category'
                        }
                    }
                }
            }
        });
    });