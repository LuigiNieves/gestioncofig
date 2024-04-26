import toast from "react-hot-toast";
import Swal from 'sweetalert2'
import './conteo.css'

export default function Conteo({ lista }) {
  const handleSubmit = (e) => {
    e.preventDefault()
    const value = e.target.palabra.value.toLowerCase();

    if (!value) return;

    const count = [...lista].reduce((acc, text) => {
      return acc + text.label.split(" ").filter((word) => word.toLowerCase().includes(value))
        .length;
    }, 0);

    if (!count) {
      return Swal.fire({
        title: "Upss!!!!",
        text: "La palabra no se encuentra!",
        imageUrl: "/diego.png",
        imageWidth: 200,
        imageHeight: 200,
        imageAlt: "Custom image"
      });
    }

    toast.success(`La palabra se repite ${count} veces`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="palabra" placeholder="Ingrese palabra" />
      <button>Buscar</button>
    </form>
  );
}
