import React from "react";
import { createBrowserRouter, createRoutesFromElements, Route, Routes } from "react-router-dom";


export const routes = createBrowserRouter (
    createRoutesFromElements(

        <Route path="/" element={<Layout/>} errorElement={<div><h1>Not Found!!</h1></div>}>
            <Route index element={<Home/>}/>
            <Route path="/contacts/:contactUser" element={<Contacts/>}/>
        </Route>
    )
);
