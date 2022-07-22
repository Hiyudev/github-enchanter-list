import classNames from 'classnames';
import { BadgeStyles } from '../../../../@types';

type BadgeContainerProps = {
  children: React.ReactNode;
  className?: string;
  style: BadgeStyles;
};

function BadgeContainer({
  className = '',
  style,
  children,
}: BadgeContainerProps) {
  return (
    <div
      className={classNames(`relative min-w-[200px] ${className}`, {
        'h-[18px]': style == 'plastic',
        'h-[20px]':
          style == 'flat' || style === 'flat-square' || style == 'social',
        'h-7': style == 'for-the-badge',
      })}
    >
      {children}
    </div>
  );
}

export default BadgeContainer;
