/* ================================================
   IIT Jodhpur ERP System — app.js
   Handles: Login form, Accordion toggle, Search filter
   ================================================ */

/* ================================================
   ACCORDION — global toggle function
   Called inline via onclick="erpToggle(...)"
   ================================================ */
function erpToggle(bodyId, headerEl) {
  var body = document.getElementById(bodyId);
  if (!body) return;

  var toggle = headerEl.querySelector('.erp-accordion-toggle');
  var isOpen = body.classList.contains('show');

  if (isOpen) {
    body.classList.remove('show');
    if (toggle) toggle.textContent = '+';
  } else {
    body.classList.add('show');
    if (toggle) toggle.textContent = '−';
  }
}

document.addEventListener('DOMContentLoaded', function () {

  /* ================================================
     LOGIN — validate credentials → redirect to dashboard
     ================================================ */
  var signinForm = document.getElementById('signinForm');
  if (signinForm) {
    signinForm.addEventListener('submit', function (e) {
      e.preventDefault();
      var loginId  = document.getElementById('loginId').value.trim();
      var password = document.getElementById('password').value;

      if (loginId === '' || password === '') {
        alert('Please enter both Stakeholder code/login Id and Password.');
        return;
      }

      if (loginId === 'B25BS1100' && password === 'Yadavgarima2008') {
        window.location.href = 'dashboard.html';
      } else {
        alert('Invalid login Id or Password. Please try again.');
      }
    });
  }

  /* ================================================
     ACCORDION LINKS — prevent href="#" page jump
     The <a class="erp-acc-link"> inside header is
     decorative; the header div handles the click.
     ================================================ */
  var accLinks = document.querySelectorAll('.erp-accordion-header .erp-acc-link');
  accLinks.forEach(function (link) {
    link.addEventListener('click', function (e) {
      e.preventDefault();
    });
  });

  /* ================================================
     SEARCH — filter accordion rows by header text
     ================================================ */
  var searchInput = document.getElementById('searchMenu');

  if (searchInput) {
    searchInput.addEventListener('input', function () {
      var query = searchInput.value.trim().toLowerCase();
      var items = document.querySelectorAll('.erp-accordion-item');

      items.forEach(function (item) {
        var link = item.querySelector('.erp-acc-link');
        if (!link) return;
        var text = link.textContent.toLowerCase();

        if (query === '' || text.includes(query)) {
          item.style.display = '';
        } else {
          item.style.display = 'none';
        }
      });
    });
  }

});
