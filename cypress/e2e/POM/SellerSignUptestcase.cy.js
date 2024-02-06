import { Viewdealership_AdminApproval } from "./Admin/3-Dealership.cy"
import { Admin_login, login, logout, signup } from "./Admin/Add data.cy"
import { SellerSignup } from "./Seller SignUp.cy"

describe("Seller", ()=>{
    beforeEach(()=>{
      cy.visit("https://carflys-testing.vercel.app/")
     //cy.visit("https://carflys-dev.vercel.app/")
       cy.contains("Login").click()
       cy.wait(3000)
     })

     it("Seller SignUp Flow",()=>{
    //   signup()
    //   cy.pause()
      login()

      SellerSignup()
      Admin_login()
      Viewdealership_AdminApproval()
      logout()
      login()

     })
    })