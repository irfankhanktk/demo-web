import React, { useReducer, useState } from 'react';
const formReducer = (state, event) => {
    return {
        ...state,
        [event.target.name]: event.target.value
    }
}
function FormDemo() {
    const [formData, setFormData] = useReducer(formReducer, {});
    const [submitting, setSubmitting] = useState(false);
    const handleSubmit = event => {
        event.preventDefault();
        setSubmitting(true);
        setTimeout(() => {
            setSubmitting(false);
        }, 3000)
    }
    console.log('formData',formData);
    return (
        <div className="wrapper">
            After making the reducer, add setFormData to the onChange event handler
            on the input. Save the file. When you do, the browser will reload. However,
            if you try and type in the input, you’ll get an error:
            <h1>How About Them Apples</h1>
            {submitting &&
                <div>Submtting Form...</div>
            }
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <label>
                        <p>Name</p>
                        <input name="name" onChange={setFormData} />
                    </label>
                </fieldset>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
export default FormDemo;