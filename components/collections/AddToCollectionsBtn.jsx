import Link from "next/link";
import Button from "react-bootstrap/Button";


const handleAddToCollectionsBtnClick = () => {

    // if collection has items, update collection state

    //else create new collection , and push item to collection
}

const AddToCollectionsBtn = (props) => {

    return (
        <>
        <Button onClick={handleAddToCollectionsBtnClick} size="sm"> Add to Collections</Button>
        </>
    )
}

export default AddToCollectionsBtn ;