import { useOutletContext } from "react-router-dom";


const HomePage = () => {
  // const {user} = useOutletContext();
  
  return (
    <div id="HomePage">
      {/* <h1>Mama Bear {user? "": "working as a string"}</h1> */}
      <div>
        <p>
          Enhancing the bond between parents and caregivers with seamless communication and magical coordination
        </p>
      </div>
    </div>
  );
};

export default HomePage;


