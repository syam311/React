import { fruits } from "./datas";


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
