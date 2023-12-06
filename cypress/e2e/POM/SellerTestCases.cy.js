
import { logout } from "./Admin/Add data.cy"
import { login2 } from "./Admin/Add data.cy"
import { SellerSignup } from "./Seller SignUp.cy"
import { ViewExpense_Search_InValid_VinNo, ViewExpense_Search_VehicleName, ViewExpense_Search_VinNo, addExpense_BlankData, addExpense_ExpenseType_DropDown, addExpense_ValidData, addExpense_Vehicle_DropDown } from "./Seller/Accounting/Expense.cy"
import { ViewRevenue_Search_VehicleName, ViewRevenue_Search_VinNo, addRevenue_Blank_filed, addRevenue_DropDown_List, addRevenue_Valid_Data } from "./Seller/Accounting/Revenue.cy"
import { ViewProfit_Search_InValid_VinNo, ViewProfit_Search_Valid_VinNo } from "./Seller/Accounting/ViewProfit.cy"
import { Search_Order_VinNO,Search_Order_InValid_VinNO,Search_Order_VehicleName,Filter_BY_Status } from "./Seller/Order.cy"
import { Filters_Payment, Search_Payment_InValid_VinNo, Search_Payment_VehicleName, Search_Payment_VinNo } from "./Seller/Payment.cy"
import { Dealership_BlankField, Dealership_UpdateData, Password_BlankField, Password_UpdateValid, Password_WrongPassword, Password_didNot_Match, Profile_InValidZip_Code, Profile_Update_BlankField, Profile_Update_ValidData, Profile_ValidZip_Code } from "./Seller/Settings.cy"
import { SellerLogin, addvehicle1,addvehicle2,addvehicle3, addvehicle4,AddvehicleImage, AddvehiclePdf,Search_InValid_VinNO,Search_Valid_VinNO } from "./Seller/Vehicle.cy"

//////// Test Cases //////////////
                      //  (TC#3.1.1.1.5-TTP) should add and view Vehicle with valid data
describe('Seller', function () {
      
       describe("3-Vhecile", function (){
        describe("3.1-Add Vehicle",function (){
            describe("3.1.1-Steppers Add Vehicles",function (){
                describe("3.1.1.1-Vehicle Info Form",function(){

                    it.only("3.1.1.1.1-Add Vehicle with Blank Field (TTF)", ()=>{
                        cy.visit('https://carflys-testing.vercel.app/')
                        cy.contains("Login").click()
                        login2()
                        addvehicle2()
                    })
                    
                    it("3.1.1.1.2-Add Vehicle with InValid No (TTF)", ()=>{
                        cy.visit('https://carflys-testing.vercel.app/')
                        cy.contains("Login").click()
                        login2()
                        addvehicle3()
                    })
                    it(".3.1.1.1.3-Vin  No text field lenght (TTF)", ()=>{
                        cy.visit('https://carflys-testing.vercel.app/')
                        cy.contains("Login").click()
                        login2()
                        addvehicle4()
                    })
                    it("3.1.1.1.4-Add Vehicle form with Valid Data (TTP)", ()=>{
                    cy.visit('https://carflys-testing.vercel.app/')
                    cy.contains("Login").click()
                    login2()
                    SellerLogin()
                 })
                   it("3.1.1.1.5-Add Vehicle with Already Exist (TTF)", ()=>{
                    cy.visit('https://carflys-testing.vercel.app/')
                    cy.contains("Login").click()
                    login2()
                    addvehicle1()
                })
              describe("3.1.1.3-Images and Model",function() {
            describe("3.1.1.3.1-Files Drag and Drop",function (){
                it("3.1.1.3.1.1-Images Drag and drop functionality check (TTP)", ()=>{
                    cy.visit('https://carflys-testing.vercel.app/')
                    cy.contains("Login").click()
                    login2()
                    AddvehicleImage()
                })
                it("3.1.1.3.1.2-Pdf file drag and Drop functionality check (TTF)", ()=>{
                    cy.visit('https://carflys-testing.vercel.app/')
                    cy.contains("Login").click()
                    login2()
                    AddvehiclePdf()
                })
            
            })
        })
        
    })
}) 
 })
        describe("3.2-View Vehicle", function (){
    describe("3.2.2- Search",function(){
        it("3.2.2.1-Serching with Vehicle Vin No (TTP)", ()=>{
            cy.visit('https://carflys-testing.vercel.app/')
            cy.contains("Login").click()
            login2()
            Search_Valid_VinNO()
        })
        it("3.2.2.2-Serching with Vehicle Vin No (TTP)", ()=>{
            cy.visit('https://carflys-testing.vercel.app/')
            cy.contains("Login").click()
            login2()
            Search_InValid_VinNO()
        })
    })
})
    })
       describe("4-Order", function (){

    describe("4.2-Search", function (){
        it("4.2.1-Serching with Vehicle Vin No(TTP)", ()=>{
            cy.visit('https://carflys-testing.vercel.app/')
            cy.contains("Login").click()
            login2()
            Search_Order_VinNO()
        })
        it("4.2.2-Serching with Vehicle Name(TTP)", ()=>{
            cy.visit('https://carflys-testing.vercel.app/')
            cy.contains("Login").click()
            login2()
            Search_Order_VehicleName()
        })
        it("4.2.3-Serching with Vehicle InValid Vin NO(TTP)", ()=>{
            cy.visit('https://carflys-testing.vercel.app/')
            cy.contains("Login").click()
            login2()
            Search_Order_InValid_VinNO()
        })
    })
    describe("4.3-filer", function(){

        it("4.3.1-filters by status fuctionality check(TTP)", ()=>{
            cy.visit('https://carflys-testing.vercel.app/')
            cy.contains("Login").click()
            login2()
            Filter_BY_Status()
        })

    })
   })
       describe("5-Payments", function (){

    describe("5.1-Search", function(){
        it("5.1.1-Search With Vin No (TTP)", ()=>{
            cy.visit('https://carflys-testing.vercel.app/')
            cy.contains("Login").click()
            login2()
            Search_Payment_VinNo()
           
        })
        it("5.1.2-Search with Vehicle name (TTP)", ()=>{
            cy.visit('https://carflys-testing.vercel.app/')
            cy.contains("Login").click()
            login2()
            Search_Payment_VehicleName()
        })
        it("5.1.3-Search With InVakid Vin No (TTP)", ()=>{
            cy.visit('https://carflys-testing.vercel.app/')
            cy.contains("Login").click()
            login2()
            Search_Payment_InValid_VinNo()
        })

    })
    describe("5.2-Filters", function(){
        it("5.2.1-Filter by status(TTP)", ()=>{
            cy.visit('https://carflys-testing.vercel.app/')
            cy.contains("Login").click()
            login2()
            Filters_Payment()
        })
    
    })
   })
       describe("6-Accounting", function(){
           describe("Revenue",function(){
        describe("6.1-Add Revenue",function(){
            it("6.1.1-Add Button with Blank Field (TTF)", ()=>{
                cy.visit('https://carflys-testing.vercel.app/')
                cy.contains("Login").click()
                login2()
                addRevenue_Blank_filed()
            })
            it("6.1.2-Add Vehicle Drop down List (TTP)", ()=>{
                cy.visit('https://carflys-testing.vercel.app/')
                cy.contains("Login").click()
                login2()
                addRevenue_DropDown_List()
            })
            it("6.1.3-Add Revenue with Valid Data(TTP)", ()=>{
                cy.visit('https://carflys-testing.vercel.app/')
                cy.contains("Login").click()
                login2()
                addRevenue_Valid_Data()
    
            })
    
          })
        describe("6.2-View Revenue",function(){
            describe("6.2.1-Search", function (){
                it(" 6.2.1.1-Search With Vin No (TTP)", ()=>{
                    cy.visit('https://carflys-testing.vercel.app/')
                    cy.contains("Login").click()
                    login2()
                    ViewRevenue_Search_VinNo()
                })
                it(" 6.2.1.2-Search With Vehicle Name (TTP)", ()=>{
                    cy.visit('https://carflys-testing.vercel.app/')
                    cy.contains("Login").click()
                    login2()
                    ViewRevenue_Search_VehicleName()
                })
               
    
            })
    
          })

    })
           describe("Expense",function(){
        describe("6.3-Add Revenue",function(){
            it("6.3.1-Add Expense With Blank Field (TTF)", ()=>{
                cy.visit('https://carflys-testing.vercel.app/')
                cy.contains("Login").click()
                login2()
                addExpense_BlankData()
            })
            it("6.3.2-Add Vehicle Drop down List (TTP)", ()=>{
                cy.visit('https://carflys-testing.vercel.app/')
                cy.contains("Login").click()
                login2()
                addExpense_Vehicle_DropDown()
            })
            it("6.3.3-Add Expense type Drop down List (TTP)", ()=>{
                cy.visit('https://carflys-testing.vercel.app/')
                cy.contains("Login").click()
                login2()
                addExpense_ExpenseType_DropDown()
            })
            it("6.3.4-Add Expense with Valid Data(TTP)", ()=>{
                cy.visit('https://carflys-testing.vercel.app/')
                cy.contains("Login").click()
                login2()
                addExpense_ValidData()
            })
        

          })
        describe("6.4-View Expense", function(){
            describe("6.4.1-Search", function (){
                it("6.4.1.1-Search With Vin No (TTP)", ()=>{
                    cy.visit('https://carflys-testing.vercel.app/')
                    cy.contains("Login").click()
                    login2()
                    ViewExpense_Search_VinNo()
                })
                it("6.4.1.2-Search With Vehicle Name (TTP)", ()=>{
                    cy.visit('https://carflys-testing.vercel.app/')
                    cy.contains("Login").click()
                    login2()
                    ViewExpense_Search_VehicleName()
                })
                it("6.4.1.3-Search with Inavalid Vin No or Vehicle name (TTF)", ()=>{
                    cy.visit('https://carflys-testing.vercel.app/')
                    cy.contains("Login").click()
                    login2()
                    ViewExpense_Search_InValid_VinNo()
                })
               
    
         })
        })
    })
           describe("6-View Profit Report",function(){
        describe("6.5.1-Search", function (){
            it("6.5.1.1-Serching with Vin No(TTP)", ()=>{
                cy.visit('https://carflys-testing.vercel.app/')
                cy.contains("Login").click()
                login2()
                ViewProfit_Search_Valid_VinNo()
            })
            it("6.5.1.2-Searching with Invalid Vin no (TTF)", ()=>{
                cy.visit('https://carflys-testing.vercel.app/')
                cy.contains("Login").click()
                login2()
                ViewProfit_Search_InValid_VinNo()
            })
     })
    })

   })
           describe("10.Settings", function(){
          describe("10.1-Profile", function(){
        it("10.1.1-Update button with Blank field (TTF)", ()=>{
            cy.visit('https://carflys-testing.vercel.app/')
            cy.contains("Login").click()
            login2()
            Profile_Update_BlankField()
        })
        it("10.1.2-Update Valid Data (TTP) ", ()=>{
            cy.visit('https://carflys-testing.vercel.app/')
            cy.contains("Login").click()
            login2()
            Profile_Update_ValidData()
        })
        it("10.1.3-Enter Valid Zip Code (TTP)", ()=>{
            cy.visit('https://carflys-testing.vercel.app/')
            cy.contains("Login").click()
            login2()
            Profile_ValidZip_Code()

        })
         it("10.1.4-Enter Invalid Zip Code (TTF)", ()=>{
            cy.visit('https://carflys-testing.vercel.app/')
            cy.contains("Login").click()
            login2()
            Profile_InValidZip_Code()
        })
         })
          describe("10.2-Password", function(){
            it("10.2.1-Update Button With Blank  (TTF)", ()=>{
                cy.visit('https://carflys-testing.vercel.app/')
                cy.contains("Login").click()
                login2()
                Password_BlankField()
                
            })
            it("10.2.2-Enter wrong passwod in Old Password text Field (TTF)", ()=>{
                cy.visit('https://carflys-testing.vercel.app/')
                cy.contains("Login").click()
                login2()
                Password_WrongPassword()
                
            })
            it("10.2.3-Enter did not match password in text field(TTF)", ()=>{
                cy.visit('https://carflys-testing.vercel.app/')
                cy.contains("Login").click()
                login2()
                Password_didNot_Match()
            })
            it.skip("10.2.4-Enter Valid Password (TTP)", ()=>{
                cy.visit('https://carflys-testing.vercel.app/')
                cy.contains("Login").click()
                login2()
                Password_UpdateValid()
    
            })
            
        
          }) 
          describe("10.3-Dealership", function(){
            it("10.3.1-Update button with Blank field data (TTF)", ()=>{
                cy.visit('https://carflys-testing.vercel.app/')
                cy.contains("Login").click()
                login2()
                Dealership_BlankField()
            })
            it("10.3.2-Update button with Valid data (TTP)", ()=>{
                cy.visit('https://carflys-testing.vercel.app/')
                cy.contains("Login").click()
                login2()
                Dealership_UpdateData()
            })
          })
   })
   

})
