import { useEffect } from 'react';
import { fetchStream } from '../../actions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const StreamShow = ({ stream, fetchStream, match }) => {
  let id = match.params.id;

  useEffect(() => {
    if (!stream) {
      console.log('no stream useEffect will kick in', stream);
      fetchStream(id);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <div>{stream?._id}</div>;
};

const mapStateToProps = (state, ownProps) => {
  return {
    stream: state.streams[ownProps.match.params.id],
  };
};
export default connect(mapStateToProps, { fetchStream })(StreamShow);
