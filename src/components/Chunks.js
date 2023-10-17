import { useState } from "react";

const Accordion = ({ title, description, isVisible, setIsVisible }) => {
    //const [isVisible, setIsVisible] = useState(false);

    return (
        <div className="border-4 border-blue-950 p-1 m-1 rounded-s-md">
            {isVisible ? <button className="underline"
                onClick={() => { setIsVisible(false) }}>Hide</button> : <button className="underline mr-2"
                    onClick={() => { setIsVisible(true) }}>Show</button>}

            <h4 className="text-xl font-semibold">{title}</h4>
            {isVisible && <h4>{description}</h4>}
        </div>
    )
}


const Chunks = () => {
    const [visibleSection, setVisibleSection] = useState();
    return (

        <>
            <div>
                <h2 className="text-3xl font-bold m-4">Accordion</h2>
                <Accordion title={"Login Instamart"}
                    description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                    isVisible={visibleSection === "login"}
                    setIsVisible={() => setVisibleSection(visibleSection === "login" ? "" : "login")}
                />
                <Accordion title={"Contact Instamart"}
                    description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                    isVisible={visibleSection === "contact"}
                    setIsVisible={() => setVisibleSection(visibleSection === "contact" ? "" : "contact")}
                />
                <Accordion title={"About Instamart"}
                    description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                    isVisible={visibleSection === "about"}
                    setIsVisible={() => setVisibleSection(visibleSection === "about" ? "" : "about")}
                />

            </div>
        </>
    )
}
export default Chunks;