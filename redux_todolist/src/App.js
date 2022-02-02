import { StyleApp, StyleAppContent, StyleBackground } from './App.style';
import TodoContainer from './container/todoContainer';
import logo from './logo.svg';

function App() {
  return (
    <StyleApp>
      <StyleBackground/>
      <TodoContainer/>
    </StyleApp>
  );
}

export default App;
