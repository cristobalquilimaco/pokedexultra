import axios from "axios"
import { useState } from "react"


const useFetch = url => {

    const[state, setState] = useState()
    const[hasError, setHasError] = useState(false)


const getData = () =>{
    axios.get(url)
    .then(res => {setState(res.data)
    setHasError
    })

    .catch(err => {console.log(err)
    setHasError(true)
    })
    
}

return[state, getData, hasError]

}

export default useFetch