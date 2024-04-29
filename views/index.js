function showTable() {
  const table = document.querySelector('#sprogTable');
  const button = document.querySelector('#showButton');

  if (table.classList.contains('hidden')) {
    table.classList.remove('hidden');
    button.classList.add('hidden');
  } else {
    table.classList.add('hidden');
    button.classList.remove('hidden');
  }
}
