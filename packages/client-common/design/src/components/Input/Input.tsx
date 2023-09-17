import { InputHTMLAttributes, forwardRef } from 'react';

interface ButtonProps extends InputHTMLAttributes<HTMLInputElement> {}

export const Input = forwardRef<HTMLInputElement, ButtonProps>(function Button({ children, ...otherProps }, ref) {
  return <input {...otherProps} ref={ref} />;
});
