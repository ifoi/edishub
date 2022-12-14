import Layout from 'components/Layout';
import { useRouter } from 'next/router';
import client from 'components/ApolloClient';
//import AddToCartButton from 'src/components/cart/AddToCartButton';
import {PRODUCT_BY_SLUG_QUERY, PRODUCT_SLUGS} from '/graphql/queries/category.queries';
import { isEmpty } from 'lodash';
import GalleryCarousel from "components/single-product/gallery-carousel";
//import Price from "components/single-product/price";

import Image from "next/image"
import Link from 'next/link';

export default function Product(props) {
	const { product } = props;
    

    const router = useRouter()

    // If the page is not yet generated, this will be displayed
    // initially until getStaticProps() finishes running
    if (router.isFallback) {
        return <div>Loading...</div>
    }

    const tempUrl = product.externalUrl ;
    const resourceURL = !isEmpty (product?.externalUrl) ?                            
                        <Link href= {tempUrl } >
                         <>
                         Test info {product?.name} 
                        </>
                        </Link>
                          : "no url provided" ;
    //}
     
    // console.log("The tempUrl is : " + tempUrl )
    // console.table(product.externalUrl)  // test url 

	return (
		<Layout>
			{ product ? (
				<div className="single-product container mx-auto my-32 px-4 xl:px-0">
					<div className="grid md:grid-cols-2 gap-4">
						<Link href= {tempUrl} >
                        <div className="product-images">

							{ !isEmpty( product?.galleryImages?.nodes ) ? (
                                <GalleryCarousel gallery={product?.galleryImages?.nodes}/>
							) : !isEmpty( product?.image ) ? (
                                <Image
                                    src={ product?.image?.sourceUrl }
                                    alt="Image of resource website"
                                    width= "120"
                                    height="90"
                                    srcSet={ product?.image?.srcSet }
                                />
							) : null }
						</div> 
                         </Link>
						<div className="product-info">
							<h4 className="products-main-title text-2xl uppercase">{ product.name }</h4>
							<div

								dangerouslySetInnerHTML={ {
									__html: product.description,
								} }
								className="product-description mb-5"
							/>

                            {resourceURL} 
                            {/* <Price salesPrice={product?.price} regularPrice={product?.regularPrice}/>
							<AddToCartButton product={ product }/>
						 */}
                        </div>
					</div>

				</div>
			) : (
				''
			) }
		</Layout>
	);
};


export async function getStaticProps(context) {

    const {params: { slug }} = context

    const {data} = await client.query({
        query: PRODUCT_BY_SLUG_QUERY,
        variables: { slug }
    })

    return {
        props: {
            product: data?.product || {},
        },
        revalidate: 1
    };
}

export async function getStaticPaths () {
    const { data } = await client.query({
        query: PRODUCT_SLUGS
    })

    const pathsData = []

    data?.products?.nodes && data?.products?.nodes.map((product) => {
        if (!isEmpty(product?.slug)) {
            pathsData.push({ params: { slug: product?.slug } })
        }
    })

    return {
        paths: pathsData,
        fallback: true
    }
}

