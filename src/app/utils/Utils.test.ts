import { render } from '@testing-library/react';
import { getDateAndTime, decodeText } from './Utils';

describe('getDateAndTime function', () => {
    it('getDateAndTime returns formatted date and time', () => {
        const timestamp = 1627418400000; 

        expect(getDateAndTime(timestamp)).toBe('27 Jul 2021 22:40');
    });

    it('decodeText returns the decodes text', () => {
        const text = 'How&#x27;s life?';

        expect(decodeText(text)).toBe("How's life?");
    });
});