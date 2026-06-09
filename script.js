
const SelectYear = document.getElementById("Year");

const SelectMake = document.getElementById("Make");

const SelectModel = document.getElementById("Model");

const SelectProduct = document.getElementById("Product");

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
let SelectedMake;
let SelectedModel;



//Filters out the appropriate sequence vehicles

document.getElementById("Year").addEventListener("change", (e) => {

 

  if (SelectMake.length != 1) {

    SelectMake.innerHTML = 
    `<option value="" selected disabled>Select Make</option>`;
  }

  if (SelectModel.length != 1) {

    //reset the element select
    SelectModel.innerHTML = 
    `<option value="" selected disabled>Select Model</option>`;

  }

  if (SelectProduct.length != 1) {

    //reset the element select
    SelectProduct.innerHTML = 
    `<option value="" selected disabled>Select Product</option>`;

  }

  

  SelectedYear = Number(e.target.value); //Store whatever the user has selected as a number


  //Only choose the data that aligns with the picked year
  const Filter_Year = vehicleData.filter(vehicle => vehicle.year == SelectedYear); 


  //Turn data into an array with only makes
  const makes = Filter_Year.map(vehicle => vehicle.make);
  
  //Create a set that has no duplicates
  const Upd_makes = [...new Set(makes)];
  console.log("Make Set is:", Upd_makes);

  

  for (let i = 0; i < Upd_makes.length; i++) {

    const Make_opt = document.createElement("option");
    Make_opt.value = Upd_makes[i];
    Make_opt.textContent = Upd_makes[i];
    SelectMake.appendChild(Make_opt);

  }


});



//Models select script

document.getElementById("Make").addEventListener("change", (e) => {

  

  if (SelectModel.length != 1) {

    //reset the element select
    SelectModel.innerHTML = 
    `<option value="" selected disabled>Select Model</option>`;

  }

  if (SelectProduct.length != 1) {

    //reset the element select
    SelectProduct.innerHTML = 
    `<option value="" selected disabled>Select Product</option>`;

  }

  SelectedMake = String(e.target.value);

  //Filter only data that contains the selected year and make
  const Filter_Make = vehicleData.filter(vehicle =>
    vehicle.year === SelectedYear &&
    vehicle.make === SelectedMake

  );



  const models = Filter_Make.map(vehicle => vehicle.model);

  const Upd_models = [...new Set(models)];

  console.log("Model Set is:", Upd_models);

  for (let i = 0; i < Upd_models.length; i++) {

    const Model_opt = document.createElement("option");
    Model_opt.value = Upd_models[i];
    Model_opt.textContent = Upd_models[i];
    SelectModel.appendChild(Model_opt);

  }


});


  //ProductType Select script
  document.getElementById("Model").addEventListener("change", (e) => {



  if (SelectProduct.length != 1) {

    //reset the element select
    SelectProduct.innerHTML = 
    `<option value="" selected disabled>Select Product</option>`;

  }

  SelectedModel = String(e.target.value);

  const Filter_Model = vehicleData.filter(vehicle =>
    vehicle.year === SelectedYear &&
    vehicle.make === SelectedMake &&
    vehicle.model === SelectedModel

  );

  const products = Filter_Model.map(vehicle => vehicle.productType);

  const Upd_products = [...new Set(products)];

  console.log("Product Set is:", Upd_products);


  for (let i = 0; i < Upd_products.length; i++) {

    const Product_opt = document.createElement("option");
    Product_opt.value = Upd_products[i];
    Product_opt.textContent = Upd_products[i];
    SelectProduct.appendChild(Product_opt);

  }


});














  



