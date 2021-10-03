export interface Photo {
    id: number,
    src: {
        small: string,
        large: string
    },
    booked?: boolean
}