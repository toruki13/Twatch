import { connect } from 'react-redux';

const StreamEdit = ({ match, stream }) => {
  console.log(stream);

  return <div>This is the edit Screen</div>;
};

const mapStateToProps = (state, { match }) => {
  return {
    stream: state.streams[match.params.id],
  };
};

export default connect(mapStateToProps)(StreamEdit);
