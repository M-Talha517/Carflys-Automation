//// Wait ////
const millisecond = 1
const second = 1000
const minute = 60000


export const addRevenue_Blank_filed= ()=>{
   cy.contains("6. Accounting").click()
   cy.contains("6.1 Add Revenue").click()
   
   // Add Revenue Button
   cy.get('[type="submit"]').click()
   cy.wait(10* second)
   cy.contains("Please Select a Vehicle.").should("exist")
   cy.contains("Please Enter a Reference of 3 or more length.").should("exist")
   cy.contains("Invalid email").should("exist")
   cy.contains("Please Enter Reference Details of 3 or more length.").should("exist")       
   cy.contains("Please Select a Date.").should("exist")
   cy.contains("Please Enter Revenue Amount of $1 or more.").should("exist")
   cy.contains("Please Enter a Description of 3 or more length.").should("exist")
   
   }
export const addRevenue_DropDown_List= ()=>{
      cy.contains("6. Accounting").click()
      cy.contains("6.1 Add Revenue").click()
        // Vehicle select
    cy.get('[placeholder="Select Vehicle"]').click()
    cy.contains("2021 Jeep Wrangler Unlimited Sahara").should("exist") 
      }
export const addRevenue_Valid_Data= ()=>{
    cy.contains("6. Accounting").click()
    cy.contains("6.1 Add Revenue").click()
    
    // Vehicle select
    cy.get('[placeholder="Select Vehicle"]').click()
       cy.contains("2021 Jeep Wrangler Unlimited Sahara").click()
    
    // Reference type
    cy.get('[placeholder="Enter Reference"]').type("Full Payment for 1C4HJXEG9MW851795")        /// 1C4HJXDN7NW246787
    // Reference Email 
    cy.get('[placeholder="Enter Reference Email"]').type("gmd@gmail.com")
    // Reference Details 
    cy.get('[placeholder="Enter Reference Details"]').type("Full Payment for 1C4HJXEG9MW851795 in Vehicle Order")
    // Reference Date
    cy.get('[placeholder="Pick Reference Date"]').type("December 1, 2023")
    // Revenue Amount 
    cy.get('[placeholder="Enter Revenue Amount"]').type("35000")
    // Revenue Details 
    cy.get('[placeholder="Enter Revenue Details"]').type("Full Payment for 1C4HJXEG9MW851795")
    // Add Revenue Button
    cy.get('[type="submit"]').click()
    cy.wait(10* second)
    /////////////////  View Revenue //////////////
    cy.contains("6.2 View Revenue").click()
    cy.get('[placeholder="Search"]').type(" 1C4HJXEG9MW851795")
    cy.contains("1C4HJXEG9MW851795").should("exist")
   }

export const ViewRevenue_Search_VinNo= ()=>{
      cy.contains("6. Accounting").click()
      cy.contains("6.2 View Revenue").click()
      cy.get('[placeholder="Search"]').type("1C4HJXEG9MW851795")
      cy.contains("1C4HJXEG9MW851795").should("exist")
     }
export const ViewRevenue_Search_VehicleName= ()=>{
      cy.contains("6. Accounting").click()
      cy.contains("6.2 View Revenue").click()
      cy.get('[placeholder="Search"]').type("2021 Jeep Wrangler Unlimited Sahara")
      cy.contains("2021 Jeep Wrangler Unlimited Sahara").should("exist")
     }
     


