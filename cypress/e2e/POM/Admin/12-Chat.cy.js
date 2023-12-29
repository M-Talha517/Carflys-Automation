import { backendURL } from "../Seller/extras"
//// Wait ////
const millisecond = 1
const second = 1000
const minute = 60000

export const Admin_Chat_Search_UserName =() => {
    cy.contains("12. Chats").click()
//search field
    cy.get('[placeholder="Search Users"]').type("Shah")
    cy.contains("Shah").should("exist")
    }
    // Admin side Chat
export const Chatwith_Admin_To_Seller =()=>{
    cy.fixture('13.jpeg', {encoding: null}).as('image')
    //search
    cy.get("button").contains("12. Chats").click()
    cy.get('[placeholder="Search Users"]').type("GMD")
    cy.contains("GMD").should("exist")
    
    cy.get(".mantine-6po0a8").find("div").first().contains("GMD").click()
    cy.get('[placeholder="Type a message..."]').type("Hello GMD")    
    cy.get('input[type="file"]').invoke("show").selectFile("@image")
    cy.get("button").contains("Send").click()
    cy.wait(3000)
  }
  export const Admin_Chatwith_Seller_To_Admin=()=>{
    // Seller Side Chat
       // search
       cy.fixture('13.jpeg', {encoding: null}).as('image')
        cy.contains("7. Chats").click()
        cy.get('[placeholder="Search Users"]').type("Mister")
        cy.contains("Mister Admin").should("exist")
    
        cy.get(".mantine-6po0a8").find("div").first().contains("Mister").click()
        cy.get('[placeholder="Type a message..."]').type("yes Adim")
        cy.get('input[type="file"]').invoke("show").selectFile("@image")
        cy.get("button").contains("Send").click()
    }
    export const Chatwith_Admin_To_Seller_ImageSending =()=>{
        cy.fixture('13.jpeg', {encoding: null}).as('image')
        //search b  
        cy.get("button").contains("12. Chats").click()
        cy.get('[placeholder="Search Users"]').type("GMD")
        cy.contains("GMD").should("exist")
        
        cy.get(".mantine-6po0a8").find("div").first().contains("GMD").click()
        cy.get('[placeholder="Type a message..."]').type("Hello GMD")    
        cy.get('input[type="file"]').invoke("show").selectFile("@image")
        cy.get("button").contains("Send").click()
        cy.wait(3000)
      }
      export const Chatwith_Admin_To_Seller_VideoSending =()=>{
        cy.fixture('video1.mp4', {encoding: null}).as('video')
        //search
        cy.get("button").contains("12. Chats").click()
        cy.get('[placeholder="Search Users"]').type("GMD")
        cy.contains("GMD").should("exist")
        
        cy.get(".mantine-6po0a8").find("div").first().contains("GMD").click()
        cy.get('[placeholder="Type a message..."]').type("Hello GMD")    
        cy.get('input[type="file"]').invoke("show").selectFile("@video")
        cy.get("button").contains("Send").click()
        cy.wait(3000)
      }
      export const Chatwith_Admin_To_Seller_DocumentSending =()=>{
        cy.fixture('TEST PDF FILE.pdf', {encoding: null}).as('document')
        //search
        cy.get("button").contains("12. Chats").click()
        cy.get('[placeholder="Search Users"]').type("GMD")
        cy.contains("GMD").should("exist")
        
        cy.get(".mantine-6po0a8").find("div").first().contains("GMD").click()
        cy.get('[placeholder="Type a message..."]').type("Hello GMD")    
        cy.get('input[type="file"]').invoke("show").selectFile("@document")
        cy.get("button").contains("Send").click()
        cy.wait(3000)
      }