import tito from "../assets/tito.jpg";
import slack_icon from "../assets/slack.png";
import github from "../assets/github.png";
import share from "../assets/share.png";
import more from "../assets/more.png";
import { useState } from "react";
import { Link } from "react-router-dom";


export default function Home() {
  const [modal, setModal] = useState(false)
  const slack = 'guy_tito';
  const twitter_username = '@guytito_'

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

  async function shareLink() {
    try {
      const shareData = {
        title: 'Share This Link',
        text: 'Share this link',
        url: window.location.href
      }
      await navigator.share(shareData);
    } catch (err) {
      console.log(err);
      alert('Error: Sorry, cannot share ☹');
    }
  }

  return (
    <>
      <main className="max-w-[1137px] mx-auto mt-16 mb-16 px-4 sm:px-8 relative">
        {/* share button */}
        <div className="hover:bg-gray-100 rounded-full border border-dashed outline-none focus:shadow-[0px_0px_0px_4px_#d1d5db] absolute right-4 sm:right-[21%] -top-5">
          <img onClick={() => shareLink()} src={share} className="hidden sm:block sm:p-3" alt="share icon" title="Share link" />
          <img onClick={() => setModal(true)} src={more} className="px-[14px] py-5 sm:hidden" alt="more" title="More" />
        </div>

        {/* profile section */}
        <div className="mb-14 w-fit mx-auto text-center">
          <img id="profile__img" src={tito} className="w-[88px] h-[88px] rounded-full object-cover mb-6" alt="profile picture" />

          <h1 id="twitter" className="font-bold text-xl">{twitter_username}</h1>
          <span id='slack' className="hidden">{slack}</span>
        </div>

        {/* links section */}
        <div className="text-center">
          <div className="flex flex-col gap-6">
            {links.map(({ text, href, id, title }) => (
              <a href={href} id={id} title={title} key={id} target="_blank" className="py-6 bg-gray-200 font-semibold text-gray-900 rounded-lg hover:bg-gray-300 outline-gray-400">{text}</a>
            ))}
            <Link to='contact' id='contact' className="py-6 bg-gray-200 font-semibold text-gray-900 rounded-lg hover:bg-gray-300 outline-gray-400">Contact Me</Link>
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

      {/* share modal */}
      {modal &&
        <div onClick={() => setModal(false)} className="fixed inset-0 bg-black/40">
          <div onClick={e => e.stopPropagation()} className="font-bold fixed bottom-0 p-8 rounded-t-3xl bg-white w-full space-y-8">
            <div className="flex">
              <h2 className="text-center flex-grow">{twitter_username} </h2>
              <span onClick={() => setModal(false)} className="ml-auto font-light">&#x2715;</span>
            </div>
            <div onClick={() => shareLink()} className="flex justify-between items-center">
              <span>Share this link </span>
              <span className="font-light text-xl">&gt;</span>
            </div>
          </div>
        </div>
      }
    </>
  )
}