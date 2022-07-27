import * as RadixSwitch from '@radix-ui/react-switch';

type SwitchProps = RadixSwitch.SwitchProps & {
  handleCheckChange?: (checked: boolean) => void;
};

function Switch({ handleCheckChange, ...props }: SwitchProps) {
  return (
    <RadixSwitch.Root
      onCheckedChange={handleCheckChange}
      className="bg-secondary border-secondary relative h-8 w-16 shrink-0 rounded-full border opacity-75 transition-opacity hover:opacity-100 focus:opacity-100 radix-state-checked:bg-primary-500 radix-state-checked:opacity-100"
      {...props}
    >
      <RadixSwitch.Thumb className="block h-4 w-4 translate-x-2 rounded-full bg-black transition-transform radix-state-checked:translate-x-10 dark:bg-white" />
    </RadixSwitch.Root>
  );
}

export default Switch;
