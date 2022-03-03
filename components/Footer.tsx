import React from 'react'

export default function Footer() {
  return (
    <footer className=" mt-20 bg-gray-100">
      <div className="custom-container grid  grid-cols-1 gap-10 text-gray-600 sm:px-16 md:grid-cols-2">
        <div className="space-y-4 text-xs text-gray-800">
          <h5 className="font-bold">ABOUT</h5>
          <p>How Airbnb works</p>
          <p>Newsroom</p>
          <p>Investors</p>
          <p>Airbnb Plus</p>
          <p>Airbnb Luxe</p>
        </div>
        <div className="space-y-4 text-xs text-gray-800">
          <h5 className="font-bold">Community</h5>
          <p>Accessibilty</p>
          <p>This is not a real site</p>
          <p>Its a pretty awasome clone</p>
          <p>Referals accepted</p>
          <p>Mjekott</p>
        </div>
      </div>
    </footer>
  )
}
