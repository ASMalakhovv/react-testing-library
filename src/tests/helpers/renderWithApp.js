import {render} from "@testing-library/react";
import {createReduxStore} from "../../store/store";
import {Provider} from "react-redux";
import {AppRouter} from "../../router/AppRouter";
import {MemoryRouter} from "react-router-dom";

export const renderWithApp = (component, options) => {
    const store = createReduxStore(options?.store);

    return render(
        <Provider store={store}>
            <MemoryRouter initialEntries={[options?.route]}>
                <AppRouter />
                {component}
            </MemoryRouter>
        </Provider>
    )
}
