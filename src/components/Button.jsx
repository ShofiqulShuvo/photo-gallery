

const Button = ({ cssClass, submitEvent, btnText}) => {

  return (
    <button className={cssClass} onClick={submitEvent}>
        { btnText ? btnText : 'submit'}
    </button>
  )
}

export default Button