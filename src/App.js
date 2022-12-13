import logo from './logo.svg';
import './App.css';
import {router, RouterProvider} from './routes/index'

function App() {
  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
