import React from 'react'
import InstagramEmbed from 'react-instagram-embed'

const InstagramFeed = () => {
  return (
    <div className="p-3 ">
      <InstagramEmbed
        url="https://www.instagram.com/p/CMrsisdATlW/"
        clientAccessToken="491132918562613|99bda1201d33320ec6ce9442ad18d1e0"
        maxWidth={400}
        hideCaption={false}
        containerTagName="div"
        protocol=""
        injectScript
        onLoading={() => {}}
        onSuccess={() => {}}
        onAfterRender={() => {}}
        onFailure={() => {}}
      />
    </div>
  )
}

export default InstagramFeed
