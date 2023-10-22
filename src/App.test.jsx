import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Router from './Router';

describe('App component', () => {
  it('renders correct heading', () => {
    render(<Router/>);
    expect(screen.getByRole('heading').textContent).toMatch(/welcome/i);
  });
});
