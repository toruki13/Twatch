import { connect } from 'react-redux';
import { useEffect } from 'react';
import { fetchStreams } from '../../actions';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

import { AtomSpinner } from 'react-epic-spinners';

// In your render function or SFC return

const StreamList = ({ streams, currentUserId, isSignedIn, fetchStreams }) => {
  useEffect(() => {
    fetchStreams();
  }, [null]);

  const renderAdminButtons = (stream) => {
    if (currentUserId === stream.userId) {
      return (
        <ButtonContainer>
          <Button>Edit</Button>
          <RedButton>Delete</RedButton>{' '}
        </ButtonContainer>
      );
    }
  };

  const renderList = () => {
    return streams.map((stream) => {
      return (
        <ListElement className='item' key={stream._id}>
          <i className='large middle aligned icon camera' />
          <ListContainer>
            <h2>{stream.title}</h2>
            <h3>{stream.description}</h3>
          </ListContainer>
          {renderAdminButtons(stream)}
        </ListElement>
      );
    });
  };

  const renderCreateButton = () => {
    if (isSignedIn) {
      return (
        <Button>
          <Link style={{ color: 'white', margin: '0' }} to='/streams/new'>
            Create Stream
          </Link>
        </Button>
      );
    }
  };

  return (
    <div>
      <Container>
        <AtomSpinner size='120' color='#94d2bd'></AtomSpinner>
        <h1 style={{ padding: 0, margin: 0 }}>Streams</h1>
        <List>{renderList()}</List>
        {renderCreateButton()}
      </Container>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    streams: Object.values(state.streams),
    currentUserId: state.auth.userId,
    isSignedIn: state.auth.isSignedIn,
  };
};
export default connect(mapStateToProps, { fetchStreams })(StreamList);

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  /*  padding: 15px; */
  word-break: break-word;
  /* > h1 {
    padding-top: 20px;
    margin-left: 8rem;
    margin-bottom: 0;
    place-self: flex-start;
  } */
`;
const List = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0px 30px;
  width: 40%;
  @media all and (max-width: 576px) {
    width: 100%;
  }
`;

const ListElement = styled.li`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: flex-start;
  border-top: 1px solid #94d2bd;
  border-bottom: 1px solid #94d2bd;
  cursor: pointer;
  margin: 2rem;
  > i {
    margin-right: 10px;
    margin-left: 10px;
    color: #94d2bd;
  }
`;

const ListContainer = styled.div`
  width: 60%;
  > h2,
  h3 {
    margin: 0;
  }
  > h2 {
    font-size: 1.2rem;
  }
  > h3 {
    font-size: 1.1rem;
    color: #3b3b3878;
  }
`;

const Button = styled.button`
  /* Adapt the colors based on primary prop */
  cursor: pointer;
  font-size: 1.3em;
  margin-left: 1rem;
  color: white;
  background-color: #94d2bd;
  border: none;
  text-align: center;
  border-radius: 10px;
  /*   margin: 1em; */
  /*   padding: 0.25em 1em; */
  border-radius: 3px;
  :hover {
    color: #0fa371;
    background-color: white;
  }
  :active {
    color: white;
    background-color: #94d2bd;
  }
`;

const RedButton = styled(Button)`
  color: white;
  background-color: red;
  :hover {
    color: red;
    background-color: white;
  }
  :active {
    color: white;
    background-color: red;
  }
`;

const ButtonContainer = styled.div`
  width: 100%;

  display: flex;
  padding: 0;
  margin: 0;
  margin-left: 2rem;
  justify-content: flex-end;
  @media all and (max-width: 576px) {
    margin-left: 0rem;
    flex-wrap: wrap;
    flex-direction: column;
  }
`;
