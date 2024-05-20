describe("Podcast Detail Page", () => {
  beforeEach(() => {
    cy.visit("/podcast/1535809341"); 
  });

  it("It should display the page", () => {
    cy.get('[data-test-id="podcast-detail-page"]').should("be.visible");
  });

  it("It should show the title", () => {
    cy.get('[data-test-id="podcast-detail-page-title"]').should("be.visible");
  });

  it("It should show the author", () => {
    cy.get('[data-test-id="podcast-detail-page-author"]').should("be.visible");
  });

  it("It should show the description", () => {
    cy.get('[data-test-id="podcast-detail-page-description"]').should("be.visible");
  });

  it("It should show the table of episodes", () => {
    cy.get('[data-test-id="podcast-detail-page-episode-list"]').should("be.visible");
  });

});
