import { useState } from "react"

import Header from "../components/Header"
import Email from "../components/forget/Email"
import OTP from "../components/forget/OTP"
import Reset from "../components/forget/Reset"

const Forget = () => {
  const [section, setSection] = useState<number>(3)

  const handleSection = (section: number) => {
    setSection(section)
  }

  return (
    <>
      <Header type="login" />
      <main className="mt-24 flex items-center justify-center">
        <section className="">
          <header className="mb-10 text-center text-3xl font-bold text-[#0B539B] sm:text-4xl">
            <h1>Reset Password</h1>
          </header>
          {section === 1 && <Email handleSection={handleSection} />}
          {section === 2 && <OTP handleSection={handleSection} />}
          {section === 3 && <Reset />}
        </section>
      </main>
    </>
  )
}

export default Forget
