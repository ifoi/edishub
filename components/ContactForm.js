
// - <!DOCTYPE html>
// <html lang="en">
//   <head>
//     <meta charset="UTF-8" />
//     <title>Contact</title>
//     <script src="https://unpkg.com/react@16/umd/react.development.js"></script>
//     <script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>
//     <script src="https://unpkg.com/babel-standalone@6.15.0/babel.min.js"></script>
//   </head>
//   <body> 
import { useState } from "react";
import {Form } from "react-bootstrap"


   // A little help for the Netlify post-processing bots 
    // <form name="contact" netlify netlify-honeypot="bot-field" hidden>
    //   <input type="text" name="name" />
    //   <input type="email" name="email" />
    //   <textarea name="message"></textarea>
    // </form>

    // <div id="root"></div>

    // <script type="text/babel">

      const encode = (data) => {
        return Object.keys(data)
            .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
            .join("&");
      }

      // class ContactForm extends React.Component {
      //   constructor(props) {
      //     super(props);
      //     state = { name: "", email: "", message: "" };
      //   }

  const  ContactForm =(props) => {
        /* Here’s the juicy bit for posting the form submission */

     const handleSubmit = (e) => {
          fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({ "form-name": "contact", ...state })
          })
            .then(() => alert("Success!"))
            .catch(error => alert(error));

          e.preventDefault();
        };

      const  handleChange = (e) =>setState({ [e.target.name]: e.target.value });

        // render() {
          const { name, email, message } = state;
          return (
            <form onSubmit={handleSubmit}>
              <p>
                <label>
                  Your Name: <input type="text" name="name" value={name} onChange={handleChange} />
                </label>
              </p>
              <p>
                <label>
                  Your Email: <input type="email" name="email" value={email} onChange={handleChange} />
                </label>
              </p>
              <p>
                <label>
                  Message: <textarea name="message" value={message} onChange={handleChange} />
                </label>
              </p>
              <p>
                <button type="submit">Send</button>
              </p>
            </form>
          );
       }

//       ReactDOM.render(<ContactForm />, document.getElementById("root"));

//     </script>
//   </body>
// </html>

export default ContactForm;
