import React from 'react'

const FooterIndex = () => {
  return (
    <footer className="pt-10">
  <div className=" bg-blue-500">
    <div className="flex justify-between px-10 py-5 align-center">
      <div className>
        <ul className="flex">
          <li><a className="pr-10" href="#">FAQ &amp; CONTACT</a></li>
          <li><a className="pr-10" href="#">DELIVERY &amp; SHIPPING</a></li>
          <li><a className="pr-10" href="#">MY ACCOUNT</a></li>
        </ul>
      </div>
      <div className="icon_social">
        <a style={{color: 'black'}} href="https://www.facebook.com/mancity"><i className="fab fa-facebook-square text-3xl" /></a>
        <a style={{color: 'black'}} href="https://www.youtube.com/user/mcfcofficial"><i className="fab fa-youtube-square text-3xl" /></a>
        <a style={{color: 'black'}} href="https://www.instagram.com/mancity/"><i className="fab fa-instagram-square text-3xl" /></a>
        <a style={{color: 'black'}} href="https://mobile.twitter.com/ManCity"><i className="fab fa-twitter-square text-3xl" /></a>
      </div>
    </div>
  </div>
  <div className="bg-blue-400 py-3">
    <div className>
      <p className>© Bản quyền thuộc về MANCITYSHOP</p>
    </div>
  </div>
</footer>

  )
}

export default FooterIndex