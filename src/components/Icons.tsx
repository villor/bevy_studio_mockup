import type { SVGProps } from 'react';

type IconProps = SVGProps<SVGSVGElement>;

function getAttrs({ className, width, height }: IconProps, defaultFill?: string) {
  return {
    className: clsx(defaultFill ?? 'fill-ui-5', className),
    width: width ?? 24,
    height: height ?? 24,
  };
}

export function IconPlay(props: IconProps) {
  const attrs = getAttrs(props);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" {...attrs} viewBox="0 -960 960 960">
      <path d="M320-200v-560l440 280-440 280Z" />
    </svg>
  );
}

export function IconPause(props: IconProps) {
  const attrs = getAttrs(props);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" {...attrs} viewBox="0 -960 960 960">
      <path d="M560-200v-560h160v560H560Zm-320 0v-560h160v560H240Z" />
    </svg>
  );
}

export function IconForward(props: IconProps) {
  const attrs = getAttrs(props);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" {...attrs} viewBox="0 -960 960 960">
      <path d="M660-240v-480h80v480h-80Zm-440 0v-480l360 240-360 240Z" />
    </svg>
  );
}

export function IconError(props: IconProps) {
  const attrs = getAttrs(props, 'fill-danger');
  return (
    <svg xmlns="http://www.w3.org/2000/svg" {...attrs} viewBox="0 0 24 24">
      <path
        d="M13 13H11V7H13M11 15H13V17H11M15.73 3H8.27L3 8.27V15.73L8.27 21H15.73L21 15.73V8.27L15.73 3Z"
      />
    </svg>
  );
}

export function IconWarning(props: IconProps) {
  const attrs = getAttrs(props, 'fill-warning');
  return (
    <svg xmlns="http://www.w3.org/2000/svg" {...attrs} viewBox="0 0 24 24">
      <path d="M13 14H11V9H13M13 18H11V16H13M1 21H23L12 2L1 21Z" />
    </svg>
  );
}

export function IconClose(props: IconProps) {
  const attrs = getAttrs(props);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" {...attrs} viewBox="0 0 24 24">
      <path
        d="M20 6.91L17.09 4L12 9.09L6.91 4L4 6.91L9.09 12L4 17.09L6.91 20L12 14.91L17.09 20L20 17.09L14.91 12L20 6.91Z"
      />
    </svg>
  );
}

export function IconPlus(props: IconProps) {
  const attrs = getAttrs(props);
  attrs.className = clsx(attrs.className, 'rotate-45');
  return (
    <svg xmlns="http://www.w3.org/2000/svg" {...attrs} viewBox="0 0 24 24">
      <path
        d="M20 6.91L17.09 4L12 9.09L6.91 4L4 6.91L9.09 12L4 17.09L6.91 20L12 14.91L17.09 20L20 17.09L14.91 12L20 6.91Z"
      />
    </svg>
  );
}

export function IconSearch(props: IconProps) {
  const attrs = getAttrs(props);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" {...attrs} viewBox="0 -960 960 960">
      <path
        d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"
      />
    </svg>
  );
}

export function IconPerson(props: IconProps) {
  const attrs = getAttrs(props);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" {...attrs} viewBox="0 0 24 24">
      <path
        d="M12,1C10.89,1 10,1.9 10,3C10,4.11 10.89,5 12,5C13.11,5 14,4.11 14,3A2,2 0 0,0 12,1M10,6C9.73,6 9.5,6.11 9.31,6.28H9.3L4,11.59L5.42,13L9,9.41V22H11V15H13V22H15V9.41L18.58,13L20,11.59L14.7,6.28C14.5,6.11 14.27,6 14,6"
      />
    </svg>
  );
}

export function IconCamera(props: IconProps) {
  const attrs = getAttrs(props);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" {...attrs} viewBox="0 -960 960 960">
      <path
        d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h480q33 0 56.5 23.5T720-720v180l160-160v440L720-420v180q0 33-23.5 56.5T640-160H160Z"
      />
    </svg>
  );
}

export function IconCircleFilled(props: IconProps) {
  const attrs = getAttrs(props);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" {...attrs} viewBox="0 0 24 24">
      <path
        d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"
      />
    </svg>
  );
}

export function IconDetails(props: IconProps) {
  const attrs = getAttrs(props);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" {...attrs} viewBox="0 0 24 24">
      <path
        d="M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z"
      />
    </svg>
  );
}

export function IconTransform(props: IconProps) {
  const attrs = getAttrs(props, 'fill-transform');
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      {...attrs}
    >
      <path
        d="M12,2L16,6H13V13.85L19.53,17.61L21,15.03L22.5,20.5L17,21.96L18.53,19.35L12,15.58L5.47,19.35L7,21.96L1.5,20.5L3,15.03L4.47,17.61L11,13.85V6H8L12,2Z"
      />
    </svg>
  );
}

export function IconSprite(props: IconProps) {
  const attrs = getAttrs(props, 'fill-asset');
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      {...attrs}
      viewBox="0 0 24 24"
    >
      <path
        d="M11,13.5V21.5H3V13.5H11M12,2L17.5,11H6.5L12,2M17.5,13C20,13 22,15 22,17.5C22,20 20,22 17.5,22C15,22 13,20 13,17.5C13,15 15,13 17.5,13Z"
      />
    </svg>
  );
}

export function IconLight(props: IconProps) {
  const attrs = getAttrs(props, 'fill-light');
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      {...attrs}
      viewBox="0 0 24 24"
    >
      <path
        d="M12,6A6,6 0 0,1 18,12C18,14.22 16.79,16.16 15,17.2V19A1,1 0 0,1 14,20H10A1,1 0 0,1 9,19V17.2C7.21,16.16 6,14.22 6,12A6,6 0 0,1 12,6M14,21V22A1,1 0 0,1 13,23H11A1,1 0 0,1 10,22V21H14M20,11H23V13H20V11M1,11H4V13H1V11M13,1V4H11V1H13M4.92,3.5L7.05,5.64L5.63,7.05L3.5,4.93L4.92,3.5M16.95,5.63L19.07,3.5L20.5,4.93L18.37,7.05L16.95,5.63Z"
      />
    </svg>
  );
}

export function IconEdit(props: IconProps) {
  const attrs = getAttrs(props);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" {...attrs} viewBox="0 0 24 24">
      <path
        d="M6 2C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H10V20.1L20 10.1V8L14 2H6M13 3.5L18.5 9H13V3.5M20.1 13C20 13 19.8 13.1 19.7 13.2L18.7 14.2L20.8 16.3L21.8 15.3C22 15.1 22 14.7 21.8 14.5L20.5 13.2C20.4 13.1 20.3 13 20.1 13M18.1 14.8L12 20.9V23H14.1L20.2 16.9L18.1 14.8Z"
      />
    </svg>
  );
}

export function IconCog(props: IconProps) {
  const attrs = getAttrs(props);
  return (
    <svg {...attrs} data-slot="icon" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path clipRule="evenodd" d="M11.078 2.25c-.917 0-1.699.663-1.85 1.567L9.05 4.889c-.02.12-.115.26-.297.348a7.493 7.493 0 0 0-.986.57c-.166.115-.334.126-.45.083L6.3 5.508a1.875 1.875 0 0 0-2.282.819l-.922 1.597a1.875 1.875 0 0 0 .432 2.385l.84.692c.095.078.17.229.154.43a7.598 7.598 0 0 0 0 1.139c.015.2-.059.352-.153.43l-.841.692a1.875 1.875 0 0 0-.432 2.385l.922 1.597a1.875 1.875 0 0 0 2.282.818l1.019-.382c.115-.043.283-.031.45.082.312.214.641.405.985.57.182.088.277.228.297.35l.178 1.071c.151.904.933 1.567 1.85 1.567h1.844c.916 0 1.699-.663 1.85-1.567l.178-1.072c.02-.12.114-.26.297-.349.344-.165.673-.356.985-.57.167-.114.335-.125.45-.082l1.02.382a1.875 1.875 0 0 0 2.28-.819l.923-1.597a1.875 1.875 0 0 0-.432-2.385l-.84-.692c-.095-.078-.17-.229-.154-.43a7.614 7.614 0 0 0 0-1.139c-.016-.2.059-.352.153-.43l.84-.692c.708-.582.891-1.59.433-2.385l-.922-1.597a1.875 1.875 0 0 0-2.282-.818l-1.02.382c-.114.043-.282.031-.449-.083a7.49 7.49 0 0 0-.985-.57c-.183-.087-.277-.227-.297-.348l-.179-1.072a1.875 1.875 0 0 0-1.85-1.567h-1.843ZM12 15.75a3.75 3.75 0 1 0 0-7.5 3.75 3.75 0 0 0 0 7.5Z" fillRule="evenodd"></path>
    </svg>
  );
}

export function IconFolderOpen(props: IconProps) {
  const attrs = getAttrs(props);
  return (
    <svg {...attrs} data-slot="icon" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M19.906 9c.382 0 .749.057 1.094.162V9a3 3 0 0 0-3-3h-3.879a.75.75 0 0 1-.53-.22L11.47 3.66A2.25 2.25 0 0 0 9.879 3H6a3 3 0 0 0-3 3v3.162A3.756 3.756 0 0 1 4.094 9h15.812ZM4.094 10.5a2.25 2.25 0 0 0-2.227 2.568l.857 6A2.25 2.25 0 0 0 4.951 21H19.05a2.25 2.25 0 0 0 2.227-1.932l.857-6a2.25 2.25 0 0 0-2.227-2.568H4.094Z"></path>
    </svg>
  );
}

export function IconGit(props: IconProps) {
  const attrs = getAttrs(props);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" {...attrs} viewBox="0 0 92 92">
      <path d="M90.156 41.965 50.036 1.848a5.918 5.918 0 0 0-8.372 0l-8.328 8.332 10.566 10.566a7.03 7.03 0 0 1 7.23 1.684 7.034 7.034 0 0 1 1.669 7.277l10.187 10.184a7.028 7.028 0 0 1 7.278 1.672 7.04 7.04 0 0 1 0 9.957 7.05 7.05 0 0 1-9.965 0 7.044 7.044 0 0 1-1.528-7.66l-9.5-9.497V59.36a7.04 7.04 0 0 1 1.86 11.29 7.04 7.04 0 0 1-9.957 0 7.04 7.04 0 0 1 0-9.958 7.06 7.06 0 0 1 2.304-1.539V33.926a7.049 7.049 0 0 1-3.82-9.234L29.242 14.272 1.73 41.777a5.925 5.925 0 0 0 0 8.371L41.852 90.27a5.925 5.925 0 0 0 8.37 0l39.934-39.934a5.925 5.925 0 0 0 0-8.371" />
    </svg>
  );
}

export function IconHamburgerMenu(props: IconProps) {
  const attrs = getAttrs(props);
  return (
    <svg version="1.1" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" {...attrs}>
      <path
        d="M4,10h24c1.104,0,2-0.896,2-2s-0.896-2-2-2H4C2.896,6,2,6.896,2,8S2.896,10,4,10z M28,14H4c-1.104,0-2,0.896-2,2  s0.896,2,2,2h24c1.104,0,2-0.896,2-2S29.104,14,28,14z M28,22H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h24c1.104,0,2-0.896,2-2  S29.104,22,28,22z"
      />
    </svg>
  );
}

export function IconChevronDown(props: IconProps) {
  const attrs = getAttrs(props, '');
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...attrs}>
      <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
    </svg>

  );
}

export function IconChevronUp(props: IconProps) {
  const attrs = getAttrs(props, '');
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...attrs}>
      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
    </svg>

  );
}

export function IconCodeBracket(props: IconProps) {
  const attrs = getAttrs(props, '');
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...attrs}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
    </svg>
  );
}
