
import './App.css';
import Block from './components/Block';

const blocks = [
  {
    id: 'b1',
    block: 'yellow',
  },
  {
    id: 'b2',
    block: 'green',
  },
  {
    id: 'b3',
    block: 'color',
  },
  {
    id: 'b4',
    block: `${Math.random()}`,
  },
];


function App() {
  return (
    <div className="App">
      {blocks.map((item) => {
        return item.block === "yellow" ? (
          <Block className="yellow" />
        ) : item.block === "green" ? (
          <Block  className="green" />
        ) : item.block === "color" ? (
          <Block className="lime" />
        ) : (
          <Block className="red" />
        );
      })}
    </div>
  );
}

export default App;
