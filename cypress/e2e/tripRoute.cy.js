
describe('Testing the endpoints of trip API', () => {
  it('fetch search results from the database', () => {

    cy.wait(2000).then(()=>{
      cy.request({ method: 'GET', url: '/trip/?starting_place=Addis%20Ababa&destination=Bahir%20Dar&date=1661979600000', headers: { token: ``} }).then(resp=>{
        expect(resp.status).equal(200)
      })
    })
  })

  it('add trip to the database with valid token', () => {
    cy.wait(2000).then(()=>{
      cy.request({ method: 'POST', url: '/trip/addTrip', headers: { token: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyIkX18iOnsiYWN0aXZlUGF0aHMiOnsicGF0aHMiOnsicGFzc3dvcmQiOiJpbml0IiwiZW1haWwiOiJpbml0IiwicGhvbmVOdW1iZXIiOiJpbml0IiwibmFtZSI6ImluaXQiLCJyb2xlIjoiaW5pdCIsIl9pZCI6ImluaXQiLCJsb2dvIjoiaW5pdCIsIl9fdiI6ImluaXQifSwic3RhdGVzIjp7InJlcXVpcmUiOnt9LCJkZWZhdWx0Ijp7fSwiaW5pdCI6eyJfaWQiOnRydWUsIm5hbWUiOnRydWUsInBob25lTnVtYmVyIjp0cnVlLCJlbWFpbCI6dHJ1ZSwicGFzc3dvcmQiOnRydWUsImxvZ28iOnRydWUsInJvbGUiOnRydWUsIl9fdiI6dHJ1ZX19fSwic2tpcElkIjp0cnVlfSwiJGlzTmV3IjpmYWxzZSwiX2RvYyI6eyJfaWQiOiI2MzU2ODA1Y2JjMjJkNTI2YTZkMDFhZDQiLCJuYW1lIjoiU2VsYW0iLCJwaG9uZU51bWJlciI6IjA5MTA1OTAwNjEiLCJlbWFpbCI6ImRhdmlkaGFpbHUwQGdtYWlsLmNvbSIsInBhc3N3b3JkIjoiJDJhJDEyJGVrM1A2ckh0ZjMvbjQwVzl3dnFsVC5Ia1FvY1cxdExmUDgyYXNSUXppSkFqZERwOURnZmVDIiwibG9nbyI6ImJhY2tncm91bmQuanBnIiwicm9sZSI6IkJVUyBDT01QQU5ZIiwiX192IjowfSwiaWF0IjoxNjY2ODUzMTkyfQ.6IrELIdiHlTtxPC4NnJhZNHdQYPLnRdKk1bJ6ibu0Ko`},body:{
        starting_place:"Addis Ababa",
        destination:"Bahir Dar",
        price:1200,
        dateFrom:"2022-09-01",
        dateUpto:"2022-09-05",
        busProvider:"test provider",
        busLogo:"test logo"
      } }).then(resp=>{
        expect(resp.status).equal(201)
      })
    })
  })

  it('add trip to the database with invalid token', () => {
    cy.wait(2000).then(()=>{
      cy.request({ method: 'POST', url: '/trip/addTrip',failOnStatusCode:false ,headers: { token: `I1NiIsInR5cCI6IkpXVCJ9.eyIkX18iOnsiYWN0aXZlUGF0aHMiOnsicGF0aHMiOnsicGFzc3dvcmQiOiJpbml0IiwiZW1haWwiOiJpbml0IiwicGhvbmVOdW1iZXIiOiJpbml0IiwibmFtZSI6ImluaXQiLCJyb2xlIjoiaW5pdCIsIl9pZCI6ImluaXQiLCJsb2dvIjoiaW5pdCIsIl9fdiI6ImluaXQifSwic3RhdGVzIjp7InJlcXVpcmUiOnt9LCJkZWZhdWx0Ijp7fSwiaW5pdCI6eyJfaWQiOnRydWUsIm5hbWUiOnRydWUsInBob25lTnVtYmVyIjp0cnVlLCJlbWFpbCI6dHJ1ZSwicGFzc3dvcmQiOnRydWUsImxvZ28iOnRydWUsInJvbGUiOnRydWUsIl9fdiI6dHJ1ZX19fSwic2tpcElkIjp0cnVlfSwiJGlzTmV3IjpmYWxzZSwiX2RvYyI6eyJfaWQiOiI2MzU2ODA1Y2JjMjJkNTI2YTZkMDFhZDQiLCJuYW1lIjoiU2VsYW0iLCJwaG9uZU51bWJlciI6IjA5MTA1OTAwNjEiLCJlbWFpbCI6ImRhdmlkaGFpbHUwQGdtYWlsLmNvbSIsInBhc3N3b3JkIjoiJDJhJDEyJGVrM1A2ckh0ZjMvbjQwVzl3dnFsVC5Ia1FvY1cxdExmUDgyYXNSUXppSkFqZERwOURnZmVDIiwibG9nbyI6ImJhY2tncm91bmQuanBnIiwicm9sZSI6IkJVUyBDT01QQU5ZIiwiX192IjowfSwiaWF0IjoxNjY2ODUzMTkyfQ.6IrELIdiHlTtxPC4NnJhZNHdQYPLnRdKk1bJ6ibu0Ko`},body:{
        starting_place:"Addis Ababa",
        destination:"Bahir Dar",
        price:1200,
        dateFrom:"2022-09-01",
        dateUpto:"2022-09-05",
        busProvider:"test provider",
        busLogo:"test logo"
      } }).then(resp=>{
        expect(resp.status).equal(401)
      })
    })
  })
})
