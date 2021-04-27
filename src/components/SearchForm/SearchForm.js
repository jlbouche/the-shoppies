import React, {useState} from "react";
import { Form } from 'semantic-ui-react';

export default function SearchForm(){
    const [movieTitle, setMovieTitle] = useState("");

    const handleChange = (e) => {
        const title = e.target.value;
        console.log(title)
        setMovieTitle(title);
    };

    return (
        <Form>
            <Form.Field>
                <label>Movie Title</label>
                <input onChange={handleChange}/>
            </Form.Field>
        </Form>
    );
}