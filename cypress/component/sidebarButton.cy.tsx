import React from "react";
import SidebarButton from "../../src/Map/components/sidebarButton";
describe("SidebarButton Component", () => {
  it("should render with the correct initial icon", () => {
    cy.mount(<SidebarButton isToggle={false} setIsToggle={cy.spy()} />);
    cy.get("button").should("exist");
  });

  it("should toggle state when clicked", () => {
    const setIsToggle = cy.spy().as("setIsToggleSpy");
    cy.mount(<SidebarButton isToggle={false} setIsToggle={setIsToggle} />);
    cy.get("button").click();

    cy.get("@setIsToggleSpy").should("have.been.calledOnceWith", true);
  });
});
