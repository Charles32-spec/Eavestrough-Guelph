// ============================================================
// Eavestrough Installation Guelph — shared behaviour
// ============================================================

document.addEventListener('DOMContentLoaded', function () {

  // Mobile nav toggle
  var toggle = document.querySelector('.mobile-toggle');
  var navLinks = document.querySelector('.nav-links');
  if (toggle && navLinks) {
    toggle.addEventListener('click', function () {
      var isOpen = navLinks.classList.toggle('mobile-open');
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
  }

  // FAQ accordion
  document.querySelectorAll('.faq-item').forEach(function (item) {
    var q = item.querySelector('.faq-q');
    q.addEventListener('click', function () {
      var wasOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item.open').forEach(function (openItem) {
        openItem.classList.remove('open');
      });
      if (!wasOpen) item.classList.add('open');
    });
  });

  // Quote form(s) — replace this handler with your real form backend
  // (Wix Forms, a CRM webhook, or a simple mailto/Formspree endpoint).
  document.querySelectorAll('.quote-form').forEach(function (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      // TODO: send this to your real lead destination before going live.
      // Example patterns:
      //   fetch('https://your-endpoint.example.com/leads', { method:'POST', body: new FormData(form) })
      //   or wire this into a Wix Forms element if embedding inside Wix.

      // --- Google Ads conversion tracking placeholder ---
      // Uncomment and fill in your conversion ID/label once Ads is live:
      // gtag('event', 'conversion', {
      //   'send_to': 'AW-XXXXXXXXX/XXXXXXXXXXXXXXXXXX'
      // });

      var confirmBox = form.querySelector('.form-confirm');
      form.querySelectorAll('input, select, textarea, button').forEach(function (el) {
        el.style.display = 'none';
      });
      if (confirmBox) {
        confirmBox.style.display = 'block';
      }
    });
  });

});
