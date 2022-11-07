import Link from "next/link";
import {useContext, useState} from "react";
import {AppContext} from "components/context/AppContext";


const CollectionItemsContainer = () => {

    const[cart, setCart] = useContext(AppContext) ;

    console.warn(cart) ;

    return ( 
        
        <div> Container for list of collections </div>
    )


};

export default CollectionItemsContainer;