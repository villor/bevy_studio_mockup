export default function Editor() {
  return (
    <div className="mt-2 flex flex-1 gap-2">
      <div className="h-full w-1/4">
        <Panel fillHeight>
          <div className="space-y-2">
            <Button className="block w-full">Normal button</Button>
            <Button className="block" variant="transparent">Transparent button</Button>
            <TextInput defaultValue="Hi there" />
            <div className="flex gap-2">
              <TextInput placeholder="Search" />
              <Button>
                <IconSearch className="size-6" />
              </Button>
            </div>
            <div className="flex flex-wrap gap-1">
              <IconPlay />
              <IconPause />
              <IconForward />
              <IconError />
              <IconWarning />
              <IconClose />
              <IconPlus />
              <IconSearch />
              <IconPerson />
              <IconCamera />
              <IconCircleFilled />
              <IconDetails />
              <IconTransform />
              <IconSprite />
              <IconLight />
              <IconEdit />
            </div>
          </div>
        </Panel>
      </div>
      <div className="h-full w-1/2">
        <Panel fillHeight />
      </div>
      <div className="h-full w-1/4">
        <Panel fillHeight />
      </div>
    </div>
  );
}
