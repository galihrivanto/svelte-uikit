import Form from "./form.svelte";

interface ErrorField {
    key: string;
    message: string ;
}
type Data = Record<string, any>;
type ErrorBags = Record<string, ErrorField>;

interface Result {
    message:  string;
    data?: Data;
    errors?: ErrorBags;
    is_error: boolean;
}

interface IForm {
    registerSubmit(callback: () => Promise<Result>): void;
}

export {
    type Data,
    type ErrorField,
    type ErrorBags,
    type Result,
    type IForm,
    Form
}
