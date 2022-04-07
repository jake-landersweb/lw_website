import type { NextPage } from 'next'
import About from '../components/about/about'
import Initial from '../components/initial'
import Form from '../components/misc/form'
import Products from '../components/products/products'
import Services from '../components/services/services'

const Home: NextPage = () => {
  return (
    <div className="space-y-16 sm:space-y-24 md:space-y-32 grid place-items-center">
      <Initial />
      <Services />
      <Products />
      <About />
      <div className="px-5 lg:px-20 md:px-10 max-w-[1500px] w-full">
        <Form props={{
          title: 'Ready to Take Your Idea to the Next Level?'
        }} />
      </div>
    </div>
  )
}

export default Home
