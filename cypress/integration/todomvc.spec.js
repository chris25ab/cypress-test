it('should navigate to the TodoMVC app', () => {
cy.visit('http://todomvc-app-for-testing.surge.sh/')
})
// this ^ test receives 2 params:
// the name of the test, and the function with test code
// () =>  is the same as function()
