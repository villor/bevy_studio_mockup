export function Profiles() {
  const project = useRequiredProject();
  const { addProfile } = useStudioContext();

  return (
    <div>
      <h2 className="text-xl font-medium">Profiles</h2>

      <div className="mt-4 space-y-2 text-light">
        <p>This is where the user would set up their profiles. Profiles can be either binary or code.</p>
        <p>Binary profiles would just run the studio-enabled binary (either bundled with Bevy Studio or from a user-provided path). For user provided path, maybe allow hot reloading if it changes on disk.</p>
        <p>Code profiles would be configured with a cargo workspace to recompile and hot reload the app.</p>
        <p>The apps would in most cases be an editor, backed by an EditorPlugin or similar. But this could potentially also be used to set up different game scenarios for a nice QA experience.</p>
      </div>

      <div className="mt-5 space-y-2">
        <Button className="block" onClick={() => addProfile('bevy_editor')}>Add Default Bevy Editor (binary)</Button>
        <Button className="block" onClick={() => addProfile('project_binary')}>Add custom binary</Button>
        <Button className="block" onClick={() => addProfile('project_code')}>Add code profile</Button>
      </div>

      <div>
        {project.profiles.map(profile => (
          <div key={profile.name}>{profile.name}</div>
        ))}
      </div>
    </div>
  );
}
