frappe.ready(() => {
  const toggle = document.createElement('button');
  toggle.id = 'lang-toggle';
  toggle.type = 'button';
  toggle.textContent = document.documentElement.dir === 'rtl' ? 'English' : 'العربية';
  toggle.className = 'btn btn-sm btn-default';
  toggle.style.position = 'fixed';
  toggle.style.bottom = '16px';
  toggle.style.left = '16px';
  toggle.style.padding = '6px 10px';
  toggle.style.borderRadius = '16px';
  toggle.style.boxShadow = '0 2px 8px rgba(0,0,0,.12)';
  toggle.style.zIndex = '9999';
  document.body.appendChild(toggle);

  async function setLang(lang) {
    try {
      await frappe.call({
        method: 'frappe.client.set_value',
        args: { doctype: 'User', name: frappe.session.user, fieldname: 'language', value: lang }
      });
    } catch (e) {}
    document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
    document.body.classList.toggle('rtl', lang === 'ar');
    toggle.textContent = lang === 'ar' ? 'English' : 'العربية';
    frappe.show_alert({ message: lang === 'ar' ? __('Arabic enabled') : __('English enabled'), indicator: 'blue' });
    setTimeout(() => window.location.reload(), 300);
  }

  toggle.addEventListener('click', () => {
    const next = document.documentElement.dir === 'rtl' ? 'en' : 'ar';
    setLang(next);
  });
});
