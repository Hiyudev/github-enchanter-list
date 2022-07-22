import { useEffect, useState } from 'react';
import { Option } from '../../../@types';
import OptionComponent from './Option';

type OptionsProps = {
  options: Option[];
  onSelectOption: (selected: Option) => void;
};

export default function Options({ options, onSelectOption }: OptionsProps) {
  const [selected, selectOption] = useState<Option>(
    () => options.filter((option) => option.defaultSelected)[0]
  );

  useEffect(() => {
    onSelectOption(selected);
  }, [onSelectOption, selected]);

  return (
    <div
      role="toolbar"
      aria-label="Switch badge style options"
      className="flex flex-col md:flex-row"
    >
      {options.map((option, index) => {
        function handleSelectOption() {
          selectOption(option);
        }

        return (
          <OptionComponent
            first={index === 0}
            last={index === options.length - 1}
            selected={option.label == selected.label}
            onClick={handleSelectOption}
            key={index}
            aria-label={`Switch to ${option.label} badge style`}
          >
            {option.icon}
            {option.label}
          </OptionComponent>
        );
      })}
    </div>
  );
}
