if (process.browser) {
    const url = new URL(window.location.href);
    const ref_id = url.searchParams.get('ref_id');
    if (ref_id) {
        document.getElementById("waitlist_iframe").src += `?ref_id=${ref_id}`;
    }
    
    }
    
    export default function waitlist() {
    
    
        return ( 
            <>
            <h2> Waiting List</h2> 
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
            
            </>
        )
    }
        