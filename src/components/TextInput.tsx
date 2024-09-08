import type { ForwardedRef, InputHTMLAttributes } from 'react';

type TextInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> ;

const TextInput = forwardRef((props: TextInputProps, ref: ForwardedRef<HTMLInputElement>) => {
  return (
    <input
      {...props}
      className={clsx(
        'block w-full rounded-lg bg-ui-1',
        'px-3 py-2',
        'focus:outline focus:outline-2 focus:outline-ui-3',
        props.className,
      )}
      type="text"
      autoComplete="off"
      ref={ref}
    />
  );
});

export default TextInput;
