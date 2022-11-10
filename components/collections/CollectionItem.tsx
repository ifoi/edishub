import { useState } from "react";
import { v4 } from "uuid";
import { getUpdatedItems } from "functions";
import Button from "react-bootstrap/Button";
import styled from "styled-components";
import { BiBookmarkFill, BookmarkIcon, BookmarkToggle, CommentIcon, Comments, Rectangle45, ResourceDescription, ResourceDuration, ResourceImage, ResourceThumbnail, ResourceThumbnailWrapper, ResourceTitle, ResourceWebsite, RootWrapperCollectionItem, UpvoteIcon, Upvotes, Vector } from "components/styles";

const CollectionItem = ({
  item,
  products,
  updateCart,
  updateCartProcessing,
  handleRemoveProductClick,
}) => {

  // const [productCount, setProductCount] = useState(item.qty ) ;

  // <tr className="woo-next-cart-item" key={ item.productId }>

  return (
      <tr className="woo-next-cart-item"  key={ 109 }>
        {/* <th>
            <Button type='sm' > remove </Button>
        </th> */}
    
    <RootWrapperCollectionItem>
      <ResourceTitle>
        Flexbox Froggy
      </ResourceTitle>
      <ResourceWebsite>
        flexboxfroggy.com
      </ResourceWebsite>
      <ResourceDescription>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod incididunt....
      </ResourceDescription>
      <BookmarkToggle>
        Un-bookmark
      </BookmarkToggle>
      <Comments>
        15 Comments
      </Comments>
      <CommentIcon>
        <Vector xmlns="http://www.w3.org/2000/svg">
          <path fill="black" d="M10.5 0L1.5 0C0.672656 0 0 0.672656 0 1.5L0 8.25C0 9.07734 0.672656 9.75 1.5 9.75L3.75 9.75L3.75 11.7188C3.75 11.8852 3.88594 12 4.03125 12C4.0875 12 4.14609 11.9836 4.19766 11.9438L7.125 9.75L10.5 9.75C11.3273 9.75 12 9.07734 12 8.25L12 1.5C12 0.672656 11.3273 0 10.5 0ZM10.875 8.25C10.875 8.45625 10.7063 8.625 10.5 8.625L6.75 8.625L6.45 8.85L4.875 10.0312L4.875 8.625L1.5 8.625C1.29375 8.625 1.125 8.45625 1.125 8.25L1.125 1.5C1.125 1.29375 1.29375 1.125 1.5 1.125L10.5 1.125C10.7063 1.125 10.875 1.29375 10.875 1.5L10.875 8.25Z" />
        </Vector>
      </CommentIcon>
      <Upvotes>
        200 Upvotes
      </Upvotes>
      <UpvoteIcon src="/images/chevron.png" alt="image of UpvoteIcon" />
      <ResourceThumbnailWrapper>
        <ResourceThumbnail>
          <ResourceImage src="/amico.png" alt="image of ResourceThumbnail" /> {/** Placed a placeholder image here */}
          <Rectangle45 />
          <ResourceDuration>
            30 min
          </ResourceDuration>
        </ResourceThumbnail>
      </ResourceThumbnailWrapper>
      <BiBookmarkFill>
        <BookmarkIcon xmlns="http://www.w3.org/2000/svg">
          <path fill="black" d="M1.33869e-07 2L1.33869e-07 15.5C-6.33938e-05 15.5868 0.0224845 15.6722 0.0654246 15.7476C0.108365 15.8231 0.170217 15.8861 0.244892 15.9304C0.319567 15.9747 0.404491 15.9988 0.491305 16.0003C0.578119 16.0018 0.66383 15.9807 0.74 15.939L6 13.069L11.26 15.939C11.3362 15.9807 11.4219 16.0018 11.5087 16.0003C11.5955 15.9988 11.6804 15.9747 11.7551 15.9304C11.8298 15.8861 11.8916 15.8231 11.9346 15.7476C11.9775 15.6722 12.0001 15.5868 12 15.5L12 2C12 1.46957 11.7893 0.960859 11.4142 0.585786C11.0391 0.210714 10.5304 3.33067e-16 10 0L2 5.55112e-17C1.46957 3.88578e-16 0.960859 0.210714 0.585786 0.585786C0.210714 0.960859 1.33869e-07 1.46957 1.33869e-07 2L1.33869e-07 2Z" />
        </BookmarkIcon>
      </BiBookmarkFill>
    </RootWrapperCollectionItem>

 
    </tr>
  
  )
};

export default CollectionItem;
