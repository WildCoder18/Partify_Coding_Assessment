
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


let SelectedYear;


//Filters out the appropriate sequence vehicles

document.getElementById("Year").addEventListener("change", (e) => {

  SelectedYear = e.target.value; //Store whatever the user has selected


  //Only choose the data that aligns with the picked year
  const Filter_Vehicle = vehicleData.filter(vehicle => vehicle.year== SelectedYear); 


  //Turn data into an array
  const makes = Filter_Vehicle.map(vehicle => vehicle.make);
  
  //Create a set that has no duplicates
  const Upd_makes = [...new Set(makes)];
  console.log(Upd_makes);

  

});





  



