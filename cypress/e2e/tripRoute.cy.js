
describe('Testing the endpoints of trip API', () => {
  it('fetch search results from the database', () => {
    cy.request({ method: 'GET', url: '/trip/?starting_place=Addis%20Ababa&destination=Bahir%20Dar&date=1661979600000', headers: { Authorization: ``} }).then(resp=>{
      expect(resp.status).equal(200)
    })
  })

  it('add trip to the database', () => {
    cy.request({ method: 'POST', url: '/trip/addTrip', headers: { Authorization: ``},body:{
      starting_place:"Addis Ababa",
      destination:"Bahir Dar",
      price:1200,
      dateFrom:"2022-09-01",
      dateUpto:"2022-09-05"
    } }).then(resp=>{
      expect(resp.status).equal(201)
    })
  })
})
