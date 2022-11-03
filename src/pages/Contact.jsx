
export default function Contact() {
  
  
  return (
    <>
      <h1>Contact Me</h1>
      <p>Hi there, contact me to ask me about anything you have in mind.</p>
      <form>
        <div>
          <label htmlFor="first_name">First name</label>
          <input type="text" id="first_name" placeholder="Enter your first name" />
        </div>
        <div>
          <label htmlFor="last_name">First name</label>
          <input type="text" id="last_name" placeholder="Enter your last name" />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="yourname@email.com" />
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <textarea id="message" placeholder="Send me a message and I'll reply you as soon as possible..."></textarea>
        </div>
        <div>
          <input type="checkbox" id="checkbox" />
          <label htmlFor="checkbox">You agree to providing your data to Kofi Quist who may contact you.</label>
        </div>
        <div>
          <input type="submit" id="btn__submit" value="Send message" />
        </div>
      </form>
    </>
  )
}