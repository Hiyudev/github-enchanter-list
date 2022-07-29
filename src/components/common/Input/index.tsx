import * as RadixPopover from '@radix-ui/react-popover';
import classNames from 'classnames';
import { useTheme } from 'next-themes';
import { ComponentProps, useEffect } from 'react';
import { ColorPicker, useColor } from 'react-color-palette';
import useDebounce from '../../../hooks/useDebounce';

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

type ColorInputProps = {
  className?: string;
  defaultColor?: string;
  onColorChange: (hexColor: string) => void;
};

export function ColorInput({
  className = '',
  defaultColor,
  onColorChange,
}: ColorInputProps) {
  const { theme } = useTheme();
  const [color, setColor] = useColor('hex', defaultColor);
  const debouncedColor = useDebounce(color, 500);

  useEffect(() => {
    onColorChange(debouncedColor.hex);
  }, [debouncedColor, onColorChange]);

  return (
    <>
      <RadixPopover.Root>
        <RadixPopover.Trigger asChild>
          <button
            className="border-secondary h-10 w-10 rounded-md border"
            style={{
              backgroundColor: color.hex,
            }}
          />
        </RadixPopover.Trigger>
        <RadixPopover.Content sideOffset={16} className="z-50">
          <ColorPicker
            width={456}
            height={228}
            color={color}
            onChange={setColor}
            hideHSV
            dark={theme == 'dark'}
          />
        </RadixPopover.Content>
      </RadixPopover.Root>
    </>
  );
}
