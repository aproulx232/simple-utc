import './App.css';
import moment from 'moment';

function App() {
 
  let now = moment().format();
  let utc = moment().utc().format();

  return (
    <div className="App">
      <header className="App-header">
        UTC Time
       <p>{utc}</p>
       Local Time
       <p>{now}</p>
      </header>
    </div>
  );
}

export default App;
