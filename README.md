# QA Engineer Assignment

This project contains automated tests for the **Magento Software Testing - Luma Store** platform, including both UI end-to-end tests, using [Cypress](https://www.cypress.io/). These tests ensure the core functionalities like register/login student, search products, cart and checkout process work correctly and reliably.

## Table of Contents

- [Features](#features)  
- [Technologies Used](#technologies-used)  
- [Installation](#installation)  
- [Usage](#usage)  
- [Running Tests](#running-tests)  
- [Postman API TestCases](#postman-api-testcases)
- [Manual and Performance TestCases](#manual-and-performance-testcases)

---

## Features

- Automated UI tests for magento software testing - luma store covering all functionalities
- API tests using postman for petstore.  
- Manual and performance testcases for magento software testing site.  
  

---

## Technologies Used

- [Cypress](https://www.cypress.io/) — for end-to-end UI testing.  
- JavaScript — for writing test scripts.  
- Postman - for API tests.

---

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/codingbug671/qa-assignment.git
   cd qa-assignment

2. **Install dependencies:**

Ensure you have Node.js installed, then run:

 ```bash
 npm install
   
```

## Usage
Open the Cypress Test Runner UI with:

 ```bash
npx cypress open

```

## Running Tests
To run all tests in headless mode (without UI) and generate reports:

 ```bash
npx cypress run
```
 you can view the generated html reports in folder: mochawesome-report
 
## Postman API Testcases

Exported file for postman api collection for Petstore API in folder: api-testcases/

## Manual and Performance Testcases

Manual and Performance testcases word file in folder: manual-performance-testcases/


