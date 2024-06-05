const cht1 = document.getElementById("chart1");

    fetch("json/bq1.json")
      .then((res) => res.json())
      .then((result) => {
        const Borough = result.map((value) => value.BOROUGH);
        const totalUnit = result.map((value) => value.TOTAL_PENJUALAN);

        new Chart(cht1, {
          type: "bar",
          data: {
            labels: Borough, // Kategori bangunan pada sumbu y
            datasets: [
              {
                label: "Total Property Sold",
                data: totalUnit,
                borderWidth: 1,
              },
            ],
          },
          options: {
            indexAxis: "y", // Membuat sumbu y sebagai kategori
            scales: {
              x: {
                beginAtZero: true,
                title: {
                  display: true,
                  text: "Total Sales",
                },
              },
              y: {
                title: {
                  display: true,
                  text: "Borough",
                },
              },
            },
          },
        });
      });