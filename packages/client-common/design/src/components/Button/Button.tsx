import { ButtonHTMLAttributes, ReactNode, forwardRef } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button({ children, ...otherProps }, ref) {
  return (
    <button {...otherProps} ref={ref}>
      {children}
    </button>
  );
});
