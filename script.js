
// Variables for the select element inindex.html
const SelectYear = document.getElementById("Year");

const SelectMake = document.getElementById("Make");

const SelectModel = document.getElementById("Model");

const SelectProduct = document.getElementById("Product");

//Disable all other element select except for year
//Makes sure user picks Year first
SelectMake.disabled = true;
SelectModel.disabled = true;
SelectProduct.disabled = true;


// Turns only year data into an array
// Contains all years found in data set
const years = vehicleData.map(vehicle => vehicle.year);

// Creates new year set that excludes duplicates
const Upd_year = [...new Set(years)];
console.log(Upd_year);


// Makes sure each year is assigned as an option
// Only shows unique years from data thanks to Upd_year
for (let i = 0; i < Upd_year.length; i++) {

  const Year_opt = document.createElement("option");
  Year_opt.value = Upd_year[i];
  Year_opt.textContent = Upd_year[i];
  SelectYear.appendChild(Year_opt);

}

// Declared outside so each listener can access.
  /* Used to filter only data that contains what -
     user has selected */
let SelectedYear;
let SelectedMake;
let SelectedModel;
let SelectedProduct;



//Filters out the appropriate sequence vehicles
// Creates and Displays Make options using Year listener

document.getElementById("Year").addEventListener("change", (e) => {

  /*Makes sure user is only able to access Make after
    the Year has been selected. */
  SelectMake.disabled = false;
  SelectModel.disabled = true;
  SelectProduct.disabled = true;

  /*Just in case if the user changes their Year,
    the Make, Model, and Product will reset
    to only display the placeholder */

  if (SelectMake.length != 1) {

    SelectMake.innerHTML = 
    `<option value="" selected disabled>Select Make</option>`;
  }

  if (SelectModel.length != 1) {

    SelectModel.innerHTML = 
    `<option value="" selected disabled>Select Model</option>`;

  }

  if (SelectProduct.length != 1) {

    SelectProduct.innerHTML = 
    `<option value="" selected disabled>Select Product</option>`;

  }

  //Store whatever the user has selected as a number
  SelectedYear = Number(e.target.value); 


  //Only choose the data that aligns with the picked year
  const Filter_Year = vehicleData.filter(vehicle => vehicle.year === SelectedYear); 


  //Turn data into an array with only makes
  const makes = Filter_Year.map(vehicle => vehicle.make);
  
  //Create a set that has no duplicates
  const Upd_makes = [...new Set(makes)];
  console.log("Make Set is:", Upd_makes);

  
  /*Same formula to populate options, except this
    time only for makes that have the selected year */

  for (let i = 0; i < Upd_makes.length; i++) {

    const Make_opt = document.createElement("option");
    Make_opt.value = Upd_makes[i];
    Make_opt.textContent = Upd_makes[i];
    SelectMake.appendChild(Make_opt);

  }


});



// Creates and Displays Model options using the Make listener

document.getElementById("Make").addEventListener("change", (e) => {


  /* Only enable Model while keeping product disabled.
     Just in case user tries to access Product before
     selecting a model.   */

  SelectModel.disabled = false;
  SelectProduct.disabled = true;

  
    /* Whenever make is changed, only Model and 
        product reset  */

  if (SelectModel.length != 1) {

    SelectModel.innerHTML = 
    `<option value="" selected disabled>Select Model</option>`;
  }

  if (SelectProduct.length != 1) {

    SelectProduct.innerHTML = 
    `<option value="" selected disabled>Select Product</option>`;

  }

  /* Stops any confusion of value type and forces
     it to String. To Simplify */
  SelectedMake = String(e.target.value);

  //Grab data that only matches the selected year and make
  const Filter_Make = vehicleData.filter(vehicle =>
    vehicle.year === SelectedYear &&
    vehicle.make === SelectedMake

  );


  /* Same array and Set Sequence like in year and makes, except 
     this time doing models */

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



  // Creates and Displays Product options using the Model listener

  document.getElementById("Model").addEventListener("change", (e) => {

    /* Once Model is chosen, the last select, Product, is finally
       enabled */

    SelectProduct.disabled = false;


    /* Only Product is reset when user changes the model*/

    if (SelectProduct.length != 1) {

        SelectProduct.innerHTML = 
        `<option value="" selected disabled>Select Product</option>`;

    }

    /* Also turn model into string for easability,
       and bc Model has choice number or words in data */

    SelectedModel = String(e.target.value);

    /* Grab only data that aligns with all three previous 
       choices (Year, Make, and Model )*/

    const Filter_Model = vehicleData.filter(vehicle =>
        vehicle.year === SelectedYear &&
        vehicle.make === SelectedMake &&
        vehicle.model === SelectedModel

    );


    /* Same array and Set Sequence like in year, makes, and models, 
       except this time doing products */

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



/* Since product is already ready to be displayed from the Model
   listener, the product listener is only to get store the user 
   picked product value; and to convert to string. Also no resets
   since product dropdown is the last one. */ 

document.getElementById("Product").addEventListener("change", (e) => {

  SelectedProduct = String(e.target.value);

});


//Generate the URLS based on what the user has picked

document.getElementById("Vehicle_Form").addEventListener("submit", (e) => {


  //Prevents the form from trying to go to the URL itself

  e.preventDefault();

  console.log("Form submitted!");


  //Method for finding data that aligns with users choices

  const Check_Vehicle = vehicleData.find(vehicle =>

    vehicle.year === SelectedYear &&
    vehicle.make === SelectedMake &&
    vehicle.model === SelectedModel &&
    vehicle.productType === SelectedProduct

  );


  /* Checks if vehicle exists in data-base, if so then it goes to make url,
     if not then displays error for user. */

  if (Check_Vehicle) {


    /* Makes sure that the Model used for the URL matches 
       and is able to be used (Url doesn't take spaces to well) */

    const Url_Model = SelectedModel.replaceAll(" ","+");
    const Url_Product = SelectedProduct.replaceAll(" ", "+");
    
    /* Wasn't sure whether to lowercase variable,'SelectedMake' since both lead to same Url.
       decided to not lowercase. */

    const Vehicle_Url = `https://partifyusa.com/collections/${SelectedYear}-${SelectedMake}-${Url_Model}?filter.p.product_type=${Url_Product}`;
    
    
    // Example url: https://partifyusa.com/collections/2016-Toyota-Camry?filter.p.product_type=Front+Bumper

    
    /* Once Url is formed, makes sure the add vehicle button 
       sends user to url */
    window.location.href = Vehicle_Url;

  }
  else {

    alert("Error: No Vehicle found");
    console.log("Error: No Vehicle found")
  }

});














  



