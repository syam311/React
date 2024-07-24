


export const Customcard=({data1})=>{
    console.log(data1);
    
    return(
       <div>
             {
            data1.map((each)=>{
                const {id,title,price,description,category,image} = each;

                return(
                    <>
                    <h5>id: {id}</h5>
                    <h4>Name: {title}</h4>
                    <h3>Price:{price}</h3>
                    <p>Description:{description}</p>
                    <p>Category:{category}</p>
                    <image src={image}/>
                
                    </>
                );
                
                    
                       
            })
            }
       </div>
    );
    



    
   
}
