import ProjectSettings from '../ProjectSettings/ProjectSettings';
import { EmptyProjectScreen } from './EmptyProjectScreen';
import Editor from './mockups/Editor';
import { TitleBar } from './TitleBar';
import type { ProjectSettingsTemplate } from '../ProjectSettings/ProjectSettings';

export default function MainWindow() {
  const { currentProfile, project, setCurrentProfile, runState } = useStudioContext();

  const [settingsOpen, setSettingsOpen] = useState<boolean | ProjectSettingsTemplate>(false);
  function openProjectSettings(template?: ProjectSettingsTemplate) {
    setSettingsOpen(template ?? true);
  }
  function closeProjectSettings() {
    setSettingsOpen(false);
    if (!currentProfile && project && project.profiles.length > 0) {
      setCurrentProfile(project.profiles[0].name);
    }
  }

  return (
    <OsWindow className="mx-12" noTitleBar>
      <TitleBar openProjectSettings={openProjectSettings} />
      <div className="flex h-[650px] flex-col bg-ui-3 p-2">
        {currentProfile && runState && runState.compiling && (
          <div className="mt-20 flex items-center justify-center">
            <IconSpinner className="mr-4 animate-spin" />
            Compiling...
          </div>
        )}
        {currentProfile && runState && runState.status === 'starting' && (
          <div className="mt-20 flex items-center justify-center">
            <IconSpinner className="mr-4 animate-spin" />
            Starting...
          </div>
        )}
        {currentProfile && runState && runState.initialized && currentProfile.mockupView === 'editor' && <Editor></Editor>}
        {!currentProfile && <EmptyProjectScreen openProjectSettings={openProjectSettings} />}
      </div>

      {settingsOpen && (
        <>
          <div className="absolute inset-0 z-40 bg-black opacity-20"></div>
          <div className="absolute left-1/2 top-24 z-50 -translate-x-1/2">
            <ProjectSettings
              template={isString(settingsOpen) ? settingsOpen : undefined}
              close={closeProjectSettings}
            />
          </div>
        </>
      )}
    </OsWindow>
  );
}
