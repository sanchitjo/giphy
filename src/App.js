import './App.css';
import styled from 'styled-components'
import Trending from './components/Trending';


const Wrapper = styled.div`
background-color: black;
min-height: 100vh;
padding: 1rem 5rem 1rem 5rem;
`

const App = () => {
  return (
    <Wrapper>
      <Trending />
    </Wrapper>
  );
}

export default App;
