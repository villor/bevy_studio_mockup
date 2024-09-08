import { twMerge } from 'tailwind-merge';
import type { ButtonHTMLAttributes, PropsWithChildren } from 'react';

interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'type'> {
  variant?: 'normal' | 'transparent';
};

export default function Button({ children, variant, ...attrs }: PropsWithChildren<ButtonProps>) {
  const className = clsx(
    'rounded-lg px-2 py-1 text-center hover:brightness-110 active:brightness-90',
    variant === 'transparent' ? 'hover:bg-ui-3/60' : 'bg-ui-3',
  );
  return (
    <button type="button" {...attrs} className={twMerge(className, attrs.className ?? '')}>
      {children}
    </button>
  );
}
