import Link from "next/link";
import { useState } from "react"

export default function NewPage() {
    // setting a variable
    const [var1, setVar1] = useState("Arianne");

    // declaring function
    const handler = () => {
        alert("Hello world");
    }

    return <>
        <h4>Hello {var1}</h4>

        <Link href="/">
            <button>Back</button>
        </Link>
    </>
}