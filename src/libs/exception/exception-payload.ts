export interface ExceptionPayload {
  status: number
  timestamp: string
  path: string,
  error: Record<any, any>
}