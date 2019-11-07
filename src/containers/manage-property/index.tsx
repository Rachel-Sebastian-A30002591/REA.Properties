import React from "react";
import { connect } from "react-redux";
import { RouteComponentProps } from "react-router-dom";
import { StickyTitle, PropertyCard } from "../../components";
import {
  fetchProperties,
  addProperty,
  removeProperty
} from "../../redux-core/actions";
import { Properties, Property } from "../../redux-core/types";
import { PropertyTypes } from "../../enums/property-type";

interface IProps extends RouteComponentProps {}

interface IAppProps extends IProps {
  fetchProperties: typeof fetchProperties;
  addProperty: typeof addProperty;
  removeProperty: typeof removeProperty;
  propertyReducer: Properties;
}

class ManagePropertyContainer extends React.Component<IAppProps, {}> {
  constructor(Props: any) {
    super(Props);
    console.log("Props", this.props);
    this.props.fetchProperties();
  }

  /**
   * Handles Clicks from each Card
   *
   * @memberof ManagePropertyContainer
   */
  handleClick = (type: string, property: Property) => {
    if (type === PropertyTypes.Add) {
      this.props.addProperty(property);
    } else {
      this.props.removeProperty(property);
    }
  };

  /**
   *  Renders the List of Property from Results Array
   *
   * @memberof ManagePropertyContainer
   */
  renderResultsList = () => {
    return this.props.propertyReducer.results.map((property, index) => {
      const savedList = this.props.propertyReducer.saved;
      const savedListFiltered = savedList.filter(
        (_property: Property) => _property === property
      );
      let showActionButton = false;
      if (savedListFiltered.length > 0) {
        showActionButton = false;
      } else {
        showActionButton = true;
      }
      return (
        <PropertyCard
          key={property.id}
          property={property}
          type={PropertyTypes.Add}
          actionButton={showActionButton}
          onActionClick={this.handleClick}
        ></PropertyCard>
      );
    });
  };

  /**
   * Renders the List of Property from Saved Array
   *
   * @memberof ManagePropertyContainer
   */
  renderSavedList = () => {
    return this.props.propertyReducer.saved.map((property, index) => {
      return (
        <PropertyCard
          key={property.id}
          property={property}
          type={PropertyTypes.Remove}
          actionButton={true}
          onActionClick={this.handleClick}
        ></PropertyCard>
      );
    });
  };

  render() {
    return (
      <div className="rootContainer">
        <div className="row pt-4 no-gutters">
          <div className="col-12 col-sm-6">
            <StickyTitle title="Results"></StickyTitle>
            {this.renderResultsList()}
          </div>
          <div className="col-12 col-sm-6">
            <StickyTitle title="Saved"></StickyTitle>
            {this.renderSavedList()}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: any) => {
  const { propertyReducer } = state;
  return { propertyReducer };
};

const mapDispatchToProps = {
  fetchProperties,
  addProperty,
  removeProperty
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ManagePropertyContainer);
