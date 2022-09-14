import './App.css';
import Box from './BoxComponent/Box';

function App() {
  let b1='box1';
  let b2='box2';
  let b3='box3';

  return (
   <>
   <div class="box-perent">
    <Box boxName={b1} />
    <Box boxName={b2} />
    <Box boxName={b3} />
    <Box boxName={b3} />
    <Box boxName={b3} />
    <Box boxName={b1} />
    </div>
    <hr></hr>
   </>
  );
}

export default App;
