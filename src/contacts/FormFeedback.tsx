import React from "react";
import {useForm} from "react-hook-form";
import styles from "./FormFeedback.module.scss";
import Button from "../common/components/button/Button";

type IFormInput = {
    name: string;
    email: string;
    message: string;
}

export function FormFeedback() {
    const {
        register,
        handleSubmit,
        formState: {errors}
    } = useForm<IFormInput>();

    const onSubmit = (data: IFormInput) => {
        alert(JSON.stringify('Message sent successfully!'));
    };

    return (
        <form className={styles.form}>
            <input {...register("name", {required: true, maxLength: 30, pattern: /^[A-Za-zА-Яа-я]+$/i})}
                   placeholder={'Name*'}
            />
            {errors?.name?.type === "required" && <p>This field is required</p>}
            {errors?.name?.type === "maxLength" && <p>Name cannot exceed 30 characters</p>}
            {errors?.name?.type === "pattern" && <p>Alphabetical characters only</p>}

            <input {...register("email", {required: true, pattern: /\S+@\S+\.\S+/})}
                   placeholder={'Email*'}/>
            {errors?.email?.type === "pattern" && <p>Incorrect email</p>}
            {errors?.email?.type === "required" && <p>This field is required</p>}

            <textarea {...register("message", {required: true, maxLength: 100})}
                      placeholder={'Enter message*'} rows={7} cols={5}
            />
            {errors.message && <p>Message cannot exceed 100 characters</p>}
            <Button name="Send message" onClick={handleSubmit(onSubmit)}/>
        </form>
    );
}