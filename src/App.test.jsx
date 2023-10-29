import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
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


describe('Theme Switcher', ()=> {
  it('changing theme on click', async ()=> {
       const user = userEvent.setup();

           render(
             <Context>
               <Router />
             </Context>
           );

       const input = screen.getByRole('input');
      expect(input).toHaveAttribute('value', '0')

       await user.type(input, '{arrowright}');
            
       expect(input).toHaveAttribute('value', '0')


  })
})