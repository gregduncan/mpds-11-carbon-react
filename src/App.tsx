import React from 'react';
import './App.scss';
import { Button } from '@carbon/react';

function App() {
  return (
    <div>
      <Button>Hello world</Button>
      <Button kind="secondary">Secondary</Button>
      <Button kind="tertiary">Tertiary</Button>
      <Button kind="danger">Danger</Button>
      <Button kind="danger--tertiary">Danger Tertiary</Button>
      <Button kind="danger--ghost">Danger Ghost</Button>
      <Button kind="ghost">Ghost</Button>
    </div>
  );
}

export default App;
