import Menu from './../components/Menu.tsx'
import PrinterTable from '../components/views/PrinterView.tsx';
import PropsView from '../components/views/PropsView.tsx';
import './../styles/App.css'

function Printer(){
    return (
        <div>
        <Menu />
        <h1> Drukarki </h1>
        <div className="mainView">
        <PrinterTable />
        </div>
        <div className="propsView">
        </div>
        </div>
    );
}

export default Printer;