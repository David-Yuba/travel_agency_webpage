import type { FormData, Error } from "./formData";

export function validateName(value: string, field: keyof FormData){
    if(!value.includes(" ")){
        const message = "Unesite ime i prezime";
        return (v: Error) => v[field].includes(message) ? v : {...v, [field]:[...v[field], message]}
    }
    else{
        const message = "Unesite ime i prezime";
        return (v: Error) => ({...v, [field]: v[field].filter(m => m !== message)})
    }
}
export function validateNameLength(value: string, field: keyof FormData){
    if(value.length < 3){
        const message = "Ime mora sadržavati minimalno 3 znaka";
        return (v: Error) => v[field].includes(message) ? v : {...v, [field]:[...v[field], message]}
    }
    else{
        const message = "Ime mora sadržavati minimalno 3 znaka";
        return (v: Error) => ({...v, [field]: v[field].filter(m => m !== message)})
    }
}
export function validateEmailAtSign(value: string, field: keyof FormData){
    if(!value.includes("@")){
        const message = "Unesite valjani email koji sadrži @";
        return (v: Error) =>v[field].includes(message) ? v : {...v, [field]:[...v[field], message]}
    }
    else{
        const message = "Unesite valjani email koji sadrži @";
        return (v: Error) => ({...v, [field]: v[field].filter(m => m !== message)})
    }
}
export function validateEmailDotSign(value: string, field: keyof FormData){
    if(!value.includes(".")){
        const message = "Unesite valjani email koji sadrži .";
        return (v: Error) =>v[field].includes(message) ? v : {...v, [field]:[...v[field], message]}
    }
    else{
        const message = "Unesite valjani email koji sadrži .";
        return (v: Error) => ({...v, [field]: v[field].filter(m => m !== message)})
    }
}
export function validateTopic(value: string, field: keyof FormData){
    if(Number(value) === 0){
        const message = "Ovo polje je obavezno";
        return (v: Error) =>v[field].includes(message) ? v : {...v, [field]:[...v[field], message]}
    }
    else{
        const message = "Ovo polje je obavezno";
        return (v: Error) => ({...v, [field]: v[field].filter(m => m !== message)})
    }
}
export function validateMessageLength(value: string, field: keyof FormData){
    if(value.length < 10){
        const message = "Poruka mora imati 10 znakova";
        return (v: Error) =>v[field].includes(message) ? v : {...v, [field]:[...v[field], message]}
    }
    else{
        const message = "Poruka mora imati 10 znakova";
        return (v: Error) => ({...v, [field]: v[field].filter(m => m !== message)})
    }
}
export function validateGdpr(value: boolean, field: keyof FormData){
    if(!value){
        const message = "Uvjete morate prihvatiti";
        return (v: Error) =>v[field].includes(message) ? v : {...v, [field]:[...v[field], message]}
    }
    else{
        const message = "Uvjete morate prihvatiti";
        return (v: Error) => ({...v, [field]: v[field].filter(m => m !== message)})
    }
}