import './App.css'


function Hijo(props) {

    return (
      <div>
        <h2> Producto: {props.nombre} Precio: {props.precio}</h2>
      </div>
    )
  }
  
  export default Hijo;