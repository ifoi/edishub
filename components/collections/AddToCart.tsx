import { AppContext } from "components/context/AppContext";
import { getFormattedCart } from "functions";
import GET_CART from "graphql/queries/collection.queries";
import {ADD_TO_CART} from "graphql/mutations/collection.mutations";
import { useContext, useState } from "react";
import { useQuery, useMutation } from "@apollo/client";

import {v4} from "uuid" ;

const AddToCart = (props) => {

    const { product } = props;

    const productQryInput = {
        clientMutationId: v4(), // Generate a unique id.
        productId: product.productId,
    };

    const [cart, setCart] = useContext(AppContext);
    const [showViewCart, setShowViewCart] = useState(false);
    const [requestError, setRequestError] = useState(null);
  
    console.log(useContext(AppContext)) ;

    // Get Cart Data.
    const { data, refetch } = useQuery(GET_CART, {
        notifyOnNetworkStatusChange: true,
        onCompleted: () => {

            // Update cart in the localStorage.
            const updatedCart = getFormattedCart(data);
            localStorage.setItem('woo-next-cart', JSON.stringify(updatedCart));

            // Update cart data in React Context.
            // setCart(updatedCart);
        }
    });

    // Add to Cart Mutation.
    const [addToCart, {
        data: addToCartRes,
        loading: addToCartLoading,
        error: addToCartError
    }] = useMutation(ADD_TO_CART, {
        variables: {
            input: productQryInput,
        },
        onCompleted: () => {
            // On Success:
            // 1. Make the GET_CART query to update the cart with new values in React context.
            refetch();

            // 2. Show View Cart Button
            setShowViewCart(true)
        },
        onError: (error) => {
            if (error) {
                setRequestError(error?.graphQLErrors?.[0]?.message ?? '');
            }
        }
    });

}

export default AddToCart ;