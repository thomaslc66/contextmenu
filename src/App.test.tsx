import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import Navbar from './component/navbar/Navbar';
import TodoContainer from './component/todos/TodoContainer';
import TodoForm from './component/todos/TodoForm';
import { act } from 'react-dom/test-utils';

let todoContainer: any;

beforeEach(() => {
  todoContainer = document.createElement('div');
  document.body.appendChild(todoContainer);
});

afterEach(() => {
  document.body.removeChild(todoContainer);
  todoContainer = null;
});

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/menu2/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders the menu correctly', () => {
  const menu = [{ name: 'menu1' }, { name: 'menu2' }];
  const { getByText } = render(<Navbar menu={menu} />);
  const menuElement = getByText(/menu1/i);
  expect(menuElement).toBeInTheDocument();
});

test('renders correctly when no todos', () => {
  const { getByText } = render(<TodoContainer />);
  const noTodos = getByText(/No todos/i);
  expect(noTodos).toBeInTheDocument();
});

test('renders correctly when at least 1 todo', () => {
  const { getByText } = render(<TodoContainer />);
  const ExistingTodos = getByText(/Add new Todo/i);
  expect(ExistingTodos).toBeInTheDocument();
});

test('renders button correctly', () => {
  const { getByTestId } = render(<TodoForm />);
  const myButton = getByTestId('add-button');
  expect(myButton).toBeInTheDocument();
  expect(myButton).toHaveAttribute('type', 'submit');
});

test('add a todo correctly', () => {
  const { getByTestId } = render(<TodoForm />);
  const myInput = getByTestId('input-form');
  expect(myInput).toBeInTheDocument();
  expect(myInput).toHaveAttribute('type', 'text');
});

it('Can display a new todo', () => {
  act(() => {
    render(<TodoContainer />, todoContainer);
  });

  const addButton = todoContainer.querySelector('button');
  const todoInput = todoContainer.querySelector('input');

  expect(addButton).toBeDefined();
  expect(addButton.text()).toBe('Add new todo');
});
