import React from 'react';
import { connect } from 'react-redux';
import Main from './components/Main';
import User from './components/User';
import { setName } from './actions/userActions';

class App extends React.PureComponent {
  render() {
    return (
      <div className="container">
        <Main changeUserName={() => this.props.setName('Ana')} />
        <User username={this.props.user.name} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.userReducer,
  math: state.mathReducer,
});

const mapDispatchToProps = (dispatch) => ({
  setName: (name) => dispatch(setName(name)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
