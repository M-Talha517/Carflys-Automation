import { logout } from "../Admin/Add data.cy"


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
export const Chatwith_Seller_To_Admin =()=>{
// Seller Side Chat

   // search 
    cy.contains("7. Chats").click()
    cy.get('[placeholder="Search Users"]').type("Mister")
    cy.contains("Mister Admin").should("exist")

    cy.get(".mantine-6po0a8").find("div").first().contains("Mister").click()
    cy.get('[placeholder="Type a message..."]').type("Helllow Adim")
    cy.get("button").contains("Send").click()
    
}
// Admin side Chat
export const Chatwith_Admin_To_Seller =()=>{
  //search
  cy.get("button").contains("12. Chats").click()
  cy.get('[placeholder="Search Users"]').type("GMD")
  cy.contains("GMD").should("exist")
  
  cy.get(".mantine-6po0a8").find("div").first().contains("GMD").click()
  cy.get('[placeholder="Type a message..."]').type("Yes GMD")
  cy.get("button").contains("Send").click()
}

export const Chatwith_Seller_To_Employee =()=>{
    // Seller Side Chat
    
       // search 
        cy.contains("7. Chats").click()
        cy.get('[placeholder="Search Users"]').type("Shah")
        cy.contains("Shah Rukh").should("exist")
    
        cy.get(".mantine-6po0a8").find("div").first().contains("Shah Rukh").click()
        cy.get('[placeholder="Type a message..."]').type("Hellow Customer")
        cy.get("button").contains("Send").click()
        
    }
export const Chatwith_Employee_To_Seller =()=>{
        // Employee Side Chat
           // search 
            cy.contains("2. Chats").click()
            cy.get('[placeholder="Search Users"]').type("GMD")
            cy.contains("GMD khan").should("exist")
        
            cy.get(".mantine-6po0a8").find("div").first().contains("GMD khan").click()
            cy.get('[placeholder="Type a message..."]').type("Yes Gmd")
            cy.get("button").contains("Send").click()
        }

  
    