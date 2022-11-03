
export default function Contact() {
  
  
  return (
    <>
      <main className="max-w-[720px] mx-auto mt-[156px] mb-[188px] text-gray-600">
        <h1 className="font-semibold text-4xl mb-5 text-gray-900">Contact Me</h1>
        <p className="text-xl mb-12">Hi there, contact me to ask me about anything you have in mind.</p>
        <form>
          <div className="flex justify-between mb-6">
            <div className="field-group">
              <label htmlFor="first_name" className="label">First name</label>
              <input type="text" id="first_name" placeholder="Enter your first name" className="input input-width" />
            </div>
            <div className="field-group">
              <label htmlFor="last_name" className="label">Last name</label>
              <input type="text" id="last_name" placeholder="Enter your last name" className="input input-width" />
            </div>
          </div>
          <div className="field-group mb-6">
            <label htmlFor="email" className="label">Email</label>
            <input type="email" id="email" placeholder="yourname@email.com" className="input" />
          </div>
          <div className="field-group mb-6">
            <label htmlFor="message" className="label">Message</label>
            <textarea id="message" placeholder="Send me a message and I'll reply you as soon as possible..." className="input h-[132px]"></textarea>
          </div>
          <div className="flex items-center mb-8">
            <input type="checkbox" id="checkbox" className="w-5 h-5 border-gray-300 rounded-[6px]" />
            <label htmlFor="checkbox" className="ml-3 text-gray-600 text-[16px]">You agree to providing your data to Kofi Quist who may contact you.</label>
          </div>
          <div>
            <input type="submit" id="btn__submit" value="Send message" className="bg-blue-600 rounded-lg py-3 w-full text-white cursor-pointer" />
          </div>
        </form>
      </main>
    </>
  )
}