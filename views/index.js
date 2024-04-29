// index.js

function showTable() {
  const table = document.getElementById('sprogTable');
  const button = document.getElementById('showButton');

  // Toggle the visibility of the table
  if (table.classList.contains('hidden')) {
    table.classList.remove('hidden');
    button.textContent = 'Skjul Programmeringssprog'; // Change button text when table is shown
  } else {
    table.classList.add('hidden');
    button.textContent = 'Vis Programmeringssprog'; // Change button text when table is hidden
  }
}
