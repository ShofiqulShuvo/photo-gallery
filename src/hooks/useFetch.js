import { useEffect, useState } from "react"


const useFetch = (url, options) => {

    const [ isLoading, setIsLoading ] = useState(false)
    const [error, setError] = useState(null)
    const [data, setData] = useState(null)


    const fetchData = async (url, options) => {

        setIsLoading(true)

        try {
          const response = await fetch(url, options);
          const result = await response.json();
          setIsLoading(false)
          if(!response.ok) {
            throw new Error(response);
          }else {
            setData(result)
          }
        } catch (error) {
            setIsLoading(false)
            setError(error)
        }
      }

    useEffect(() => {
        fetchData(url, options)
    },[url, options])

  return { isLoading, error,data }
}

export default useFetch