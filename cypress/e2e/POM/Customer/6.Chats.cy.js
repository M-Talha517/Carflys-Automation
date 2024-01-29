import { backendURL } from "../Seller/extras"
//// Wait ////
const millisecond = 1
const second = 1000
const minute = 60000

export const Chat_Search_admin =() => {
  cy.get("button").get(".mantine-Burger-root").click()
  cy.contains("Dashboard").click()
    cy.contains("6. Chats").click()
//search field
    cy.get('[placeholder="Search Users"]').type("Mister")
    cy.contains("Mister Admin").should("exist")
    }
    // Customer side Chat
export const Chatwith_customer_To_Admin =()=>{
    cy.fixture('13.jpeg', {encoding: null}).as('image')

    //search
    cy.get("button").get(".mantine-Burger-root").click()
    cy.contains("Dashboard").click()
    cy.get("button").contains("6. Chats").click()
    cy.get('[placeholder="Search Users"]').type("Mister")
    cy.contains("Mister Admin").should("exist")
    
    cy.get(".mantine-6po0a8").find("div").first().contains("Mister Admin").click()
    cy.get('[placeholder="Type a message..."]').type("Hello GMD")    
    cy.get('input[type="file"]').invoke("show").selectFile("@image")
    cy.get("button").contains("Send").click()
    cy.wait(3000)
  }
  export const Chatwith_Admin_To_Customer=()=>{
    // admin Side Chat
       // search
       cy.fixture('13.jpeg', {encoding: null}).as('image')
        cy.contains("12. Chats").click()
        cy.get('[placeholder="Search Users"]').type("new")
        cy.contains("new customer").should("exist")
    
        cy.get(".mantine-6po0a8").find("div").first().contains("new customer").click()
        cy.get('[placeholder="Type a message..."]').type("yes customer")
        cy.get('input[type="file"]').invoke("show").selectFile("@image")
        cy.get("button").contains("Send").click()
    }
    export const Chatwith_Customer_To_Admin_ImageSending =()=>{
        cy.fixture('13.jpeg', {encoding: null}).as('image')
        //search b  
        cy.get("button").get(".mantine-Burger-root").click()
        cy.contains("Dashboard").click()
        cy.get("button").contains("6. Chats").click()
        cy.get('[placeholder="Search Users"]').type("Mister")
        cy.contains("Mister Admin").should("exist")
        
        cy.get(".mantine-6po0a8").find("div").first().contains("Mister Admin").click()
        cy.get('[placeholder="Type a message..."]').type("Hello")    
        cy.get('input[type="file"]').invoke("show").selectFile("@image")
        cy.get("button").contains("Send").click()
        cy.wait(3000)
      }
      export const Chatwith_Customer_To_Admin_VideoSending =()=>{
        cy.fixture('video1.mp4', {encoding: null}).as('video')
        //search
        cy.get("button").get(".mantine-Burger-root").click()
        cy.contains("Dashboard").click()
        cy.get("button").contains("6. Chats").click()
        cy.get('[placeholder="Search Users"]').type("Mister")
        cy.contains("Mister Admin").should("exist")
        
        cy.get(".mantine-6po0a8").find("div").first().contains("Mister Admin").click()
        cy.get('[placeholder="Type a message..."]').type("Hello admin")    
        cy.get('input[type="file"]').invoke("show").selectFile("@video")
        cy.get("button").contains("Send").click()
        cy.wait(3000)
      }
      export const Chatwith_Customer_To_Admin_DocumentSending =()=>{
        cy.fixture('TEST PDF FILE.pdf', {encoding: null}).as('document')
        //search
        cy.get("button").get(".mantine-Burger-root").click()
        cy.contains("Dashboard").click()
        cy.get("button").contains("6. Chats").click()
        cy.get('[placeholder="Search Users"]').type("Mister")
        cy.contains("Mister Admin").should("exist")
        
        cy.get(".mantine-6po0a8").find("div").first().contains("Mister Admin").click()
        cy.get('[placeholder="Type a message..."]').type("Hello Admin")    
        cy.get('input[type="file"]').invoke("show").selectFile("@document")
        cy.get("button").contains("Send").click()
        cy.wait(3000)
      }