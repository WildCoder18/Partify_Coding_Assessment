
const SelectYear = document.getElementById("Year");
const years = vehicleData.map(vehicle => vehicle.year);
const Upd_year = [...new Set(years)];
console.log(Upd_year);


for (let i = 0; i < Upd_year.length; i++) {

  const Year_opt = document.createElement("option");
  Year_opt.value = Upd_year[i];
  Year_opt.textContent = Upd_year[i];

  SelectYear.appendChild(Year_opt);
}



  



