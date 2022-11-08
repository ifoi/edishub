import Link from "next/link";
import { useContext, useState } from "react";
import { AppContext } from "components/context/AppContext";
import { getFormattedCart, getUpdatedItems } from "functions";
import CollectionItem from "./CollectionItem"

const CollectionItemsContainer = () => {

    const [cart, setCart] = useContext(AppContext);

    console.warn(cart);

    return (
        <div>

            <h3> Container for list of collections </h3>

            <CollectionItem />

        </div>
    )


};

export default CollectionItemsContainer;