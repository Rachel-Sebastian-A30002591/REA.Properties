import { PROPERTY_ADD, PROPERTY_REMOVE, 
    PROPERTY_FETCH, 
    FetchPropertiesAction,
    Property,
    RemovePropertyAction} from '../../types/property';



export function fetchProperties(): FetchPropertiesAction {
  return {
    type: PROPERTY_FETCH
  }
}

/**
 * Action to add property into Saved List
 */
export function addProperty(payload:Property): FetchPropertiesAction {
  return {
    type: PROPERTY_ADD,
    payload
  }
}

/**
 * Action to remove property into Saved List
 */
export function removeProperty(payload:Property): RemovePropertyAction {
  return {
    type: PROPERTY_REMOVE,
    payload
  }
}
  
