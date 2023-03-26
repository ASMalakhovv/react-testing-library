import {Counter} from "./Counter";
import userEvent from "@testing-library/user-event";
import {renderWithApp} from "../../tests/helpers/renderWithApp";

describe('Counter', () => {
    test('', async () => {
        const {getByTestId} = renderWithApp(null, {
            store: {
                counter: {value: 10}
            },
            route: '/',
        });

        const incrementBtn = getByTestId('increment-btn');
        expect(getByTestId('counter-value')).toHaveTextContent('10');
        await userEvent.click(incrementBtn);
        expect(getByTestId('counter-value')).toHaveTextContent('11');
    });
});
