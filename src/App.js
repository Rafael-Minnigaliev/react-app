import { Message } from './components/message';
import './App.scss'

const name = "Ivan"

export const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Message name={name} />
        <h3>This is my first app on react!</h3>
      </header>
    </div>
  );
}

