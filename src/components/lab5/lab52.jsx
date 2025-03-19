import React, {useContext} from "react";
import { ThemeContext } from "../../App";
import { useForm } from 'react-hook-form';
function LabFive2() {
    const theme = useContext(ThemeContext);
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
    return (
        <form onSubmit={handleSubmit((data) => console.log(data))}>
            <label>login <input {...register('login')} /> </label>
            {errors.login && <p>Please enter login.</p>}
            <label>password <input {...register('password', { required: true })} /> </label>
            {errors.password && <p>Password is required.</p>}
            <input type="submit" />
        </form>
    );
}
export default LabFive2;