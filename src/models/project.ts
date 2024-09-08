interface ProfileBase {
  type: 'binary' | 'code';
  name: string;
  mockupView: 'editor';
}

export interface BinaryProfile extends ProfileBase {
  type: 'binary';
}

export interface CodeProfile extends ProfileBase {
  type: 'code';
}

export type Profile = BinaryProfile | CodeProfile;

export interface Project {
  name: string;
  path: string;
  profiles: Profile[];
}

export function createProject(name: string, path: string): Project {
  return {
    name,
    path,
    profiles: [],
  };
}
