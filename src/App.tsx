import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";
import { useState } from "react";

function App() {
  let items = ["Visby", "Stockholm", "Luleå", "Karlskoga"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  const handleClickButton = () => {
    console.log("BTN CLICKED");
  };

  const [alertVisible, setAlertVisibility] = useState(false);

  return (
    <div>
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>Remove me!</Alert>
      )}
      <Button color="primary" onClickButton={() => setAlertVisibility(true)}>
        Click <span>Me!</span>
      </Button>
    </div>
  );
}

export default App;

/*<ListGroup
        items={items}
        heading={"Cities"}
        onSelectItem={handleSelectItem}
      />
*/
