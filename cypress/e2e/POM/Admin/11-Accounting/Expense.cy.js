
//// Wait ////
const millisecond = 1
const second = 1000
const minute = 60000


export const admin_addExpense_BlankData=()=>{
    cy.contains("11. Accounting").click()
    cy.contains("11.3 Add Expense").click()
    
    cy.get('[type="submit"]').click()
    //cy.contains("Please Select a Vehicle.").should("exist")
    cy.contains("Please Enter a Type of 3 or more length.").should("exist")       
    cy.contains("Please Select a Date.").should("exist")
    cy.contains("Please Enter a Expense Amount of $1 or more.").should("exist")
    cy.contains("Please Enter a Description of 3 or more length.").should("exist")
} 
export const admin_addExpense_Vehicle_DropDown=()=>{
    cy.contains("11. Accounting").click()
    cy.contains("11.3 Add Expense").click()
        // select vehicle
        cy.get('[placeholder="Select Vehicle"]').click()
        cy.contains("2020 Ford Explorer XLT").should("exist")
} 
export const admin_addExpense_ExpenseType_DropDown=()=>{
    cy.contains("11. Accounting").click()
    cy.contains("11.3 Add Expense").click()
        //Expense Type
    cy.get('[placeholder="Enter Expense Type"]').click()
    cy.contains("Rent/Lease Payment").should("exist")
} 
export const admin_addExpense_ValidData=()=>{
    cy.contains("11. Accounting").click()
    cy.contains("11.3 Add Expense").click()

// Select Dealership
    cy.get('[placeholder="Select Dealership"]').click()
    cy.contains("Super Car Wheel").click()
//Expense Type
    cy.get('[placeholder="Enter Expense Type"]').click()
      cy.contains("Rent/Lease Payment").click()
      cy.wait(2000)
// select vehicle
      cy.get('[placeholder="Select Vehicle"]').click()
      cy.contains("2011 Honda CR-V SE").click()
// Reference Date
    cy.get('[placeholder="Pick Reference Date"]').type("December 1, 2023")
// Expense Amount
    cy.get('[placeholder="Enter Expense Amount"]').clear().type("39000")
// Expense Details
    cy.get('[placeholder="Enter Expense Details"]').type("Vehicle Purchase: 5J6RE3H43BL058780 - 2020 Ford Explorer XLT")
// add Expense button
    cy.get('[type="submit"]').click()
    cy.wait(10* second)
                  /////////// View Expense //////////////
    cy.contains("11.4 View Expense").click()
    cy.get('[placeholder="Search"]').type("5J6RE3H43BL058780")
}
export const admin_addExpense_ResetButton=()=>{
    cy.contains("11. Accounting").click()
    cy.contains("11.3 Add Expense").click()
    

    cy.get('[placeholder="Select Dealership"]').click()
       cy.contains("Super Car Wheel").click()

        //Expense Type
    cy.get('[placeholder="Enter Expense Type"]').click()
    cy.contains("Rent/Lease Payment").click()
// select vehicle
     cy.get('[placeholder="Select Vehicle"]').click()
       cy.contains("2011 Honda CR-V SE").click()
    // Reference Date
    cy.get('[placeholder="Pick Reference Date"]').type("December 1, 2023")
    // Expense Amount
    cy.get('[placeholder="Enter Expense Amount"]').clear().type("39000")
    // Expense Details
    cy.get('[placeholder="Enter Expense Details"]').type("Vehicle Purchase: 5J6RE3H43BL058780 - 2011 Honda CR-V SE")
    // add Expense button
    cy.get("button").contains("Reset").click()
    
    cy.get('[placeholder="Select Dealership"]').invoke('val').should('eq', '')
    cy.get('[placeholder="Enter Expense Type"]').invoke('val').should('eq', '')
    cy.get('[placeholder="Select Vehicle"]').invoke('val').should('eq', '')
    cy.get('[placeholder="Pick Reference Date"]').invoke('val').should('eq', '')
    cy.get('[placeholder="Enter Expense Amount"]').invoke('val').should('eq', '')
    cy.get('[placeholder="Enter Expense Details"]').invoke('val').should('eq', '')
}
export const admin_ViewExpense_Search_ExpenseType=()=>{
    cy.contains("11. Accounting").click()
                  /////////// View Expense //////////////
    cy.contains("11.4 View Expense").click()
    cy.get('[placeholder="Search"]').type("Rent/Lease Payment")
    cy.contains("Rent/Lease Payment").should("exist")
}
// export const admin_ViewExpense_Search_VinNo=()=>{
//     cy.contains("11. Accounting").click()
//                   /////////// View Expense //////////////
//     cy.contains("11.4 View Expense").click()
//     cy.get('[placeholder="Search"]').type("5FNYF6H22MB016055")
//     cy.contains("5FNYF6H22MB016055").should("exist")
// }
// export const admin_ViewExpense_Search_VehicleName=()=>{
//     cy.contains("11. Accounting").click()
//     cy.contains("11.4 View Expense").click()
//     cy.get('[placeholder="Search"]').type("2021 Honda Pilot SE")
//     cy.contains("2021 Honda Pilot SE").should("exist")
// }
// export const admin_ViewExpense_Search_InValid_VinNo=()=>{
//     cy.contains("11. Accounting").click()
//     cy.contains("11.4 View Expense").click()
//     cy.get('[placeholder="Search"]').type("2C4HJKEG9MW851795")
//     cy.contains("There are no records to display").should("exist")
// }
export const admin_ViewExpense_View_IconButton= ()=>{
    cy.contains("11. Accounting").click()
    cy.contains("11.4 View Expense").click()
    cy.get('[placeholder="Search"]').type("5J6RE3H43BL058780")
    cy.contains("5J6RE3H43BL058780").should("exist")
    cy.get(".rdt_TableBody").find("div").first().find(".icon-tabler-eye").click()
    cy.contains("View expense").should("exist")      
   }
export const admin_ViewExpense_View_ModalCloseButton= ()=>{
    cy.contains("11. Accounting").click()
    cy.contains("11.4 View Expense").click()
    cy.get('[placeholder="Search"]').type("5J6RE3H43BL058780")
    cy.contains("5J6RE3H43BL058780").should("exist")
    cy.get(".rdt_TableBody").find("div").first().find(".icon-tabler-eye").click()
    cy.contains("View expense").should("exist") 
    cy.get("button").contains("Close").click()     
   }
   export const admin_ViewExpense_Edit_IconButton= ()=>{
    cy.contains("11. Accounting").click()
    cy.contains("11.4 View Expense").click()
    cy.get('[placeholder="Search"]').type("5J6RE3H43BL058780")
    cy.contains("5J6RE3H43BL058780").should("exist")
    cy.get(".rdt_TableBody").find("div").first().find(".icon-tabler-pencil").click()
    cy.contains("Update Expense").should("exist")
   }

   export const admin_ViewExpense_Edit_ResetButton= ()=>{
    cy.contains("11. Accounting").click()
    cy.contains("11.4 View Expense").click()     
    cy.get("button").contains("Reset").click()
    cy.contains("Update Expense").should("exist")
    cy.get('[placeholder="Enter Expense Type"]').invoke('val').should('eq', '')
    cy.get('[placeholder="Pick Reference Date"]').invoke('val').should('eq', '')
    cy.get('[placeholder="Enter Expense Amount"]').invoke('val').should('eq', '')
    cy.get('[placeholder="Enter Expense Details"]').invoke('val').should('eq', '')
}
   export const admin_ViewExpense_Delete_IconButton= ()=>{
    cy.contains("11. Accounting").click()
    cy.contains("11.4 View Expense").click()
    cy.get('[placeholder="Search"]').type("5J6RE3H43BL058780")
    cy.contains("5J6RE3H43BL058780").should("exist")
    cy.get(".rdt_TableBody").find("div").first().find(".icon-tabler-trash").click()
    cy.contains("Delete Expense").should("exist") 
    cy.get("button").contains("Delete").click()  
    cy.contains("Expense Deleted Successfully").should("exist")
   }
   export const admin_ViewExpense_viewscreen_AddButton= ()=>{
    cy.contains("11. Accounting").click()
    cy.contains("11.4 View Expense").click()     
    cy.get(".mantine-Grid-col").get("button").contains("Add Expense").click()
    cy.contains("Add Expense").should("exist")
}




