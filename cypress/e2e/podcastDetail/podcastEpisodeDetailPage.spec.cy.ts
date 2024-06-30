describe("Podcast Episode Detail Page", () => {
    beforeEach(() => {
      cy.visit("/podcast/1535809341/episode/1000655987498"); 
    });
  
    it("It should display the page", () => {
      cy.get('[data-testid="podcast-episode-detail-page"]').should("be.visible");
    });
  
    it("It should show the episode details", () => {
      cy.get('[data-testid="episode"]').should("be.visible");
      cy.get('[data-testid="episode-title"]').should("be.visible");
      cy.get('[data-testid="html-content"]').should("be.visible");
      cy.get('[data-testid="episode-audio"]').should("be.visible");
    });
  
  });
  