import React from "react";
import { useParams } from "react-router-dom";

export const Contacts = () => {

    const { contactUser } = useParams;

    return (
        <div>
            <h1>Contacto: {contactUser} </h1>
        </div>
    )
}