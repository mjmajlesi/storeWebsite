import React from "react";
export type Tchildern = {
    children : React.ReactNode
};
export default function Container({children}: Tchildern){
    return(
        <div className="mx-28">
            {children}
        </div>
    )
}