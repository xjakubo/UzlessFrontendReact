
import Tile from './Tile.tsx'

function HomeComponent() {
  
    return (
      <>
      <div className="tile-container">
      <Tile 
      {
        ...{
          heading: "Drukarki", 
          text: "Przejrzyj status drukarek", 
          buttonText: "Przejdź dalej", 
          imageUrl: "/3dprinter.svg",
          href: "/printer"
        }
      }></Tile>
      <Tile 
      {
        ...{
          heading: "Klienci", 
          text: "Przejrzyj status klientów", 
          buttonText: "Przejdź dalej", 
          imageUrl: "/spool.svg",
          href: "/contractor"
        }
      }></Tile>
       <Tile 
      {
        ...{
          heading: "Zamówienia", 
          text: "Przejrzyj status zamówień", 
          buttonText: "Przejdź dalej", 
          imageUrl: "/dollar.svg",
          href: "/order"
        }
      }></Tile>
      </div>
      </>
    )
  }

export default HomeComponent;