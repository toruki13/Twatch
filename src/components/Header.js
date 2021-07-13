import styled from 'styled-components';
import { Link } from 'react-router-dom';
import GoogleAuth from './GoogleAuth';
const Header = () => {
  return (
    <Container>
      <Link to='/'>Strimio</Link>
      <Link to='/'>All Streams</Link>
      <GoogleAuth />
    </Container>
  );
};

export default Header;

const Container = styled.div`
  font-family: 'Roboto', sans-serif;
  padding: 1rem;
  padding-bottom: 0.3rem;
  background-color: #94d2bd;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  cursor: pointer;
  a {
    font-size: 1.5rem;
    text-align: center;
    color: white;
    text-decoration: none;
  }
  button {
    font-family: 'Roboto', sans-serif;
    font-size: 1.5rem;
    border: none;
    cursor: pointer;
    text-align: center;
    background: none;
    color: white;
    text-decoration: none;
  }
`;
