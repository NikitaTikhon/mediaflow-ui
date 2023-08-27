export interface ErrorResponse {
    timestamp: string
    status: number
    error: string
    message?: string
    messages?: object,
    path: string
}