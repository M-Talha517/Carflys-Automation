

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
export const Chatwith_Admin =()=>{
// Seller Side Chat

   // search 
    cy.contains("7. Chats").click()
    cy.get('[placeholder="Search Users"]').type("Mister")
    cy.contains("Mister Admin").should("exist")

    cy.get(".mantine-6po0a8").find("div").first().contains("Mister").click()
    cy.get('[placeholder="Type a message..."]').type("Helllow Adim")
    cy.get("button").contains("Send").click()

// Admin side Chat

 //search
cy.contains("12. Chats").click()
cy.get('[placeholder="Search Users"]').type("Sana")
cy.contains("Sana").should("exist")

cy.get(".mantine-6po0a8").find("div").first().contains("Sana").click()
cy.get('[placeholder="Type a message..."]').type("Yes Seller")
cy.get("button").contains("Send").click()

}

    