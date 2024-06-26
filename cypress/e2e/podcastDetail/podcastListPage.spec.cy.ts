describe("Podcast List Page", () => {
    beforeEach(() => {
      cy.visit("/"); 
    });
  
    it("It should display the page", () => {
      cy.get('[data-testid="podcast-list-page"]').should("be.visible");
    });
  
    it("It should show the filter", () => {
      cy.get('[data-testid="podcast-list-page-filter"]').should("be.visible");
    });
  
    it("It should show the podcasts list", () => {
      cy.get('[data-testid="podcast-list-page-grid"]').should("be.visible");
    });
  
  });
  