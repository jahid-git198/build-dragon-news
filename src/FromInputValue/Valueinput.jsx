  import { useState } from "react"

const useHucksComponet = (defaultvalue) => {
   const [value, setvalue] = useState(defaultvalue)


    const Hoockshandle = (e) => {
     setvalue (e.target.value)

    
 }

  return [ value, Hoockshandle]
}
 

 

export default useHucksComponet