import styled from 'styled-components';
import { Link } from 'react-router-dom';
import GoogleAuth from './GoogleAuth';
const Header = () => {
  return (
    <Container>
      <Link to='/'>Strimio</Link>
      <Link to='/StreamEdit'>All Streams</Link>
      {/*      <Link>Login</Link> */}
      <GoogleAuth />
    </Container>
  );
};

export default Header;

const Container = styled.div`
  font-family: 'Roboto', sans-serif;

  padding: 1rem;
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
    /*  padding-left: 2rem; */
    background: none;
    color: white;
    text-decoration: none;
  }
  a:nth-child(1) {
    /*  padding-left: 0.5rem; */
    /* flex: 1 1; */
  }
  a:nth-child(2) {
    /*  padding-left: 3rem; */
  }
`;
