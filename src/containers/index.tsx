import React from "react";
import { connect } from "react-redux";
import { RouteProps } from "react-router-dom";
import { AppRouter } from "../core/app-routing";
import { Header } from "../components";

interface Props extends RouteProps {}

class RootContainer extends React.Component<Props, {}> {
  appName = "Manage Property";

  render() {
    return (
      <div className="root-container">
        <Header title={this.appName}></Header>
        <AppRouter />
      </div>
    );
  }
}

const mapStateToProps = () => ({});

const mapDispatchToProps = () => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RootContainer);
