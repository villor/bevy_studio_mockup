import bevyLogo from '@/assets/bevy.png';
import gabe from '@/assets/gabe.png';
import { IconCodeBracket } from '@/components/Icons';
import type { ProjectSettingsTemplate } from '../ProjectSettings/ProjectSettings';

interface EmptyProjectScreenProps {
  openProjectSettings: (template: ProjectSettingsTemplate) => void;
}

type ScaffoldTemplate = 'default_bevy' | 'minimal_bevy' | '2d_game' | '3d_game';

export function EmptyProjectScreen(
  { openProjectSettings }: EmptyProjectScreenProps,
) {
  const { addProfile, setCurrentProfile } = useStudioContext();

  function scaffold(template: ScaffoldTemplate) {
    if (template === 'default_bevy') {
      const profileName = addProfile('bevy_editor');
      setCurrentProfile(profileName);
    }
    else {
      const profileName = addProfile('project_code');
      setCurrentProfile(profileName);
    }
  }

  return (
    <Panel className="mx-auto mt-12 w-[500px] p-5">
      <h1 className="text-2xl">Get started</h1>
      <div className="mt-1 space-y-1 opacity-70">
        <p>This project has no profiles yet.</p>
        <p>Get started by selecting a template or start from an empty profile.</p>
      </div>

      <div className="my-3 h-px bg-ui-3"></div>

      <h2 className="mb-2 text-lg">
        Binary templates
        <span className="ml-4 text-sm italic opacity-70">No rust required</span>
      </h2>
      <div className="space-y-2">
        <Template
          title="Default Bevy Editor"
          icon={<img src={bevyLogo} className="size-2/3"></img>}
          onClick={() => scaffold('default_bevy')}
        >
          Try out the Bevy Editor without any set up!
          <br />
          Can also be used to edit non-custom scenes and assets.
        </Template>
        <Template
          title="Custom binary"
          icon={<IconCircleFilled className="size-1/2"></IconCircleFilled>}
          onClick={() => openProjectSettings('binary')}
        >
          Create a profile using a pre-compiled studio-enabled binary.
          <br />
          Useful for artists, designers, QA that may not have rust installed.
        </Template>
      </div>

      <h2 className="mb-2 mt-3 text-lg">
        Code templates
        <span className="ml-4 text-sm italic opacity-70">Requires an installed rust toolchain</span>
      </h2>
      <div className="space-y-2">
        <Template
          title="Minimal Bevy App"
          icon={<img src={bevyLogo} className="size-2/3"></img>}
          onClick={() => scaffold('minimal_bevy')}
        >
          Scaffold a bare-bones codebase for getting started on a new Bevy App.
        </Template>
        <Template
          title="2D Game"
          icon={<img src={gabe} className="size-2/3 rounded-full"></img>}
          onClick={() => scaffold('2d_game')}
        >
          Includes everything you need to get started developing a 2D game.
        </Template>
        <Template
          title="3D Game"
          icon={<IconTransform className="size-2/3" />}
          onClick={() => scaffold('3d_game')}
        >
          Includes everything you need to get started developing a 3D game.
        </Template>
        <Template
          title="Existing codebase"
          icon={<IconCodeBracket className="size-1/2" />}
          onClick={() => openProjectSettings('code')}
        >
          Set up this Bevy Studio project with a pre-existing Bevy app codebase.
        </Template>
      </div>

      <Button
        variant="transparent"
        className="mt-3"
        onClick={() => openProjectSettings('empty_profile')}
      >
        Or create a custom profile →
      </Button>
    </Panel>
  );
}

type TemplateProps = React.PropsWithChildren<{
  icon: React.ReactNode;
  title: string;
  onClick: () => void;
}>;

function Template({ icon, title, children, onClick }: TemplateProps) {
  return (
    <Button className="flex w-full items-center" onClick={onClick}>
      <div className="mr-1 flex size-14 shrink-0 items-center justify-center">
        {icon}
      </div>
      <div className="text-left">
        <h2 className="items-center font-bold">
          {title}
        </h2>
        <p className="opacity-80">
          {children}
        </p>
      </div>
    </Button>
  );
}
