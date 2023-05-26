import axios from 'axios';

const BASE_URL = 'https://chatty.doodle-test.com/api/chatty/v1.0';
const TOKEN = 'XWJU9HQeFeqf';
export const author = 'Madhukar';

export async function fetchAllMessages() {
    try {
        const res = await axios.get(`${BASE_URL}?&token=${TOKEN}`);
        return res.data;
    } catch(e) {
        return "Error";
    }
}

export async function fetchLimitedMessages(limitCount: number) {
    try {
        const res = await axios.get(`${BASE_URL}?limit=${limitCount}&token=${TOKEN}`);
        return res.data;
    } catch(e) {
        return "Error";
    }
}

const headers = Object.freeze({
    'Content-Type': 'application/json',
    'token': TOKEN,
})

export function postMessage(message: string) {
    const data = {message, author};
    axios.post(BASE_URL, data, {headers})
    .then(res => {
        return res.data;
    })
    .catch((e) => {
        return "Error";
    });
}