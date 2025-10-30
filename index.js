const parties = [
  {
    id: 56022,
    name: "Halloween Party",
    description: "A night of scary and spooky stories!",
    date: "Nov. 1st 2025",
    location: "Main Ballroom",
    guests: ["Elisabeth Farrell", "Casper Rogahn", "Gisselle Ziemann"],
  },
  {
    id: 56023,
    name: "Suprise Birthday Party",
    description: "Come Celebrate Bens Birthday!",
    date: "Nov. 10th 2025",
    location: "Gathering Hall",
    guests: ["Elisabeth Farrell", "Casper Rogahn", "Gisselle Ziemann"],
  },
  {
    id: 56024,
    name: "Thanksgiving Get-Together",
    description: "Come join us for a Thanksgiving meal with Friends!",
    date: "Nov. 29th 2025",
    location: "Park",
    guests: ["Elisabeth Farrell", "Casper Rogahn", "Gisselle Ziemann"],
  },
  {
    id: 56025,
    name: "Christmas Party",
    description: "White Elephant Christmas Party!",
    date: "Dec. 27th 2025",
    location: "Apartment 3B",
    guests: ["Elisabeth Farrell", "Casper Rogahn", "Gisselle Ziemann"],
  },
  {
    id: 56026,
    name: "New Years Party",
    description: "Let's all celebrate the New Year!",
    date: "Dec. 31st 2025",
    location: "Gathering Hall",
    guests: ["Elisabeth Farrell", "Casper Rogahn", "Gisselle Ziemann"],
  },
];

const partyList = document.getElementById("party-list");
const partyDetails = document.getElementById("party-details");

// render list
parties.forEach((party) => {
  const input = document.createElement("input");
  input.type = "text";
  input.value = party.name;
  input.readOnly = true;

  input.addEventListener("click", () => {
    document
      .querySelectorAll("#party-list input")
      .forEach((el) => el.classList.remove("selected"));
    input.classList.add("selected");
    showPartyDetails(party);
  });

  partyList.appendChild(input);
});

function showPartyDetails(party) {
  const guestList = party.guests.map((guest) => `<li>${guest}</li>`).join("");

  partyDetails.innerHTML = `
    <h3>${party.name} #${party.id}</h3>
    <p>${party.date}</p>
    <p class="location">${party.location}</p>
    <p>${party.description}</p>
    <ul>${guestList}</ul>
  `;
  if (!party.description) {
    partyDetails.innerHTML = "<p>No details available for this event.</p>";
    return;
  }
}
