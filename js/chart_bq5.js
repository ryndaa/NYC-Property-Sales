const cht5 = document.getElementById('chart5');

fetch("json/bq5.json")
    .then((res) => res.json())
    .then((result) => {
        const categories = {
            '0-1k': 0,
            '1k-2k': 0,
            '2k-4k': 0,
            '4k-6k': 0,
            '6k-8k': 0
        };

        result.forEach(value => {
            const landSquareFeet = parseFloat(value.LAND_SQUARE_FEET);
            const salePrice = parseFloat(value.SALE_PRICE);

            let category = '';
            if (landSquareFeet >= 0 && landSquareFeet < 1000) {
                category = '0-1k';
            } else if (landSquareFeet >= 1000 && landSquareFeet < 2000) {
                category = '1k-2k';
            } else if (landSquareFeet >= 2000 && landSquareFeet < 4000) {
                category = '2k-4k';
            } else if (landSquareFeet >= 4000 && landSquareFeet < 6000) {
                category = '4k-6k';
            } else if (landSquareFeet >= 6000 && landSquareFeet < 8000) {
                category = '6k-8k';
            }
            categories[category] += salePrice;
        });

        const labels = Object.keys(categories);
        const data = Object.values(categories);

        new Chart(cht5, {
            type: "bar",
            data: {
              labels: labels,
              datasets: [
                {
                  label: "Total Sale Price by Land Area",
                  data: data,
                  borderWidth: 1,
                },
              ],
            },
            options: {
              scales: {
                x: {
                  title: {
                    display: true,
                    text: "Land Area Category",
                  },
                },
                y: {
                  title: {
                    display: true,
                    text: "Total Sale Price",
                  },
                },
              },
            },
          });
    });
