import classNames from 'classnames';
import { ComponentProps } from 'react';

type IInputProps = ComponentProps<'input'> & {
  icon?: JSX.Element;
};

export function Input({ className, icon, ...props }: IInputProps) {
  return (
    <div className="bg-secondary fancy-ring fancy-ring-bg text-primary relative flex flex-1 flex-row items-center gap-2 rounded-md p-2">
      {icon && (
        <div
          aria-hidden
          className="pointer-events-none absolute left-2 flex h-6 w-6 shrink-0 items-center justify-center"
        >
          {icon}
        </div>
      )}
      <input
        className={classNames(
          `${className} w-full bg-transparent outline-none`,
          {
            'px-2': !icon,
            'pl-8': icon,
          }
        )}
        {...props}
      />
    </div>
  );
}
