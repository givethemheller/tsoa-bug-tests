export interface User {
    id: string;
    prop1: string;
    prop2: string;
    foo: string;
    bar: string;
    bazz: string;
}
export interface OmissionUser {
    user: Omit<User, "foo">;
}
export interface SecondOmit extends Omit<User, "prop2"> {
}
