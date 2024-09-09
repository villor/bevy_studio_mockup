import type { DropdownItem } from '@/components/Dropdown';
import type { ProjectSettingsTemplate } from '../ProjectSettings/ProjectSettings';

interface TitleBarProps {
  openProjectSettings: (template?: ProjectSettingsTemplate) => void;
}

export function TitleBar({ openProjectSettings }: TitleBarProps) {
  const { closeProject } = useStudioContext();
  const project = useRequiredProject();

  return (
    <div className="grid h-16 grid-cols-3 border-b border-ui-1/30 bg-ui-2 px-3">
      <div className="flex h-full items-center">
        <OsDots />
        <Button variant="transparent">
          <IconHamburgerMenu className="size-7 fill-ui-4 opacity-60" />
        </Button>
        <Dropdown
          label={project.name}
          items={[
            { key: 'new', label: 'New project', icon: () => <IconPlus className="size-6" />, action: closeProject },
            { key: 'open', label: 'Open...', icon: () => <IconFolderOpen className="size-6" /> },
            'separator',
            { key: 'project-settings', label: 'Project settings...', icon: () => <IconCog className="size-6" />, action: openProjectSettings },
            'separator',
            { key: 'close', label: 'Close project...', icon: () => <IconClose className="size-6" />, action: closeProject },
          ]}
        />
      </div>
      <div className="flex h-full items-center justify-center">
        <TextInput placeholder="Command Palette" className="max-w-[400px] placeholder:text-center" />
      </div>
      <div className="flex h-full items-center justify-end">
        <ProfileStatus openProjectSettings={openProjectSettings} />
      </div>
    </div>
  );
}

function ProfileStatus({ openProjectSettings }: { openProjectSettings: TitleBarProps['openProjectSettings'] }) {
  const { profiles } = useRequiredProject();
  const { currentProfile, setCurrentProfile, runState } = useStudioContext();

  return (
    <div className="flex items-center space-x-1">
      <span>{runState ? runState.compiling ? 'compiling' : runState.status : '...'}</span>
      {currentProfile && (
        <div>
          {currentProfile.type === 'binary' ? <IconCircleFilled className="size-6" /> : <IconCodeBracket className="size-6" />}
        </div>
      )}
      <Dropdown
        anchor="right"
        label={currentProfile ? currentProfile.name : '<No profile>'}
        items={[
          ...profiles.map(profile => ({
            key: profile.name,
            label: profile.name,
            icon: () => profile.type === 'binary' ? <IconCircleFilled className="size-6" /> : <IconCodeBracket className="size-6" />,
            action: () => setCurrentProfile(profile.name),
          })),
          ...(profiles.length ? ['separator' as DropdownItem] : []),
          {
            key: 'project-settings',
            label: 'Edit profiles...',
            icon: () => <IconCog className="size-6" />,
            action: () => openProjectSettings('empty_profile'),
          },
        ]}
      />
    </div>
  );
}
