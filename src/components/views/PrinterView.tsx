import serverurl from "../../settings"
import { useState, useEffect } from "react";
import "../../styles/TableView.css"
import { printer } from "../../interfaces/printer";



function PrinterTable(){
    const [data, setData] = useState([]);
    useEffect(() => {
        const fetchData = async () =>
            {
                const response = await fetch(serverurl + "printer/getAll/")
                .then(response => response.json())
                .catch(() => {})
                setData((response))
            }
        fetchData();
    }, [])
    return(
        <div>
            <table>
                <thead>
                    <tr>
                    <th>
                        LP.
                    </th>
                    <th>
                        Nazwa
                    </th>
                    <th>
                        Akcje
                    </th>
                    </tr>
                </thead>
            <tbody>
                {data.map((item: printer) => (
                <tr>
                <td key = {item.printerId}>{item.printerId}</td>
                <td key = {item.name}>{item.name}</td>
                <td>
                    <button > Informacje </button>
                    <button> Edytuj </button>
                    <button> Usuń </button>
                </td>
                </tr>
                ))
                }
                
            </tbody>
            </table>
        </div>
    )
}

export default PrinterTable