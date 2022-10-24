import { useState } from "react";
import { useNavigate } from "react-router-dom"
import { useLogin } from "../../contexts/UseLogin";


export default function Login() {

  const navigate = useNavigate ();

  const { setLogin } =useLogin()


  const [ form, setForm ] = useState({
    email: "",
    password: "",
  })
 

  function logar(e) {
    e.preventDefault()
    setLogin(true)
    alert("usuario logado")
    navigate ("/maps");
  }

  return (
    <div className="container w-auto">
      <h2 style={{ textAlign: 'center', marginTop: '15px' }}>Login</h2>
      <form onSubmit={logar} >
        <div className="mb-3">
          <label className="form-label">
            Digite seu email:
          </label>
          <input
            type="email"
            required
            placeholder="exemplo@email.com"
            value={form.email}
            onChange={(e) => setForm((prev)=>({ ...prev, email: e.target.value }))}
            className="form-control"           
            aria-describedby="emailHelp"
          ></input>
          <div className="form-text">
            Nunca compartilharemos seu e-mail com mais ninguém.
          </div>
        </div>
        <div className="mb-3">
          <label className="form-label">
            Digite sua Senha:
          </label> 
          <input
            type="password"
            placeholder="senha"
            minLength={8}
            required
            value={form.password}
            onChange={(e) => setForm((prev)=>({ ...prev, password: e.target.value }))}
            className="form-control"         
          ></input>
        </div>
        <div className="mb-3 form-check">
          <input required
            type="checkbox"
            className="form-check-input"          
          ></input>
          <label className="form-check-label">
            Confirmo as informações acima
          </label>
        </div>
        <button type="submit" value="Enviar" className="btn btn-secondary" >Entrar</button>
      </form>
    </div>
  );
}
