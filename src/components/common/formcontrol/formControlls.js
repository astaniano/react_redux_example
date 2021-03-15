import s from './formControl.module.css'
import * as React from "react";
import {Field} from "redux-form";

const FormControl = ({meta, children}) => {
    const hasError = meta.touched && meta.error;

    return (
        <div className={hasError ? `${s.formControl} ${s.error}` : ""}>
            <div>
                {children}
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}

export const Input = ({input, meta, ...props}) => {
    return <FormControl meta={meta}><input {...input} {...props} /></FormControl>
}

export const Textarea = ({input, meta, ...props}) => {
    return <FormControl meta={meta}><textarea {...input} {...props} /></FormControl>
}

export const createField = (placeholder, name, validators, component, props = {}, text = "") => (
    <div>
        <Field
            placeholder={placeholder}
            name={name}
            validate={validators}
            component={component}
            {...props}/>
    </div>
)
