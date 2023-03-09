import styled from "styled-components";
import Circle from "./Circle";

const Container = styled.div`
  background-color: ${props => props.theme.bgColor};
`
const H1 = styled.h1`
  color:${(porps) => porps.theme.textColor}
`


function App() {
  return (
    <Container>
      <H1>
        hi
      </H1>
    </Container>
  );
}

export default App;
