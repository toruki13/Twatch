import { connect } from 'react-redux';
import { useEffect } from 'react';
import { fetchStreams } from '../../actions';
import styled from 'styled-components';
const StreamList = (props) => {
  useEffect(() => {
    props.fetchStreams();
  }, []);

  const renderAdminButtons = (stream) => {
    if (props.currentUserId === stream.userId) {
      return (
        <div>
          {/*  button container as a styled component*/}
          <Button>Delete</Button> <Button>Edit</Button>
        </div>
      );
    }
  };
  const renderList = () => {
    return props.streams.map((stream) => {
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
  return (
    <Container>
      <h1>Streams</h1>

      <List>{renderList()}</List>
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    streams: Object.values(state.streams),
    currentUserId: state.auth.userId,
  };
};
export default connect(mapStateToProps, { fetchStreams })(StreamList);

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  cursor: pointer;
  padding: 15px;
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
  width: 80%;
`;

const ListElement = styled.li`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: flex-start;
  border-top: 1px solid #94d2bd;
  border-bottom: 1px solid #94d2bd;
  margin: 2rem;
  > i {
    margin-right: 10px;
    margin-left: 10px;
    color: #94d2bd;
  }
`;

const ListContainer = styled.div`
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
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #94d2bd;
  border-radius: 3px;
`;
