export interface ForgotPasswordTypes {
    sendCode(data: { email: string }): void
}