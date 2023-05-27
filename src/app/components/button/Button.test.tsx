import { render, screen, fireEvent } from "@testing-library/react";
import Button from "./Button";

describe("Button component", () => {
    it("renders button correctly", () => {
        const onClickMock = jest.fn();
        const { getByTestId, getByText } = render(<Button onClick={onClickMock} />);
        const buttonElement = getByTestId("button");
        const buttonTextElement = getByText("SEND");

        expect(buttonElement).toBeInTheDocument();
        expect(buttonTextElement).toBeInTheDocument();
    });

    it("calls onClick handler when button is clicked", () => {
        const onClickMock = jest.fn();
        const { getByTestId } = render(<Button onClick={onClickMock} />);
        const buttonElement = getByTestId("button");

        fireEvent.click(buttonElement);

        expect(onClickMock).toHaveBeenCalledTimes(1);
    });
});
