import { ComponentProps } from 'react';

type IButtonProps = ComponentProps<'button'> & {};

export function Button({ children, className = '', ...props }: IButtonProps) {
  return (
    <button
      type="button"
      className={`${className} fancy-ring fancy-ring-bg h-10 rounded-md bg-primary-500 px-4 font-bold text-white`}
      {...props}
    >
      {children}
    </button>
  );
}
