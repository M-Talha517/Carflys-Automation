//// Wait ////
const millisecond = 1
const second = 1000
const minute = 60000



export const Search_Review_FirstName  =() => {
    cy.contains("8. Reviews").click()
//search field
    cy.get('[placeholder="Search"]').type("2022 Ford Explorer Limited")
    cy.contains("").should("exist")

    }
    export const Search_Review_Ivalid_CustomerName  =() => {
        cy.contains("8. Reviews").click()
    //search field
        cy.get('[placeholder="Search"]').type("Khan")
        cy.contains("There are no records to display").should("exist")
        }