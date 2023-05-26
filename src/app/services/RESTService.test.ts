import axios from "axios";
import { fetchAllMessages, fetchLimitedMessages, postMessage } from "./RESTService";

jest.mock('axios');

describe('Rest Api tests', () => {
    const mockData = [
        {author: 'Madhu', message: 'hello', timestamp: '1234'}, 
        {author: 'Sammy', message: 'hello', timestamp: '4566'},
        {author: 'Rocky', message: 'hello', timestamp: '9876'},
        {author: 'Billa', message: 'hello', timestamp: '1234'},
    ];
    const mockError = new Error('API error');

    it('should fetch all messages', async () => {
        (axios.get as jest.Mock).mockResolvedValueOnce({ data: mockData });
        const allMessages = await fetchAllMessages();

        expect(allMessages.length).toBe(mockData.length)
        expect(allMessages).toMatchObject(mockData);
    })

    it('should handle error message', async () => {
        (axios.get as jest.Mock).mockRejectedValueOnce(mockError);
        const allMessages = await fetchAllMessages();

        expect(allMessages).toBe("Error");
    })

    test('should fetch 2 messages', async () => {
        (axios.get as jest.Mock).mockResolvedValueOnce({ data: [mockData[0], mockData[1]] });
        const limitedMessages = await fetchLimitedMessages(2);
        
        expect(limitedMessages.length).toBe(2);
    })

    it('should handle error when ', async () => {
        (axios.get as jest.Mock).mockRejectedValueOnce(mockError);
        const limitedMessages = await fetchLimitedMessages(2);

        expect(limitedMessages).toBe("Error");
    })

    it('should post a message', async () => {
        const testMessage = "Feeling lucky";
        (axios.post as jest.Mock).mockResolvedValueOnce({data: {message: testMessage}});
        postMessage(testMessage);

    })

    it('should handle error message', async () => {
        (axios.post as jest.Mock).mockRejectedValueOnce(mockError);
        postMessage('');
    })
})