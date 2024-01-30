
//// Wait ////
const millisecond = 1
const second = 1000
const minute = 60000

export const admin_addRevenue_Blank_filed= ()=>{
    cy.contains("11. Accounting").click()
    cy.contains("11.1 Add Revenue").click()
    
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
 export const admin_addRevenue_DropDown_List= ()=>{
       cy.contains("11. Accounting").click()
       cy.contains("11.1 Add Revenue").click()
         // Vehicle select
     cy.get('[placeholder="Select Vehicle"]').click()
     cy.contains("2020 Ford Explorer XLT").should("exist") 
       }
 export const admin_addRevenue_Valid_Data= ()=>{
     cy.contains("11. Accounting").click()
     cy.contains("11.1 Add Revenue").click()
     
     // Vehicle select
     cy.get('[placeholder="Select Vehicle"]').click()
        cy.contains("2011 Honda CR-V SE").click()
     
     // Reference type
     cy.get('[placeholder="Enter Reference"]').type("Full Payment for 5J6RE3H43BL058780")        /// 1C4HJXDN7NW246787
     // Reference Email 
     cy.get('[placeholder="Enter Reference Email"]').type("gmd@gmail.com")
     // Reference Details 
     cy.get('[placeholder="Enter Reference Details"]').type("Full Payment for 5J6RE3H43BL058780 in Vehicle Order")
     // Reference Date
     cy.get('[placeholder="Pick Reference Date"]').type("December 1, 2023")
     // Revenue Amount 
     cy.get('[placeholder="Enter Revenue Amount"]').clear().type("35000")
     // Revenue Details 
     cy.get('[placeholder="Enter Revenue Details"]').type("Full Payment for 5J6RE3H43BL058780")
     // Add Revenue Button
     cy.get('[type="submit"]').click()
     cy.wait(10* second)
     /////////////////  View Revenue //////////////
     cy.contains("11.2 View Revenue").click()
     cy.get('[placeholder="Search"]').type("5J6RE3H43BL058780")
     cy.contains("5J6RE3H43BL058780").should("exist")
    }
    export const admin_addRevenue_ResetButton= ()=>{
       cy.contains("11. Accounting").click()
       cy.contains("11.1 Add Revenue").click()
       
       // Vehicle select
       cy.get('[placeholder="Select Vehicle"]').click()
          cy.contains("2024 Ram 1500 Lone Star").click()
       
       // Reference type
       cy.get('[placeholder="Enter Reference"]').type("Full Payment for 1FMSK8DH1LGC97871")        /// 1C4HJXDN7NW246787
       // Reference Email 
       cy.get('[placeholder="Enter Reference Email"]').type("gmd@gmail.com")
       // Reference Details 
       cy.get('[placeholder="Enter Reference Details"]').type("Full Payment for  1FMSK8DH1LGC97871 in Vehicle Order")
       // Reference Date
       cy.get('[placeholder="Pick Reference Date"]').type("December 1, 2023")
       // Revenue Amount 
       cy.get('[placeholder="Enter Revenue Amount"]').type("35000")
       // Revenue Details 
       cy.get('[placeholder="Enter Revenue Details"]').type("Full Payment for 1FMSK8DH1LGC97871")
       // Add Revenue Button
       cy.get("button").contains("Reset").click()
       cy.get('[placeholder="Select Vehicle"]').invoke('val').should('eq', '')  
       cy.get('[placeholder="Enter Reference"]').invoke('val').should('eq', '')  
       cy.get('[placeholder="Enter Reference Email"]').invoke('val').should('eq', '')
       cy.get('[placeholder="Enter Reference Details"]').invoke('val').should('eq', '')
       cy.get('[placeholder="Pick Reference Date"]').invoke('val').should('eq', '')
       cy.get('[placeholder="Enter Revenue Amount"]').invoke('val').should('eq', '0')
       cy.get('[placeholder="Enter Revenue Details"]').invoke('val').should('eq', '')

      }
 export const admin_ViewRevenue_Search_VinNo= ()=>{
       cy.contains("11. Accounting").click()
       cy.contains("11.2 View Revenue").click()
       cy.get('[placeholder="Search"]').type("5FNYF6H22MB016055")
       cy.contains("5FNYF6H22MB016055").should("exist")
      }
 export const admin_ViewRevenue_Search_VehicleName= ()=>{
       cy.contains("11. Accounting").click()
       cy.contains("11.2 View Revenue").click()
       cy.get('[placeholder="Search"]').type("2021 Honda Pilot SE")
       cy.contains("2021 Honda Pilot SE").should("exist")
      }
 export const admin_ViewRevenue_View_IconButton= ()=>{
       cy.contains("11. Accounting").click()
       cy.contains("11.2 View Revenue").click()
       cy.get('[placeholder="Search"]').type("3FA6P0G72LR161694")
       cy.wait(3000)
       cy.contains("3FA6P0G72LR161694").should("exist")
       cy.get(".rdt_TableBody").find("div").first().find(".icon-tabler-eye").click()
       cy.contains("View revenue").should("exist")      
      }
 export const admin_ViewRevenue_ModalCloseButton= ()=>{
        cy.contains("11. Accounting").click()
        cy.contains("11.2 View Revenue").click()
        cy.get('[placeholder="Search"]').type("3FA6P0G72LR161694")
        cy.wait(3000)
        cy.contains("3FA6P0G72LR161694").should("exist")
        cy.get(".rdt_TableBody").find("div").first().find(".icon-tabler-eye").click()
        cy.contains("View revenue").should("exist")      
        cy.get("button").contains("Close").click()
       }
 export const admin_ViewRevenue_Edit_IconButton= ()=>{
       cy.contains("11. Accounting").click()
       cy.contains("11.2 View Revenue").click()
       cy.get('[placeholder="Search"]').type("3FA6P0G72LR161694")
       cy.wait(3000)
       cy.contains("3FA6P0G72LR161694").should("exist")
       cy.get(".rdt_TableBody").find("div").first().find(".icon-tabler-pencil").click()
       cy.contains("Update Revenue").should("exist")
 
      }
 export const admin_ViewRevenue_Edit_ResetButton= ()=>{
        cy.contains("11. Accounting").click()
        cy.contains("11.2 View Revenue").click()
        cy.get('[placeholder="Search"]').type("3FA6P0G72LR161694")
        cy.wait(3000)
        cy.contains("1FTFW1ET2DFB58683").should("exist")
        cy.get(".rdt_TableBody").find("div").first().find(".icon-tabler-pencil").click()
        cy.contains("Update Revenue").should("exist")
        
    cy.get("button").contains("Reset").click()

     cy.get('[placeholder="Enter Reference"]').invoke('val').should('eq', '')  
     cy.get('[placeholder="Enter Reference Email"]').invoke('val').should('eq', '')
     cy.get('[placeholder="Enter Reference Details"]').invoke('val').should('eq', '')
     cy.get('[placeholder="Pick Reference Date"]').invoke('val').should('eq', '')
     cy.get('[placeholder="Enter Revenue Amount"]').invoke('val').should('eq', '')
     cy.get('[placeholder="Enter Revenue Details"]').invoke('val').should('eq', '')
        
       }
 export const admin_ViewRevenue_Delete_IconButton= ()=>{
       cy.contains("11. Accounting").click()
       cy.contains("11.2 View Revenue").click()
       cy.get('[placeholder="Search"]').type("5J6RE3H43BL058780")
       cy.contains("5J6RE3H43BL058780").should("exist")
       cy.get(".rdt_TableBody").find("div").first().find(".icon-tabler-trash").click()
       cy.contains("Delete Revenue").should("exist") 
       cy.get("button").contains("Delete").click()   
       cy.contains("Revenue Deleted Successfully").should("exist")  
      
    }

