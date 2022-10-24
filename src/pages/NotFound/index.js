import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div>
      <h2 style={{ textAlign: "center", marginTop: "15px" }}>
        Pagina não encontrada!
      </h2>
      <p>
        <Link to="/">Voltar</Link>
      </p>
    </div>
  );
}
