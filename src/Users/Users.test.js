import '@testing-library/jest-dom'
import {render, screen} from "@testing-library/react";
import {Users} from "./Users";
import axios from "axios";
import {MemoryRouter, Route, Routes} from "react-router-dom";
import userEvent from '@testing-library/user-event'
import {renderWithRouter} from "../tests/helpers/renderWithRouter";

jest.mock('axios');

describe('async получение данных в компоненте', () => {
    let response;

    beforeEach(() => {
        response = {
            data: [
                {
                    "id": 1,
                    "name": "Leanne Graham",
                },
                {
                    "id": 2,
                    "name": "Ervin Howell",
                },
            ]
        }
    })

    afterEach(() => {
        jest.clearAllMocks()
    })

    test('Корректный jsx', async () => {
        axios.get.mockReturnValue(response);
        render(<MemoryRouter initialEntries={['/users']}>
            <Routes>
                <Route path="users" element={<Users/>}/>
            </Routes>
        </MemoryRouter>);
        const usersName = await screen.findAllByTestId("user-name");
        expect(usersName.length).toBe(2);
        expect(axios.get).toBeCalledTimes(1);
        screen.debug()
    })

    test('Корректный jsx с переходом в конкретного пользователя', async () => {
        axios.get.mockReturnValue(response);
        renderWithRouter(null, '/users');
        // Одинаково отработает
        // renderWithRouter(<Users />);
        const user = userEvent.setup();
        const usersName = await screen.findAllByTestId("user-name");
        expect(usersName.length).toBe(2);
        await user.click(usersName[0])
        expect(screen.getByTestId("user-details")).toBeInTheDocument()
        screen.debug()
    })
})