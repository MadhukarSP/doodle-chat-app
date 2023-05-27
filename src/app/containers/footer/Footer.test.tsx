import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import Footer from "./Footer";
import { postMessage } from "../../services/RESTService";

jest.mock("../../services/RESTService", () => ({
    postMessage: jest.fn(),
}));

describe("Footer component", () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    const setMessages = jest.fn();
    const messages: any = [];

    it("renders input and button correctly", () => {
        const { getByTestId } = render(<Footer messages={messages} setMessages={setMessages} />);
        const inputElement = getByTestId("input-field");
        const buttonElement = getByTestId("button");

        expect(inputElement).toBeInTheDocument();
        expect(buttonElement).toBeInTheDocument();
    });

    it("updates input value correctly on change", () => {
        const { getByTestId } = render(<Footer messages={messages} setMessages={setMessages} />);
        const inputElement = getByTestId("input-field");

        fireEvent.change(inputElement, { target: { value: "Something" } });

        expect(inputElement).toHaveValue("Something");
    });

    it("calls submitMessage correctly on button click", () => {
        const { getByTestId } = render(<Footer messages={messages} setMessages={setMessages} />);
        const inputElement = getByTestId("input-field");
        const buttonElement = getByTestId("button");

        fireEvent.change(inputElement, { target: { value: "Something" } });
        fireEvent.click(buttonElement);

        expect(postMessage).toHaveBeenCalledTimes(1);
        expect(postMessage).toHaveBeenCalledWith("Something");

        waitFor(() => {
            expect(setMessages).toHaveBeenCalledTimes(1);
        });
    });

    it("calls submitMessage correctly on Enter key press", () => {
        const { getByTestId } = render(<Footer messages={messages} setMessages={setMessages} />);
        const inputElement = getByTestId("input-field");

        fireEvent.change(inputElement, { target: { value: "Something" } });
        fireEvent.keyDown(inputElement, { key: "Enter" });

        expect(postMessage).toHaveBeenCalledTimes(1);
        expect(postMessage).toHaveBeenCalledWith("Something");

        waitFor(() => {
            expect(setMessages).toHaveBeenCalledTimes(1);
        });
    });
});
