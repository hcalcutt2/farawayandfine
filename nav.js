// nav.js — shared mega navigation
// Include on any page with: <script src="/nav.js"></script> (adjust path as needed)
// Then call: injectNav(depth) where depth is how many levels deep from root (0=root, 1=one folder, 2=two folders)

function injectNav(depth = 0) {
  const root = depth === 0 ? '' : depth === 1 ? '../' : '../../';
  
  const nav = `
<nav class="mega-nav" id="mega-nav">
  <div class="mega-nav-top">
    <a href="${root}index.html" class="mega-nav-logo">Faraway<span> &amp; Fine</span></a>
    <div class="mega-nav-utils">
      <a href="${root}about.html">About</a>
      <a href="${root}faq.html">Help</a>
      <a href="${root}blog/index.html">Journal</a>
      <a href="${root}book/index.html" class="mega-nav-book">Book Now</a>
    </div>
  </div>
  <div class="mega-nav-primary">

    <div class="mega-nav-item">
      <button class="mega-nav-trigger" onclick="toggleMega('destinations')">Destinations</button>
      <div class="mega-dropdown cols-4" id="mega-destinations">
        <div class="mega-col">
          <h4>Norway</h4>
          <ul>
            <li><a href="${root}destinations/geirangerfjord.html">Geirangerfjord <span class="price-hint">from £8,400</span></a></li>
            <li><a href="${root}destinations/tromso.html">Tromsø &amp; Aurora <span class="price-hint">from £5,200</span></a></li>
            <li><a href="${root}destinations/lofoten.html">Lofoten Islands <span class="price-hint">from £5,600</span></a></li>
            <li><a href="${root}destinations/index.html#norway">All Norway</a></li>
          </ul>
        </div>
        <div class="mega-col">
          <h4>Sweden</h4>
          <ul>
            <li><a href="${root}destinations/stockholm.html">Stockholm Archipelago <span class="price-hint">from £4,800</span></a></li>
            <li><a href="${root}destinations/gothenburg.html">Gothenburg &amp; Bohuslän <span class="price-hint">from £4,000</span></a></li>
            <li><a href="${root}destinations/index.html#sweden">All Sweden</a></li>
          </ul>
        </div>
        <div class="mega-col">
          <h4>Denmark</h4>
          <ul>
            <li><a href="${root}destinations/copenhagen.html">Copenhagen &amp; North Zealand <span class="price-hint">from £3,900</span></a></li>
            <li><a href="${root}destinations/index.html#denmark">All Denmark</a></li>
          </ul>
        </div>
        <div class="mega-col">
          <div class="mega-featured">
            <img src="https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=400&q=70" alt="Aurora borealis Norway" loading="lazy"/>
            <h5>Aurora Season Now Open</h5>
            <p>Book your January 2025 northern lights experience. Limited cabins remaining.</p>
            <a href="${root}offers/late-deals/index.html" class="link">View Late Deals →</a>
          </div>
        </div>
      </div>
    </div>

    <div class="mega-nav-item">
      <button class="mega-nav-trigger" onclick="toggleMega('experiences')">Experiences</button>
      <div class="mega-dropdown cols-3" id="mega-experiences">
        <div class="mega-col">
          <h4>By Type</h4>
          <ul>
            <li><a href="${root}product.html#yacht">Fjord Yacht Charters</a></li>
            <li><a href="${root}product.html#wilderness">Arctic Wilderness</a></li>
            <li><a href="${root}product.html#cultural">Cultural Immersions</a></li>
            <li><a href="${root}product.html#gastronomy">Nordic Gastronomy</a></li>
          </ul>
        </div>
        <div class="mega-col">
          <h4>Onboard</h4>
          <ul>
            <li><a href="${root}onboard/dining/index.html">Dining</a></li>
            <li><a href="${root}onboard/activities/index.html">Activities</a></li>
            <li><a href="${root}onboard/spa/index.html">Spa &amp; Wellness</a></li>
            <li><a href="${root}onboard/index.html">Onboard Life</a></li>
          </ul>
        </div>
        <div class="mega-col">
          <h4>Inspiration</h4>
          <ul>
            <li><a href="${root}blog/northern-lights-guide.html">Northern Lights Guide</a></li>
            <li><a href="${root}blog/best-time-visit-norway.html">Best Time for Norway</a></li>
            <li><a href="${root}blog/new-nordic-food.html">New Nordic Food</a></li>
            <li><a href="${root}blog/index.html">All Journal Articles</a></li>
          </ul>
        </div>
      </div>
    </div>

    <div class="mega-nav-item">
      <button class="mega-nav-trigger" onclick="toggleMega('fleet')">Our Fleet</button>
      <div class="mega-dropdown cols-3" id="mega-fleet">
        <div class="mega-col">
          <h4>MV Nordlys</h4>
          <ul>
            <li><a href="${root}ships.html#nordlys">About MV Nordlys</a></li>
            <li><a href="${root}find-a-cruise/index.html?ship=nordlys">Cruises on Nordlys</a></li>
            <li><a href="${root}onboard/dining/index.html">Dining</a></li>
            <li><a href="${root}onboard/spa/index.html">Spa</a></li>
          </ul>
        </div>
        <div class="mega-col">
          <h4>SY Isfjord</h4>
          <ul>
            <li><a href="${root}ships.html#isfjord">About SY Isfjord</a></li>
            <li><a href="${root}find-a-cruise/index.html?ship=isfjord">Cruises on Isfjord</a></li>
            <li><a href="${root}onboard/activities/index.html">Activities</a></li>
          </ul>
        </div>
        <div class="mega-col">
          <h4>MV Kvitbjørn</h4>
          <ul>
            <li><a href="${root}ships.html#kvitbjorn">About MV Kvitbjørn</a></li>
            <li><a href="${root}find-a-cruise/index.html?ship=kvitbjorn">Arctic Cruises</a></li>
            <li><a href="${root}onboard/activities/index.html">Expedition Activities</a></li>
          </ul>
        </div>
      </div>
    </div>

    <div class="mega-nav-item">
      <button class="mega-nav-trigger" onclick="toggleMega('offers')">Offers</button>
      <div class="mega-dropdown cols-3" id="mega-offers">
        <div class="mega-col">
          <h4>Current Offers</h4>
          <ul>
            <li><a href="${root}offers/late-deals/index.html">🔴 Late Deals</a></li>
            <li><a href="${root}offers/early-booking/index.html">Early Booking Savings</a></li>
            <li><a href="${root}offers/all-inclusive/index.html">All-Inclusive Packages</a></li>
            <li><a href="${root}deals.html">All Deals</a></li>
          </ul>
        </div>
        <div class="mega-col">
          <h4>By Departure</h4>
          <ul>
            <li><a href="${root}find-a-cruise/index.html?month=jan">January 2025</a></li>
            <li><a href="${root}find-a-cruise/index.html?month=feb">February 2025</a></li>
            <li><a href="${root}find-a-cruise/index.html?month=jun">June 2025</a></li>
            <li><a href="${root}find-a-cruise/index.html?month=jul">July 2025</a></li>
          </ul>
        </div>
        <div class="mega-col">
          <div class="mega-featured">
            <img src="https://images.unsplash.com/photo-1513519245088-0e12902e35ca?w=400&q=70" alt="Geirangerfjord Norway" loading="lazy"/>
            <h5>Save 15% — Early Booking</h5>
            <p>Book before 28 February and save on selected 2025 departures.</p>
            <a href="${root}offers/early-booking/index.html" class="link">View Offer →</a>
          </div>
        </div>
      </div>
    </div>

    <div class="mega-nav-item">
      <a href="${root}find-a-cruise/index.html" class="mega-nav-trigger" style="border-bottom-color:transparent">Find a Cruise</a>
    </div>

  </div>
</nav>`;

  document.body.insertAdjacentHTML('afterbegin', nav);

  // Close on outside click
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.mega-nav')) closeAllMega();
  });
}

function toggleMega(id) {
  const target = document.getElementById('mega-' + id);
  const isOpen = target.classList.contains('open');
  closeAllMega();
  if (!isOpen) {
    target.classList.add('open');
    target.previousElementSibling.classList.add('active');
  }
}

function closeAllMega() {
  document.querySelectorAll('.mega-dropdown').forEach(d => d.classList.remove('open'));
  document.querySelectorAll('.mega-nav-trigger').forEach(t => t.classList.remove('active'));
}
