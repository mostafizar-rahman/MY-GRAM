import { useEffect } from "react"

const useTitle = title =>{
    useEffect(()=>{
        document.title = `${title} - mygram`
    }, [title])
}
export default useTitle