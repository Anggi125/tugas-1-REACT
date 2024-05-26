import planet from "./DataPlanet";

const List=()=>{
    return (

        <div className="box-besar">
      {planet.map((x)=>(
          
          <div className="card">
      <div key={x.id} >
        <img src={x.gambar} alt="" />
        <h3>{x.name}</h3>
        <p>{x.jarak}</p>
      </div>
      </div>
    ))}
  
    </div>
)
}

export default List;

