import bevyLogo from '@/assets/bevy.png';

type View = 'welcome' | 'new';

function Welcome({ setView }: { setView: (view: View) => void }) {
  return (
    <>
      <IconCog className="absolute right-3 top-3 size-6 fill-ui-4" />
      <div className="flex flex-1 flex-col">
        <img src={bevyLogo} className="mx-auto mt-4 size-24"></img>
        <h1 className="mt-3 text-2xl">Welcome to Bevy Studio</h1>
        <p className="mt-3 text-lg text-ui-4">Create a new project or open an existing one.</p>
        <div className="grid flex-1 grid-cols-3 px-32">
          <Button onClick={() => setView('new')} variant="transparent">
            <div className="mx-auto flex size-16 items-center justify-center rounded-lg bg-ui-3">
              <IconPlus />
            </div>
            <p className="mt-2">New Project</p>
          </Button>
          <Button variant="transparent">
            <div className="mx-auto flex size-16 items-center justify-center rounded-lg bg-ui-3">
              <IconFolderOpen />
            </div>
            <p className="mt-2">Open</p>
          </Button>
          <Button variant="transparent">
            <div className="mx-auto flex size-16 items-center justify-center rounded-lg bg-ui-3">
              <IconGit />
            </div>
            <p className="mt-2">Clone from Git</p>
          </Button>
        </div>
      </div>
      <div className="border-t border-ui-3 p-8 text-left">
        <h2 className="text-xl">Take the tour</h2>
        <p className="mt-1.5 text-ui-4">Familiarize yourself with Bevy Studio by taking the tour!</p>
        <Button className="mt-4">Start Tour</Button>
        <p className="mt-1 text-xs italic text-ui-3">This is not a rip-off at all :|</p>
      </div>
    </>
  );
}

function NewProject({ setView }: { setView: (view: View) => void }) {
  const { newProject } = useStudioContext();

  const [name, setName] = useState('Game of the year');
  const [dir, setDir] = useState('~/bevy/game_of_the_year');

  const inputRef = useFocusAndSelectOnMount();

  return (
    <>
      <div className="flex-1 p-3 text-left">
        <h2 className="text-xl font-medium">New Project</h2>
        <h3 className="mb-1 mt-3">Project Name</h3>
        <TextInput autoFocus value={name} onChange={ev => setName(ev.target.value)} ref={inputRef} />
        <h3 className="mb-1 mt-3">Directory</h3>
        <div className="flex items-center gap-3">
          <TextInput value={dir} onChange={ev => setDir(ev.target.value)} placeholder="Please choose a directory for your project..." />
          <Button>
            <IconFolderOpen className="size-8" />
          </Button>
        </div>
      </div>
      <div className="flex items-center justify-end gap-3 p-4">
        <Button onClick={() => setView('welcome')}>Cancel</Button>
        <Button onClick={() => newProject(createProject(name, dir))}>OK</Button>
      </div>
    </>
  );
}

export default function WelcomeWindow() {
  const [view, setView] = useState<View>('welcome');
  return (
    <OsWindow className="mx-auto w-[600px]">
      <div className="relative flex h-[450px] flex-col bg-ui-2 p-2 text-center">
        {view === 'welcome' && <Welcome setView={setView} />}
        {view === 'new' && <NewProject setView={setView} />}
      </div>
    </OsWindow>
  );
}
