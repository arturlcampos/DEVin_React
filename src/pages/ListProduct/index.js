import { useEffect, useState } from "react";
import CardList from "../../components/CardList/index";
import { GlobalStyle } from "../../GlobalStyle";
import Modal from "../../components/Modal/index";
import { Container } from "../../components/Modal/Styled";

export default function ListProduct() {
  const [listProduct, setListProduct] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [cardId, setCardId] = useState();

  useEffect(() => {
    getListProduct();
  }, [listProduct]);

  function getListProduct() {
    fetch(`http://localhost:3001/product`)
      .then((response) => response.json())
      .then((data) => {
        setListProduct(data);
      });
  }

  function deleteProduct(id, urlDaImagem, fornecedor) {
    const confirm = window.confirm(
      `Tem certeza que deseja excluir o produto ${urlDaImagem} - ${fornecedor}?`
    );

    if (confirm) {
      fetch(`http://localhost:3001/product/${id}`, {
        method: "DELETE",
      });
    }
  }


  function openModal(id) {
    setShowModal((prev) => !prev);
    setCardId(id);
    console.log("imagem clicada", id);
  }

  return (
    <>
      <div className="main-container">
        <h2 style={{ textAlign: "center", marginTop: "15px" }}>
          Lista de Produtos
        </h2>

        <div className="divInfo">
          <span className="info">
            Total: <strong>{listProduct.length}</strong> Produtos
          </span>
        </div>

        <Container showModal={showModal}>
          <Modal
            showModal={showModal}
            setShowModal={setShowModal}
            cardId={cardId}
          />
          <GlobalStyle />
        </Container>
        <div
          className="cards-box"
          // style={{
          //   minHeight: "90vh",
          //   border: "solid #31955f 1px",
          //   borderRadius: "15px",
          //   margin: "40px 10px 40px 10px",
          //   padding: "15px",
          //   msAlignSelf: "center",
          // }}
        >
          {listProduct.map((product) => {
            return (
              <div className="divmap">
                <img
                  alt="Imagem não encontrada!"
                  style={{ cursor: "pointer" }}
                  className="delete-btn"
                  src="https://"
                  onClick={() =>
                    deleteProduct(
                      product.id,
                      product.urlDaImagem,
                      product.fornecedor
                    )
                  }
                ></img>
                <img
                  alt="Imagem não encontrada!"
                  className="img-thumbnail"
                  src={product.imagem}
                  onClick={() => {
                    openModal(product.id);
                  }}
                ></img>
                <CardList
                  key={product.id}
                  tipo={product.grupo}
                  nomeMedicamento={product.urlDaImagem}
                  precoUnitario={product.custoUnitario}
                  doseMedicamento={product.fornecedor}
                  img={product.imagem}
                  openModalFunction={openModal}
                  id={product.id}
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
