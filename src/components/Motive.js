import React from "react"

    

const Motive = ({generatequote, quote})=>{
    React.useEffect(()=>{
       generatequote
    }, [])

    return (
        <section className="pane editor">
          <h1>{quote}</h1>        
        </section>
    )


}

export default Motive;