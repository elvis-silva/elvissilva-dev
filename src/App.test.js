/* eslint-disable testing-library/no-container */
/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/no-unnecessary-act */
import { act, render, screen } from '@testing-library/react';
import { unmountComponentAtNode } from 'react-dom';
// import { act } from 'react-dom/test-utils';
import { idText } from 'typescript';
import App from './App';

let container = null;
beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it('expect welcome message to be in the document', () => {
  act(() => {
  /* const {container} = */render(<App />, container);
  });
  
  const welcomeElement = document.querySelector('[data-testid="logo"]');
  expect(welcomeElement).toBeInTheDocument();
});
