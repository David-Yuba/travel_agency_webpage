import useFormData from "./FormLogic/formData";

import TextInput from "./FormFields/TextInput";
import SelectInput from "./FormFields/SelectInput";
import TextareaInput from "./FormFields/TextareaInput";
import CheckboxInput from "./FormFields/CheckboxInput";

import { validateName, validateNameLength, validateEmailAtSign, validateEmailDotSign, validateTopic, validateMessageLength, validateGdpr } from "./FormLogic/validators";
import type { FormData } from "./FormLogic/formData";

import styles from "./ContactForm.module.css";

export type FormFieldControlData = {
    valuePointer: string | number | boolean;
    setValue: React.Dispatch<React.SetStateAction<{
        name: string;
        email: string;
        topic: number;
        message: string;
        gdpr: boolean;
    }>>;
    errorPointer: Array<string>;
    setError: React.Dispatch<React.SetStateAction<{
        name: string[];
        email: string[];
        topic: string[];
        message: string[];
        gdpr: string[];
    }>>;
}

export default function ContactForm(){

    const {fData: {data, setData}, errors: {errors, setErrors}} = useFormData();
    function createControlData(fieldName: string){
        type K = keyof FormData;
        const controlData: FormFieldControlData = {valuePointer: data[fieldName as K], setValue: setData, errorPointer: errors[fieldName as K], setError: setErrors}
        return controlData;
    }

    function onSubmit(e: React.FormEvent<HTMLFormElement>){
        e.preventDefault();
        type K = keyof FormData;
        let errorFlag = false;
        for (const er in errors)
            if (errors[er as K].length !== 0){
                errorFlag=true;
            }
        for (const da in data){
            const value = data[da as K];
            if ( typeof value === "string" && value.length === 0)
                errorFlag=true;
            if (typeof value === "boolean" && !value)
                errorFlag=true;
            
        }
        if(!errorFlag){ 
            console.log(data);
            setData({
                name: "",
                email: "",
                topic: 0,
                message: "",
                gdpr: false
            })
            alert("Poruka uspješno poslana!");
        }

    }

    return (
        <form className={`${styles.contactform} contactform`} onSubmit={onSubmit}>
            <TextInput name="name" validateData={[validateName, validateNameLength]} formControlData={createControlData("name")} htmlProps={{placeholder:"npr. Ana Anić"}}>Ime i prezime</TextInput>
            <TextInput name="email" validateData={[validateEmailAtSign, validateEmailDotSign]} formControlData={createControlData("email")} htmlProps={{placeholder:"ana@example.com"}}>Email</TextInput>
            <SelectInput name="topic" validateData={[validateTopic]} formControlData={createControlData("topic")}>Tema</SelectInput>
            <TextareaInput name="message" validateData={[validateMessageLength]} formControlData={createControlData("message")} htmlProps={{placeholder:"Opišite pitanje..."}}>Poruka</TextareaInput>
            <CheckboxInput name="gdpr" validateData={[validateGdpr]} formControlData={createControlData("gdpr")} >Prihvaćam uvjete obrade podataka</CheckboxInput>
            <button type="submit">Pošalji</button>
        </form>
    )
}