import Modal from '../Modal';
import { useEffect } from 'react';
import { deleteStream, fetchStream } from '../../actions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import history from '../../utils/history';

const StreamDelete = ({ deleteStream, fetchStream, match, stream }) => {
  //TODO Most Likely it would be much better to pop the delete modal without a route like method, so we save a couple of requests

  let id = match.params.id;

  useEffect(() => {
    if (!stream) {
      console.log('no stream useEffect will kick in', stream);
      fetchStream(id);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onSubmit = (streamId) => {
    console.log(streamId);
    deleteStream(streamId);
  };

  const actions = (
    <>
      <button onClick={() => onSubmit(id)} className='ui button negative'>
        Delete
      </button>
      {/*  <button onClick={() => history.push('/')} className='ui button '>
        Cancel
      </button> */}
      <Link to='/' className='ui button '>
        Cancel
      </Link>
    </>
  );
  return (
    <Modal
      onDismiss={(e) => history.push('/')}
      route='/'
      header={`Delete stream : ${stream?.title || ''}`}
      content={`Are you sure you want to delete stream : ${
        stream?.title || ''
      }`}
      actions={actions}
    />
  );
};
const mapStateToProps = (state, ownProps) => {
  return {
    stream: state.streams[ownProps.match.params.id],
  };
};
export default connect(mapStateToProps, { fetchStream, deleteStream })(
  StreamDelete
);
