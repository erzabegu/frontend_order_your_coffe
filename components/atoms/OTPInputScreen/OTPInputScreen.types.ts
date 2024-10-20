export interface OTPInputScreenTypes {
    otp: Array<string>;

    updateOtp(otp: Array<string>): void;
}