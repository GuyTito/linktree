
export default function Contact() {
  
  
  return (
    <>
      <main className="max-w-[720px] mx-auto mt-16 sm:mt-[156px] mb-24 sm:mb-[188px] px-4 text-gray-900">
        <h1 className="font-semibold text-4xl mb-4 sm:mb-5">Contact Me</h1>
        <p className="text-[16px] sm:text-xl mb-12 text-gray-600">Hi there, contact me to ask me about anything you have in mind.</p>
        <form onSubmit={(e)=>e.preventDefault()}>
          <div className="space-y-6 mb-6 sm:flex sm:space-y-0 justify-between gap-6">
            <div className="field-group sm:w-1/2 w-full">
              <label htmlFor="first_name" className="label">First name</label>
              <input type="text" autoComplete="off" id="first_name" placeholder="Enter your first name" className="input input-width" />
            </div>
            <div className="field-group sm:w-1/2 w-full">
              <label htmlFor="last_name" className="label">Last name</label>
              <input type="text" autoComplete="off" id="last_name" placeholder="Enter your last name" className="input input-width" />
            </div>
          </div>
          <div className="field-group mb-6">
            <label htmlFor="email" className="label">Email</label>
            <input type="email" autoComplete="off" id="email" placeholder="yourname@email.com" className="input" />
          </div>
          <div className="field-group mb-6">
            <label htmlFor="message" className="label">Message</label>
            <textarea id="message" placeholder="Send me a message and I'll reply you as soon as possible..." className="input h-[132px]"></textarea>
          </div>
          <div className="flex items-center mb-8">
            <input type="checkbox" id="checkbox" className="w-5 h-5 border-gray-300 rounded-[6px] checked:border-blue-600 checked:hover:border-blue-600 focus:ring-offset-0 focus-ring text-gray-50 checked:bg-check" />
            <label htmlFor="checkbox" className="ml-3 text-gray-600 text-[16px]">You agree to providing your data to Kofi Quist who may contact you.</label>
          </div>
          <div>
            <input type="submit" id="btn__submit" value="Send message" className="bg-blue-600 rounded-lg py-3 w-full text-white focus-ring cursor-pointer" />
          </div>
        </form>
      </main>
    </>
  )
}