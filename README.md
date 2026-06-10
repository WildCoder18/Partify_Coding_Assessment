# Partify_Coding_Assessment

# Vehicle Selector & Product URL Generator

A dynamic vehicle selection form that guides users through a cascading dropdown system (Year → Make → Model → Product Type) and generates a custom product URL based on their selections.

---

## Project Overview

This project allows users to:

- Select a vehicle **Year**
- Filter and select the corresponding **Make**
- Filter and select the corresponding **Model**
- Choose a **Product Type**
- Automatically generate and redirect to a matching product URL

The system ensures that only valid combinations of vehicle data can be selected, preventing invalid searches or broken links.

---

## Features

- Cascading dropdowns (dependent selections)
- Dynamic filtering using JavaScript
- Duplicate removal using `Set`
- Form validation with built-in HTML + JavaScript logic
- Disabled dropdown states to guide user flow
- Automatic URL generation based on selections
- Redirect to product page using `window.location.href`

---

## How It Works

1. The user selects a **Year**
   - The Make dropdown is populated based on available data.

2. The user selects a **Make**
   - The Model dropdown is filtered based on Year + Make.

3. The user selects a **Model**
   - The Product Type dropdown is filtered based on Year + Make + Model.

4. The user selects a **Product Type**
   - The selection is stored for final URL generation.

5. On form submission:
   - The system validates the selection against `vehicleData`
   - A URL is generated
   - The user is redirected to the matching product page

---

