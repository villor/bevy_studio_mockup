import type { PropsWithChildren } from 'react';

export default function Panel({
  tight,
  children,
  fillHeight,
  className,
}: PropsWithChildren<{
  tight?: boolean;
  fillHeight?: boolean;
  className?: string;
}>) {
  return (
    <div className={clsx('rounded-lg bg-ui-2 p-3', {
      'py-2': tight,
      'h-full': fillHeight,
    }, className)}
    >
      {children}
    </div>
  );
}
