import Card from "./components/Card";
import Data from "./data";
import Earth from "./icon/earth.png";
import "./style.css";

function App() {
  const cardList = Data.map(function (item) {
    return <Card key={item.id} item={item} />;
  });
  return (
    <div className="App">
      <header className="App-header">
        <img src={Earth} alt="earth" />
        <h3>my travel journal.</h3>
      </header>
      <div className="App-body">
        {cardList}
      </div>
    </div>
  );
}

export default App;
