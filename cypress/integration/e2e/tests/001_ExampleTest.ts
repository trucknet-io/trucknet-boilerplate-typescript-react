describe("Example Test", () => {
  it("visit home page", () => {
    cy.visit("/");
  });
  it("check that Hello message is shown", () => {
    cy.queryByText("Hello, Dashboard!!").should("exist");
  });
  it("click on SVG menu link", () => {
    cy.getByText("SVG").click();
  });
  it("check that we are on SVG page", () => {
    cy.location().should((loc) => {
      expect(loc.pathname).to.eq("/svg");
    });
    cy.queryByText("This is Rick from SVG universe!").should("exist");
  });
  it("change language", () => {
    cy.$$("header button svg")
      .closest("button")
      .click();
    cy.queryByText("Русский", { exact: false }).click();
    cy.queryByText("Какое-то название").should("exist");
  });
});
