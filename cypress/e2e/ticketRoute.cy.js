describe('Testing the endpoints of tickets API', () => {
    it('fetch search results from the database', () => {
      cy.wait(2000).then(()=>{
        cy.request({ method: 'GET', url: '/ticket/2pzzkx7s1xdq2cja', headers: { Authorization: ``} }).then(resp=>{
          expect(resp.status).equal(200)
        })
      })
    })
  
    it('add trip to the database', () => {
      cy.wait(2000).then(()=>{
        cy.request({ method: 'POST', url: '/ticket/buyticket', headers: { Authorization: ``},body:{
          destination:"Bahir Dar",
          starting_place:"Addis Ababa",
          date:"2022-08-10",
          price:1200
        } }).then(resp=>{
          expect(resp.status).equal(201)
        })
      })
    })
  })
  