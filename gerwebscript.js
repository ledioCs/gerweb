// Toggle mobile navigation menu
const navToggle = document.getElementById('navToggle');
const mainNav = document.getElementById('mainNav');
navToggle.addEventListener('click', () => {
  mainNav.classList.toggle('show');
});

// Sticky CTA buttons trigger quote form scroll
const ctaQuoteBtns = [
  document.getElementById('cta-quote'),
  document.getElementById('heroQuote'),
  document.getElementById('ctaBannerBtn')
];
const contactSection = document.getElementById('contact');

ctaQuoteBtns.forEach(btn => {
  if (btn) {
    btn.addEventListener('click', () => {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    });
  }
});

// Product "Get Quote" buttons autofill product in form
document.querySelectorAll('button[data-product]').forEach(btn => {
  btn.addEventListener('click', () => {
    const product = btn.getAttribute('data-product');
    const productSelect = document.getElementById('productSelect');
    if (productSelect) {
      productSelect.value = product;
    }
    contactSection.scrollIntoView({ behavior: 'smooth' });
  });
});

// Simple form submission handler
const quoteForm = document.getElementById('quoteForm');
if (quoteForm) {
  quoteForm.addEventListener('submit', e => {
    e.preventDefault();

    // Collect form data
    const formData = new FormData(quoteForm);
    const data = Object.fromEntries(formData.entries());

    alert(`Thank you, ${data.name}! Your quote request for "${data.product}" has been sent.`);

    quoteForm.reset();
  });
}
