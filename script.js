// Laser products data
const lasers = [
  {
    title: "לייזר CO2",
    description: "לייזר קומפקטי לחיתוך וצריבה",
    imageUrl: "assets/co2.jpg",
    bgUrl: "assets/co2_bg.jpg",
    price: "החל מ- 6000",
    features: [
      "חיתוך וצריבה של עץ",
      "חיתוך וצריבה של פרספקס",
      "עוצמה עד 60 וואט",
      "יניקת עשן",
      "צריבה על חומרי מיתוג"
    ]
  },
  {
    title: "פייבר לייזר",
    description: "לייזר מושלם לעבודה עם מתכות ועוד",
    imageUrl: "assets/fiber.jpg",
    bgUrl: "assets/fiber_bg.jpg",
    price: "החל מ- 12000",
    features: [
      "צריבה וחיתוך של מתכת",
      "צריבה עמוקה במתכת",
      "מהירות חריטה עד 8000",
      "עוצמה 30-500 וואט",
      "צריבה על עטים,מחזיקי מפתחות וכו"
    ]
  },
  {
    title: "לייזר UV",
    description: "לייזר לצריבה על מגוון רחב מאוד של חומרים",
    imageUrl: "assets/uv.jpg",
    bgUrl: "assets/uv_bg.jpg",
    price: "החל מ- 21500",
    features: [
      "צריבה על זכוכית",
      "צריבה בעץ",
      "צריבה על כל סוגי הפלסטיק ופרספקס",
      "צריבה על מתכת",
      "עוצמה 3-15 וואט"
    ]
  }
];

// Create product cards
function createProductCard(laser) {
  return `
    <div class="product-card">
      <img src="${laser.bgUrl}" alt="${laser.title}" class="product-bg">
      <div class="product-content">
        <div class="product-image-circle">
          <img src="${laser.imageUrl}" alt="${laser.title}" class="product-image">
        </div>
        <h3 class="product-title">${laser.title}</h3>
        <p class="product-description">${laser.description}</p>
        <div class="product-features">
          ${laser.features.map(feature => `
            <div class="feature-item">
              <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </svg>
              <span>${feature}</span>
            </div>
          `).join('')}
        </div>
        <div style="display: flex; justify-content: space-between; align-items: center;">
          <span style="font-size: 1.5rem; font-weight: bold;">₪ ${laser.price}</span>
          <button class="btn btn-primary">
            קרא עוד
            <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="margin-left: 0.5rem;">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </button>
        </div>
      </div>
    </div>
  `;
}


// Handle phone call and WhatsApp message

function initContactButtons() {
  const phoneNumber = '972526537013';
  
  // Regular phone call button
  document.getElementById('callBtn').addEventListener('click', () => {
    window.open(`tel:+${phoneNumber}`, '_blank');
  });
  
  // WhatsApp message button
  document.getElementById('sendMsgBtn').addEventListener('click', () => {
    window.open(`https://wa.me/${phoneNumber}`, '_blank');
  });
}

// Render products
document.addEventListener('DOMContentLoaded', () => {
  const productsContainer = document.getElementById('laserProducts');
  productsContainer.innerHTML = lasers.map(laser => createProductCard(laser)).join('');
  initContactButtons();
});