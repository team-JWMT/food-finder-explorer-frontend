import React from "react";
import { withAuth0 } from "@auth0/auth0-react";

class Profile extends React.Component {

  componentDidMount() {
    this.props.checkProfile(this.props.auth0.user.email);
  }

  render() {
    if (this.props.auth0.isLoading) {
      return <div>Loading ...</div>;
    }

    return (
      <>
        {this.props.auth0.isAuthenticated && (
          <div>
            <p>{this.props.auth0.user.name}</p>
            <p>{this.props.auth0.user.email}</p>
          </div>
        )}
      </>
    );
  };
}

export default withAuth0(Profile);