import { describe, it, expect } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {fireEvent} from '@testing-library/dom'
import Context from './Context';
import Router from './Router';

describe('App component', () => {
  it('renders correct heading', () => {
    render(
      <Context>
        <Router />
      </Context>
    );
    expect(screen.getByRole('heading').textContent).toMatch(/welcome/i);
  });
});

describe('Theme Switcher', () => {
  it('changing theme on click', async () => {
    render(
      <Context>
        <Router />
      </Context>
    );

    const input = screen.getByRole('input');
    expect(input).toHaveAttribute('value', '0');
    fireEvent.change(input, {target:{value:1}})
    
    await waitFor(() => {
      expect(input).toHaveAttribute('value', '1');
    });
  });
});

// describe('Log in component', () => {
//   it('display login', async () => {
//     const user = userEvent.setup();

//     render(
//       <Context>
//         <Router />
//       </Context>
//     );

//     const logButton = screen.getByTestId('login');
//     expect(logButton.textContent).toBe('Log in');

//    user.click(logButton);
//   screen.debug()
//   //  await waitFor(()=> {
//   //   expect(screen.getByRole('form').toBeVisible())
//   //  })
//   });
// });
