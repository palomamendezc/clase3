import Hijo from "./Hijo";



function Padre() {
    return(
        <div>
            <Hijo nombre="Heladeras" precio = "200"/>
            <Hijo nombre="Television" precio= "400"/>
            <Hijo nombre="Puertas" precio= "300"/>
        </div>
    )
    
}
export default Padre;