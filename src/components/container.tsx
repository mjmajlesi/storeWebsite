import React from "react";
export type Tchildern = {
    children : React.ReactNode
};
export default function Container({children}: Tchildern){
    return(
        <div className="mx-2 sm:mx-4 md:mx-6 lg:mx-10 xl:mx-28">
            {children}
        </div>
    )
}