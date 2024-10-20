export type Inputs = {
    name: string;
    phone: string;
    email: string;
    password: string;
};

export interface RegisterTemplateProps {
    onUserRegister(data: Inputs): void
}