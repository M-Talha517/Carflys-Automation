//// Wait ////
const millisecond = 1
const second = 1000
const minute = 60000

export const Chat_Search_AdminName =() => {
    cy.contains("7. Chats").click()
//search field
    cy.get('[placeholder="Search Users"]').type("Mister")
    cy.contains("Mister Admin").should("exist")
    }
    export const Chat_Search_EmployeeName =() => {
        cy.contains("7. Chats").click()
    //search field
        cy.get('[placeholder="Search Users"]').type("Osama")
        cy.contains("Osama Abbasi").should("exist")
    }
    