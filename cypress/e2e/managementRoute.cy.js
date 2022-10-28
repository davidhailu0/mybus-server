// Router.get("/",getDashBoardData)
// Router.get("/allCustomers",getAllCustomer)
// Router.get("/getCustomerCSV",exportFile)
// Router.get("/getInfo",getAdminInfo)
// Router.post("/uploadFile",[uploads.single("file")],importFile)
// Router.patch("/updateProfile",changeProfileInfo)
// Router.patch("/updatePassword",changePassword)
describe("Management Route Test",()=>{
    it("get Dashboard Data values with valid token",()=>{
        cy.request({method:"GET",url:"/manage/",headers:{token:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyIkX18iOnsiYWN0aXZlUGF0aHMiOnsicGF0aHMiOnsicGhvbmVOdW1iZXIiOiJpbml0IiwicGFzc3dvcmQiOiJpbml0IiwibmFtZSI6InJlcXVpcmUiLCJyb2xlIjoiaW5pdCIsIl9pZCI6ImluaXQiLCJlbWFpbCI6ImluaXQiLCJfX3YiOiJpbml0In0sInN0YXRlcyI6eyJyZXF1aXJlIjp7Im5hbWUiOnRydWV9LCJkZWZhdWx0Ijp7fSwiaW5pdCI6eyJfaWQiOnRydWUsImVtYWlsIjp0cnVlLCJwYXNzd29yZCI6dHJ1ZSwicGhvbmVOdW1iZXIiOnRydWUsInJvbGUiOnRydWUsIl9fdiI6dHJ1ZX19fSwic2tpcElkIjp0cnVlfSwiJGlzTmV3IjpmYWxzZSwiX2RvYyI6eyJfaWQiOiI2MzU5MjU1MzRkZjY5ODY3MDQ3NmNmNjEiLCJmaXJzdE5hbWUiOiJEYXZpZCIsIm1pZGRsZU5hbWUiOiJIYWlsdSIsImxhc3ROYW1lIjoiSGFpbHUiLCJlbWFpbCI6ImRhdmlkaGFpbHUwQHlhaG9vLmNvbSIsInBhc3N3b3JkIjoiJDJhJDEyJDc1SWx4NDVMcEc5NC5zdmtYbDZjd09CVVNLTjhxNHV0ek44YkMwVy5qM0VYWXB1aUVPc3dhIiwicGhvbmVOdW1iZXIiOiIwOTM5MDkzNDY5Iiwicm9sZSI6IkFETUlOIiwiX192IjowfSwiaWF0IjoxNjY2OTQxMTQ1fQ.zZJiaqygW9cwCt-zTqHeUd6dwGIom-sIJtw2SKYX_fU"}}).then((resp)=>{
            expect(resp.status).equal(200)
        })
    })

    it("get all customers with valid token",()=>{
        cy.request({method:"GET",url:"/manage/allCustomers",headers:{token:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyIkX18iOnsiYWN0aXZlUGF0aHMiOnsicGF0aHMiOnsicGhvbmVOdW1iZXIiOiJpbml0IiwicGFzc3dvcmQiOiJpbml0IiwibmFtZSI6InJlcXVpcmUiLCJyb2xlIjoiaW5pdCIsIl9pZCI6ImluaXQiLCJlbWFpbCI6ImluaXQiLCJfX3YiOiJpbml0In0sInN0YXRlcyI6eyJyZXF1aXJlIjp7Im5hbWUiOnRydWV9LCJkZWZhdWx0Ijp7fSwiaW5pdCI6eyJfaWQiOnRydWUsImVtYWlsIjp0cnVlLCJwYXNzd29yZCI6dHJ1ZSwicGhvbmVOdW1iZXIiOnRydWUsInJvbGUiOnRydWUsIl9fdiI6dHJ1ZX19fSwic2tpcElkIjp0cnVlfSwiJGlzTmV3IjpmYWxzZSwiX2RvYyI6eyJfaWQiOiI2MzU5MjU1MzRkZjY5ODY3MDQ3NmNmNjEiLCJmaXJzdE5hbWUiOiJEYXZpZCIsIm1pZGRsZU5hbWUiOiJIYWlsdSIsImxhc3ROYW1lIjoiSGFpbHUiLCJlbWFpbCI6ImRhdmlkaGFpbHUwQHlhaG9vLmNvbSIsInBhc3N3b3JkIjoiJDJhJDEyJDc1SWx4NDVMcEc5NC5zdmtYbDZjd09CVVNLTjhxNHV0ek44YkMwVy5qM0VYWXB1aUVPc3dhIiwicGhvbmVOdW1iZXIiOiIwOTM5MDkzNDY5Iiwicm9sZSI6IkFETUlOIiwiX192IjowfSwiaWF0IjoxNjY2OTQxMTQ1fQ.zZJiaqygW9cwCt-zTqHeUd6dwGIom-sIJtw2SKYX_fU"}}).then((resp)=>{
            expect(resp.status).equal(200)
        })
    })

    it("get Admin Info with valid token",()=>{
        cy.request({method:"GET",url:"/manage/getInfo",headers:{token:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyIkX18iOnsiYWN0aXZlUGF0aHMiOnsicGF0aHMiOnsicGhvbmVOdW1iZXIiOiJpbml0IiwicGFzc3dvcmQiOiJpbml0IiwibmFtZSI6InJlcXVpcmUiLCJyb2xlIjoiaW5pdCIsIl9pZCI6ImluaXQiLCJlbWFpbCI6ImluaXQiLCJfX3YiOiJpbml0In0sInN0YXRlcyI6eyJyZXF1aXJlIjp7Im5hbWUiOnRydWV9LCJkZWZhdWx0Ijp7fSwiaW5pdCI6eyJfaWQiOnRydWUsImVtYWlsIjp0cnVlLCJwYXNzd29yZCI6dHJ1ZSwicGhvbmVOdW1iZXIiOnRydWUsInJvbGUiOnRydWUsIl9fdiI6dHJ1ZX19fSwic2tpcElkIjp0cnVlfSwiJGlzTmV3IjpmYWxzZSwiX2RvYyI6eyJfaWQiOiI2MzU5MjU1MzRkZjY5ODY3MDQ3NmNmNjEiLCJmaXJzdE5hbWUiOiJEYXZpZCIsIm1pZGRsZU5hbWUiOiJIYWlsdSIsImxhc3ROYW1lIjoiSGFpbHUiLCJlbWFpbCI6ImRhdmlkaGFpbHUwQHlhaG9vLmNvbSIsInBhc3N3b3JkIjoiJDJhJDEyJDc1SWx4NDVMcEc5NC5zdmtYbDZjd09CVVNLTjhxNHV0ek44YkMwVy5qM0VYWXB1aUVPc3dhIiwicGhvbmVOdW1iZXIiOiIwOTM5MDkzNDY5Iiwicm9sZSI6IkFETUlOIiwiX192IjowfSwiaWF0IjoxNjY2OTQxMTQ1fQ.zZJiaqygW9cwCt-zTqHeUd6dwGIom-sIJtw2SKYX_fU"}}).then((resp)=>{
            expect(resp.status).equal(200)
        })
    })

    it("get Dashboard Data values with Invalid Token",()=>{
        cy.request({method:"GET",url:"/manage/",failOnStatusCode:false,headers:{token:"eyJhbGciOiJIUzIIsInR5cCI6IkpXVCJ9.eyIkX18iOnsiYWN0aXZlUGF0aHMiOnsicGF0aHMiOnsicGhvbmVOdW1iZXIiOiJpbml0IiwicGFzc3dvcmQiOiJpbml0IiwibmFtZSI6InJlcXVpcmUiLCJyb2xlIjoiaW5pdCIsIlaXQiLCJlbWFpbCI6ImluaXQiLCJfX3YiOiJpbml0In0sInN0YXRlcyI6eyJyZXF1aXJlIjp7Im5hbWUiOnRydWV9LCJkZWZhdWx0Ijp7fSwiaW5pdCI6eyJfaWQiOnRydWUsImVtYWlsIjp0cnVlLCJwYXNzd29yZCI6dHJ1ZSwicGhvbmVOdW1iZXIiOnRydWUsInJvbGUiOnRydWUsIl9fdiI6dHJ1ZX19fSwic2tpcElkIjp0cnVlfSwiJGlzTmV3IjpmYWxzZSwiX2RvYyI6eyJfaWQiOiI2MzU5MjU1MzRkZjY5ODY3MDQ3NmNmNjEiLCJmaXJzdE5hbWUiOiJEYXZpZCIsIm1pZGRsZU5hbWUiOiJIYWlsdSIsImxhc3ROYW1lIjoiSGFpbHUiLCJlbWFpbCI6ImRhdmlkaGFpbHUwQHlhaG9vLmNvbSIsInBhc3N3b3JkIjoiJDJhJDEyJDc1SWx4NDVMcEc5NC5zdmtYbDZjd09CVVNLTjhxNHV0ek44YkMwVy5qM0VYWXB1aUVPc3dhIiwicGhvbmVOdW1iZXIiOiIwOTM5MDkzNDY5Iiwicm9sZSI6IkFETUlOIiwiX192IjowfSwiaWF0IjoxNjY2OTQxMTQ1fQ.zZJiaqygW9cwCt-zTqHeUd6dwGIom-sIJtw2SKYX_fU"}}).then((resp)=>{
            expect(resp.status).equal(401)
        })
    })

    it("get all customers with Invalid Token",()=>{
        cy.request({method:"GET",url:"/manage/allCustomers",failOnStatusCode:false,headers:{token:"eyJhbGciOiJIUiIsInR5cCI6IkpXVCJ9.eyIkX18iOZlUGF0aHMiOnsicGF0aHMiOnsicGhvbmVOdW1iZXIiOiJpbml0IiwicGFzc3dvcmQiOiJpbml0IiwibmFtZSI6InJlcXVpcmUiLCJyb2xlIjoiaW5pdCIsIl9pZCI6ImluaXQiLCJlbWFpbCI6ImluaXQiLCJfX3YiOiJpbml0In0sInN0YXRlcyI6eyJyZXF1aXJlIjp7Im5hbWUiOnRydWV9LCJkZWZhdWx0Ijp7fSwiaW5pdCI6eyJfaWQiOnRydWUsImVtYWlsIjp0cnVlLCJwYXNzd29yZCI6dHJ1ZSwicGhvbmVOdW1iZXIiOnRydWUsInJvbGUiOnRydWUsIl9fdiI6dHJ1ZX19fSwic2tpcElkIjp0cnVlfSwiJGlzTmV3IjpmYWxzZSwiX2RvYyI6eyJfaWQiOiI2MzU5MjU1MzRkZjY5ODY3MDQ3NmNmNjEiLCJmaXJzdE5hbWUiOiJEYXZpZCIsIm1pZGRsZU5hbWUiOiJIYWlsdSIsImxhc3ROYW1lIjoiSGFpbHUiLCJlbWFpbCI6ImRhdmlkaGFpbHUwQHlhaG9vLmNvbSIsInBhc3N3b3JkIjoiJDJhJDEyJDc1SWx4NDVMcEc5NC5zdmtYbDZjd09CVVNLTjhxNHV0ek44YkMwVy5qM0VYWXB1aUVPc3dhIiwicGhvbmVOdW1iZXIiOiIwOTM5MDkzNDY5Iiwicm9sZSI6IkFETUlOIiwiX192IjowfSwiaWF0IjoxNjY2OTQxMTQ1fQ.zZJiaqygW9cwCt-zTqHeUd6dwGIom-sIJtw2SKYX_fU"}}).then((resp)=>{
            expect(resp.status).equal(401)
        })
    })

    it("get Admin Info with Invalid Token",()=>{
        cy.request({method:"GET",url:"/manage/getInfo",failOnStatusCode:false,headers:{token:"eyJhbGciOiJIUzI1NnR5cCI6IkpXVCJ9.eyIkX18iOnsiYWN0aXZlUGF0aHMiOnsicGF0aHMiOnsicGhvbmVOdW1iZXIiOiJpbml0IiwicGFzc3dvcmQiOiJpbml0IiwibmFtZSI6InJlcXVpcmUiLCJyb2xlIjoiaW5pdCIsIl9pZCI6ImluaXQiLCJlbWFpbCI6ImluaXQiLCJfX3YiOiJpbml0In0sInN0YXRlcyI6eyJyZXF1aXJlIjp7Im5hbWUiOnRydWV9LCJkZWZhdWx0Ijp7fSwiaW5pdCI6eyJfaWQiOnRydWUsImVtYWlsIjp0cnVlLCJwYXNzd29yZCI6dHJ1ZSwicGhvbmVOdW1iZXIiOnRydWUsInJvbGUiOnRydWUsIl9fdiI6dHJ1ZX19fSwic2tpcElkIjp0cnVlfSwiJGlzTmV3IjpmYWxzZSwiX2RvYyI6eyJfaWQiOiI2MzU5MjU1MzRkZjY5ODY3MDQ3NmNmNjEiLCJmaXJzdE5hbWUiOiJEYXZpZCIsIm1pZGRsZU5hbWUiOiJIYWlsdSIsImxhc3ROYW1lIjoiSGFpbHUiLCJlbWFpbCI6ImRhdmlkaGFpbHUwQHlhaG9vLmNvbSIsInBhc3N3b3JkIjoiJDJhJDEyJDc1SWx4NDVMcEc5NC5zdmtYbDZjd09CVVNLTjhxNHV0ek44YkMwVy5qM0VYWXB1aUVPc3dhIiwicGhvbmVOdW1iZXIiOiIwOTM5MDkzNDY5Iiwicm9sZSI6IkFETUlOIiwiX192IjowfSwiaWF0IjoxNjY2OTQxMTQ1fQ.zZJiaqygW9cwCt-zTqHeUd6dwGIom-sIJtw2SKYX_fU"}}).then((resp)=>{
            expect(resp.status).equal(401)
        })
    })
})