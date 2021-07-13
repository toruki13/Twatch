import React from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions';

class GoogleAuth extends React.Component {
  /*   state = { isSignedIn: null }; */

  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client
        .init({
          clientId:
            '1006430594015-dpc8golomsk9846g407pec1gjf7v8msq.apps.googleusercontent.com',
          scope: 'email',
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.onAuthChange(this.auth.isSignedIn.get());
          /*  this.setState({ isSignedIn: this.auth.isSignedIn.get() }); */
          this.auth.isSignedIn.listen(this.onAuthChange);
        })
        .catch((err) => {
          console.log(err);
        });
    });
  }

  onAuthChange = (isSignedIn) => {
    /*because this a callback function it will be set as an arrow on this class components*/
    isSignedIn
      ? this.props.signIn(this.auth.currentUser.get().getId())
      : this.props.signOut();
  };

  renderAuthButton() {
    if (this.props.isSignedIn === null) return null;

    const message = this.props.isSignedIn === true ? 'LogOut' : 'LogIn';
    return <div>{message} </div>;
  }

  toggleLoginClick = () => {
    !!this.props.isSignedIn ? this.auth.signOut() : this.auth.signIn();
  };

  render() {
    return (
      <button onClick={this.toggleLoginClick}>{this.renderAuthButton()}</button>
    );
  }
}
const mapStateToProps = (state) => {
  return { isSignedIn: state.auth.isSignedIn };
};
export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);
