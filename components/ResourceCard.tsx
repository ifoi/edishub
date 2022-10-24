import { FaRegCommentAlt } from 'react-icons/fa';
import { BsChevronDoubleUp } from 'react-icons/bs';
import { BiBookmark } from 'react-icons/bi';
import Card from 'react-bootstrap/Card';
import styles from '../styles/ResourceCard.module.scss';

function ResourceCard() {
  return (
    <Card className={styles.container}>
      <Card.Header className={styles.title}>
        <Card.Title>Introduction to Computer Science</Card.Title>
      </Card.Header>
      <Card.Body>
      <Card.Img src="images/Rectangle7.png" ></Card.Img>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the cards content.
          
        </Card.Text>
      </Card.Body>
      <Card.Footer className={styles.footer}>
        <div className="d-flex justify-content-between mb-3">
          <span className={styles.upvotes}><BsChevronDoubleUp /> 200 Upvotes</span>
          <span className={styles.other}><FaRegCommentAlt /> 15 Comments</span>
          <span className={styles.other}><BiBookmark /> Bookmark</span>
        </div>

        <div className="d-flex justify-content-between">
          <span className='blue-btn p-1 px-3'>Staff-Picked</span>
          <span className='blue-btn p-1 px-3'>Beginner</span>
          <span className='blue-btn p-1 px-3'>Free</span>
        </div>
      </Card.Footer>
    </Card>
  );
}

export default ResourceCard;