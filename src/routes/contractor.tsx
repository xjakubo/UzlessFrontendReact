import Menu from '../components/Menu.tsx'
import './../styles/App.css'
import ContractorTable from '../components/views/ContractorView.tsx'

function Contractor(){
    return (
        <div>

        <Menu />
        <h1> Klienci </h1>
        <div className="mainView">
        <ContractorTable />
        </div>
        <div className="propsView">
        </div>
        </div>
    );
}

export default Contractor;