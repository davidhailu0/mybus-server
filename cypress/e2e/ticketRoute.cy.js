describe('Testing the endpoints of tickets API', () => {
    it('fetch ticket data from the database with valid token', () => {
      cy.wait(2000).then(()=>{
        cy.request({ method: 'GET', url: '/ticket/c5jy2', headers: { token: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyIkX18iOnsiYWN0aXZlUGF0aHMiOnsicGF0aHMiOnsicGhvbmVOdW1iZXIiOiJpbml0IiwicGFzc3dvcmQiOiJpbml0IiwibGFzdE5hbWUiOiJpbml0IiwibWlkZGxlTmFtZSI6ImluaXQiLCJmaXJzdE5hbWUiOiJpbml0Iiwicm9sZSI6ImluaXQiLCJfaWQiOiJpbml0IiwiZW1haWwiOiJpbml0IiwiX192IjoiaW5pdCJ9LCJzdGF0ZXMiOnsicmVxdWlyZSI6e30sImRlZmF1bHQiOnt9LCJpbml0Ijp7Il9pZCI6dHJ1ZSwiZmlyc3ROYW1lIjp0cnVlLCJtaWRkbGVOYW1lIjp0cnVlLCJsYXN0TmFtZSI6dHJ1ZSwiZW1haWwiOnRydWUsInBhc3N3b3JkIjp0cnVlLCJwaG9uZU51bWJlciI6dHJ1ZSwicm9sZSI6dHJ1ZSwiX192Ijp0cnVlfX19LCJza2lwSWQiOnRydWV9LCIkaXNOZXciOmZhbHNlLCJfZG9jIjp7Il9pZCI6IjYzNTYzZWFiMjYxYjg4MGIzOWNlNTU0YSIsImZpcnN0TmFtZSI6IkRhd2l0IiwibWlkZGxlTmFtZSI6IkhhaWx1IiwibGFzdE5hbWUiOiJCaXJoYW5lIiwiZW1haWwiOiIiLCJwYXNzd29yZCI6IiQyYSQxMiQuSk1qM0VzYS9FbUNtMXIvNzJocmpPTjJHYTUwaEpLS1dzMUcxV0U3Nm1UZlNFRWpFMWRNNiIsInBob25lTnVtYmVyIjoiMDkzOTA5MzQ2MCIsInJvbGUiOiJDVVNUT01FUiIsIl9fdiI6MH0sImlhdCI6MTY2Njg1MjMxNH0.sPLQPjqcczOG5XVl83tCStugENp4pH5HbhNeEaaoYrY`} }).then(resp=>{
          expect(resp.status).equal(200)
        })
      })
    })

    it('fetch ticket data from the database with invalid token', () => {
      cy.wait(2000).then(()=>{
        cy.request({ method: 'GET', url: '/ticket/c5jy2',failOnStatusCode:false, headers: { token: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyIkX18iOnsiYWN0aXZlUGF0aHMiOnsicGF0aHMiOnsicGFzc3dvcmQiOiJpbml0IiwiZW1haWwiOiJpbml0IiwicGhvbmVOdW1iZXIiOiJpbml0IiwibmFtZSI6ImluaXQiLCJyb2xlIjoiaW5pdCIsIl9pZCI6ImluaXQiLCJsb2dvIjoiaW5pdCIsIl9fdiI6ImluaXQifSwic3RhdGVzIjp7InJlcXVpcmUiOnt9LCJkZWZhdWx0Ijp7fSwiaW5pdCI6eyJfaWQiOnRydWUsIm5hbWUiOnRydWUsInBob25lTnVtYmVyIjp0cnVlLCJlbWFpbCI6dHJ1ZSwicGFzc3dvcmQiOnRydWUsImxvZ28iOnRydWUsInJvbGUiOnRydWUsIl9fdiI6dHJ1ZX19fSwic2tpcElkIjp0cnVlfSwiJGlzTmV3IjpmYWxzZSwiX2RvYyI6eyJfaWQiOiI2MzU2ODA1Y2JjMjJkNTI2YTZkMDFhZDQiLCJuYW1lIjoiU2VsYW0iLCJwaG9uZU51bWJlciI6IjA5MTA1OTAwNjEiLCJlbWFpbCI6ImRhdmlkaGFpbHUwQGdtYWlsLmNvbSIsInBhc3N3b3JkIjoiJDJhJDEyJGVrM1A2ckh0ZjMvbjQwVzl3dnFsVC5Ia1FvY1cxdExmUDgyYXNSUXppSkFqZERwOURnZmVDIiwibG9nbyI6ImJhY2tncm91bmQuanBnIiwicm9sZSI6IkJVUyBDT01QQU5ZIiwiX192IjowfSwiaWF0IjoxNjY2ODUzMTkyfQ.6IrELIdiHlTtxPC4NnJhZNHdQYPLnRdKk1bJ6ibu0Ko`} }).then(resp=>{
          expect(resp.status).equal(401)
        })
      })
    })
  
    it('test buying ticket with valid token', () => {
      cy.wait(2000).then(()=>{
        cy.request({ method: 'POST', url: '/ticket/buyticket', headers: { token: ``},body:{
          destination:"Bahir Dar",
          starting_place:"Addis Ababa",
          date:"2022-08-10",
          price:1200,
        } }).then(resp=>{
          expect(resp.status).equal(201)
        })
      })
    })
  })
  