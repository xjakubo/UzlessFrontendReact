import '../styles/Tile.css'

interface TileProps {
    heading: string;
    text: string;
    buttonText: string;
    imageUrl?: string;
    href?: string;
}

function Tile(tileData: TileProps){
    return(
        <div className="tile">
      <img className="tile-image" src={tileData.imageUrl} alt="Tile" />
      <div className="tile-content">
        <h2 className="tile-heading">{tileData.heading}</h2>
        <p className="tile-text">{tileData.text}</p>
        <a href = {tileData.href}>
        <button className="tile-button">{tileData.buttonText}</button>
        </a>
      </div>
    </div>
    );
}

export default Tile;