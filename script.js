const SelectYear = document.getElementById("Year");
const SelectMake = document.getElementById("Make");


for (let year = 2017; year >=2011; year --) {

  const Year_opt = document.createElement("option");
  Year_opt.value = year;
  Year_opt.textContent = year; //So user only sees the value of year variable
  SelectYear.appendChild(Year_opt); //Actually add it to the option list

}


document.getElementById("Year").addEventListener("change", function (e) {
  //change - listen for; function - what you do
  let SelectedYear = e.target.value;
  console.log("Year selected:", SelectedYear);

  if (SelectedYear >= 2011 && SelectedYear <= 2012) {

  const Make_opt = document.createElement("option");
  Make_opt.value = 'RAM';
  Make_opt.textContent = 'RAM';
  SelectMake.appendChild(Make_opt);
  } 
    else if (SelectedYear >= 2013 && SelectedYear <= 2017) {
      
      const Make_opt = document.createElement("option");
      Make_opt.value = 'RAM';
      Make_opt.textContent = 'RAM';
      SelectMake.appendChild(Make_opt);

      const Make_opt = document.createElement("option");
      Make_opt.value = 'TOYOTA';
      Make_opt.textContent = 'TOYOTA';
      SelectMake.appendChild(Make_opt);


    }



});







