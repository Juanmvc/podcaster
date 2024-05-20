describe("Podcast Episode Detail Page", () => {
    beforeEach(() => {
      cy.visit("/podcast/1535809341/episode/1000655987498"); 
    });
  
    it("It should display the page", () => {
      cy.get('[data-test-id="podcast-episode-detail-page"]').should("be.visible");
    });
  
    it("It should show the episode details", () => {
      cy.get('[data-test-id="episode"]').should("be.visible");
      cy.get('[data-test-id="episode-title"]').should("be.visible");
      cy.get('[data-test-id="html-content"]').should("be.visible");
      cy.get('[data-test-id="episode-audio"]').should("be.visible");
    });
  
  });
  