import React from 'react'
import { Header } from './comp/Header'
import { Herocon } from './comp/Herocon'
import { Contents2 } from './comp/Contents2'
import { Service2 } from './comp/Service2'
import { Counsellors } from './comp/Counsellors'
import { Contact } from './comp/Contact'
import { Footer } from './comp/Footer'
import {Workshop} from './comp/Workshop'
export const App = () => {
  return (
    <div>
      <Header />

      {/* Hero — id: home (owned by Herocon's <section>) */}
      <Herocon />

      {/* Our Story — id: story (owned by Contents2's <section>) */}
      <Contents2 />

      {/* Services — id: services (declared inside Service2's <section>) */}
      <Service2 />

      {/* Our Team — id: team */}
      <Counsellors />

      {/* Contact — id: contact */}
      <Contact />
       <Workshop />
      {/* Footer */}
      <Footer />
    </div>
  )
}
