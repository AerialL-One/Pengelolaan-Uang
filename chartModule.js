/**
 * Modul untuk membuat dan memperbarui grafik
 * Menggunakan Chart.js untuk visualisasi data
 */

export const createExpenseChart = (ctx, data) => {
    const categories = [...new Set(data.map(exp => exp.category))];
    const categoryTotals = categories.map(cat =>
      data.filter(exp => exp.category === cat).reduce((sum, exp) => sum + exp.amount, 0)
    );
  
    return new Chart(ctx, {
      type: "pie",
      data: {
        labels: categories,
        datasets: [{
          label: "Pengeluaran Berdasarkan Kategori",
          data: categoryTotals,
          backgroundColor: [
            "#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0", "#9966FF"
          ],
          hoverOffset: 4,
        }]
      },
      options: {
        responsive: true,
        plugins: {
          tooltip: {
            callbacks: {
              label: (tooltipItem) => {
                const label = tooltipItem.label || "";
                const value = tooltipItem.raw;
                return `${label}: Rp${value.toLocaleString("id-ID")}`;
              }
            }
          }
        }
      }
    });
  };
  