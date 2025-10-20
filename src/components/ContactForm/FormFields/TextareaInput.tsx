import type { SetStateAction } from "react";

import type { FormFieldControlData } from "../ContactForm";
import type { FormData } from "../FormLogic/formData";

type ExtraProps = {
    children: string;
    validateData: Array<(value: string, field: keyof FormData) => SetStateAction<{
        name: string[];
        email: string[];
        topic: string[];
        message: string[];
        gdpr: string[];
    }>>;
    htmlProps: {placeholder: string};
    formControlData: FormFieldControlData;
    name: string;
}

export default function TextareaInput({children, validateData, htmlProps, formControlData, name}: ExtraProps){
    
    function handleChange(e: React.ChangeEvent<HTMLTextAreaElement>){
        validateData.forEach(validationFunction => {
            formControlData.setError(validationFunction(e.target.value, e.target.name as keyof FormData));
        })
        formControlData.setValue((v) => ({...v,[e.target.name]: e.target.value}));
    }
    return (
        <div>
            <h5>{children}</h5>
            <textarea name={name} value={formControlData?.valuePointer as string} onChange={handleChange}  placeholder = {htmlProps.placeholder} rows={6} className={formControlData.errorPointer.length !== 0 ? "error-border" : ""}></textarea>
            <div>
                {formControlData?.errorPointer.map((er, index) => (<p key={index} style ={errorStyling}> {er} </p>))}
            </div>
        </div>
    )
}

const errorStyling = {
    color: "red",
}