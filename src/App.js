import { useState } from "react";
function App() {
  const [userName, setUserName] = useState("");
  const [age, setAge] = useState("");
  function showData(){
    console.log(userName,age);
  }

  return (
    <>
      <form>
        <input type="text"
          value={userName}
          onChange={(e) => { setUserName(e.target.value) }}
          placeholder="Enter your Name" />
        <input type="text"
          value={age}
          onChange={(e) => { setAge(e.target.value) }}
          placeholder="Enter your age" />
        
        <button type="button" onClick={showData}> Print Values</button>
      </form>
    </>

  );
}

export default App;
