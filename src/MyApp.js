import logo from './logo.svg';
import './MyApp.css';
import Hello from './Hello';
import reactDom from 'react-dom';


function MyAppSub() {
 
  let cnt = 1;

  return (
    <div className="MyApp">
      <header className="App-header">
      </header>
      <h1>available {cnt}</h1>
    </div>
  );
}

// reactDom.render(
//   <Hello />,
//   document.getElementById('root')
// );



const MyApp = (props) => {
  return (
    <div>
      <MyAppSub />
      <Hello />
      <div>{props.name}</div>
    </div>
  )
} 


export default MyApp;
