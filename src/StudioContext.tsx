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
  addProfiles: (types: AddProfileType[]) => string;

  runState: RunState | null;
  simulateStartup: () => void;
  simulateCompilation: (shouldFail: boolean) => void;
  simulateCrash: () => void;
  simulateReload: () => void;
}

export type AddProfileType = 'bevy_editor' | 'editor_binary' | 'editor_code' | 'app_binary' | 'app_code';

export const StudioContext = createContext<StudioContextData | null>(null);

export interface RunState {
  initialized: boolean;
  status: 'not_running' | 'running' | 'starting' | 'reloading';
  compiling?: boolean;
  errorStatus?: 'crashed' | 'compilation_failed' | null;
  needsReload?: boolean;
}

export function StudioContextProvider({ children }: PropsWithChildren) {
  const [project, setProject] = useState<Project | null>(null);
  const [currentProfileName, setCurrentProfileName] = useState<string | null>(null);

  function getProfile(project: Project | null, name: string | null) {
    return project?.profiles.find(profile => profile.name === name) ?? null;
  }
  const currentProfile = useMemo(
    () => getProfile(project, currentProfileName),
    [project, currentProfileName],
  );

  const addProfiles = useCallback((types: AddProfileType[]) => {
    if (!project)
      return '';

    const profiles = [...project.profiles];
    types.forEach((type) => {
      if (type === 'bevy_editor') {
        profiles.push({ name: 'Bevy Editor', mockupView: 'editor', type: 'binary' });
      }
      else if (type === 'editor_binary') {
        profiles.push({ name: `${project.name} Editor (bin)`, mockupView: 'editor', type: 'binary' });
      }
      else if (type === 'editor_code') {
        profiles.push({ name: `${project.name} Editor (code)`, mockupView: 'editor', type: 'code' });
      }
      else if (type === 'app_binary') {
        profiles.push({ name: `${project.name} (bin)`, mockupView: 'editor', type: 'binary' });
      }
      else if (type === 'app_code') {
        profiles.push({ name: `${project.name} (code)`, mockupView: 'editor', type: 'code' });
      }
    });
    setProject({ ...project, profiles });

    return profiles[profiles.length - 1].name;
  }, [project]);

  const [runState, setRunState] = useState<RunState | null>(null);
  const delayedUpdate = useRef<ReturnType<typeof setTimeout> | null>(null);

  const updateRunState = useCallback((runState: RunState | null) => {
    if (delayedUpdate.current)
      clearTimeout(delayedUpdate.current);
    delayedUpdate.current = null;
    setRunState(runState);
  }, []);

  const updateRunStateDelayed = useCallback((runState: RunState | null, delayMs: number, callback?: () => void) => {
    if (delayedUpdate.current)
      clearTimeout(delayedUpdate.current);
    delayedUpdate.current = setTimeout(() => {
      updateRunState(runState);
      if (callback)
        callback();
    }, delayMs);
  }, [updateRunState]);

  const simulateStartup = useCallback(() => {
    updateRunState({ initialized: false, status: 'starting' });
    updateRunStateDelayed({ initialized: true, status: 'running' }, 3000);
  }, [updateRunState, updateRunStateDelayed]);

  const simulateCompilation = useCallback((shouldFail?: boolean) => {
    updateRunState({
      status: 'not_running',
      ...runState,
      initialized: false,
      compiling: true,
      errorStatus: null,
    });

    if (shouldFail) {
      updateRunStateDelayed({
        initialized: false,
        status: 'not_running',
        ...runState,
        compiling: false,
        errorStatus: 'compilation_failed',
      }, 2000);
    }
    else {
      updateRunStateDelayed({ initialized: false, status: 'starting' }, 3000, () => {
        updateRunStateDelayed({ initialized: true, status: 'running' }, 3000);
      });
    }
  }, [runState, updateRunStateDelayed, updateRunState]);

  function simulateCrash() {
    updateRunState({ initialized: true, status: 'not_running', errorStatus: 'crashed' });
  }

  function simulateReload() {
    updateRunState({ initialized: true, status: 'reloading' });
    updateRunStateDelayed({ initialized: true, status: 'running' }, 1000);
  }

  const setCurrentProfile = useCallback((name?: string | null) => {
    if (name === currentProfileName)
      return;

    setCurrentProfileName(name ?? null);

    const profile = getProfile(project, name ?? null);

    if (profile === null) {
      updateRunState(null);
    }
    else if (profile.type === 'binary') {
      simulateStartup();
    }
    else {
      simulateCompilation();
    }
  }, [project, currentProfileName, updateRunState, simulateCompilation, simulateStartup]);

  const newProject = useCallback((project: Project | null) => {
    setProject(project);
    setCurrentProfileName(project?.profiles[0]?.name ?? null);
    updateRunState(null);
  }, [updateRunState]);

  const data = {
    project,
    closeProject: () => newProject(null),
    updateProject: setProject,
    newProject,
    currentProfileName,
    currentProfile,
    setCurrentProfile,
    addProfiles,
    runState,
    simulateStartup,
    simulateCompilation,
    simulateCrash,
    simulateReload,
  } satisfies StudioContextData;

  return (
    <StudioContext.Provider value={data}>
      {children}
    </StudioContext.Provider>
  );
}
