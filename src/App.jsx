import React from "react";
import Button from "./components/Button";

function App() {
  return (
    <div className="p-4 flex gap-4">
      <Button size="large" variant="primary">
        Large Primary Button
      </Button>
      <Button size="medium" variant="secondary">
        Medium
      </Button>
      <Button size="large" variant="mute">
        Medium Mute Button
      </Button>
    </div>
  );
}

export default App;
