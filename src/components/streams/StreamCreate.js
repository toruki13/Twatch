import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { createStream } from '../../actions';
import styled from 'styled-components';
import StreamForm from './StreamForm';

class StreamCreate extends React.Component {
  /* arrow function due to binding on the submit event */
  onSubmit = (formValues) => {
    this.props.createStream(formValues);
  };

  render() {
    return (
      <div>
        <h3 style={{ textAlign: 'center', paddingTop: '10%' }}>
          Create Stream
        </h3>
        <StreamForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

export default connect(null, { createStream })(
  StreamCreate
); /* how the fuck those this works */
