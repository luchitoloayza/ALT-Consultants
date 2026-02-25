(function () {
  const burger = document.querySelector('[data-burger]');
  const panel = document.querySelector('[data-mobile-panel]');
  if (burger && panel) {
    burger.addEventListener('click', () => {
      const open = panel.getAttribute('data-open') === 'true';
      panel.setAttribute('data-open', String(!open));
      panel.style.display = open ? 'none' : 'block';
      burger.setAttribute('aria-expanded', String(!open));
    });
  }

  const form = document.querySelector('form[data-estimate-form]');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const data = new FormData(form);
      const name = (data.get('name') || '').toString().trim();
      const phone = (data.get('phone') || '').toString().trim();
      if (!name || !phone) {
        alert('Please add your name and phone number.');
        return;
      }
      const subject = encodeURIComponent('Free Estimate Request (ALTCSUSA.com)');
      const body = encodeURIComponent(
        `Name: ${name}\nPhone: ${phone}\nEmail: ${data.get('email') || ''}\nTown: ${data.get('town') || ''}\nProject Type: ${data.get('type') || ''}\n\nMessage:\n${data.get('message') || ''}\n`
      );
      const to = 'info@altcsusa.com';
      window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
    });
  }
})();
