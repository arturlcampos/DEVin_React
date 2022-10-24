import { useState, useEffect } from "react";
import ProductForm from "../../components/ProductForm/Index";

export default function RegisterProduct() {
  const [product, setProduct] = useState({
    urlDaImagem: "",
    nome: "",
    fornecedor: "",
    descricao: "...",
    custoUnitario: "R$00,00",
    grupo: "",
    imagem: "",
  });

  console.log(product);

  // Atualizar a lista de produtos
  function updateProductList(e) {
    e.preventDefault();

    updateImg(product.grupo);

    fetch("http://localhost:3001/product", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(product),
    });
    clearForm();
  }

  // Atualizar o link da imagem
  function updateImg(tipo) {
    if (tipo === "Interno" || tipo === "") {
      setProduct((prev) => ({
        ...prev,
        imagem:
          "https://",
      }));
    } else if (tipo === "Externo") {
      setProduct((prev) => ({
        ...prev,
        imagem:
          "https://",
      }));
    }
  }

  useEffect(() => {
    updateImg(product.grupo);
  }, [product.grupo]);

  // Limpar formulario
  function clearForm() {
    setProduct({
      urlDaImagem: "",
      nome: "",
      fornecedor: "",
      descricao: "",
      custoUnitario: "",
      grupo: "",

    });
  }

  return (
    <div className="container">
      <h2 style={{ textAlign: "center", marginTop: "15px" }}>
        Cadastro de Produtos
      </h2>
      <form className="row g-3" onSubmit={updateProductList}>
        <ProductForm
          // "urlDaImagem": "",
          classData="col-md-12"
          label="URL Da Imagem"
          id="urlDaImagem"
          fill="*"
          value={product.urlDaImagem}
          name="urlDaImagem"
          setInfo={setProduct}
          required
          tipo="input"
        />
        <ProductForm
          // "nome": "",
          classData="col-md-12"
          label="Nome"
          id="nome"
          fill="*"
          value={product.nome}
          name="nome"
          setInfo={setProduct}
          required
          tipo="input"
        />
        <ProductForm
          // "fornecedor": "",
          classData="col-md-4"
          label="Fornecedor"
          id="fornecedor"
          fill="*"
          value={product.fornecedor}
          name="fornecedor"
          setInfo={setProduct}
          required
          tipo="input"
        />
        <ProductForm
          // "grupo": ""
          classData="col-md-4"
          label="Grupo"
          id="grupo"
          fill="*"
          value={product.grupo}
          name="grupo"
          imagem="imagem"
          setInfo={setProduct}
          tipo="select"
        />
        <ProductForm
          // "custoUnitario": "",
          classData="col-md-4"
          label="Custo Unitário"
          id="custoUnitario"
          fill="*"
          value={product.custoUnitario}
          name="custoUnitario"
          setInfo={setProduct}
          required
          tipo="input"
        />
        <ProductForm
          // "descricao": "",
          classData="col-md-12"
          label="Descrição"
          id="descricao"
          value={product.descricao}
          name="descricao"
          setInfo={setProduct}
          tipo="textarea"
        />

        <div
          className="col-12"
          // style={{ display: "flex", justifyContent: "space-around" }}
        >
          <button type="submit" className="btn btn-secondary">
            Cadastrar
          </button>
          {/* <button className="btn btn-primary">Limpar</button> */}
        </div>
      </form>
    </div>
  );
}
