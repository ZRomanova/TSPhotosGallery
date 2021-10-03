import { DELETE_PHOTO, HIDE_LOADER, REQUEST_PHOTOS, SHOW_ALERT, SHOW_LOADER, TOGGLE_BOOKED } from "./types"

export const showLoader = () => {
    return {
        type: SHOW_LOADER
    }
}

export const hideLoader = () => {
    return {
        type: HIDE_LOADER
    }
}

export const toggleBooked = (id: Number) => {
    return {
        type: TOGGLE_BOOKED,
        payload: id
    }
}

export const requestPhotos = () => {
    return {
        type: REQUEST_PHOTOS
    }
}

export const deletePhoto = (id: Number) => {
    return {
        type: DELETE_PHOTO,
        payload: id
    }
}

