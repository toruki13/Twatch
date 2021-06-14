import { connect } from 'react-redux';
import { useEffect } from 'react';
import { fetchStream } from '../../actions';
import { AtomSpinner } from 'react-epic-spinners';
const StreamEdit = ({ match, stream, fetchStream }) => {
  useEffect(() => {
    console.log(stream);
    fetchStream(match.params.id);
    console.log('streamFetched');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      {!stream ? (
        <AtomSpinner size={120} color='#94d2bd'></AtomSpinner>
      ) : (
        stream.title
      )}
    </div>
  );
};

const mapStateToProps = (state, { match }) => {
  return {
    stream: state.streams[match.params.id],
  };
};

export default connect(mapStateToProps, { fetchStream })(StreamEdit);
