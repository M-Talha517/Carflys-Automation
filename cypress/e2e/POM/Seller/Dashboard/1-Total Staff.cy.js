/// <reference types="cypress" />
import { backendURL } from "../extras"
//// Wait ////
const millisecond = 1
const second = 1000
const minute = 60000

export const TotalStaff_Button = () => {

    cy.contains("1. Dashboard").click()
    cy.intercept('GET', `${backendURL}/user`).as('User found Successfully');

    let totalStaff;
    let allSum = 0;

    cy.contains("Total Staff").next().invoke('text').then((text) => {
        totalStaff = parseInt(text);

        cy.contains("Total Staff").parent().parent().parent().click();


        //Total Inventory Managers
        cy.contains("Total Inventory Managers").next().invoke('text').then((text) => {

            allSum += parseInt(text)

            //Total Accountants
            cy.contains("Total Accountants").next().invoke('text').then((text) => {
                allSum += parseInt(text)

                //Total Dispatchers
                cy.contains("Total Dispatchers").next().invoke('text').then((text) => {
                    allSum += parseInt(text)
                    cy.log(totalStaff, allSum)
                    expect(totalStaff).to.equal(allSum)
                });
            })
        })
    });
    cy.wait("@User found Successfully").its('response.statusCode').should('eq', 200);
}

export const stats_inventorymanager = () => {

    cy.contains("1. Dashboard").click()
    cy.intercept('GET', `${backendURL}/user`).as('User found Successfully');
    cy.contains("Total Staff").parent().parent().parent().click();

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
    cy.contains("Total Staff").parent().parent().parent().click();

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
    cy.contains("Total Staff").parent().parent().parent().click();

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

