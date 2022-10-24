
import { useState, useEffect } from "react";
import {
  Background,
  CloseModalButton,
  ModalContent,
  ModalImg,
  ModalWrapper,
} from "../Modal/Styled";

export default function Modal({ showModal, setShowModal, cardId, imagem }) {
  const [product, setProduct] = useState([]);
  const [filtered, setFiltered] = useState();

  useEffect(() => {
    getProduct();
    filteredPro(cardId);
  }, [cardId]);

  function getProduct() {
    fetch(`http://localhost:3001/product`)
      .then((response) => response.json())
      .then((data) => {
        setProduct(data);
        console.log(data);
      });
  }

  function filteredPro(id) {
    var filteredProduct = product.filter((item) => {
      return item.id === id;
    });
    setFiltered(filteredProduct);
    console.log("filtrado", filtered);
  }

  return (
    <>
      {showModal ? (
        <Background>
          <ModalWrapper showModal={showModal}>
            <ModalImg src={filtered[0].imagem} alt="medicine" />
            <ModalContent>
              <h1>{filtered[0].urlDaImagem}</h1>
              <p>{filtered[0].fornecedor}</p>
              <p><strong>Descrição</strong></p>
              <p>{filtered[0].descricao}</p>
              <p><strong>Tipo</strong></p>
              <p>{filtered[0].grupo}</p>
              <p><strong>Preço</strong></p>
              <p>{filtered[0].custoUnitario}</p>
            </ModalContent>
            <CloseModalButton
              cursor="pointer"
              aria-label="Close modal"
              onClick={() => setShowModal((prev) => !prev)}
            />
          </ModalWrapper>
        </Background>
      ) : null}
    </>
  );
}
