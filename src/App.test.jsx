import { describe, it, expect } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { fireEvent } from '@testing-library/dom';
import Context from './Context';
import { RouterProvider, createMemoryRouter } from 'react-router-dom';
import { routes } from './Router';

describe('App component', () => {
  it('renders App', async () => {
    const router = createMemoryRouter(routes, { initialEntries: ['/login'] });

    render(
      <Context>
        <RouterProvider router={router} />
      </Context>
    );

    const btn = screen.getByText('Go back to main page');
    expect(btn).toBeVisible();
    userEvent.click(btn);

    await waitFor(() => {
      expect(window.location.pathname).toBe('/');
      expect(btn).toBeVisible();
    });

    screen.debug();
  });
});

describe('Theme Switcher', () => {
  const router = createMemoryRouter(routes, { initialEntries: ['/login'] });
  it('changing theme on click', async () => {
    render(
      <Context>
        <RouterProvider router={router} />
      </Context>
    );

    const input = screen.getByRole('input');
    expect(input).toHaveAttribute('value', '0');
    fireEvent.change(input, { target: { value: 1 } });

    await waitFor(() => {
      expect(input).toHaveAttribute('value', '1');
    });
  });
});

describe('Log in component', () => {
  it('display login', async () => {
    const router = createMemoryRouter(routes, { initialEntries: ['/login'] });
    render(
      <Context>
        <RouterProvider router={router} />
      </Context>
    );
    expect(screen.getByRole('form')).toBeInTheDocument();
    expect(screen.getByLabelText(/Your email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Password/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Remember me/i)).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: /Sign in/i })
    ).toBeInTheDocument();
  });
    it('displays email error message for invalid email format', () => {
      const router = createMemoryRouter(routes, { initialEntries: ['/login'] });
        render(
          <Context>
            <RouterProvider router={router} />
          </Context>
        );

      // Trigger an invalid email input
      fireEvent.change(screen.getByLabelText(/Your email/i), {
        target: { value: 'invalidemail' },
      });
       fireEvent.change(screen.getByLabelText(/Password/i), {
         target: { value: 'wrongpassword' },
       });
      fireEvent.click(screen.getByRole('button', { name: /Sign in/i }));

      // Ensure the error message is displayed
      expect(
        screen.getByText(/This is not correct email format/i)
      ).toBeInTheDocument();
    });

    it('displays password error message for invalid password', () => {
      const router = createMemoryRouter(routes, { initialEntries: ['/login'] });
        render(
          <Context>
            <RouterProvider router={router} />
          </Context>
        );

      // Trigger an invalid password input
      fireEvent.change(screen.getByLabelText(/Your email/i), {
        target: { value: 'validemail@examples.com' },
      });
      fireEvent.change(screen.getByLabelText(/Password/i), {
        target: { value: 'wrongpassword' },
      });
      fireEvent.click(screen.getByRole('button', { name: /Sign in/i }));

      // Ensure the error message is displayed
      expect(
        screen.getByText(/Your temporary password is: "password"/i)
      ).toBeInTheDocument();
    });

    it('logs in successfully with valid credentials', () => {
      const router = createMemoryRouter(routes, { initialEntries: ['/login'] });
        render(
          <Context>
            <RouterProvider router={router} />
          </Context>
        );

      // Set valid email and password
      fireEvent.change(screen.getByLabelText(/Your email/i), {
        target: { value: 'validemail@example.com' },
      });
      fireEvent.change(screen.getByLabelText(/Password/i), {
        target: { value: 'password' },
      });

      // Ensure no error messages are displayed initially
      expect(
        screen.queryByText(/This is not correct email format/i)
      ).toBeNull();
      expect(
        screen.queryByText(/Your temporary password is: "password"/i)
      ).toBeNull();

      // Click on the submit button
      fireEvent.click(screen.getByRole('button', { name: /Sign in/i }));

      // Ensure the success message is displayed
      expect(screen.getByText(/You have been logged/i)).toBeInTheDocument();
    });

});
