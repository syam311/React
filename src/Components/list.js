import { fruits } from "./Fruit";


const List = () => {
 
  return (
    <>
    {fruits .map((eachfruit)=>(
      <li key={eachfruit.id}>{eachfruit.name}</li>
    ))}
    </>
  );
};

export default List;
