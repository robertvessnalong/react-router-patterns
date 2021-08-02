import { Route, Switch, Redirect } from 'react-router-dom';
import { useState } from 'react';
import Header from './Header';
import NewColorForm from './NewColorForm';
import Colors from './Colors';
import Color from './Color';
import './App.css';

function App() {
  const [color, setColors] = useState([]);

  const handleColors = (newColor) => {
    setColors((colors) => [...colors, newColor]);
  };

  return (
    <div className='App'>
      <Switch>
        <Route exact path='/colors'>
          <Header />
          <Colors colors={color} />
        </Route>
        <Route exact path='/colors/new'>
          <NewColorForm addColor={handleColors} />
        </Route>
        <Route path='/colors/:color'>
          <Color curr_color={color} />
        </Route>
        <Redirect to='/colors' />
      </Switch>
    </div>
  );
}

export default App;
