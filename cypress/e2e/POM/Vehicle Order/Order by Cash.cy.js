import { backendURL } from "../Seller/extras"
//// Wait ////
const millisecond = 1
const second = 1000
const minute = 60000

export const Vehicle_order_Cash =()=>{
    cy.get("button").get(".mantine-Burger-root").click()
    cy.contains("Vehicle").click()                                               /// 5FNRL6H72LB034983
// Search Car                                                                    /// 1G6DA1E32C0152845
    cy.get('[placeholder="Search by make, model"]').type("5FNRL38699B054484")   ///KNDJN2A25F7162188
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

   cy.contains("Gold").click()
   cy.get("button").contains("Save and Continue").click()
   
   cy.contains("Credit Disability").click()
   cy.get("button").contains("Save and Continue").click()
    cy.wait(3000)
// Order Breakdown
      cy.get("button").contains("Save and Continue").click()
      cy.wait(3000)
      cy.get("button").contains("Save and Continue").click()
 }

