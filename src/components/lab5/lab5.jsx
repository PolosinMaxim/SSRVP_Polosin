import React, {useContext} from "react";
import { ThemeContext } from "../../App";
import { useForm } from 'react-hook-form';
import LabFive2 from './lab52'
import LabFive3 from './lab53'

function LabFive() {
    const theme = useContext(ThemeContext);
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
    return (
        <>
            <form onSubmit={handleSubmit((data) => console.log(data))}>
                <h4>Регистрация и авторизация</h4>
                <label>firstName <input {...register('firstName')} /> </label>
                <label>lastName <input {...register('lastName', { required: true })} /> </label>
                {errors.lastName && <p>Last name is required.</p>}
                <label>age <input {...register('age', { pattern: /\d+/ })} /> </label>
                {errors.age && <p>Please enter number for age.</p>}
                <input type="submit" />
            </form>
            <LabFive2/>
            <LabFive3/>
            
        </>
        
    );
}
export default LabFive;