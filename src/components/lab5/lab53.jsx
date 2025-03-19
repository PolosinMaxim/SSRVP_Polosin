import React, {useContext, useCallback} from "react";
import { ThemeContext } from "../../App";
import { useForm } from 'react-hook-form';
import ReviewList from "./reviewlist";
const rvLst = ['a', 'b', 'cccc', 'This is a Sentence.']
function LabFive3() {
    const theme = useContext(ThemeContext);
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
    const callback = useCallback((data) => console.log(data), rvLst);
    return (
        <>
            <form onSubmit={handleSubmit(callback)}>
                <h4>Блок обратной связи</h4>
                <label>text <input {...register('text')} /> </label>
                {errors.text && <p>Some text is required.</p>}
                <input type="submit" />
            </form>
            <ReviewList reviewList={rvLst}/>
        </>
    );
}
export default LabFive3;