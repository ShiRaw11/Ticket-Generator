function TicketInput({
  index,
  value,
  required = false,
  onChange,
  label,
  inputType,
  placeholder,
  labelStyle,
  inputStyle,
}) {
  return (
    <div className="relative z-10">
      <label
        className={`block py-4 text-white ${labelStyle ? labelStyle : ""}`}
      >
        {label}
      </label>
      {inputType === "textarea" ? (
        <textarea
          key={index}
          value={value}
          className={`block p-[12px] h-[100px] rounded-lg w-[300px]  
          bg-transparent border border-slate shadow-md cursor-text hover:bg-radial 
          focus:border-slate focus:outline-none text-white resize-none relative z-10 ${
            inputStyle ? inputStyle : ""
          }`}
          id={label}
          required={required}
          onChange={onChange}
          placeholder={placeholder}
        />
      ) : (
        <input
          key={index}
          type={inputType}
          value={value}
          className={`block px-[12px] h-[50px] rounded-lg   w-full
          bg-transparent border border-tickets_border shadow-md cursor-text hover:bg-radial 
          focus:border-slate focus:outline-none text-white relative z-10 ${
            inputStyle ? inputStyle : ""
          }`}
          id={label}
          required={required}
          onChange={onChange}
          placeholder={placeholder}
        />
      )}
    </div>
  );
}
export default TicketInput;
