import React from "react";
import Container from "./Container";

function App() {
  const generateExampleDivs = (count) => {
    const exampleDivs = [];
    for (let i = 0; i < count; i++) {
      exampleDivs.push(<div key={i}>This is an example!</div>);
    }
    return exampleDivs;
  };
  const fourTurtles=(turtles)=>{
    const exampleTurtle=[];
    for(let i=0; i<turtles; i++){
      exampleTurtle.push(
        <img
            key={i}
            alt="turtle"
            src="https://pbs.twimg.com/profile_images/3022993403/fdae67d800527328cee7a222f048dbbd.jpeg"
        />
      );
    }
      return exampleTurtle;
   }

  return (
    <div className="App">
      <Container header="Example header" direction="horizontal">
      {generateExampleDivs(7)}
      </Container>
      <Container header="Example header" textPosition="center">
        {fourTurtles(7)}
      </Container>
    </div>
  );
}

export default App;
 