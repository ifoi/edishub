import { useState } from "react";
import { v4 } from "uuid";
import { getUpdatedItems } from "functions";
import Button from "react-bootstrap/Button";

const CollectionItem = ({
    item,
    products,
    updateCart,
    updateCartProcessing,
    handleRemoveProductClick,
}) => {

    // const [productCount, setProductCount] = useState(item.qty ) ;



    // <tr key={ item.productId }>
    //   <th>
    //       <Button type='sm' > remove </Button>
    //   </th>

    //   </tr>
    return (
        <div>
            <h3> Container for list of collections </h3>
        </div>

    )
};



export default CollectionItem;