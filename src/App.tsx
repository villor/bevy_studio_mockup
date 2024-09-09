import { StudioContextProvider } from './StudioContext';
import MainWindow from './windows/MainWindow/MainWindow';
import WelcomeWindow from './windows/WelcomeWindow';

function App() {
  return (
    <div>
      {/* <h1 className="mb-2 pt-5 text-center text-4xl">Bevy Studio mockup</h1> */}
      <div className="mt-12 space-y-12">
        <StudioContextProvider>
          <Windows />
        </StudioContextProvider>
      </div>
    </div>
  );
}

function Windows() {
  const { project } = useStudioContext();

  if (!project) {
    return <WelcomeWindow />;
  }

  return <MainWindow />;
}

export default App;
