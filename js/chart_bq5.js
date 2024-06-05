const cht5 = document.getElementById('chart5');

    fetch("json/bq5.json")
    .then((res) => res.json())
    .then((result) => {
        const Land = result.map(value => value.LAND_SQUARE_FEET);
        const SalePrice = result.map(value => value.SALE_PRICE);
        console.log(Land);
        new Chart(cht5, {
            type: "bar",
            data: {
              labels: Land, // Kategori bangunan pada sumbu y
              datasets: [
                {
                  label: "Total Land Area with Price",
                  data: SalePrice,
                  borderWidth: 1,
                },
              ],
            },
            options: {
              scales: {
                x: {
                  beginAtZero: true,
                  title: {
                    display: true,
                    text: "Land Area Category",
                  },
                },
                y: {
                  title: {
                    display: true,
                    text: "Sale Price",
                  },
                },
              },
            },
          });
    });