import Header from './components/Header';
import OnboardingForm from "./components/OnboardingForm"
import { ThemeProvider } from '@mui/material';
import { theme } from './styles/AppTheme.js'

function App() {

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Header />
        <OnboardingForm />
      </div>
    </ThemeProvider>
  );
}

export default App;
