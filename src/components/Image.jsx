

const Image = (props) => {

    const {imgSrc, alt} = props

  return (
    <>
        <img  src={imgSrc} alt={alt} />
    </>
  )
}

export default Image