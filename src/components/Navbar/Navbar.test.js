import {renderWithRouter} from "../../tests/helpers/renderWithRouter";
import {Navbar} from "./Navbar";
import {screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";

test('Navbar', async () => {
    renderWithRouter(<Navbar />);
    const user = userEvent.setup();
    const mainLink = screen.getByTestId('main-link');
    const aboutLink = screen.getByTestId('about-link');
    const usersLink = screen.getByTestId('users-link');
    await user.click(mainLink)
    expect(screen.getByTestId('main-page')).toBeInTheDocument()
    await user.click(aboutLink)
    expect(screen.getByTestId('about-page')).toBeInTheDocument()
    await user.click(usersLink)
    expect(screen.getByTestId('users-page')).toBeInTheDocument()
})