export default function ProductForm({
    classData,
    label,
    id,
    value,
    setInfo,
    name,
    fill,
    required,
    tipo
  }) {
    if (tipo === "input") {
      return (
        <div className={classData}>
          <label htmlFor={label} className="form-label">
            {label} <span style={{ color: "red" }}>{fill}</span>
          </label>
  
          <input
            type="text"
            className="form-control"
            id={id}
            required={required || false}
            value={value}
            onChange={(e) => {
              setInfo((prev) => ({
                ...prev,
                [name]: e.target.value,
              }));
            }}
          />
        </div>
      );
    } else if (tipo === "textarea") {
      return (
        <div className={classData}>
          <label htmlFor={label} className="form-label">
            {label} <span style={{ color: "red" }}>{fill}</span>
          </label>
  
          <textarea
            type="text"
            className="form-control"
            id={id}
            required={required || false}
            value={value}
            onChange={(e) => {
              setInfo((prev) => ({
                ...prev,
                [name]: e.target.value,
              }));
            }}
          />
        </div>
      );
    } else {
      return (
        <div className={classData}>
          <label htmlFor={label} className="form-label">
            {label} <span style={{ color: "red" }}>{fill}</span>
          </label>
  
          <select
            aria-label="Floating label select example"
            type="select"
            className="form-select"
            id="floatingSelect"
            required={required || false}
            value={value}
            onChange={(e) => {
              setInfo((prev) => ({
                ...prev,
                [name]: e.target.value
              }));
            }}
          >
            <option defaultValue value=''>Selecione</option>
            <option>Interno</option>
            <option>Externo</option>
          </select>
        </div>
      );
    }
  }
  