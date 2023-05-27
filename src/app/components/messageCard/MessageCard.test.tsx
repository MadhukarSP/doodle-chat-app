import { render, screen } from "@testing-library/react";
import MessageCard from "./MessageCard";

const mockProps = {
    message: "Hello",
    author: "John",
    timestamp: 1627418400000, // "27 Jul 2021 22:40"
};

describe("MessageCard component", () => {
    it("renders message, author, and timestamp", () => {
        render(<MessageCard {...mockProps} />);

        expect(screen.getByText("Hello")).toBeInTheDocument();
        expect(screen.getByText("John")).toBeInTheDocument();
        expect(screen.getByText("27 Jul 2021 22:40")).toBeInTheDocument();
    });

    it("applies message-card-self class when author is Madhukar", () => {
        const props = { ...mockProps, author: "Madhukar" };
        render(<MessageCard {...props} />);

        expect(screen.getByTestId("message-card")).toHaveClass("message-card-self");
    });

    it("decodes HTML entities in the message", () => {
        const props = { ...mockProps, message: "How&#x27;s life?" };
        render(<MessageCard {...props} />);

        expect(screen.getByText("How's life?")).toBeInTheDocument();
    });
});
