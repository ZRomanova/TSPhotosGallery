import { DELETE_PHOTO, FETCH_PHOTOS, HIDE_LOADER, SHOW_LOADER, TOGGLE_BOOKED } from "./types"

const initialState = {
    photos: [],
    offset: 0,
    loader: false
}

export const galleryReducer = (state: any = initialState, action: any) => {
    switch (action.type) {
        case SHOW_LOADER: 
            return {
                ...state,
                loader: true
            }
        case HIDE_LOADER: 
            return {
                ...state,
                loader: false
            }
        case FETCH_PHOTOS: 
            return {
                ...state,
                offset: state.offset + 1,
                photos: action.payload.photos
            }
        case TOGGLE_BOOKED: 
            return {
                ...state,
                photos: state.photos.map((photo: any) => photo.id === action.payload ? {...photo, booked: photo.booked ? false : true} : photo)
            }
        case DELETE_PHOTO:
            return {
                ...state,
                photos: state.photos.filter((e: any) => e.id !== action.payload)
            }
        default: 
            return state
    }
}