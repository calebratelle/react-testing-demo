import Counter from "../components/Counter.jsx";
import userEvent from "@testing-library/user-event";
import {render, screen } from "@testing-library/react";

test('renders initial text', () => {
    render(<Counter />);
    expect(screen.getByText('Count: 0')).toBeInTheDocument();
});

test('increments the count', async () => {
    render(<Counter />);
    const user = userEvent.setup();
    
    await user.click(screen.getByRole('button', { name: /increment/i }));
  
    expect(screen.getByText(/count: 1/i)).toBeInTheDocument();
  });


