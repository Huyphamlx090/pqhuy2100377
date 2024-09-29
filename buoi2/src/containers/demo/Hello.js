function Hello(){
    //
    const hiAll=()=>{
        alert("hello everone")
    }
    const hiYou=(name)=>{
        alert("hello"+ name)
    }
    return(
        <span>
            <button onClick={hiAll}>
                Hi All
            </button>
            <button onClick={()=> hiYou("Petter")}>
                Hi you
            </button>
        </span>
    )  
}
export default Hello