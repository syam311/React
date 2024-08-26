import { useRef } from "react"

const Uncontrol =()=>{
    const  emailRef=useRef();
    const passRef=useRef();
    const submitHandler=(event)=>{
        event.preventDefault();
        const emailEnter=emailRef.current.value;
        const passwordEnter=passRef.current.value;
        console.log(emailEnter,passwordEnter    )

    }


    return(
        <>
      <form onClick={submitHandler}>
  <label htmlFor="fname">e-mail</label>
  <br />
  <input type="email" id="fname" name="fname" placeholder="e-mail" ref={emailRef}/>
  <br />
  <label htmlFor="lname">Pssword</label>
  <br />
  <input type="password" id="lname" name="lname"  placeholder="password" ref={passRef} />
  <br />
  <br />
  <input type="submit" defaultValue="Submit" />
</form>

        </>
    );
};
export default Uncontrol;











// import { useRef } from "react";

// const Uncontrolled=()=>{
//     const emailRef=useRef();
//    const passRef=useRef();
//    const submitHandler=(event)=>{
//     event.preventDefault();
 
//     const emaiEntered=emailRef.current.value;
//     const passwordEntered=passRef.current.value;
//    }
// return(
   

// <>

// <form onSubmit={submitHandler}>
//   <div className="form-group">
//     <label className="sr-only" htmlFor="email">
//       Email address:
//     </label>
//     <input type="email" className="form-control" id="email" ref={emailRef}/>
//   </div>
//   <div className="form-group">
//     <label className="sr-only" htmlFor="pwd">
//       Password:
//     </label>
//     <input type="password" className="form-control" id="pwd" ref={passRef} />
//   </div>
//   <div className="checkbox">
//     <label>
//       <input type="checkbox" /> Remember me
//     </label>
//   </div>
//   <button type="submit" className="btn btn-default">
//     Submit
//   </button>
// </form>
// </>
// );
// };
// export default Uncontrolled;