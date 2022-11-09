import Link from "next/link";
import { useContext, useState } from "react";
import { AppContext } from "components/context/AppContext";
import { getFormattedCart, getUpdatedItems } from "functions";
import CollectionItem from "./CollectionItem"
import { v4 } from 'uuid';
import { useMutation, useQuery } from '@apollo/client';
import { UPDATE_CART, CLEAR_CART_MUTATION } from "graphql/mutations/collection.mutations";
import GET_CART from "graphql/queries/collection.queries";
import { isEmpty } from 'lodash'

const CollectionItemsContainer = () => {

	const [cart, setCart] = useContext(AppContext);
	console.log(useContext(AppContext))
	console.warn(cart);

	const [requestError, setRequestError] = useState(null);

	// Get Cart Data.
	const { loading, error, data, refetch } = useQuery(GET_CART, {
		notifyOnNetworkStatusChange: true,
		onCompleted: () => {

			// Update cart in the localStorage.
			const updatedCart = getFormattedCart(data);
			localStorage.setItem('woo-next-cart', JSON.stringify(updatedCart));

			// Update cart data in React Context.
			// setCart(updatedCart);
		}
	});

	// Update Cart Mutation.
	const [updateCart, { data: updateCartResponse, loading: updateCartProcessing, error: updateCartError }] = useMutation(UPDATE_CART, {
		onCompleted: () => {
			refetch();
		},
		onError: (error) => {
			if (error) {
				const errorMessage = error?.graphQLErrors?.[0]?.message ? error.graphQLErrors[0].message : '';
				setRequestError(errorMessage);
			}
		}
	});

	// Update Cart Mutation.
	const [clearCart, { data: clearCartRes, loading: clearCartProcessing, error: clearCartError }] = useMutation(CLEAR_CART_MUTATION, {
		onCompleted: () => {
			refetch();
		},
		onError: (error) => {
			if (error) {
				const errorMessage = !isEmpty(error?.graphQLErrors?.[0]) ? error.graphQLErrors[0]?.message : '';
				setRequestError(errorMessage);
			}
		}
	});

	/*
	 * Handle remove product click.
	 *
	 * @param {Object} event event
	 * @param {Integer} Product Id.
	 *
	 * @return {void}
	 */
	const handleRemoveProductClick = (event, cartKey, products) => {

		event.stopPropagation();
		if (products.length) {

			// By passing the newQty to 0 in updateCart Mutation, it will remove the item.
			const newQty = 0;
			const updatedItems = getUpdatedItems(products, newQty, cartKey);

			updateCart({
				variables: {
					input: {
						clientMutationId: v4(),
						items: updatedItems
					}
				},
			});
		}
	};

	// Clear the entire cart.
	const handleClearCart = (event) => {

		event.stopPropagation();

		if (clearCartProcessing) {
			return;
		}

		clearCart({
			variables: {
				input: {
					clientMutationId: v4(),
					all: true
				}
			},
		});
	}


	return (
		<div>

			<h3> Container for list of collections </h3>

			<CollectionItem />

		</div>
	)


};

export default CollectionItemsContainer;