/// <reference types="cypress" />

class loginSchema {
    LoginResponseModel(apiResponse) {
        return {
            responseStatus : apiResponse.status,
            token : apiResponse.body.token
        }
    }
}

export default new loginSchema();