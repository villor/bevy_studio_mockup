export function useRequiredProject() {
  const { project } = useStudioContext();

  if (!project) {
    throw new Error(
      'useCurrentProject must be used where we know there is a current project',
    );
  }

  return project;
}
