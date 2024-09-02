/// <reference types="cypress" />

class Constant {
    valid = "valid";
    invalid = "invalid";
    malformedToken = "malformedToken";
    slowResponse = "slowResponse";
    defaultContentType = "application/json; charset=utf-8";
}

export default new Constant();