const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const url = u => /^(https?:|mailto:|tel:)/.test(u || '') ? u : '';
const link = (u, t) => url(u) ? `<a href="${esc(u)}">${esc(t)}</a>` : esc(t);
fetch('publico.json').then(r => r.json()).then(d => {
  document.getElementById('carreras-list').innerHTML = d.carreras.map(c =>
    `<article class="card"><span class="pill">${esc(c.tipo)}</span><h3>${esc(c.nombre)}</h3></article>`).join('');
  document.getElementById('servicios-list').innerHTML = d.servicios.map(s =>
    `<article class="card"><h3>${esc(s.titulo)}</h3><p>${esc(s.detalle)}</p></article>`).join('');
  document.getElementById('horarios-list').innerHTML = d.horarios.map(h =>
    `<tr><td>${esc(h.carrera)}</td><td>${esc(h.turno)}</td><td>${link(h.enlace, 'Ver horarios')}</td></tr>`).join('');
  document.getElementById('contactos-list').innerHTML = d.contactos.map(c =>
    `<article class="card"><h3>${esc(c.nombre)}</h3><p>${link(c.enlace, c.dato)}</p></article>`).join('');
}).catch(() => { document.querySelector('main').insertAdjacentHTML('afterbegin', '<p class="card">No se pudo cargar el contenido.</p>'); });
