
function Cartas(props){
    return <div className="carta">
        <img src={props.img} alt={props.alt} />
        <h3>{props.nombre}</h3>
        <p>{props.descripcion}</p>
    </div>
}
export default Cartas