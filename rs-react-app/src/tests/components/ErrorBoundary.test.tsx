import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BugCreator } from '../../components/error/BugCreator';
import ErrorBoundary from '../../components/error/errorBoundary';

describe('BugCreator', () => {
  it('should trigger errorBoundary and console log when clicked', async () => {
    const spy = vi.spyOn(console, 'error').mockImplementation(() => {});

    render(
      <ErrorBoundary>
        <BugCreator />
      </ErrorBoundary>
    );
    const user = userEvent.setup();
    const bugCreator = screen.getByRole('button', { name: /error/i });

    await user.click(bugCreator);

    expect(screen.getByText(/Something went wrong/i)).toBeInTheDocument();
    expect(spy).toHaveBeenCalled();
  });
});
