const cht5 = document.getElementById('chart5');

fetch("json/bq5.json")
    .then((res) => res.json())
    .then((result) => {
        // Inisialisasi objek kategori
        const categories = {
            '1. < 10K': 0,
            '2. 10 - 30K': 0,
            '3. 30 - 50K': 0,
            '4. 50 - 100K': 0,
            '5. 100-500K': 0,
            '6. >500K': 0
        };

        // Proses data menjadi kategori
        result.forEach(value => {
            const landSquareFeet = parseFloat(value.LAND_SQUARE_FEET);
            const salePrice = parseFloat(value.SALE_PRICE);

            // Tentukan kategori untuk nilai area tanah
            let category = '';
            if (landSquareFeet < 10000) {
                categories['1. < 10K'] += salePrice;
            } else if (landSquareFeet < 30000) {
                categories['2. 10 - 30K'] += salePrice;
            } else if (landSquareFeet < 50000) {
                categories['3. 30 - 50K'] += salePrice;
            } else if (landSquareFeet < 100000) {
                categories['4. 50 - 100K'] += salePrice;
            } else if (landSquareFeet <= 500000) {
                categories['5. 100-500K'] += salePrice;
            } else {
                categories['6. >500K'] += salePrice;
            }

            // Tambahkan harga jual ke kategori yang sesuai
            categories[category] += salePrice;
        });

        // Ekstrak label dan data untuk grafik
        const labels = Object.keys(categories);
        const data = Object.values(categories);

        new Chart(cht5, {
            type: "bar",
            data: {
              labels: labels, // Label kategori pada sumbu x
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
