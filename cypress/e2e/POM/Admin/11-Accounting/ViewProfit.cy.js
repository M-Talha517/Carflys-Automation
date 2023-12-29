
//// Wait ////
const millisecond = 1
const second = 1000
const minute = 60000

export const admin_ViewProfit_Search_Valid_VinNo=()=>{
    cy.contains("11. Accounting").click()
    cy.contains("11.5 View Profit Report").click()
    cy.get('[placeholder="Search"]').type("1FMSK8DH1LGC97871")
    cy.contains("1FMSK8DH1LGC97871").should("exist")
}
export const admin_ViewProfit_Search_InValid_VinNo=()=>{
    cy.contains("11. Accounting").click()
    cy.contains("11.5 View Profit Report").click()
    cy.get('[placeholder="Search"]').type("2C4HJKEG9MW851795")
    cy.contains("There are no records to display").should("exist")
}