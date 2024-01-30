import {faker} from "@faker-js/faker"
import { backendURL } from "../Seller/extras"

//// Sign Up Form data /////
const sign_up_email = faker.internet.email()                    //"Aziz@gmail.com"
//const sign_up_email = "Aziz@gmail.com"
const first_name = faker.name.firstName()                    // "Abdul"
const last_name =  faker.name.lastName()                     //"Aziz"
const user_type = "Seller"
///// Login Data ////
const customer_email ="customer001@gmail.com"
const employee_email ="Shah@gmail.com"
const Admin_email= "admin@gmail.com"
const user_email = "gmd@gmail.com"
const user_password = "Carflys@123"
//// Wait ////
const millisecond = 1
const second = 1000
const minute = 60000
const x= user_email
                   ///// Sign Up //////
 export const signup = () => {
    cy.contains("Login").click()
    cy.contains("Register Here").click()
    cy.get('[placeholder="User Type"]').type(user_type, { force: true })
    cy.contains(user_type).click()
    cy.get('[placeholder="Enter First Name"]').type(first_name)
    cy.get('[placeholder="Enter Last Name"]').type(last_name)
    cy.get('[placeholder="Enter Cell Number"]').type("+1(372)-873-8728")
    // cy.get('[placeholder="Enter Email"]').as('email')
    // cy.wait('@email')
    cy.get('[placeholder="Enter Email"]').type(sign_up_email)
    cy.get('[placeholder="Enter Password"]').type("Carflys@123")
    cy.wait(5* second)
    cy.get('[placeholder="Confirm Password"]').type("Carflys@123")
    cy.wait(5* second)
    cy.contains('Sign up').click()

}
                                      ///// forget //////
export const forget= () =>{
    cy.contains('Forgot Password?').click()
    cy.get('[placeholder="Enter Email"]').type('usama@gmail.com')
    cy.contains('Continue').click()
}
                                           ///// login /////
export const login = () => {
   cy.wait(10* second)
// Email
    cy.get('[placeholder="Enter Email"]').type(sign_up_email)   
// Password
    cy.get('[placeholder="Enter Password"]').type(user_password)
    cy.get('[type="submit"]').click()
 }

 export const login2 = () => {
    cy.intercept('POST', `${backendURL}/auth/login`).as('Login Successfully')
   // cy.wait(2* second)
 // Email
     cy.get('[placeholder="Enter Email"]').type(x)    
 // Password
     cy.get('[placeholder="Enter Password"]').type(user_password)
     cy.get('[type="submit"]').click()
     cy.wait(5*second)
     cy.contains("Dashboard")
     cy.contains("Login successful.").should("exist")        ///////Invalid Password
     //cy.url().should('eq', 'https://carflys-testing.vercel.app/dashboard')
     cy.wait("@Login Successfully").its('response.statusCode').should('eq', 200);
  }
  export const Admin_login = () => {
    cy.intercept('POST', `${backendURL}/auth/login`).as('Login Successfully')
    //cy.wait(10* second)
 // Email
     cy.get('[placeholder="Enter Email"]').type(Admin_email)    
 // Password
     cy.get('[placeholder="Enter Password"]').type(user_password)
     cy.get('[type="submit"]').click()
     cy.contains("Dashboard")
     cy.contains("Login successful.").should("exist")        
    // cy.url().should('eq', '/dashboard')
     cy.wait("@Login Successfully").its('response.statusCode').should('eq', 200);
  }
  
  export const Employee_login = () => {
    cy.intercept('POST', `${backendURL}/auth/login`).as('Login Successfully')
    //cy.wait(10* second)
 // Email
     cy.get('[placeholder="Enter Email"]').type(employee_email)    
 // Password
     cy.get('[placeholder="Enter Password"]').type(user_password)
     cy.get('[type="submit"]').click()
     cy.wait(5*second)
     cy.contains("Dashboard")
     cy.contains("Login successful.").should("exist")        ///////Invalid Password
     //cy.url().should('eq', 'https://carflys-testing.vercel.app/dashboard')
     cy.wait("@Login Successfully").its('response.statusCode').should('eq', 200);
  }
  export const customer_login = () => {
    cy.intercept('POST', `${backendURL}/auth/login`).as('Login Successfully')
    //cy.wait(10* second)
 // Email
     cy.get('[placeholder="Enter Email"]').type(customer_email)    
 // Password
     cy.get('[placeholder="Enter Password"]').type(user_password)
     cy.get('[type="submit"]').click()
     cy.wait(5*second)
     cy.contains("Dashboard")
     cy.contains("Login successful.").should("exist")        ///////Invalid Password
     //cy.url().should('eq', 'https://carflys-testing.vercel.app/dashboard')
     cy.wait("@Login Successfully").its('response.statusCode').should('eq', 200);
  }


  export const Invalidloginwithpass = () => {
    //cy.wait(10* second)
 // Email
     cy.get('[placeholder="Enter Email"]').type("usama@gmail.com")    
 // Password
     cy.get('[placeholder="Enter Password"]').type("Carflys@12345")
     cy.get('[type="submit"]').click()
     cy.wait(5*second)
     cy.contains("Invalid password.").should("not.exist")        ///////Invalid Password
     //cy.url().should('eq', 'https://carflys-frontend-new-dev.vercel.app/auth/login')
  }


                                     /////////// 5.View Services //////
export const ViewServices =() =>{

   cy.contains("5. View Services").click()
//edit data 
   cy.get(".rdt_TableBody").find("div").first().find(".icon-tabler-pencil").click()
        //// enter Update service data/////
//service name
   cy.get('[placeholder="Enter Service Name"]').clear().type("Credit Disability")
//service typeqqqq
   cy.get('[placeholder="Select Service Type"]').click()
      cy.contains("Credit Disability").click()
//service enter price
    cy.get('[placeholder="Enter Price"]').clear().type("466")
//service enter validation period
    cy.get('[placeholder="Enter Validation Period"]').clear().type("12")
//service enter description  
    cy.get('[placeholder="Enter Service Description"]').clear().type("Service12")
//service update button
    cy.get('[type="submit"]').click()
}
               
export const logout =()=>{

   cy.get(".mantine-1ukqe5l").click()
    cy.contains("Logout").click()
}
