/// <reference types="cypress" />
import { backendURL } from "../extras"
//// Wait ////
const millisecond = 1
const second = 1000
const minute = 60000


export const TotalComplaints_Button = () => {

    cy.contains("1. Dashboard").click()
    cy.intercept('GET', `${backendURL}/complaint`).as('Complaint found Successfully');

    let totalcomplaint;
    let allSum = 0;

    cy.contains("Total Complaints").next().invoke('text').then((text) => {
        totalcomplaint = parseInt(text);

        cy.contains("Total Complaints").parent().parent().parent().click();


        //Replied Complaints
        cy.contains("Replied Complaints").next().invoke('text').then((text) => {

            allSum += parseInt(text)
            

            //Total Accountants
            cy.contains("Not Replied Complaints").next().invoke('text').then((text) => {

                allSum += parseInt(text)

                cy.log(totalcomplaint, allSum)
                expect(totalcomplaint).to.equal(allSum)

            })
        })
    });
    cy.wait("@Complaint found Successfully").its('response.statusCode').should('eq', 200);
}

export const stats_repliedcomplaints = () => {

    cy.contains("1. Dashboard").click()
    cy.intercept('GET', `${backendURL}/complaint`).as('Complaint found Successfully');
    cy.contains("Total Complaints").parent().parent().parent().click();

    cy.contains("Replied Complaints").next().invoke('text').then((text) => {

        const repliedcomplaint  = parseInt(text);

    //filters by status

        cy.get('[placeholder="Filter by User Type"]').click()
        cy.get(".mantine-Select-dropdown").contains("Replied Complaints").click()

        cy.get(".rdt_Pagination").contains("of", { matchCase: true }).invoke("text").then((text) => {
            const totalRecords = parseInt(text.split(" ")[2]);
            cy.log(repliedcomplaint, totalRecords)
            expect(repliedcomplaint).to.equal(totalRecords);
        })
    });
    cy.wait("@Complaint found Successfully").its('response.statusCode').should('eq', 200);
}

export const stats_Not_repliedcomplaints = () => {

    cy.contains("1. Dashboard").click()
    cy.intercept('GET', `${backendURL}/complaint`).as('Complaint found Successfully');
    cy.contains("Total Complaints").parent().parent().parent().click();

    cy.contains("Not Replied Complaints").next().invoke('text').then((text) => {

        const notrepliedcomplaint  = parseInt(text);

    ///filters by status
        cy.get('[placeholder="Filter by User Type"]').click()
        cy.get(".mantine-Select-dropdown").contains("Not Replied Complaints").click()

        cy.get(".rdt_Pagination").contains("of", { matchCase: true }).invoke("text").then((text) => {
            const totalRecords = parseInt(text.split(" ")[2]);
            cy.log(notrepliedcomplaintrepliedcomplaint, totalRecords)
            expect(notrepliedcomplaint).to.equal(totalRecords);
        })
    });
    cy.wait("@Complaint found Successfully").its('response.statusCode').should('eq', 200);
}


