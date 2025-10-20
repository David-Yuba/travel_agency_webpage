import { useState } from "react"


export type FormData = {
    name: string;
    email: string;
    topic: number;
    message: string;
    gdpr: false;
};
export const formData = {
    name: "",
    email: "",
    topic: 0,
    message: "",
    gdpr: false
}
export type ErrorData = {
    name: Array<string>;
    email: Array<string>;
    topic: Array<string>;
    message: Array<string>;
    gdpr: Array<string>;
};
export const er: ErrorData = {
    name: [],
    email: [],
    topic: [],
    message: [],
    gdpr: []
}
export type Error = typeof er;

export default function useFormData(){
    const [data, setData] = useState(formData);
    const [errors, setErrors] = useState(er);

    return {fData: {data, setData}, errors: {errors, setErrors}}
}