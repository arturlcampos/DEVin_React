export default function CompanyForm({ 
    classData,
    label,
    id,
    value, 
    setInfo, 
    name,
    fill,
    required
  }) {
    return (
      <div className={classData}>
        <label htmlFor={label} className="form-label">
          {label} <span style={{ color: 'red'}}>{fill}</span>
        </label>
        <input
          type="text"
          className="form-control"
          id={id}
          required= { required || false }
          value={value}
          onChange={(e) => {
            setInfo(prev => ({
              ...prev,
              [name]: e.target.value,
            }))}}
        ></input>
      </div>
    );
  }
  