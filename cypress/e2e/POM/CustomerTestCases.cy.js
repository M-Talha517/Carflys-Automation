import { addcomplaint_NoData, addcomplaint_Order_dropdown, addcomplaint_ResetButton, addcomplaint_ValidData, viewcomplaint_ClearSearchButtton, viewcomplaint_Search_CarNAme, viewcomplaint_Search_ComplaintTitle, viewcomplaint_Search_OrderNo, viewcomplaint_View_IconButton, viewcomplaint_View_ModalCloseButton } from "./Customer/3.Complaints.cy"
import { Admin_login, customer_login, logout } from "./Admin/Add data.cy"
import { customer_Order_ClearFilterButton, customer_Search_Order_VehicleName, customer_Search_Order_VinNO, customer_order_Filter_BY_Status, customer_order_View_IconButton, customer_order_View_ModalCloseButton } from "./Customer/2.order.cy"
import { viewReview_ClearSearch_button, viewReview_ModalClose_Button, viewReview_Search_CarName, viewReview_Search_OrderNo, viewReview_view_IconButton } from "./Customer/4.Reviews.cy"
import { Filters_Payment, Payment_ClearFilterButton, Search_Payment_InValid_VinNo, Search_Payment_VehicleName, Search_Payment_VinNo } from "./Customer/5.Payments.cy"
import { Chat_Search_admin, Chatwith_Admin_To_Customer, Chatwith_Customer_To_Admin_DocumentSending, Chatwith_Customer_To_Admin_ImageSending, Chatwith_Customer_To_Admin_VideoSending, Chatwith_customer_To_Admin } from "./Customer/6.Chats.cy"
import { Password_BlankField, Password_UpdateValid, Password_WrongPassword, Password_didNot_Match, Profile_InValidZip_Code, Profile_Update_BlankField, Profile_Update_ValidData, Profile_ValidZip_Code } from "./Customer/7.Settings.cy"

describe("Customer Side",()=>{

    beforeEach(()=>{
        cy.viewport(1305, 790)
    })
    describe("2-Orders",()=>{
        describe("2.2-filters", ()=>{
            it("2.2-Filters by status Check functionality(TTP)",()=>{
                cy.visit('/dashboard/stats-details')
                cy.contains("Login").click()
                customer_login()
                customer_order_Filter_BY_Status()
            })
        })
        describe("2.3-Search",()=>{
            it("2.3.1-Search by Valid VIN(TTP)",()=>{
                cy.visit('/dashboard/stats-details')
                cy.contains("Login").click()
                customer_login()
                customer_Search_Order_VinNO()
            })
            it("2.3.2-Search by Vehicle Name(TTP)",()=>{
                cy.visit('/dashboard/stats-details')
                cy.contains("Login").click()
                customer_login()
                customer_Search_Order_VehicleName()
            })
            it("2.4-Clear filter button",()=>{
               cy.visit('/dashboard/stats-details')
                cy.contains("Login").click()
                customer_login()
                 customer_Order_ClearFilterButton()

            })
        })
        describe("2.5-table list view",()=>{
           it("2.5.1-View Icon functionality check(TTP)",()=>{
            cy.visit('/dashboard/stats-details')
            cy.contains("Login").click()
            customer_login()
            customer_order_View_IconButton()
           })
           it("2.5.1.2-Close Button On View Modal Funtcionlity check(TTP)",()=>{
            cy.visit('/dashboard/stats-details')
            cy.contains("Login").click()
            customer_login()
            customer_order_View_ModalCloseButton()
           })
        })
      
 })
  describe("3.Complaints",()=>{
      describe("3.1-Add Complaints",()=>{
      it("3.1.1-Add Complaint with no data(TTF)",()=>{
        cy.visit('/dashboard/add-complaint')
        cy.contains("Login").click()
        customer_login()
         addcomplaint_NoData()
         })

         it("3.1.2-Add Complaint with Valid Data(TTP)",()=>{
            cy.visit('/dashboard/add-complaint')
            cy.contains("Login").click()
            customer_login()
            addcomplaint_ValidData()
             })

             it("3.1.3-Reset button check functionality(TTP)",()=>{
                cy.visit('/dashboard/add-complaint')
                cy.contains("Login").click()
                customer_login()
                 addcomplaint_ResetButton()
                 })
                 it("3.1.4-Select order by Drop down list(TTP)",()=>{
                    cy.visit('/dashboard/add-complaint')
                    cy.contains("Login").click()
                    customer_login()
                    addcomplaint_Order_dropdown()

                     })
      })
      describe("3.2-View Complaint", ()=>{
         describe("3.2.1-Search",()=>{
         it("3.2.1.1-Search Complaint by Car-Name(TTP)",()=>{
            cy.visit('/dashboard/add-complaint')
            cy.contains("Login").click()
            customer_login()
            viewcomplaint_Search_CarNAme()
         })
         it("3.2.1.2-Search Complaint by Complaint Title(TTP)",()=>{
            cy.visit('/dashboard/add-complaint')
            cy.contains("Login").click()
            customer_login()
            viewcomplaint_Search_ComplaintTitle()
         })
         it("3.2.1.3-Search Complaint by Order-No(TTP)",()=>{
            cy.visit('/dashboard/add-complaint')
            cy.contains("Login").click()
            customer_login()
            viewcomplaint_Search_OrderNo()
         })
          it("3.2.3-View icon in Action functionality check(TTP)",()=>{
            cy.visit('/dashboard/add-complaint')
            cy.contains("Login").click()
            customer_login()
            viewcomplaint_View_IconButton()
           })
          it("3.2.3.1-Close Button on view Modal(TTP)",()=>{
            cy.visit('/dashboard/add-complaint')
            cy.contains("Login").click()
            customer_login()
            viewcomplaint_View_ModalCloseButton()

          })
          it("3.2.4-Clear Search Button functionality check(TTP)",()=>{
            cy.visit('/dashboard/add-complaint')
            cy.contains("Login").click()
            customer_login()
           viewcomplaint_ClearSearchButtton()

          })
        })
        
      })


 })
  describe("4.Reviews",()=>{
      describe("4.1-Search",()=>{
        it("4.1.1-Search Review By Car-Name(TTP)",()=>{
            cy.visit('/dashboard/reviews')
            cy.contains("Login").click()
            customer_login()
            viewReview_Search_CarName()
        })
        it("4.1.2-Search Review by Order no(TTP)",()=>{
            cy.visit('/dashboard/reviews')
            cy.contains("Login").click()
            customer_login()
            viewReview_Search_OrderNo()
        })
      })
      it("4.2-Clear Search Button functionality(TTP)",()=>{
        cy.visit('/dashboard/reviews')
        cy.contains("Login").click()
        customer_login()
        viewReview_ClearSearch_button()
      })

      it("4.4-View Icon functionality check(TTP)",()=>{
        cy.visit('/dashboard/reviews')
        cy.contains("Login").click()
        customer_login()
        viewReview_view_IconButton()
      })
      it("4.4.1-Close Button On View Modal Functionality check(TTP",()=>{
        cy.visit('/dashboard/reviews')
        cy.contains("Login").click()
        customer_login()
        viewReview_ModalClose_Button()
      })
 })
  describe("5.Payments",()=>{
   describe("5.1-Search",()=>{
           it("5.1.1-Search by Valid VIN(TTP)",()=>{ 
            cy.visit('/dashboard/payments')
            cy.contains("Login").click()
            customer_login()
            Search_Payment_VinNo()
           })
           it("5.1.2-Search by Vehicle Title(TTP)",()=>{ 
            cy.visit('/dashboard/payments')
            cy.contains("Login").click()
            customer_login()
            Search_Payment_VehicleName()
           })
           it("5.1.3-Search by Invalid VIN(TTF)",()=>{ 
            cy.visit('/dashboard/payments')
            cy.contains("Login").click()
            customer_login()
            Search_Payment_InValid_VinNo()
           })
        describe("5.2-Filter",()=>{
               it("5.2.1-Filter by status functionality(TTP)",()=>{
                cy.visit('/dashboard/payments')
                cy.contains("Login").click()
                customer_login()
                Filters_Payment()

               })
          it("5.3-Clear Filter Button functionality Check(TTP)",()=>{
            cy.visit('/dashboard/payments')
            cy.contains("Login").click()
            customer_login()
            Payment_ClearFilterButton()

          })
        })
       })
       })
  describe("6.Chats",()=>{
          it("6.1-Customer Can Search-Bar with Admin(TTP)",()=>{
          cy.visit('/dashboard/chat')
          cy.contains("Login").click()
          customer_login()
          Chat_Search_admin()

         })
          it("6.2-Customer Can Chat with Admin(TTP)",()=>{
          cy.visit('/dashboard/chat')
          cy.contains("Login").click()
          customer_login()
          Chatwith_customer_To_Admin()
          logout()
          Admin_login()
          Chatwith_Admin_To_Customer()
        })
            // it("6.3-Customer gets notified on Receving a Chat(TTP)",()=>{
           //   cy.visit('/dashboard/chat')
           //   cy.contains("Login").click()
           //   customer_login()
          // })
          describe("6.4-Media Sending ",()=>{
            it("6.4.1-User can Send a Picture(TTP)",()=>{
              cy.visit('/dashboard/chat')
              cy.contains("Login").click()
              customer_login()
              Chatwith_Customer_To_Admin_ImageSending()
        
            })
            it("6.4.2-User can send a Video(TTP)",()=>{
              cy.visit('/dashboard/chat')
              cy.contains("Login").click()
              customer_login()
              Chatwith_Customer_To_Admin_VideoSending()
        
             })
             it("6.4.3-User can send a Document(TTP)",()=>{
              cy.visit('/dashboard/chat')
              cy.contains("Login").click()
              customer_login()
              Chatwith_Customer_To_Admin_DocumentSending()
            })
          })
      })
  describe("7.Settings",()=>{
       describe("7.1-Profile",()=>{
        it("7.1.1-Update Profile with no data(TTF)",()=>{
          cy.visit('/dashboard/settings')
          cy.contains("Login").click()
          customer_login()
          Profile_Update_BlankField()
    
        })
        it("7.1.2-Update Profile with Valid Data(TTP)",()=>{
          cy.visit('/dashboard/settings')
          cy.contains("Login").click()
          customer_login()
          Profile_Update_ValidData()
    
        })
        it("7.1.3-Update Profile with Valid Zip-Code(TTP)",()=>{
          cy.visit('/dashboard/settings')
          cy.contains("Login").click()
          customer_login()
          Profile_ValidZip_Code()
    
        })
        it("7.1.4-Update Profile with Invalid Zip-code(TTF)",()=>{
          cy.visit('/dashboard/settings')
          cy.contains("Login").click()
          customer_login()
           Profile_InValidZip_Code()
        })
       })
       describe("7.2-Password", ()=>{
        it("7.2.1-Update Password with Blank Fields(TTF)",()=>{
          cy.visit('/dashboard/settings')
          cy.contains("Login").click()
          customer_login()
          Password_BlankField()
    
        })
        it("7.2.2-Update Password via Wrong Old Password(TTF)",()=>{
          cy.visit('/dashboard/settings')
          cy.contains("Login").click()
          customer_login()
          Password_WrongPassword()
    
        })
        it.skip("7.2.3-Update Password via Valid Data(TTP)",()=>{
          cy.visit('/dashboard/settings')
          cy.contains("Login").click()
          customer_login()
          Password_UpdateValid()
    
        })
        it("7.2.4-Update Password via different password in New Password and Confirm Password Fields(TTF)",()=>{
          cy.visit('/dashboard/settings')
          cy.contains("Login").click()
          customer_login()
          Password_didNot_Match()
        })
       })
  })


})
