
export const PROPERTY_ADD = 'PROPERTY_ADD';
export const PROPERTY_REMOVE = 'PROPERTY_REMOVE';
export const PROPERTY_FETCH = 'PROPERTY_FETCH';
export const PROPERTY_FETCH_SUCCESS = 'PROPERTY_FETCH_SUCCESS';
export const PROPERTY_FETCH_FAILED = 'PROPERTY_FETCH_FAILED';

export interface BrandingColors {
    primary: string;
}

export interface Agency {
    logo: string;
    brandingColors: BrandingColors;
}

export interface Property {
    price: string;
    agency: Agency;    
    id: number;
    mainImage: string;
}

/**
 * @export contains the List of results array and saved array
 * @interface Properties
 */
export interface Properties {
    results: Property[],
    saved: Property[]
}

export interface FetchPropertiesAction {
    type: string,
    payload? : any
}

export interface FetchPropertiesSuccessAction {
    type: string
    payload: Properties
}


export interface AddPropertyAction {
    type: string,
    payload: Property
}


export interface RemovePropertyAction {
    type: string,
    payload: Property
}

export type PropertyActionTypes = FetchPropertiesSuccessAction| FetchPropertiesAction  | AddPropertyAction | RemovePropertyAction; // | DeleteMessageAction
