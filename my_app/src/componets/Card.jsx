import img from "../assets/react.svg"

const Card = ({ImageUrl,ShortDesc,Name}) => {
  return (
    <div className="card">
      <img src={ImageUrl} alt="img" onError={(e)=>{e.target.src=img}}/>
      <h4>{Name}</h4>
      <p>{ShortDesc}</p>
      <div className="cardbutton">
      <button>view</button>
      </div>
     
    </div>
  )
}

export default Card
