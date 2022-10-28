describe("Authentication Tests",()=>{
    it("Sign Up For Customers",()=>{
        cy.request({method:"POST",url:"/auth/customer/signup",body:{
            "name":"name-test",
            "email":"emailTEST@yahoo.com",
            "password":"12345678",
            "phoneNumber":"0920779244",
            "role":"CUSTOMER"
        }}).then((resp)=>{
            expect(resp.status).equal(201)
        })
    })

    it("Log In for Customers",()=>{
        cy.request({method:"POST",url:"/auth/customer/login",body:{
            "username":"emailTEST@yahoo.com",
            "password":"12345678"
        }}).then((resp)=>{
            expect(resp.status).equal(200)
            cy.request({method:"DELETE",url:"/auth/testData?email=emailTEST@yahoo.com"})
        })
    })

    it("Sign Up For Customers with Invalid Data",()=>{
        cy.request({method:"POST",url:"/auth/customer/signup",failOnStatusCode:false,body:{
            "n":"name-test123",
            "eail":"emailTESfhfhT@yahoo.com",
            "paword":"12345678",
            "phoNumber":"0920779244",
            "role":"CUSTOMER"
        }}).then((resp)=>{
            expect(resp.status).equal(400)
        })
    })

    it("Sign Up for Bus with Valid data",()=>{
        const newFormData = new FormData()
        newFormData.append("name","bus-test")
        newFormData.append("phoneNumber","0912594956")
        newFormData.append("email","bus@mybus.com")
        newFormData.append("password","password")
        newFormData.append("logo","logo-test")
        newFormData.append("file",new Blob())
        cy.request({method:"POST",url:"/auth/bus/signup",body:newFormData}).then((resp)=>{
            expect(resp.status).equal(201)
        })
    })

    it("Sign Up for Bus with Invalid data",()=>{
        const newFormData = new FormData()
        newFormData.append("nagdg","bus-test")
        newFormData.append("phonedfdfdfNumber","0912594956")
        newFormData.append("emailgdgd","bus@mybus.com")
        newFormData.append("passwordgdgd","password")
        newFormData.append("lofdfdgo","logo-test")
        newFormData.append("fidfdfle",new Blob())
        cy.request({method:"POST",url:"/auth/bus/signup",body:newFormData,failOnStatusCode:false}).then((resp)=>{
            expect(resp.status).equal(500)
        })
    })

    it("Log In for Bus with valid credential",()=>{
        cy.request({method:"POST",url:"/auth/bus/login",body:{
            "name":"bus-test",
            "password":"password",
        }}).then((resp)=>{
            expect(resp.status).equal(200)
            cy.request({method:"DELETE",url:"/auth/testData?email=bus@mybus.com"})
        })
    })

    it("Log In for Bus with Invalid credential",()=>{
        cy.request({method:"POST",url:"/auth/bus/login",failOnStatusCode:false,body:{
            "name":"bus-testgnfgjnfjg",
            "password":"password85yu85uy85u",
        }}).then((resp)=>{
            expect(resp.status).equal(404)
        })
    })
})