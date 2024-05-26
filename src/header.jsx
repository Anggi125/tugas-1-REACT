import planet from "./DataPlanet"

const namaHeader = "Hallo Fitri"
const Header=()=>{
    return(
        <div className="header">
            <h1>planet planet</h1>
            <h1 >{namaHeader || "Tanpa nama"} </h1>
        </div>
      
    )
}

export default Header;