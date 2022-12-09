import './App.css';
import Box from './BoxComponent/Box';

function App() {
  let b1='box1';
  let b2='box2';
  let b3='box3';
  let b4='box4';
  let b5='box5';
  let b6='box6';

  return (
   <>
   <div class="box-perent">
    <Box boxName={b1} />
    <Box boxName={b2} />
    <Box boxName={b3} />
    <Box boxName={b4} />
    <Box boxName={b5} />
    <Box boxName={b6} />
    </div>
    <hr></hr>
    <h1>Neha Yadav</h1>
   </>
  );
}

export default App;
