import React from "react";
import { ContactContainer, ContactContent, StyledA } from "./ContactElements";

const Contact = () => {
  return (
    <ContactContainer id="contact">
      <ContactContent>
        <p className="sub-title">What's Next?</p>
        <h2 className="title">Get In Touch</h2>
        <p className="description">
          Currently I'm looking forward for challenging oppurtutnities and I'm
          open to your call! My mailbox always welcomes your interest. I’ll try
          my best to get back to you!
        </p>
        <StyledA href={`mailto:jeromemarshall0@gmail.com`} target="_blank">
          Say Hello
        </StyledA>
      </ContactContent>
    </ContactContainer>
  );
};

export default Contact;
