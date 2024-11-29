"use client"
import axios from "axios";
import Button from "./Button";
import React, { useEffect } from "react";


export default async function Home1(){
    const [url, setURL] = React.useState("");
    const [len, setLen] = React.useState(0);

    function handler() {
        console.log(url);
        console.log(len)
        axios.post("http://localhost:9000/shorten", {
            url: url,
            len: len,
        })
        
        .then(response => {
            console.log("URL shortened:", response.data);
        })
        .catch(error => {
            console.error("Error shortening URL:", error);
        });
    }

    function handleInputUrl(event: any){
        setURL(event.target.value);
    }

    function handleInputLen(event: any){
        setLen(event.target.value);
    

    return(
        <div className="h-screen flex justify-center flex-col">
                <div className="flex justify-center">
                <a href="#" className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 ">
                        <div>
                            <div className="pt-2">
                                <label className="block mb-2 text-sm text-black font-semibold pt-4">url</label>
                                <input type={"text"} onChange={handleInputUrl} id="url" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="https://example.com" required />

                                <label className="block mb-2 text-sm text-black font-semibold pt-4">len</label>
                                <input onChange={handleInputLen} id="len" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="6" required />
                            </div>
                                <button className="mt-8 w-full text-white bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2" onClick={() => {handler()}}>Generate URL</button>   
                        </div>
                    </a>
                </div>

                <div></div>
        </div>
    )
}
}