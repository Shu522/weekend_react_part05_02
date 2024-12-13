import { useState } from "react";
import CharNum from "./components/presentation/CharNum";
import Input from "./components/presentation/Input";

function App() {
  const [num, setNum] = useState("");

  const change = (e) => {
    setNum((prev) => e.target.value.length);
  };

  return (
    <div>
      <Input change={change} />
      <CharNum num={num} />
    </div>
  );
}

export default App;
