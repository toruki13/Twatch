import { connect } from 'react-redux';
import { useEffect } from 'react';
import { fetchStream, editStream } from '../../actions';
import { AtomSpinner } from 'react-epic-spinners';
import StreamForm from './StreamForm';

const StreamEdit = ({ match, stream, fetchStream, editStream }) => {
  const id = match.params.id;

  useEffect(() => {
    fetchStream(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onSubmit = (formValues) => editStream(id, formValues);

  return (
    <div>
      {!stream ? (
        <AtomSpinner size={120} color='#94d2bd'></AtomSpinner>
      ) : (
        <div>
          <h3 style={{ textAlign: 'center', paddingTop: '10%' }}>
            Create Stream
          </h3>
          <StreamForm
            initialValues={{
              title: stream.title,
              description: stream.description,
            }}
            onSubmit={onSubmit}
          />
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    stream: state.streams[ownProps.match.params.id],
  };
};

export default connect(mapStateToProps, { fetchStream, editStream })(
  StreamEdit
);
