import Modal from '../Modal';
import { deleteStream } from '../../actions';
import { connect } from 'react-redux';

const StreamDelete = ({ deleteStream, location, match }) => {
  const onSubmit = (streamId) => {
    console.log(streamId);
    deleteStream(streamId);
  };

  const actions = (
    <>
      <button
        onClick={() => {
          onSubmit(match.params.id);
        }}
        className='ui button negative'
      >
        Delete
      </button>
      <button className='ui button '>Cancel</button>
    </>
  );
  return (
    <div>
      <Modal
        route='/'
        header='Delete Stream'
        content='Are you sure you want to delete this stream?'
        actions={actions}
      />
    </div>
  );
};

export default connect(null, { deleteStream })(StreamDelete);
