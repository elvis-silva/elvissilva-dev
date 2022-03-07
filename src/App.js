import { YinYang } from './assets/SVG';
import './App.css';
import { ThemeProvider } from 'styled-components';
import BigTitle from './components/BigTitle';
import { DarkTheme } from "./components/Themes";
import RotateButton from './components/RotateButton';

function App() {
  return (
    <ThemeProvider theme={DarkTheme}>
      <div className="App">
        <header className="App-header">
          <RotateButton>
            <YinYang data-testid="logo" width={120} height={120} fill="#058b00"></YinYang>
          </RotateButton>
          {/* <p>
            Seja bem vindo.
          </p> */}
          {/* <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a> */}
          {/* <BigTitle color={DarkTheme.text} text="TEXTO" ></BigTitle> */}
        </header>
      </div>
    </ThemeProvider>
  );
}

export default App;
