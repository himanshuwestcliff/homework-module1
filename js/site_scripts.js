const partners = [
  { filename: "partner-bustour.png", alt: "Partner Bus Tours" },
  { filename: "partner-cabinrental.png", alt: "Partner Cabin Rental" },
  {
    filename: "partner-campingadv.png",
    alt: "Partner Camping Adventure",
  },
  { filename: "partner-collegetours.png", alt: "Partner College Tours" },
  { filename: "partner-rentalbike.png", alt: "Partner Bike Rentals" },
  { filename: "partner-tourgroup.png", alt: "Partner Tour Group" },
];

const partnerList = document.getElementById("partner-list");
console.log(partnerList);

partners.forEach((partner) => {
  const li = document.createElement("li");
  li.classList.add("partner");

  const img = document.createElement("img");
  img.src = `images/partners/${partner.filename}`;
  img.alt = partner.alt;

  li.appendChild(img);
  partnerList.appendChild(li);
});


<!-- Replace the radios div with this -->
<div class="selectmenu">
  <label>How should we contact you?</label>
  <select id="contactMethod">
    <option value="select">Select One</option>
    <option value="email">Email</option>
    <option value="phone">Phone</option>
  </select>
  <div id="emailInput" style="display: none;">
    <input type="email" name="contactEmail" placeholder="Enter your email" />
  </div>
  <div id="phoneInput" style="display: none;">
    <input type="text" name="contactPhone" placeholder="Enter your phone" />
  </div>
</div>