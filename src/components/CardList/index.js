// import "./MedicineList.css";

export default function CardList({
  nomeMedicamento,
  precoUnitario,
  doseMedicamento
}) {
  return (
    <div className="medicine">
      <p>{nomeMedicamento}</p>
      <p>{doseMedicamento}</p>
      <p className="p-price">
        <strong>R$</strong>
        <strong className="price"> {precoUnitario}</strong>
      </p>
    </div>
  );
}
