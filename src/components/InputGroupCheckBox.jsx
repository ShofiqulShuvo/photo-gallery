

const InputGroupCheckBox = ({inputGroupClass, lebelText, labelClass, inputId, inputClassName, checked, onChange }) => {
  return (
    <>
        <div className={inputGroupClass}>
            <label className={labelClass} htmlFor={inputId}>{lebelText}</label>
            <input id={inputId} className={inputClassName} type='checkbox' checked={checked} onChange={onChange}  />
        </div>
    </>
  )
}

export default InputGroupCheckBox