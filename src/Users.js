import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteUser } from "./actions/userActions";

class Users extends Component {
  render() {
    let userJsx =
      this.props.users && this.props.users.length > 0 ? (
        this.props.users.map((user) => (
          <div className="card col-12 col-md-6 p-2" key={user.id}>
            <h4>{user.name}</h4>
            <button
              className="btn btn-danger"
              onClick={() => this.props.deleteUser(user.id)}
            >
              Delete
            </button>
          </div>
        ))
      ) : (
        <p>No users exist</p>
      );
    // if(this.props.userArray) {

    // } else {   }

    // (this.props.userArray) IF return statement ELSE

    return (
      <div>
        <h2>Users</h2>

        <div className="container">
          <div className="row">{userJsx}</div>
        </div>
      </div>
    );
  }
}

// mapStateToProps make redux state available to this component's props

const mapStateToProps = (state) => ({
  users: state.users.users,
});

// mapDispatchToProps making the actions dispatchable to the reducer  - be able to run a function to change the application level state

export default connect(mapStateToProps, { deleteUser })(Users);
