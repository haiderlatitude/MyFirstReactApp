import { useState } from "react";
import Button from "./components/Button";
import Alert from "./components/Alert";

function App() {
  const [alertVisible, setAlertVisibility] = useState(false);

  return (
    <div>
      {alertVisible && <Alert>My Alert</Alert>}
      <Button color="danger" onClick={() => setAlertVisibility(true)}>
        My button
      </Button>
    </div>
  );
}

export default App;
