export interface AuthPayload {
  user: Record<any, any>
  payload: {
    type: string
    token: string
    refresh_token?: string
  }
}