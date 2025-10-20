import type { SetStateAction } from "react";
import type { FormFieldControlData } from "../ContactForm";
import type { FormData } from "../FormLogic/formData";

type ExtraProps = {
    children: string;
    validateData: Array<(value: boolean, field: keyof FormData) => SetStateAction<{
        name: string[];
        email: string[];
        topic: string[];
        message: string[];
        gdpr: string[];
    }>>;
    formControlData: FormFieldControlData;
    name: string;
}

export default function CheckboxInput({children, validateData, formControlData, name}: ExtraProps){

    function handleChange(e: React.ChangeEvent<HTMLInputElement>){
        validateData.forEach(validationFunction => {
            formControlData.setError(validationFunction(e.target.checked, e.target.name as keyof FormData));
        })
        formControlData.setValue((v) => ({...v,[e.target.name]: e.target.checked}));
    }
    return(
        <div>
            <input name={name} checked={formControlData?.valuePointer as boolean} onChange={handleChange} id={name} type="checkbox"/>
            <label htmlFor={name}>{children}</label>
            <div>
                {formControlData?.errorPointer.map((er, index) => (<p key={index} style ={errorStyling}> {er} </p>))}
            </div>
        </div>
    )
}

const errorStyling = {
    color: "red",
}