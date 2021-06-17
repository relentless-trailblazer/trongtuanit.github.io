const team = [
  { name: "Công Phượng", country: "Việt Nam" },
  { name: "Ronaldo", country: "Portugal" },
  { name: "Quang Hải", country: "Việt Nam" },
  { name: "Messi", country: "Argentina" },
  { name: "Nani", country: "Portugal" },
];

const country = {
  Vietnam: [],
  Portugal: [],
  Argentina: [],
};

country.Vietnam = team.filter((obj) => obj.country === "Việt Nam");
country.Portugal = team.filter((obj) => obj.country === "Portugal");
country.Argentina = team.filter((obj) => obj.country === "Argentina");

console.log(country);
