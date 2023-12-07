//// Wait ////
const millisecond = 1
const second = 1000
const minute = 60000


export const addExpense_BlankData=()=>{
    cy.contains("6. Accounting").click()
    cy.contains("6.3 Add Expense").click()
    
    cy.get('[type="submit"]').click()
    cy.contains("Please Select a Vehicle.").should("exist")
    cy.contains("Please Enter a Type of 3 or more length.").should("exist")       
    cy.contains("Please Select a Date.").should("exist")
    cy.contains("Please Enter a Revenue Amount of $1 or more.").should("exist")
    cy.contains("Please Enter a Description of 3 or more length.").should("exist")
} 
export const addExpense_Vehicle_DropDown=()=>{
    cy.contains("6. Accounting").click()
    cy.contains("6.3 Add Expense").click()
        // select vehicle
        cy.get('[placeholder="Select Vehicle"]').click()
        cy.contains("2021 Jeep Wrangler Unlimited Sahara").should("exist")
} 
export const addExpense_ExpenseType_DropDown=()=>{
    cy.contains("6. Accounting").click()
    cy.contains("6.3 Add Expense").click()
        //Expense Type
    cy.get('[placeholder="Enter Expense Type"]').click()
    cy.contains("Rent/Lease Payment").should("exist")
} 
export const addExpense_ValidData=()=>{
    cy.contains("6. Accounting").click()
    cy.contains("6.3 Add Expense").click()
    
    // select vehicle
    cy.get('[placeholder="Select Vehicle"]').click()
       cy.contains("2021 Jeep Wrangler Unlimited Sahara").click()
    
    //Expense Type
    cy.get('[placeholder="Enter Expense Type"]').click()
      cy.contains("Rent/Lease Payment").click()
    // Reference Date
    cy.get('[placeholder="Pick Reference Date"]').type("December 1, 2023")
    // Expense Amount
    cy.get('[placeholder="Enter Expense Amount"]').clear().type("39000")
    // Expense Details
    cy.get('[placeholder="Enter Expense Details"]').type("Vehicle Purchase: 1C4HJXEG9MW851795 - 2021 Jeep Wrangler Unlimited Sahara")
    // add Expense button
    cy.get('[type="submit"]').click()
    cy.wait(10* second)
                  /////////// View Expense //////////////
    cy.contains("6.4 View Expense").click()
    cy.get('[placeholder="Search"]').type("1C4HJXEG9MW851795")
}

export const ViewExpense_Search_VinNo=()=>{
    cy.contains("6. Accounting").click()
                  /////////// View Expense //////////////
    cy.contains("6.4 View Expense").click()
    cy.get('[placeholder="Search"]').type("1C4HJXEG9MW851795")
    cy.contains("1C4HJXEG9MW851795").should("exist")
}
export const ViewExpense_Search_VehicleName=()=>{
    cy.contains("6. Accounting").click()
    cy.contains("6.4 View Expense").click()
    cy.get('[placeholder="Search"]').type("2021 Jeep Wrangler Unlimited Sahara")
    cy.contains("2021 Jeep Wrangler Unlimited Sahara").should("exist")
}
export const ViewExpense_Search_InValid_VinNo=()=>{
    cy.contains("6. Accounting").click()
    cy.contains("6.4 View Expense").click()
    cy.get('[placeholder="Search"]').type("2C4HJKEG9MW851795")
    cy.contains("There are no records to display").should("exist")
}
export const ViewExpense_View_IconButton= ()=>{
    cy.contains("6. Accounting").click()
    cy.contains("6.4 View Expense").click()
    cy.get('[placeholder="Search"]').type("1C4HJXEG9MW851795")
    cy.contains("1C4HJXEG9MW851795").should("exist")
    cy.get(".rdt_TableBody").find("div").first().find(".icon-tabler-eye").click()
    cy.contains("View expense").should("exist")      
   }
   export const ViewExpense_Edit_IconButton= ()=>{
    cy.contains("6. Accounting").click()
    cy.contains("6.4 View Expense").click()
    cy.get('[placeholder="Search"]').type("1C4HJXEG9MW851795")
    cy.contains("1C4HJXEG9MW851795").should("exist")
    cy.get(".rdt_TableBody").find("div").first().find(".icon-tabler-pencil").click()
    cy.contains("Update Expense").should("exist")

   }
   export const ViewExpense_Delete_IconButton= ()=>{
    cy.contains("6. Accounting").click()
    cy.contains("6.4 View Expense").click()
    cy.get('[placeholder="Search"]').type("1C4HJXEG9MW851795")
    cy.contains("1C4HJXEG9MW851795").should("exist")
    cy.get(".rdt_TableBody").find("div").first().find(".icon-tabler-trash").click()
    cy.contains("Delete Expense").should("exist") 
    cy.get("button").contains("Delete").click()  
    cy.contains("Expense Deleted Successfully").should("exist")
   }


