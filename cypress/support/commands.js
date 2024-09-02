// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('invokeLoginEndpoint', (model) => {
    return cy.request({
        method: model.requestType,
        url: Cypress.env('baseUrl') + '/login',
        failOnStatusCode: false,
        headers: {
            'content-type': model.contentType
        },
        body: {
            username: model.username,
            password: model.password
        },
        
    }).then((response) => {
        return response
    })
});

Cypress.Commands.add('invokeMissingUsernameEndpoint', (model) => {
    return cy.request({
        method: model.requestType,
        url: Cypress.env('baseUrl') + '/login',
        failOnStatusCode: false,
        headers: {
            'content-type': model.contentType
        },
        body: {
            password: model.password
        },
        
    }).then((response) => {
        return response
    })
});

Cypress.Commands.add('invokeMissingPasswordEndpoint', (model) => {
    return cy.request({
        method: model.requestType,
        url: Cypress.env('baseUrl') + '/login',
        failOnStatusCode: false,
        headers: {
            'content-type': model.contentType
        },
        body: {
            username: model.username
        },
        
    }).then((response) => {
        return response
    })
});

Cypress.Commands.add('invokeMissingUsernameAndPassword', (model) => {
    return cy.request({
        method: model.requestType,
        url: Cypress.env('baseUrl') + '/login',
        failOnStatusCode: false,
        headers: {
            'content-type': model.contentType
        },
        body: {
        },
        
    }).then((response) => {
        return response
    })
})