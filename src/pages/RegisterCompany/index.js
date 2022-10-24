import { useState, useEffect } from "react";
import CompanyForm from "../../components/CompanyForm";

export default function RegisterCompany() {
  const [company, setCompany] = useState({
    razaoSocial: "",
    cnpj: "",
    nomeFantasia: "",
    email: "",
    cep: "",
    logradouro: "",
    numero: "",
    bairro: "",
    cidade: "",
    estado: "",
    complemento: "",
    latitude: "",
    longitude: "",
  });

  function getAddress(cep) {
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        //retorno API
        setCompany({
          ...company,
          logradouro: data.logradouro,
          bairro: data.bairro,
          cidade: data.localidade,
          estado: data.uf,
          complemento: data.complemento,
        });
      });
  }

  const apiKey = "";

  function getLatLong(numero, rua, cidade, estado) {
    fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${numero}+${rua},+${cidade},+${estado}&key=${apiKey}`
    )
      .then((response) => response.json())
      .then((data) => {
        const { lat, lng } = data.results[0].geometry.location;
        setCompany((prev) => ({
          ...prev,
          latitude: lat,
          longitude: lng,
        }));
      });
  }

  useEffect(() => {
    if (company.cep.length === 9 || company.cep.length === 8) {
      getAddress (company.cep);
      getLatLong(
        company.numero,
        company.logradouro,
        company.cidade,
        company.estado
      );
    }
  }, [company.cep, company.numero, company.cidade, company.logradouro, company.estado]);

  function updateCompanyList(e) {
    e.preventDefault();

    fetch("http://localhost:3001/company", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(company),
    });
    clearForm();
  }

  function clearForm() {
    setCompany({
      razaoSocial: "",
      cnpj: "",
      nomeFantasia: "",
      email: "",
      cep: "",
      logradouro: "",
      numero: "",
      bairro: "",
      cidade: "",
      estado: "",
      complemento: "",
      latitude: "",
      longitude: "",
    });
  }

  return (
    <div className="container">
      <h2 style={{ textAlign: "center", marginTop: "15px" }}>
        Cadastro de Empresas
      </h2>
      <form onSubmit={updateCompanyList} className="row g-3">
        <CompanyForm
          classData="col-md-8"
          label="Razão Social"
          id="razaoSocial"
          fill="*"
          value={company.razaoSocial}
          name="razaoSocial"
          setInfo={setCompany}
          required
        />

        <CompanyForm
          classData="col-md-4"
          label="CNPJ"
          id="cnpj"
          fill="*"
          value={company.cnpj}
          name="cnpj"
          setInfo={setCompany}
          required
        />

        <CompanyForm
          classData="col-md-8"
          label="Nome Fantasial"
          id="nomeFantasia"
          fill="*"
          value={company.nomeFantasia}
          name="nomeFantasia"
          setInfo={setCompany}
          required
        />

        <CompanyForm
          classData="col-md-4"
          label="Email"
          id="email"
          fill="*"
          value={company.email}
          name="email"
          setInfo={setCompany}
          required
        />

        <hr />

        <CompanyForm
          classData="col-md-4"
          label="CEP"
          id="cep"
          fill="*"
          value={company.cep}
          name="cep"
          setInfo={setCompany}
          required
        />

        <CompanyForm
          classData="col-md-8"
          label="Logradouro"
          id="logradouro"
          fill="*"
          value={company.logradouro}
          name="logradouro"
          setInfo={setCompany}
          required
        />

        <CompanyForm
          classData="col-md-3"
          label="Número"
          id="numero"
          fill="*"
          value={company.numero}
          name="numero"
          setInfo={setCompany}
          required
        />

        <CompanyForm
          classData="col-md-3"
          label="Bairro"
          id="bairro"
          fill="*"
          value={company.bairro}
          name="bairro"
          setInfo={setCompany}
          required
        />

        <CompanyForm
          classData="col-md-3"
          label="Cidade"
          id="cidade"
          fill="*"
          value={company.cidade}
          name="cidade"
          setInfo={setCompany}
          required
        />

        <CompanyForm
          classData="col-md-3"
          label="Estado"
          id="estado"
          fill="*"
          value={company.estado}
          name="estado"
          setInfo={setCompany}
          required
        />

        <CompanyForm
          classData="col-md-12"
          label="Complemento"
          id="complemento"
          fill=""
          value={company.complemento}
          name="complemento"
          setInfo={setCompany}
        />

        <CompanyForm
          classData="col-md-6"
          label="Latitude"
          id="latitude"
          fill=""
          value={company.latitude}
          name="latitude"
          setInfo={setCompany}
        />

        <CompanyForm
          classData="col-md-6"
          label="Longitude"
          id="longitude"
          fill=""
          value={company.longitude}
          name="longitude"
          setInfo={setCompany}
        />

        <div className="col-12">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="gridCheck"
            ></input>
            <label className="form-check-label" htmlFor="gridCheck">
              Confirmo as informaçoes acima
            </label>
          </div>
        </div>

        <div className="col-12">
          <button type="submit" className="btn btn-secondary">
            Cadastrar
          </button>
        </div>
      </form>
    </div>
  );
}
