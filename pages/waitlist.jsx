import YouTube from "react-youtube";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

if (process.browser) {
    const url = new URL(window.location.href);
    const ref_id = url.searchParams.get('ref_id');
    if (ref_id) {
        document.getElementById("waitlist_iframe").src += `?ref_id=${ref_id}`;
    }
    
    }
    
    export default function waitlist() {

        const opts = {
            height: "312",
            width: "512",
            playerVars: {
              autoplay: 1,
            },
          };
        
        const  _onReady =(event) => {
            event.target.pauseVideo();
          };
    
        return ( 
            <>
            <h2> Waiting List</h2> 
            <Container> 

            <Row>
           <Col> 
                <YouTube videoId="9dgtIET5qx4" 
                    opts={opts} onReady={_onReady} />   
            </Col>
                <Col>
            <iframe 
                id="waitlist_iframe"
                
                title="waitlist" 
                frameborder="0" 
                marginheight="0" 
                marginwidth="0" 
                width="600px"
                height="600px"
                src="https://getwaitlist.com/embed/4507"
                /* style="border-radius: 8px;" */
                >
            </iframe>
            </Col>

             </Row>    
            </Container>
            </>
        )
    }
        