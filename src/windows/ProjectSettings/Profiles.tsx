export function Profiles() {
  const project = useRequiredProject();
  const { addProfiles } = useStudioContext();

  return (
    <div>
      <h2 className="text-xl font-medium">Profiles</h2>

      <div className="mt-4 space-y-2 text-light">
        <p>This is where the user would set up their profiles. Profiles can be either binary or code.</p>
        <p>Binary profiles would just run the studio-enabled binary (either bundled with Bevy Studio or from a user-provided path). For user provided path, maybe allow hot reloading if it changes on disk.</p>
        <p>Code profiles would be tied to a Cargo.toml to recompile and hot reload the app.</p>
        <p>The apps would in most cases be an editor, backed by an EditorPlugin or similar. But this could potentially also be used to set up different game scenarios for a nice QA experience or out-of-process debugging.</p>
      </div>

      <div className="mt-5 space-y-2">
        <Button className="block" onClick={() => addProfiles(['bevy_editor'])}>Add Default Bevy Editor (binary)</Button>
        <Button className="block" onClick={() => addProfiles(['editor_binary'])}>Add custom Editor (binary)</Button>
        <Button className="block" onClick={() => addProfiles(['editor_code'])}>Add custom Editor (code)</Button>
        <Button className="block" onClick={() => addProfiles(['app_binary'])}>Add custom app (binary)</Button>
        <Button className="block" onClick={() => addProfiles(['app_code'])}>Add custom app (code)</Button>
      </div>

      <div>
        {project.profiles.map(profile => (
          <div key={profile.name}>{profile.name}</div>
        ))}
      </div>
    </div>
  );
}
