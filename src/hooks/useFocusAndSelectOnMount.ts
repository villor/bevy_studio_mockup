export default function useFocusAndSelectOnMount() {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const didMount = useRef<boolean>(false);
  useEffect(() => {
    if (!didMount.current) {
      didMount.current = true;
      if (inputRef.current) {
        inputRef.current.focus();
        inputRef.current.select();
      }
    }
  });
  return inputRef;
}
