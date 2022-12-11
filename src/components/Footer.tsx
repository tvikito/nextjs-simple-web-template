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

        <div className="pb-5 text-gray-400 flex flex-col items-center">
          Made by{' '}
          <a
            href="http://tomasvykoukal.com/"
            className="font-bold hover:underline text-sm"
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
