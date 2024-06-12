import { useState } from "react";
import toast from "react-hot-toast";

function Palindroma() {
  const [input, setInput] = useState("");

  const checkPalindrome = (str) => {
    const cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");
    const reversedStr = cleanedStr.split("").reverse().join("");
    return cleanedStr === reversedStr;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    toast.remove();

    const { value } = event.target.word;

    if (!value) {
      return toast.error("Ingrese una palabra");
    }

    const palindroma = checkPalindrome(value);

    if (!palindroma) {
      return toast.error(`La palabra ${value} no es palindroma`);
    }

    toast.success(`La palabra ${value} es palindroma`);
  };

  return (
    <div>
      <h1>Verificar Palíndromo</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="word"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Escribe una palabra o frase"
        />
        <button type="submit">Verificar</button>
      </form>
    </div>
  );
}

export default Palindroma;
