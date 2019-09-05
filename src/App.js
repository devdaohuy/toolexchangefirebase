import React from 'react';
import { Button } from 'semantic-ui-react';
import './App.css';

const ButtonExampleButton = () => <Button>Click Here</Button>;

function App() {
  return (
    <div>
      Hello Router
      <ButtonExampleButton/>
    </div>
  );
}

export default App;
