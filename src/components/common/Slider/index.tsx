import * as RadixSlider from '@radix-ui/react-slider';

type SliderProps = {
  min: number;
  max: number;
  defaultValue: number;
  onValueChange: (value: number) => void;
};

function Slider({ min, max, defaultValue, onValueChange }: SliderProps) {
  return (
    <RadixSlider.Root
      onValueChange={(value) => onValueChange(value[0])}
      className="relative flex h-8 w-full items-center"
      defaultValue={[defaultValue]}
      max={max}
      min={min}
      step={1}
    >
      <RadixSlider.Track className="bg-secondary relative h-[3px] flex-1">
        <RadixSlider.Range className="inverted-bg-secondary absolute h-full" />
      </RadixSlider.Track>
      <RadixSlider.Thumb className="block h-4 w-4 rounded-full bg-black dark:bg-white" />
    </RadixSlider.Root>
  );
}

export default Slider;
