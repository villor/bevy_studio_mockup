import { Menu, MenuButton, MenuItem, MenuItems, MenuSeparator } from '@headlessui/react';
import type { Key, ReactNode } from 'react';
import { IconChevronDown } from './Icons';

export type DropdownItem = 'separator' | {
  key: Key;
  icon?: () => ReactNode;
  label?: string;
  action?: () => void;
};

interface DropdownProps {
  label: string;
  items: DropdownItem[];
  anchor?: 'left' | 'right';
}

export function Dropdown({ label, items, anchor }: DropdownProps) {
  const anchorClass = anchor && anchor === 'right' ? 'right-0' : 'left-0';
  return (
    <Menu as="div" className="relative">
      <MenuButton className="inline-flex items-center gap-2 rounded-md bg-ui-2 px-4 py-2 font-semibold text-white shadow-inner  focus:outline-none data-[focus]:outline-1 data-[focus]:outline-white data-[hover]:brightness-125 data-[open]:brightness-125">
        {label}
        <IconChevronDown className="size-6" />
      </MenuButton>
      <MenuItems className={clsx(
        'absolute top-full w-64 rounded-xl border border-white/5 bg-ui-3 p-1 text-white transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0',
        anchorClass,
      )}
      >
        {items.map((item, i) => {
          if (item === 'separator')
            // eslint-disable-next-line react/no-array-index-key
            return <MenuSeparator key={`sep${i}`} className="my-1 h-px bg-white/5" />;

          return (
            <MenuItem key={item.key}>
              <button onClick={item.action} type="button" className="flex w-full items-center gap-2 rounded-lg px-3 py-1.5 data-[focus]:bg-white/10">
                {item.icon && <span className="opacity-50">{item.icon()}</span>}
                {item.label ?? 'No label'}
              </button>
            </MenuItem>
          );
        })}
      </MenuItems>
    </Menu>
  );
}
