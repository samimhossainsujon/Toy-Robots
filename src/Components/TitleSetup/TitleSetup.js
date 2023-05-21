import { useEffect } from "react"


const useTitleSetup = title => {
    useEffect(() => {
        document.title = `${title}-Toy Robots`;
    }, [title])
}


export default useTitleSetup;