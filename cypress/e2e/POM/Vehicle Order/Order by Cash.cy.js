import { Admin_login, customer_login, logout } from "../Admin/Add data.cy"
import { backendURL } from "../Seller/extras"
//// Wait ////
const millisecond = 1
const second = 1000
const minute = 60000

export const Vehicle_order_Cash =()=>{
    cy.get("button").get(".mantine-Burger-root").click()
    cy.contains("Vehicle").click()                                               /// 5FNRL6H72LB034983
// Search Car                                                                    /// 1G6DA1E32C0152845
    cy.get('[placeholder="Search by make, model"]').type("WMWZP3C55DT298025")   ///KNDJN2A25F7162188  //5FNRL3H70AB078251
    cy.get(".mantine-1rn52sj").click()  //.mantine-1s4s1c6
    cy.wait(3000)
   // cy.contains("Browse Vehicles").parent().find("button").contains("Buy Now").click()
   cy.get(".mantine-p60k53").contains("Buy Now").click()
   cy.contains('First Name').next("div").find('[type="text"]').clear().type('ANDERSON')
   cy.contains('Middle Name').next("div").find('[type="text"]').clear().type('SR')
   cy.contains('Last Name').next("div").find('[type="text"]').clear().type('LAURIE')
   cy.contains('Cell Number').next("div").find('[type="text"]').clear().type('+1(000)-000-0000')
   cy.contains('Email Address').next("div").find('[type="text"]').clear().type('customer001@gmail.com')
   cy.contains('House').next("div").find('[type="text"]').clear().type('9817 LOOP')
   cy.contains('Street').next("div").find('[type="text"]').clear().type('BLVD')
   cy.contains('Zip Code').next("div").find('[type="text"]').clear().type('935051352')
//    cy.contains('State').next("div").invoke("California").should('eq', 'California')
//    cy.contains('City').next("div").invoke("California City").should('eq','California City')
   cy.contains('County').next("div").find('[type="text"]').type('CA')
   //cy.contains("Personal Details").parent().find("button").contains("Save and Continue").click()
   cy.get("button").contains("Save and Continue").click()
   cy.wait(2000)
   cy.contains("Buy the Vehicle Outright").click()
   cy.get("button").contains("Save and Continue").click()
   cy.wait(3000)
   cy.get("button").contains("Save and Continue").click()
cy.wait(3000)
   cy.contains("Gold").click()
   cy.get("button").contains("Save and Continue").click()
   cy.wait(3000)
   cy.contains("Credit Disability").click()
   cy.get("button").contains("Save and Continue").click()
    cy.wait(3000)
// Order Breakdown
      cy.get("button").contains("Save and Continue").click()
      cy.wait(3000)
      cy.get("button").contains("Save and Continue").click()
      cy.pause()
      cy.wait(3000)
      cy.get("button").contains("Save and Continue").click()

//  logout()
// Admin_login()
// Admin Side Order status
  //     cy.intercept('GET', `${backendURL}/order`).as('Orders found Successfully');
  //     cy.intercept('PATCH', `${backendURL}/order/*`).as('Status Update Succesfully');

  //     cy.contains("8. Orders").click()
  // //search field
  //         cy.get('[placeholder="Search"]').type("WMWZP3C55DT298025")
  //         cy.wait(4000)
  // /// down payment paid to Conform Order    
  //         cy.get(".rdt_TableBody").find("div").first().find('[aria-haspopup="menu"]').click()
  //         cy.contains("Confirm Order").click()
  //         cy.wait(5000)
  // //// shipped to delivered
  //         cy.get(".rdt_TableBody").find("div").first().find('[aria-haspopup="menu"]').click()
  //         cy.contains("Delivered").click()
  //         cy.wait(5000)
  // /// Delivered to completed
  //     cy.get(".rdt_TableBody").find("div").first().find('[aria-haspopup="menu"]').click()
  //     cy.contains("Completed").click()
  //     cy.wait(3000)
  //   //   cy.contains("Status Updated Successfully").should("exist")
  //     cy.wait("@Orders found Successfully").its('response.statusCode').should('eq', 200);

  //      logout()
//       customer_login()
//       cy.get("button").get(".mantine-Burger-root").click()
//       cy.contains("Dashboard").click()
//   cy.contains("2. Orders").click()
// //search field
//  cy.get('[placeholder="Search"]').type("WMWZP3C55DT298025")

//  cy.wait(4000)
//  cy.get(".rdt_TableBody").find("div").first().find(".mantine-Button-label").contains("Continue Order").click()

//  // Review Order
//     cy.contains("Service Quality Rating: ").next("div").get(".mantine-Rating-root").find('[value="0"]').click({force: true})

 }

