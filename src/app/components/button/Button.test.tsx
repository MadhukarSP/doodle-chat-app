import { render, screen } from "@testing-library/react";
import Button from './Button';

describe('Button component', () => {
    it('should render properly', () => {
        const onClick = jest.fn();
        render(<Button onClick={onClick}/>);

        expect(screen.getByTestId('button')).toBeInTheDocument();
    })
});