import Link from "next/link";
import Button from "react-bootstrap/Button";

import {v4} from 'uuid';

import {AppContext} from "components/context/AppContext";
import {getFormattedCart} from "functions";
import GET_CART from "graphql/queries/collection.queries";
import ADD_TO_CART from "graphql/mutations/collection.mutations";

const AddToCart = (props) => {

    const {product} = props;

    const productQryInput = {
        clientMutationId: v4(), // Generate a unique id.
        productId: product.productId,
    };

    const [cart, setCart] = useContext(AppContext);
    const [showViewCart, setShowViewCart] = useState(false);
    const [requestError, setRequestError] = useState(null);

        // Get Cart Data.
    const {data, refetch} = useQuery(GET_CART, {
            notifyOnNetworkStatusChange: true,
            onCompleted: () => {

                // Update cart in the localStorage.
                const updatedCart = getFormattedCart(data);
                localStorage.setItem('woo-next-cart', JSON.stringify(updatedCart));

                // Update cart data in React Context.
                setCart(updatedCart);
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

const handleAddToCollectionsBtnClick = async () => {

    // if collection has items, update collection state

    //else create new collection , and push item to collection
    setRequestError(null);
    await addToCart();
    }

const AddToCollectionsBtn = (props) => {

    return (
        <>
        <Button 
            disabled={addToCartLoading}
            onClick={handleAddToCollectionsBtnClick} size="sm"
        > 
            
            { addToCartLoading ? 'Adding to cart...' : "Add to Collections" }
        
        </Button>
        {showViewCart ? (
                <Link href="/dashboard">
                    <Button size="sm">
                        View Collections
                    </Button>
                </Link>
            ) : ''}
        
        
        </>
    )
    }

}

// export default AddToCollectionsBtn ;
export default AddToCart ;