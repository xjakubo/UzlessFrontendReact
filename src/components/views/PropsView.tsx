import '../styles/Tile.css'
import { printer } from "../../interfaces/printer";

function PropsView(printerData?: printer){
    if(printerData != null){
    return(
    <table>
        <thead>
            <h1> Informacje o drukarce </h1>
        </thead>
        <tbody>
        <tr key = {printerData.printerId}>
                <td>PrinterId</td>
                <td>{printerData.printerId}</td>
        </tr>
        </tbody>
    </table>
    );
}
    return(
        <div>

        </div>
    )
}
export default PropsView;