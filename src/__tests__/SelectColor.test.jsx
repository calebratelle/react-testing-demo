import SelectColor from "../components/SelectColor";
import { screen, render, fireEvent } from "@testing-library/react"


test('changes colors', () => {
    render(<SelectColor />);
  
    // Change the value of <select> to 'green'
    fireEvent.change(screen.getByRole('combobox', { name: /select a color/i }), {
      target: { value: 'green' },
    });
  
    // Check that the <span> has the text 'Green'
    expect(screen.getByText(/green/i, { selector: 'span' })).toBeInTheDocument();
  });