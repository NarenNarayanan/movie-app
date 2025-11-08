import { useEffect } from "react";
import { wakeBackend } from "./utils/wakeup";

// ...existing imports...

function App() {
  useEffect(() => {
    wakeBackend();
  }, []);

  // ...existing component code...
}

export default App;
