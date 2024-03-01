import Form from "./form.svelte";

interface ErrorField {
    field: string;
    error: string ;
}
type Data = Record<string, any>;
type ErrorBags = Record<string, ErrorField>;
interface ApiError {
    response: {
        data: {
            message: string;
            fields: ErrorField[]
        }
    }
}

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
    type ApiError,
    Form
}
