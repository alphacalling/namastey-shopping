import React from "react";

const Shimmer = () => {
    return (
        <div className="flex justify-evenly">
            {
                Array(8).fill(" ").map((e, index) => (
                    <div key={index} className="flex w-[20rem] h-[12rem] bg-slate-200 border border-solid black mt-9 mb-8 m-5 flex-wrap">

                    </div>
                ))
            }
        </div>
    );
}
export default Shimmer;