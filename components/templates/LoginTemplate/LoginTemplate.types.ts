export type Inputs = {
    email: string,
    password: string,
};

export interface LoginTemplateProps {
    onUserLogin(data: Inputs): void
}