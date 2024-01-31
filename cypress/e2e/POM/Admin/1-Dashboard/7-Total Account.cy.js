/// <reference types="cypress" />
import { backendURL } from "../../Seller/extras"
//// Wait ////
const millisecond = 1
const second = 1000
const minute = 60000


export const TotalAccount_Button = () => {

    cy.contains("1. Dashboard").click()
    cy.wait(3000)
    cy.intercept('GET', `${backendURL}/expense`).as('Accounts found Successfully');

    let totalaccount;
    let allSum = 0;

    cy.contains("Total Accounts").next().invoke('text').then((text) => {
        totalaccount = parseInt(text);

        cy.contains("Total Accounts").parent().parent().parent().click();


        //Expenses Count
        cy.contains("Expenses Count").next().invoke('text').then((text) => {

            allSum += parseInt(text)

            //Revenue Count
            cy.contains("Revenue Count").next().invoke('text').then((text) => {

                allSum += parseInt(text)
                cy.log(totalaccount, allSum)
                expect(totalaccount).to.equal(allSum)

            })
        })
    });
    cy.wait("@Accounts found Successfully").its('response.statusCode').should('eq', 200);
}

export const stats_Expenses_Count = () => {

    cy.contains("1. Dashboard").click()
    cy.wait(3000)
    cy.intercept('GET', `${backendURL}/expense`).as('Accounts found Successfully');
    cy.contains("Total Accounts").parent().parent().parent().click();

    cy.contains("Expenses Count").next().invoke('text').then((text) => {

        const expenseaccount = parseInt(text);


        /// tab Expensse button
        //cy.contains("Expenses").find('[type="button"]').click()

        cy.get(".rdt_Pagination").contains("of", { matchCase: true }).invoke("text").then((text) => {
            const totalRecords = parseInt(text.split(" ")[2]);
            cy.log(expenseaccount, totalRecords)
            expect(expenseaccount).to.equal(totalRecords);
        })
    });
    cy.wait("@Accounts found Successfully").its('response.statusCode').should('eq', 200);
}

export const stats_Revenue_Count = () => {

    cy.contains("1. Dashboard").click()
    cy.wait(3000)
    cy.intercept('GET', `${backendURL}/expense`).as('Accounts found Successfully');
    cy.contains("Total Accounts").parent().parent().parent().click();

    cy.contains("Revenue Count").next().invoke('text').then((text) => {

        const revenueaccount = parseInt(text);
        /// tab Expensse button
        cy.contains("Revenues").click()
        cy.get(".rdt_Pagination").contains("of", { matchCase: true }).invoke("text").then((text) => {
            const totalRecords = parseInt(text.split(" ")[2]);
            cy.log(revenueaccount, totalRecords)
            expect(revenueaccount).to.equal(totalRecords);
        })
    });
    cy.wait("@Accounts found Successfully").its('response.statusCode').should('eq', 200);
}


export const stats_TotalExpense_Ammount = () => {
    cy.viewport(1280, 720);
  
    let totalExpenses = 0;
    let totalExpenseCount = 0;
    let isNextPageEnabled = true;
  
    cy.contains("1. Dashboard").click();
    cy.wait(3000)
    cy.contains("Total Accounts").parent().parent().parent().click();
  
    // Get total expenses
    cy.contains("Total Expenses").next().invoke('text').then((text) => {
      totalExpenses = parseFloat(text.replace(/\$|,/g, ''));
    });
  
    // Start the recursion to collect expenses from each page
    function doRecursion() {

      cy.get('.rdt_TableCell[data-column-id="8"]').each((cell) => {
        cy.wrap(cell).find('div[data-tag="allowRowEvents"]').invoke('text').then((text) => {
          totalExpenseCount += parseFloat(text.replace(/\$|,/g, ''));
        });
      });
  
      // Check if there is a next page
      cy.get("#pagination-next-page").then((btn) => {
        isNextPageEnabled = !btn.attr("disabled");
  
        if (isNextPageEnabled) {
          cy.get("#pagination-next-page").click();
          cy.wait(2000);
  
          // Continue recursion for the next page
          doRecursion();
          
        } else {
          // Output the total after all pages are processed
          cy.log('Total Expenses:', totalExpenses);
          cy.log('Total Expense Count:', totalExpenseCount);
          
          // Compare the total expenses with the collected expenses
          expect(totalExpenses).to.equal(totalExpenseCount);
        }
      });
    }
  
    // Start the recursion for the first page
    doRecursion();
  };


  export const stats_TotalRevenue_Ammount = () => {
    cy.viewport(1280, 720);
  
    let totalRevenue = 0;
    let totalRevenueCount = 0;
    let isNextPageEnabled = true;
  
    cy.contains("1. Dashboard").click();
    cy.wait(3000)
    cy.contains("Total Accounts").parent().parent().parent().click();
  
    // Get total revenue before switching to the "Revenues" tab
    cy.contains("Total Revenue").next().invoke('text').then((text) => {
      totalRevenue = parseFloat(text.replace(/\$|,/g, ''));
    });
  
    // Switch to the "Revenues" tab
    cy.contains("Revenues").click();
  
    function doRecursion() {
      cy.get('.rdt_TableCell[data-column-id="7"]').each((cell) => {
        cy.wrap(cell).find('div[data-tag="allowRowEvents"]').invoke('text').then((text) => {
          totalRevenueCount += parseFloat(text.replace(/\$|,/g, ''));
        });
      });
  
      cy.get("#pagination-next-page").then((btn) => {
        isNextPageEnabled = !btn.attr("disabled");
  
        if (isNextPageEnabled) {
          cy.get("#pagination-next-page").click();
          cy.wait(2000);
          doRecursion();
        } else {
          // Output the total after all pages are processed
          cy.log('Total Revenue:', totalRevenue);
          cy.log('Total Revenue Count:', totalRevenueCount);
          
          // Compare the total revenue with the collected revenue
          expect(totalRevenue).to.equal(totalRevenueCount);
        }
      });
    }
  
    // Start the recursion for the first page
    doRecursion();
  };

  export const stats_TotalProfit = () => {

    cy.contains("1. Dashboard").click()
    cy.wait(3000)
    cy.contains("Total Accounts").parent().parent().parent().click();
    let totalprofit;
    

    cy.contains("Total Profit").next().invoke('text').then((text) => {
        totalprofit = parseFloat(text.replace(/\$|,/g, ''));

        //Revenue Count
        cy.contains("Total Revenue").next().invoke('text').then((text) => {

            let revenue = parseFloat(text.replace(/\$|,/g, ''));

            //Expenses Count
            cy.contains("Total Expenses").next().invoke('text').then((text) => {

                let expense = parseFloat(text.replace(/\$|,/g, ''));
                
                expect(totalprofit).to.equal(revenue - expense)


            })

        })

    });
}

