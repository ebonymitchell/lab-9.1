
import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import { AlertBox } from "./AlertBox";

describe("AlertBox Component", () => {
  // Test 1: Verify that the alert message displays.
  it("renders the alert message", () => {
    render(
      <AlertBox type="success" message="Changes saved successfully!" />
    );

    expect(
      screen.getByText("Changes saved successfully!")
    ).toBeInTheDocument();
  });

  // Test 2: Verify that children are rendered.
  it("renders children when provided", () => {
    render(
      <AlertBox type="info" message="Account information">
        <p>Additional details</p>
      </AlertBox>
    );

    expect(
      screen.getByText("Additional details")
    ).toBeInTheDocument();
  });

  // Test 3: Verify that the close button is optional.
  it("does not display a close button without onClose", () => {
    render(
      <AlertBox type="warning" message="Low storage" />
    );

    expect(
      screen.queryByRole("button", { name: "Close alert" })
    ).not.toBeInTheDocument();
  });

  // Test 4: Verify that clicking close calls onClose.
  it("calls onClose when the close button is clicked", () => {
    const handleClose = vi.fn();

    render(
      <AlertBox
        type="error"
        message="Something went wrong"
        onClose={handleClose}
      />
    );

    fireEvent.click(
      screen.getByRole("button", { name: "Close alert" })
    );

    expect(handleClose).toHaveBeenCalledTimes(1);
  });
});
