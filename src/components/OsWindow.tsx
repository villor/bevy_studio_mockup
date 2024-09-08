import type { PropsWithChildren } from 'react';

type OsWindowProps = PropsWithChildren<{
  className?: string;
  noTitleBar?: boolean;
}>;

export default function OsWindow({ children, className, noTitleBar }: OsWindowProps) {
  return (
    <div className={clsx('relative overflow-hidden rounded-lg', className ?? '')}>
      {!noTitleBar && <TitleBar />}
      {children}
    </div>
  );
}

function OsDot() {
  return <div className="mr-[6px] inline-block size-3.5 rounded-full bg-white opacity-10"></div>;
}

export function OsDots() {
  return (
    <>
      <OsDot />
      <OsDot />
      <OsDot />
    </>
  );
}

function TitleBar() {
  return (
    <div className="flex items-center rounded-t-md bg-[#1F1E25] px-4 py-3">
      <OsDots />
    </div>
  );
}
