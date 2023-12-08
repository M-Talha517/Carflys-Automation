const millisecond = 1
const second = 1000
const minute = 60000

export const ViewProfit_Search_Valid_VinNo=()=>{
    cy.contains("6. Accounting").click()
    cy.contains("6.5 View Profit Report").click()
    cy.get('[placeholder="Search"]').type("1C4HJXEG9MW851795")
    cy.contains("1C4HJXEG9MW851795").should("exist")
}
export const ViewProfit_Search_InValid_VinNo=()=>{
    cy.contains("6. Accounting").click()
    cy.contains("6.5 View Profit Report").click()
    cy.get('[placeholder="Search"]').type("2C4HJKEG9MW851795")
    cy.contains("There are no records to display").should("exist")
}