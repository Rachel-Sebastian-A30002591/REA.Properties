import { PropertyActionTypes, Properties, Property, PROPERTY_ADD, PROPERTY_REMOVE, PROPERTY_FETCH_SUCCESS, PROPERTY_FETCH_FAILED } from "../../types";


export const initialState: Properties = {
    results: [],
    saved: []
}

export const propertyReducer = (state = initialState, action: PropertyActionTypes) => {
    switch (action.type) {
        case PROPERTY_ADD:
            const _savedListAdd = state.saved;
            _savedListAdd.push(action.payload);
            return {
                ...state,
                saved: _savedListAdd
            }
        case PROPERTY_REMOVE:
            // const _savedListRemove = state.saved;
            // _savedListRemove.pop(action.payload);
            const _savedListRemove = state.saved.filter((property: Property) => property !== action.payload);
            return {
                ...state,
                saved: _savedListRemove
            }
        case PROPERTY_FETCH_SUCCESS:
            return {
                ...state,
                results: action.payload.results,
                saved: action.payload.saved,
            }

        case PROPERTY_FETCH_FAILED:
            return {
                ...state,
                results: [],
                saved: []
            }


        default:
            return { ...state };
    }
}