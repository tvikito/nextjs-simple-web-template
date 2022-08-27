import React from 'react'
import { submitForm } from 'src/utils/formSubmit'

const Footer: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  const [email, setEmail] = React.useState<string>()
  const handleSubmitForm = submitForm('https://trymeonemoretiem.try', {
    EMAIL: email,
  })

  return (
    <footer className="">
      <div className="px-5">
        {children}
        <div>
          <div className=" w-full text-center">
            <h3>Subscribe for recent innovations!</h3>
            <form method="post" noValidate onSubmit={handleSubmitForm}>
              <div className=" xs:flex rounded-lg overflow-hidden max-w-screen-sm mx-auto">
                <input
                  type="email"
                  value={email}
                  className="email text-black w-full  sm:flex-1"
                  placeholder="email address"
                  required
                  onChange={({ target: { value } }) => setEmail(value)}
                />
                <button
                  type="submit"
                  name="subscribe"
                  className="w-full xs:w-auto"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="pb-5 text-gray-400 flex flex-col items-center">
          Made by{' '}
          <a
            href="http://tomasvykoukal.com/"
            className="font-bold hover:underline no-arrow text-sm"
            target="_blank"
            rel="noreferrer"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/tomas_vykoukal.svg"
              alt="Tomáš Vykoukal"
              className="w-12 mt-2"
            />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
