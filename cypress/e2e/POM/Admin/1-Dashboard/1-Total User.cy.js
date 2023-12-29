/// <reference types="cypress" />
import { backendURL } from "../../Seller/extras"
//// Wait ////
const millisecond = 1
const second = 1000
const minute = 60000

export const TotalUsers_Button = () => {

    cy.contains("1. Dashboard").click()
    cy.intercept('GET', `${backendURL}/user`).as('User found Successfully');

    let totaluser;
    let allSum = 0;

    cy.contains("Total Users").next().invoke('text').then((text) => {
        totaluser = parseInt(text);

        cy.contains("Total Users").parent().parent().parent().click();
           //Total Seller
              cy.contains("Total Sellers").next().invoke('text').then((text) => {

                allSum += parseInt(text)

             //Total Customers
        cy.contains("Total Customers").next().invoke('text').then((text) => {

            allSum += parseInt(text)

        //Total Inventory Managers
        cy.contains("Total Inventory Managers").next().invoke('text').then((text) => {

            allSum += parseInt(text)

            //Total Accountants
            cy.contains("Total Accountants").next().invoke('text').then((text) => {
                allSum += parseInt(text)

                //Total Dispatchers
                cy.contains("Total Dispatchers").next().invoke('text').then((text) => {
                    allSum += parseInt(text)
                    cy.log(totaluser, allSum)
                    expect(totaluser).to.equal(allSum)
                });
            })
           })
        })
        })
    });
    cy.wait("@User found Successfully").its('response.statusCode').should('eq', 200);
}

export const stats_seller = () => {

    cy.contains("1. Dashboard").click()
    cy.intercept('GET', `${backendURL}/user`).as('User found Successfully');
    cy.contains("Total Users").parent().parent().parent().click();

    cy.contains("Total Sellers").next().invoke('text').then((text) => {

        const seller = parseInt(text);

        cy.get('[placeholder="Filter by User Type"]').click()
        cy.get(".mantine-Select-dropdown").contains("Seller").click()

        cy.get(".rdt_Pagination").contains("of", { matchCase: true }).invoke("text").then((text) => {
            const totalRecords = parseInt(text.split(" ")[2]);
            cy.log(seller, totalRecords)
            expect(seller).to.equal(totalRecords);
        })
    });
}

export const stats_customer = () => {

    cy.contains("1. Dashboard").click()
    cy.intercept('GET', `${backendURL}/user`).as('User found Successfully');
    cy.contains("Total Users").parent().parent().parent().click();

    cy.contains("Total Customers").next().invoke('text').then((text) => {

        const customer= parseInt(text);

        cy.get('[placeholder="Filter by User Type"]').click()
        cy.get(".mantine-Select-dropdown").contains("Customer").click()

        cy.get(".rdt_Pagination").contains("of", { matchCase: true }).invoke("text").then((text) => {
            const totalRecords = parseInt(text.split(" ")[2]);
            cy.log(customer, totalRecords)
            expect(customer).to.equal(totalRecords);
        })
    });
}

export const stats_inventorymanager = () => {

    cy.contains("1. Dashboard").click()
    cy.intercept('GET', `${backendURL}/user`).as('User found Successfully');
    cy.contains("Total Users").parent().parent().parent().click();

    cy.contains("Total Inventory Managers").next().invoke('text').then((text) => {

        const inventoryManagers = parseInt(text);

        cy.get('[placeholder="Filter by User Type"]').click()
        cy.get(".mantine-Select-dropdown").contains("Inventory Manager").click()

        cy.get(".rdt_Pagination").contains("of", { matchCase: true }).invoke("text").then((text) => {
            const totalRecords = parseInt(text.split(" ")[2]);
            cy.log(inventoryManagers, totalRecords)
            expect(inventoryManagers).to.equal(totalRecords);
        })
    });
}

export const stats_accountant = () => {

    cy.contains("1. Dashboard").click()
    cy.intercept('GET', `${backendURL}/user`).as('User found Successfully');
    cy.contains("Total Users").parent().parent().parent().click();

    cy.contains("Total Accountants").next().invoke('text').then((text) => {

        const accountant = parseInt(text);

        cy.get('[placeholder="Filter by User Type"]').click()
        cy.get(".mantine-Select-dropdown").contains("Accountant").click()

        cy.get(".rdt_Pagination").contains("of", { matchCase: true }).invoke("text").then((text) => {
            const totalRecords = parseInt(text.split(" ")[2]);
            cy.log(accountant, totalRecords)
            expect(accountant).to.equal(totalRecords);
        })
    });
}

export const stats_dispatcher = () => {

    cy.contains("1. Dashboard").click()
    cy.intercept('GET', `${backendURL}/user`).as('User found Successfully');
    cy.contains("Total Users").parent().parent().parent().click();

    cy.contains("Total Dispatchers").next().invoke('text').then((text) => {

        const dispatcher = parseInt(text);

        cy.get('[placeholder="Filter by User Type"]').click()
        cy.get(".mantine-Select-dropdown").contains("Dispatcher").click()

        cy.get(".rdt_Pagination").contains("of", { matchCase: true }).invoke("text").then((text) => {
            const totalRecords = parseInt(text.split(" ")[2]);
            cy.log(dispatcher, totalRecords)
            expect(dispatcher).to.equal(totalRecords);
        })
    });
}

export const stats_active_user = () => {

    cy.contains("1. Dashboard").click()
    cy.intercept('GET', `${backendURL}/user`).as('User found Successfully');
    cy.contains("Total Users").parent().parent().parent().click();

    cy.contains("Total Active Users").next().invoke('text').then((text) => {

        const active = parseInt(text);

        cy.get('[placeholder="Filter by Status"]').click()
        cy.get(".mantine-Select-dropdown").contains("Active").click()

        cy.get(".rdt_Pagination").contains("of", { matchCase: true }).invoke("text").then((text) => {
            const totalRecords = parseInt(text.split(" ")[2]);
            cy.log(active, totalRecords)
            expect(active).to.equal(totalRecords);
        })
    });
}

