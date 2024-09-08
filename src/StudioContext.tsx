import { createContext } from 'react';
import type { PropsWithChildren } from 'react';
import type { Profile, Project } from './models/project';

interface StudioContextData {
  project: Project | null;
  closeProject: () => void;
  updateProject: (project: Project) => void;
  newProject: (project: Project) => void;
  currentProfileName: string | null;
  currentProfile: Profile | null;
  setCurrentProfile: (name?: string | null) => void;
  addProfile: (type: AddProfileType) => string;
}

export type AddProfileType = 'bevy_editor' | 'project_binary' | 'project_code';

export const StudioContext = createContext<StudioContextData | null>(null);

export function StudioContextProvider({ children }: PropsWithChildren) {
  const [project, setProject] = useState<Project | null>(null);
  const [currentProfileName, setCurrentProfileName] = useState<string | null>(null);

  const currentProfile = useMemo(
    () => project?.profiles.find(profile => profile.name === currentProfileName) ?? null,
    [project, currentProfileName],
  );

  function newProject(project: Project | null) {
    setProject(project);
    setCurrentProfileName(project?.profiles[0]?.name ?? null);
  }

  function addProfile(type: AddProfileType) {
    if (!project)
      return '';

    const profiles = [...project.profiles];
    if (type === 'bevy_editor') {
      profiles.push({ name: 'Bevy Editor', mockupView: 'editor', type: 'binary' });
    }
    else if (type === 'project_binary') {
      profiles.push({ name: `${project.name} (bin)`, mockupView: 'editor', type: 'binary' });
    }
    else if (type === 'project_code') {
      profiles.push({ name: `${project.name} (code)`, mockupView: 'editor', type: 'code' });
    }
    setProject({ ...project, profiles });

    return profiles[profiles.length - 1].name;
  }

  const data = {
    project,
    closeProject: () => newProject(null),
    updateProject: setProject,
    newProject,
    currentProfileName,
    currentProfile,
    setCurrentProfile: name => setCurrentProfileName(name ?? null),
    addProfile,
  } satisfies StudioContextData;

  return (
    <StudioContext.Provider value={data}>
      {children}
    </StudioContext.Provider>
  );
}
