import { useState } from "react"


export function useChangeInputValue(onSearch){

    const [value, setValue] = useState("")

    function changeHandler(){
  
      setValue(event.target.value)
      onSearch(event.target.value)
  
    }

    return {value, changeHandler}

}