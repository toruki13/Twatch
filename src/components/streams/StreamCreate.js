import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { createStream } from '../../actions';
import styled from 'styled-components';

class StreamCreate extends React.Component {
  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <div className='ui error message'>
          <div className='header'>{error}</div>
        </div>
      );
    }
  }

  renderInput = ({ input, label, meta }) => {
    return (
      <div>
        <label>{label}</label>
        <input required {...input} autoComplete='off' />
        {this.renderError(meta)}
      </div>
    );
  };

  /* arrow function due to binding on the submit event */
  onSubmit = ({ title, description }) => {
    this.props.createStream({
      title,
      description,
    });
  };
  
  render() {
    return (
      <Container>
        <form
          onSubmit={this.props.handleSubmit(this.onSubmit)}
          className='ui form error'
        >
          <Field
            name='title'
            component={this.renderInput}
            label='Enter title'
          />
          <Field
            name='description'
            component={this.renderInput}
            label='Enter description'
          />
          <SubmitButton>Submit</SubmitButton>
        </form>
      </Container>
    );
  }
}
const validate = (formValues) => {
  const errors = {};
  if (!formValues.description) {
    errors.description = 'You need to enter a description';
  }
  if (!formValues.title) {
    errors.title = 'You need to enter a title';
  }

  return errors;
};

const formWrapped = reduxForm({ form: 'streamCreate', validate })(StreamCreate);

export default connect(null, { createStream })(
  formWrapped
); /* how the fuck those this works */

const SubmitButton = styled.button`
  font-family: 'Roboto', sans-serif;
  margin-top: 8px;
  text-transform: uppercase;
  background: #94d2bd;
  width: 100%;
  border: 0;

  color: #ffffff;
  font-size: 14px;
  transition: all 0.1s ease;
  cursor: pointer;
  :hover {
    color: #0fa371;
    font-weight: bold;
  }
  :active {
    color: white;
    font-weight: bold;
  }
`;
const Container = styled.div`
  border-radius: 10px;
  margin: 10% 40%;
  padding: 30px;
  padding-bottom: 15px;
  background-color: #94d2bd;
  color: white;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
