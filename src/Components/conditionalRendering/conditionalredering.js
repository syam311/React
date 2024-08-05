import Customcard from "../card";
const Condition=()=>{
    const isLogin=true;
    const isAdmin=true;
    const greeting=true;
    return(
       <>
        {
            
            isLogin ?( <>

            {isAdmin ? 
        <>
          <h2>welcome admin</h2>
          <Customcard/>
        </>
        :
        <>
          <h2>haiuser</h2>
         
        </>    
        }
       
            <h2>hai user</h2>
            <Customcard/>
            </>
            
            )
            {greeting && <h1>thnks for login</h1>}
            :
            (
            <>
            <h2>plz login</h2>
           
            </>)
        }
       </>
    );
};
export default Condition;