export default function App() {
  const slack = 'guy_tito';

  const links = [
    {
      id: 'twitter__link',
      text: 'Twitter Link',
      href: 'https://twitter.com/guytito_',
    },
    {
      id: 'btn__zuri',
      text: 'Zuri Team',
      href: 'https://training.zuri.team/',
    },
    {
      id: 'books',
      text: 'Zuri Books',
      href: 'http://books.zuri.team/',
    },
    {
      id: 'book__pyton',
      text: 'Python Books',
      href: `https://books.zuri.team/python-for-beginners?ref_id=${slack}`,
    },
    {
      id: 'pitch',
      text: 'Backround Check for Coders',
      href: 'https://background.zuri.team/',
    },
    {
      id: 'book__design',
      text: 'Design Books',
      href: 'https://books.zuri.team/design-rules',
    },
  ]
  
  return (
    <>
      <main>
        {/* profile section */}
        <div className="">
          <div>
            <img id="profile__img" src="" alt="profile picture" />
          </div>
  
          <h1 id="twitter" className="">guytito_</h1>
          <span id='slack' className="hidden">{slack}</span>
        </div>

        {/* links section */}
        <div className="">
          {links.map(({text, href, id}) => (
            <a href={href} id={id} key={id} target="_blank" className="">{text}</a>
          ))}
          
          <div>
            <a href="slack.com">slack icon</a>
            <a href="https://github.com/GuyTito">github icon</a>
          </div>
        </div>
      </main>

      <footer>
        <img src="" alt="" />
        <span className="">HNG Internship 9 Frontend Task</span>
        <img src="" alt="" />
      </footer>
    </>
  )
}