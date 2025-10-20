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
    formControlData: FormFieldControlData;
    name: string;
}

export default function SelectInput({children, validateData, formControlData, name}: ExtraProps){

    function handleChange(e: React.ChangeEvent<HTMLSelectElement>){
        validateData.forEach(validationFunction => {
            formControlData.setError(validationFunction(e.target.value, e.target.name as keyof FormData));
        })
        formControlData.setValue((v) => ({...v,[e.target.name]: e.target.value}));
    }

    return (
        <div>
            <h5>{children}</h5>
            <select name={name} value={formControlData?.valuePointer as string} onChange={handleChange} className={formControlData.errorPointer.length !== 0 ? "error-border" : ""}>
                <option value={0}>Odaberite...</option>
                <option value={1}>Upit o izletu</option>
                <option value={2}>Upit o prijavi</option>
                <option value={3}>Plaćanje</option>
                <option value={4}>Ostalo</option>
            </select>
            <div>
                {formControlData?.errorPointer.map((er, index) => (<p key={index} style ={errorStyling}> {er} </p>))}
            </div>
        </div>
    )
}

const errorStyling = {
    color: "red",
}