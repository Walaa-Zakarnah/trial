import { useState } from "react";
function About({ children }) {
    let [isLoading, setLoad] = useState(true);

    function changeLoad() {
        if (isLoading) {
            document.querySelector("h2").innerHTML="Loading...";
            setLoad(false);
        } else{
            document.querySelector("h2").innerHTML="This is the About page.";
            setLoad(true);
        }
    }
    return (
        <>
            <h1>About</h1>
            <h2 className="abouth"></h2>
            <p>This is the About page.</p>
            {children}
            <button onClick={changeLoad}>click</button>
        </>
    );
}

export default About;
