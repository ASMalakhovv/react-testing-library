import {fireEvent, render, screen} from "@testing-library/react";
import App from "./App";
import {MemoryRouter} from "react-router-dom";

test('Routes', () => {
    render(<MemoryRouter>
        <App/>
    </MemoryRouter>)
    const aboutLink = screen.getByTestId('about-link');
    const mainLink = screen.getByTestId('main-link');
    fireEvent.click(mainLink);
    expect(screen.getByTestId('main-page')).toBeInTheDocument()
    fireEvent.click(aboutLink);
    expect(screen.getByTestId("about-page")).toBeInTheDocument()
});

test('Роутинг с ошибкой', () => {
    render(<MemoryRouter initialEntries={['/adadadadad']}>
        <App/>
    </MemoryRouter>)
    expect(screen.getByTestId("not-found")).toBeInTheDocument()
});