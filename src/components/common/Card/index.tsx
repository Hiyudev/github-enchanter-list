import { ComponentProps } from 'react';

type CardProps = ComponentProps<'div'> & {
  children: React.ReactNode;
};

function Card({ className = '', children, ...props }: CardProps) {
  return (
    <div
      className={`border-secondary rounded-md border p-4 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

export default Card;
