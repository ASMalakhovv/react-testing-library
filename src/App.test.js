import {fireEvent, render, screen} from '@testing-library/react';
import App from './App';
import userEvent from "@testing-library/user-event";

describe('app', () => {
  test('renders learn react link', () => {
    render(<App/>);
    const helloWorldElem = screen.getByText(/hello world/i);
    const btnElem = screen.getByRole('button');
    const inputElem = screen.getByPlaceholderText(/inner text/i);
    expect(helloWorldElem).toBeInTheDocument();
    expect(btnElem).toBeInTheDocument();
    expect(inputElem).toBeInTheDocument();
    screen.debug()
    expect(inputElem).toMatchSnapshot()
  })

  test('проверка на отсутствие элемента', () => {
    render(<App/>);
    const elem = screen.queryByText(/hello2/i);
    expect(elem).not.toBeInTheDocument();
  });

  test('проверка элемента на наличие в дом async', async () => {
    render(<App/>);
    const elem = await screen.findByText(/data/i);
    expect(elem).toBeInTheDocument();
    expect(elem).toHaveStyle({color: 'red'});
  });

  test('Получение элементов через data аттрибут, импровизация событий', () => {
    render(<App/>);
    const spanElem = screen.queryByTestId("toggle-span")
    expect(spanElem).toBeNull()
    const btnElem = screen.getByTestId("btn-toggle")
    fireEvent.click(btnElem)
    expect(screen.getByTestId("toggle-span")).toBeInTheDocument()
    fireEvent.click(btnElem)
    expect(screen.queryByTestId("toggle-span")).toBeNull()
  });

  test('Тестирование инпута', () => {
    render(<App/>);
    const value = screen.getByTestId("data-value")
    expect(value).toContainHTML('')
    const input = screen.getByPlaceholderText(/inner text/i)
    expect(input).toBeInTheDocument()
    // Искусственное событие
    // fireEvent.input(input, {
    //   target: {value: '1234'}
    // })
    // Близко к пользователю, обрабатываются события нажатия клавиш и тд
    userEvent.type(input, '1234')
    expect(screen.getByTestId("data-value")).toContainHTML('1234')
  })
});
