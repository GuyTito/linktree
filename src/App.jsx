import tito from "./assets/tito.jpg";
import zuri from "./assets/zuri.png";
import I4G from "./assets/I4G.png";
import slack_icon from "./assets/slack.png";
import github from "./assets/github.png";


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
      <main className="max-w-[1137px] mx-auto mt-16 px-8">
        {/* profile section */}
        <div className="mb-14 w-fit mx-auto text-center">
          <img id="profile__img" src={tito} className="w-[88px] h-[88px] rounded-full object-cover mb-6" alt="profile picture" />
  
          <h1 id="twitter" className="font-bold text-xl">guytito_</h1>
          <span id='slack' className="hidden">{slack}</span>
        </div>

        {/* links section */}
        <div className="text-center">
          <div className="flex flex-col gap-6">
            {links.map(({text, href, id}) => (
              <a href={href} id={id} key={id} target="_blank" className="py-6 bg-gray-200 font-medium text-gray-900 rounded-lg">{text}</a>
            ))}
          </div>

          <div className="flex gap-6 justify-center mt-6 py-6">
            <a href="https://google.com">
              <img src={slack_icon} alt="slack" />
            </a>
            <a href="https://github.com/GuyTito">
              <img src={github} alt="github" />
            </a>
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