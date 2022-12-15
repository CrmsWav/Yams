export interface ResponseFuncs {
    GET?: Function
    POST?: Function
    PUT?: Function
    DELETE?: Function
}

export interface Pastries {
    _id?: string,
    pastries?: [{}]
}
