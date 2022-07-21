import classNames from 'classnames';
import { ComponentProps } from 'react';

type OptionProps = ComponentProps<'button'> & {
  selected?: boolean;
  first?: boolean;
  last?: boolean;
};

function OptionComponent({
  children,
  selected = false,
  className = '',
  first = false,
  last = false,
  ...props
}: OptionProps) {
  return (
    <button
      className={classNames(
        `flex w-full flex-col items-center justify-center p-4 transition-opacity hover:opacity-100 focus:opacity-100 ${className}`,
        {
          'bg-primary-500 opacity-100': selected,
          'bg-secondary opacity-75': !selected,
          'rounded-t-md md:rounded-l-md md:rounded-tr-none': first,
          'rounded-b-md md:rounded-r-md md:rounded-bl-none': last,
        }
      )}
      {...props}
    >
      {children}
    </button>
  );
}

export default OptionComponent;
