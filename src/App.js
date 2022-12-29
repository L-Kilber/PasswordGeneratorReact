import "./styles.css";
import { useState } from "react";

export default function App() {
  const [password, setPassword] = useState([]);

  function generatePassword() {
    const array = [];
    let char = 0;
    for (let i = 0; i < 10; i++) {
      char = Math.floor(Math.random() * 126);
      if (char > 33) {
        array.push(String.fromCharCode(char));
      } else i--;
    }
    return setPassword(array);
  }

  const res = password.map((char) => <h1 className="char">{char}</h1>);

  return (
    <div className="App">
      <button className="button" onClick={generatePassword}>
        Generate Password
      </button>
      <div className="password">{res}</div>
    </div>
  );
}
