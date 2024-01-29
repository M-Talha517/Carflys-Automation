import { customer_login } from "./Admin/Add data.cy"
import { Vehicle_order_Cash } from "./Vehicle Order/Order by Cash.cy"
import { Vehicle_order_Finance } from "./Vehicle Order/Order by financing.cy"

describe("Vehicle Order", ()=>{
    beforeEach(()=>{
        cy.viewport(1200, 790)
    })
    //  it("Making Order by financing with Carflys",()=>{
    //     cy.visit('/buy/vehicle/*')
    //     cy.contains("Login").click()
    //     customer_login()
    //    Vehicle_order_Finance()


    //  })
     it("Making Order by Cash with Carflys",()=>{
        cy.visit('/buy/vehicle/*')
        cy.contains("Login").click()
        customer_login()
        Vehicle_order_Cash()


     })

})