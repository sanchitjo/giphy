import './App.css';
import styled from 'styled-components'
import Trending from './components/Trending';




const Wrapper = styled.div`
background-color: black;
height: 400vh;
padding: 1rem 5rem 1rem 5rem;

@media only screen and (max-width: 450px) {
  height: 1500vh;
}
`


const App = () => {
  return (
    <Wrapper>
      <Trending />
    </Wrapper>
  );
}

export default App;
