import React, { Component } from 'react';

function FirebaseHOC(ComposedComponent, fbRef) {
  return class extends Component {
    state = {
      candidates: []
    };

    onFirebaseValue = (snapshot) => {
      this.setState({ candidates: snapshot.val() });
    }

    componentWillMount() {
      this.fbRef = fbRef;
      this.fbRef.on('value', this.onFirebaseValue);
    }

    componentWillUnmount() {
      this.fbRef.off('value', this.onFirebaseValue);
    }
    
    render() {
      return <ComposedComponent {...this.state} {...this.props} />;
    }
  }
}

export { FirebaseHOC };
