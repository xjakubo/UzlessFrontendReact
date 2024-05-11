import serverurl from "../../settings"
import { useState, useEffect } from "react";
import "../../styles/TableView.css"
import { contractor } from "../../interfaces/contractor";



function ContractorTable(){
    const [data, setData] = useState([]);
    useEffect(() => {
        const fetchData = async () =>
            {
                const response = await fetch(serverurl + "contractor/getAll/")
                .then(response => response.json())
                .catch(() => {})
                console.log(response)
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
                        ID
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
                {data.map((item: contractor) => (
                <tr>
                <td key = {item.contractorId}>{item.contractorId}</td>
                <td key = {item.fullName}>{item.fullName}</td>
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

export default ContractorTable