import React from "react";
import { render, waitFor } from "@testing-library/react";
import Messages from "./Messages";
import { fetchAllMessages } from "../../services/RESTService";

jest.mock("../../services/RESTService", () => ({
    fetchAllMessages: jest.fn(),
}));

describe("Messages component", () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    const setMessages = jest.fn();
    const mockMessages = [
        { author: "Maddy1", message: "Message 1", timestamp: 1234566 },
        { author: "Maddy1", message: "Message 2", timestamp: 3445666 },
    ];
    (fetchAllMessages as jest.Mock).mockResolvedValue(mockMessages);

    it("renders error message on network error", async () => {
        (fetchAllMessages as jest.Mock).mockResolvedValue("Error");
        const { getByText } = render(<Messages messages={[]} setMessages={setMessages} />);

        await waitFor(() => {
            expect(getByText("Oops network error")).toBeInTheDocument();
        });
    });

    it("renders message cards correctly", async () => {
        const { getByTestId, getAllByTestId } = render(<Messages messages={mockMessages} setMessages={setMessages} />);

        await waitFor(() => {
            expect(getByTestId("messages")).toBeInTheDocument();
            expect(getAllByTestId("message-card")).toHaveLength(mockMessages.length);
        });
    });

    it("scrolls to the bottom after each render", async () => {
        const { getByTestId } = render(<Messages messages={mockMessages} setMessages={setMessages} />);
        const messagesContainer = getByTestId("messages-container");

        await waitFor(() => {
            expect(messagesContainer.scrollTop).toBe(messagesContainer.scrollHeight);
        });
    });
});
