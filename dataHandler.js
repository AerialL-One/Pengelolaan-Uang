/**
 * Modul untuk mengelola data pemasukan dan pengeluaran
 * Memanfaatkan localStorage untuk penyimpanan data
 */

import dummyData from '../../data/dummy-data.js';

// Fungsi untuk inisialisasi data
export const initializeExpenses = () => {
  const storedExpenses = JSON.parse(localStorage.getItem("expenses"));
  if (!storedExpenses) {
    localStorage.setItem("expenses", JSON.stringify(dummyData));
    return dummyData;
  }
  return storedExpenses;
};
