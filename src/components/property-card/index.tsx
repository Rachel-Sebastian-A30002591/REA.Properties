import React from 'react';
import './property.scss';
import { RouteProps } from 'react-router';
import { Property } from '../../redux-core/types';
import { PropertyTypes } from '../../enums/property-type';

interface Props extends RouteProps {
  property: Property
  type: string,
  onActionClick: ((actionType: string, property: Property) => void)
  actionButton: boolean
}

const PropertyCard: React.FC<Props> = ({ property, type, onActionClick, actionButton }) => {
  return (
    <div className="card card-1 float-left">
      <div className="card-title">ID: {property.id}</div>
      <img className="card-main-image" src={property.mainImage} alt={property.mainImage} />
      <div className="price d-flex align-items-center justify-content-center p-1 w-100">{property.price}</div>
      {(actionButton === true) ? <div className="d-flex align-items-center justify-content-center p-1 w-100 action-button">
        {
          (type === PropertyTypes.Add) ?
            <button type="button" className="btn btn-primary rounded-pill w-75" onClick={() => onActionClick(PropertyTypes.Add, property)}>Add Property</button>
            : <button type="button" className="btn btn-outline-danger rounded-pill w-75" onClick={() => onActionClick(PropertyTypes.Remove, property)}>Remove Property</button>
        }
      </div>
        : null
      }

    </div>
  );
}
export default PropertyCard;