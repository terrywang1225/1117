document.getElementById('year').textContent = new Date().getFullYear();
document.querySelectorAll('#menu .nav-link').forEach(link => link.addEventListener('click', () => { const menu=document.getElementById('menu'); if(menu.classList.contains('show') && window.bootstrap){ bootstrap.Collapse.getOrCreateInstance(menu).hide(); } }));
