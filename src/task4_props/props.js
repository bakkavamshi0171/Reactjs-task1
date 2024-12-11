 function One(props){
    return (
        <>
        <h1 style={{textAlign:"center"}}>Task4 Props Pratice</h1>
        <div style={{backgroundColor:"black", color:"white" ,fontSize:"30px",border:"5px solid red"}}>
            <div>
                <h1>Name: {props.name}</h1>
                <p>ID: {props.id}</p>
                <p>Moblieno :{props.moblie}</p>
                <Two insituite="10K coders"/>
            </div>
        </div>
        </>
    )
}

function Two(props){
    return(
        <div>
            <p>Insituite : {props.insituite}</p>
        </div>
    )
}
export default One;
