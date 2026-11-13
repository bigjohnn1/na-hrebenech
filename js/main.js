document.addEventListener('DOMContentLoaded', () => {
  const hikesTable = document.getElementById('hikes');
  if (hikesTable && window.DataTable) {
    new DataTable(hikesTable, {
      order: [[0, 'desc']],
      pageLength: 10,
      lengthMenu: [10, 25, 50, 100],
      columnDefs: [{ targets: 7, orderable: false, searchable: false }],
      language: {
        search: 'Hledat:',
        lengthMenu: 'Zobrazit _MENU_ záznamů',
        info: 'Záznamy _START_ až _END_ z celkem _TOTAL_',
        infoEmpty: 'Žádné záznamy',
        infoFiltered: '(vyfiltrováno z _MAX_)',
        zeroRecords: 'Nic nenalezeno',
        emptyTable: 'Tabulka je prázdná',
        paginate: { first: 'První', last: 'Poslední', next: 'Další', previous: 'Předchozí' },
        aria: { orderable: 'Seřadit podle sloupce', orderableReverse: 'Seřadit sestupně' },
      },
    });
  }

  const hikeModal = document.getElementById('hikeModal');
  hikeModal?.addEventListener('show.bs.modal', (event) => {
    const d = event.relatedTarget.dataset;
    hikeModal.querySelector('.modal-title').textContent = d.peak;
    for (const key of ['date', 'range', 'height', 'start', 'km', 'ascent', 'company']) {
      hikeModal.querySelector(`[data-field="${key}"]`).textContent = d[key];
    }
    hikeModal.querySelector('[data-field="rating"]').textContent = `${d.rating} z 5`;
    const note = hikeModal.querySelector('[data-field="note"]');
    note.textContent = d.note;
    note.hidden = !d.note;
    hikeModal.querySelector('[data-field="map"]').href = `https://mapy.cz/turisticka?q=${encodeURIComponent(d.peak)}`;
  });

  const photoModal = document.getElementById('photoModal');
  photoModal?.addEventListener('show.bs.modal', (event) => {
    const d = event.relatedTarget.dataset;
    const img = photoModal.querySelector('img');
    img.src = d.src;
    img.alt = d.caption;
    photoModal.querySelector('.modal-title').textContent = d.caption;
    photoModal.querySelector('[data-field="credit"]').textContent = `Foto: ${d.credit}`;
  });

  const form = document.getElementById('signupForm');
  form?.addEventListener('submit', (event) => {
    event.preventDefault();
    form.classList.add('was-validated');
    if (!form.checkValidity()) {
      form.querySelector(':invalid')?.focus();
      return;
    }
    bootstrap.Toast.getOrCreateInstance(document.getElementById('savedToast')).show();
  });
  form?.addEventListener('reset', () => form.classList.remove('was-validated'));
});
