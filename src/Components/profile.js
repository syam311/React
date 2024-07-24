import CustomImage from "./custunimage";
import List from "./list";

const Profile = () => {

const profileDetails={
name:"syam",
mobile:1234,
salary:50000,

};
const {name,mobile,salary}=profileDetails;
  return (
    <div>

      <h1>This is {name}</h1>
      <h1>my salary is{salary}</h1>
      <h1>my mobile number is {mobile}</h1>


      

      <CustomImage />
      <ol><List /></ol>
      
    </div>
  );
};

export default Profile;
