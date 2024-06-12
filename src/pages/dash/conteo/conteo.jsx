import toast from "react-hot-toast";
import Swal from "sweetalert2";
import "./conteo.css";
import { useState, useEffect } from "react";
import { useContextHook } from "../../../context/context";
import { useNavigate } from "react-router-dom";


export default function Conteo() {
  const { email, setState } = useContextHook();
  const [messages, setMessages] = useState([]);

  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    if (!email) {
      const user = JSON.parse(localStorage.getItem("auth"));

      if (user) {
        setState(user);
        return;
      }

      navigate("/login");
    }
  }, []);

  const addMessage = () => {
    setMessages([...messages, { label: message }]);
  };

  const handleOnChange = (e) => {
    const { value } = e.target;
    setMessage(value);
  };

  const handleOnKeyDown = (e) => {
    if (e.key == "Enter") {
      e.preventDefault();
      if (!message) return;
      addMessage();
      setMessage("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const value = e.target.palabra.value.toLowerCase();

    if (!value) return;

    const count = [...messages].reduce((acc, text) => {
      return (
        acc +
        text.label
          .split(" ")
          .filter((word) => word.toLowerCase().includes(value)).length
      );
    }, 0);

    if (!count) {
      return Swal.fire({
        title: "Upss!!!!",
        text: "La palabra no se encuentra!",
        imageUrl: "/diego.png",
        imageWidth: 200,
        imageHeight: 200,
        imageAlt: "Custom image",
      });
    }

    toast.success(`La palabra se repite ${count} veces`);
  };

  return (
    <aside>
      <form onSubmit={handleSubmit}>
        <input type="text" name="palabra" placeholder="Ingrese palabra" />
        <button>Buscar</button>
      </form>
      <textarea
        value={message}
        onChange={handleOnChange}
        onKeyDown={handleOnKeyDown}
        placeholder="Ingresa texto aqui"
      ></textarea>
      <article>
        {messages.map((message, index) => (
          <div key={index}>{message.label}</div>
        ))}
      </article>
    </aside>
  );
}
