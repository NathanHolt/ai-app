
const FormField = ({ 
  labelName, 
  type, 
  name, 
  placeholder, 
  value, 
  handleChange, 
  isSurpriseMe, 
  handleSurpriseMe 
}) => {

  return (
    <div>
      <div>
        <label htmlFor={name}>{labelName}</label>
        {isSurpriseMe && (
          <button
            className="btn"
            type="button"
            onClick={handleSurpriseMe}
          >
            Surprise Me
          </button>
        )}
      </div>
      <input 
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        required
      />
    </div>
  )
}

export default FormField