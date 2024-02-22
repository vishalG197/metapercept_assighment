import Card from "./Card"
import data from "./data.json"

const Classes = () => {
  return (
   <div className="container classlist">
      <p>Classes</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed eius et illo autem ullam voluptatem dolores fugiat. </p>
      <div>
      {data?.class?.map((el,i)=>{
         return <Card key={i} 
         {...el}
         />
      })}
      </div>
    </div>
  )
}

export default Classes
