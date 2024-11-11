"use client"
import axios from "axios";
import Button from "./Button";
import React from "react";

export default function Home1(){

    
    const [url, seturl] = React.useState("");
    const [len, setlen] = React.useState(0);

    function handler() {
        console.log(url);
        axios.post("http://localhost:3000/shorten", {
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
        seturl(event.target.value);
    }

    function handleInputLen(event: any){
        setlen(event.target.val);
    }

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
                    <Button onClick = {handler} />
                </div>
            </a>
        </div>
    </div>
    )
}