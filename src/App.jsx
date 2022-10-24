import tito from "./assets/tito.jpg";
import zuri from "./assets/zuri.png";
import I4G from "./assets/I4G.png";
import slack_icon from "./assets/slack.png";
import github from "./assets/github.png";
import share from "./assets/share.png";
import more from "./assets/more.png";


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
      title: 'Find books about design and coding',
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
      <main className="max-w-[1137px] mx-auto mt-16 px-4 sm:px-8 relative">
        {/* share button */}
        <div title="Share link" className="hover:bg-gray-100  sm:p-3 rounded-full border border-dashed outline-none focus:shadow-[0px_0px_0px_4px_#d1d5db] absolute right-4 sm:right-[21%] -top-5">
          <img src={share} className="hidden sm:block" alt="share icon" />
          <img src={more} className="px-[14px] py-5 sm:hidden" alt="share icon" />
        </div>

        {/* profile section */}
        <div className="mb-14 w-fit mx-auto text-center">
          <img id="profile__img" src={tito} className="w-[88px] h-[88px] rounded-full object-cover mb-6" alt="profile picture" />
  
          <h1 id="twitter" className="font-bold text-xl">@guytito_</h1>
          <span id='slack' className="hidden">{slack}</span>
        </div>

        {/* links section */}
        <div className="text-center">
          <div className="flex flex-col gap-6">
            {links.map(({text, href, id, title}) => (
              <a href={href} id={id} title={title} key={id} target="_blank" className="py-6 bg-gray-200 font-semibold text-gray-900 rounded-lg hover:bg-gray-300 outline-gray-400">{text}</a>
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

      <footer className="mt-16 py-12  sm:block">
        <div className="border-t hidden sm:flex justify-between items-center  pt-8 max-w-[1216px] mx-auto px-4">
          <img src={zuri} alt="zuri internship logo" />
          <span className="text-md text-gray-500">HNG Internship 9 Frontend Task</span>
          <img src={I4G} alt="I4G logo" />
        </div>

        <div className="flex flex-col text-center gap-5 sm:hidden">
          <span className="text-md text-gray-500">HNG Internship 9 Frontend Task</span>
          <div className="flex justify-between px-4">
            <img src={zuri} alt="zuri internship logo" />
            <img src={I4G} alt="I4G logo" />
          </div>
        </div>
      </footer>
    </>
  )
}