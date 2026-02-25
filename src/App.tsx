import { Button } from 'antd';

import './App.css';

const App = () => {
  return (
    <div className="content">
      <h1>Rsbuild with React</h1>
      <p>Start building amazing things with Rsbuild.</p>
      <div
        style={{
          width: '48px',
          margin: '0 auto',
        }}
      >
        <Button type="primary">Button</Button>
      </div>
    </div>
  );
};

export default App;
