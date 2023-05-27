import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Input from "./Input";

describe("Input component", () => {
    const onChangeMock = jest.fn();
    const onKeyDownMock = jest.fn();
    const getInputElement = () => {
        const { getByTestId } = render(<Input onChange={onChangeMock} message="" onKeyDown={onKeyDownMock} />);
        return getByTestId("input-field");
    };
    it("renders input correctly", () => {
        const inputElement = getInputElement();

        expect(inputElement).toBeInTheDocument();
        expect(inputElement).toHaveValue("");
    });

    it("calls onChange handler when input value changes", () => {
        const inputElement = getInputElement();
        fireEvent.change(inputElement, { target: { value: "New message" } });

        expect(onChangeMock).toHaveBeenCalledTimes(1);
        expect(onChangeMock).toHaveBeenCalledWith(expect.any(Object));
    });

    it("calls onKeyDown handler when a key is pressed", () => {
        const inputElement = getInputElement();
        fireEvent.keyDown(inputElement, { key: "Enter" });

        expect(onKeyDownMock).toHaveBeenCalledTimes(1);
        expect(onKeyDownMock).toHaveBeenCalledWith(expect.any(Object));
    });
});
