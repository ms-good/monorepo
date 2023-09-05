import { ButtonHTMLAttributes, ReactNode, forwardRef } from 'react';
import tw from 'twin.macro';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { children, disabled, ...otherProps },
  ref,
) {
  return (
    <button
      {...otherProps}
      disabled={disabled}
      ref={ref}
      css={[tw`h-10 p-2 bg-blue-500 rounded-2xl text-white`, disabled && tw`bg-gray-500`]}>
      {children}
    </button>
  );
});
