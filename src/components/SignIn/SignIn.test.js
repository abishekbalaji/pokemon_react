// import React from "react";
// import { render, screen, fireEvent } from "@testing-library/react";
// import { useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import SignIn from "./SignIn";
// import {
//   signInAuthUserWithGoogleAsync,
//   signInUserWithEmailAndPasswordAsync,
// } from "../../store/user/userActions";

// // Mock the useDispatch hook
// jest.mock("react-redux", () => ({
//   ...jest.requireActual("react-redux"),
//   useDispatch: jest.fn(),
// }));

// // Mock the useNavigate hook
// jest.mock("react-router-dom", () => ({
//   ...jest.requireActual("react-router-dom"),
//   useNavigate: jest.fn(),
// }));

// describe("SignIn component", () => {
//   let dispatchMock;
//   let navigateMock;

//   beforeEach(() => {
//     // Reset the mock function before each test
//     dispatchMock = jest.fn();
//     useDispatch.mockReturnValue(dispatchMock);

//     navigateMock = jest.fn();
//     useNavigate.mockReturnValue(navigateMock);
//   });

//   it("should render the component", () => {
//     render(<SignIn />);

//     // Verify that the component renders
//     expect(screen.getByText(/Already have an account/i)).toBeInTheDocument();
//   });

//   it("should update the form fields when the user types in an input", () => {
//     render(<SignIn />);

//     // Get the email input field
//     const emailInput = screen.getByLabelText(/email/i);

//     // Simulate the user typing in the email input field
//     fireEvent.change(emailInput, { target: { value: "test@test.com" } });

//     // Verify that the email input field has the correct value
//     expect(emailInput.value).toBe("test@test.com");
//   });

//   it("should dispatch the sign in action when the form is submitted", () => {
//     render(<SignIn />);

//     // Get the email and password input fields
//     const emailInput = screen.getByLabelText(/email/i);
//     const passwordInput = screen.getByLabelText(/password/i);

//     // Simulate the user typing in the email and password input fields
//     fireEvent.change(emailInput, { target: { value: "test@test.com" } });
//     fireEvent.change(passwordInput, { target: { value: "password123" } });

//     // Submit the form
//     fireEvent.submit(screen.getByRole("button", { name: /Sign In/i }));

//     // Verify that the sign in action is dispatched
//     expect(dispatchMock).toHaveBeenCalledWith(
//       signInUserWithEmailAndPasswordAsync("test@test.com", "password123")
//     );

//     // Verify that the form fields are reset
//     expect(emailInput.value).toBe("");
//     expect(passwordInput.value).toBe("");

//     // Verify that the user is navigated to the home page
//     expect(navigateMock).toHaveBeenCalledWith("/");
//   });

//   it("should dispatch the Google sign in action when the Google sign in button is clicked", () => {
//     render(<SignIn />);

//     // Click the Google sign in button
//     fireEvent.click(screen.getByRole("button", { name: /Google Sign In/i }));

//     // Verify that the Google sign in action is dispatched
//     expect(dispatchMock).toHaveBeenCalledWith(signInAuthUserWithGoogleAsync());
//   });

//   it("should dispatch the setSignInOrUp action when the Sign Up span is clicked", () => {
//     render(<SignIn />);

//     // Click the Sign Up span
//     fireEvent.click(screen.getByText(/Sign Up/i));

//     // Verify that the setSignInOrUp action is dispatched
//     expect(dispatchMock).toHaveBeenCalledWith(setSignInOrUp(true));
//   });
// });