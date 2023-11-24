

const InputCheckBox = ({inputGroupClass,   inputClassName, checked, onChange }) => {
  return (
    <>
        <div className={inputGroupClass}>
            <input  className={inputClassName} type='checkbox' checked={checked} onChange={onChange}  />
        </div>
    </>
  )
}

export default InputCheckBox