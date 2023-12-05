const millisecond = 1
const second = 1000
const minute = 60000 

    export const Search_Order_VinNO  =() => {

    cy.contains("4. Orders").click()
//search field
    cy.get('[placeholder="Search"]').type("1FMSK8FH8NGB68090")
    cy.contains("FMSK8FH8NGB68090").should("exist")
    }
    export const Search_Order_VehicleName  =() => {
        cy.contains("4. Orders").click()
    //search field
        cy.get('[placeholder="Search"]').type("2022 Ford Explorer Limited")
    //filters
        cy.get('[placeholder="Filter by Status"]').click()
           cy.contains("Direct Payment Paid").click
        cy.contains("2022 Ford Explorer Limited").should("exist")
        }
    export const Search_Order_InValid_VinNO =() => {
            cy.contains("4. Orders").click()
        //search field
            cy.get('[placeholder="Search"]').type("1FMSK8FH8NH668090")
            cy.contains("There are no records to display").should("exist")
            }
    export const Filter_BY_Status  =() => {

                cy.contains("4. Orders").click()
         //search field
               cy.get('[placeholder="Search"]').type("1FMSK8FH8NGB68090")
         //filters
                cy.get('[placeholder="Filter by Status"]').click()
                   cy.contains("Direct Payment Paid")
                cy.contains("Direct Payment Paid").should("exist")
            }