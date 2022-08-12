import Text from "./components/Text";

const App = () => {
  
  let rows = [];
  for (let i = 0; i < 100000; i++) {
    rows.push(<Text link={'https://www.bartoncourt.org'}>Barton Court Grammar School</Text>)    
  } 
  
  return (
    <div className="container">
      {rows}
    </div>
  );
}

export default App;
