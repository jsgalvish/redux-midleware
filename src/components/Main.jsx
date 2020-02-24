import React from 'react';

class Main extends React.Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-xs-12">
            <div>The Main Page</div>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12">
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => this.props.changeUserName('Anna')}
            >
              Change the Username
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
