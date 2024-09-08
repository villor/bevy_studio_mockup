import { Profiles } from './Profiles';

export type ProjectSettingsTemplate = 'empty_profile' | 'binary' | 'code';

type Tab = 'project' | 'profiles';

interface ProjectSettingsProps {
  template?: ProjectSettingsTemplate;
  close: () => void;
}

export default function ProjectSettings({ template, close }: ProjectSettingsProps) {
  const { project, updateProject } = useStudioContext();

  const [tab, setTab] = useState<Tab>(template ? 'profiles' : 'project');

  return (
    <OsWindow className="mx-auto w-[650px]">
      <div className="flex h-[450px] gap-2 bg-ui-3 p-2">
        <Panel className="w-60">
          <Button
            variant={tab === 'project' ? 'normal' : 'transparent'}
            className="w-full text-left text-lg"
            onClick={() => setTab('project')}
          >
            Project
          </Button>
          <Button
            variant={tab === 'profiles' ? 'normal' : 'transparent'}
            className="w-full text-left text-lg"
            onClick={() => setTab('profiles')}
          >
            Profiles
          </Button>
        </Panel>
        <Panel className="flex-1">
          {tab === 'project' && (
            <div>
              <h2 className="text-xl font-medium">Project Settings</h2>
              <h3 className="mb-1 mt-3">Project Name</h3>
              <TextInput value={project!.name} onChange={ev => updateProject({ ...project!, name: ev.target.value })} />
            </div>
          )}
          {tab === 'profiles' && <Profiles />}
        </Panel>
      </div>
      <Panel className="flex items-center justify-end gap-3">
        <Button onClick={close}>OK</Button>
      </Panel>
    </OsWindow>
  );
}
