import Cd from "../components/utils/Cd"
import Footer from "../components/utils/Footer"

function NotFoundPage() {
  return (
    <div className={'flex flex-row justify-center'}>
      <div className={'p-8'}>
        <h1 className={'text-3xl font-bold mb-10 text-black dark:text-white'}>404</h1>
        <p className={'text-base mb-10'}>Nice to meet you!</p>
        <Cd/>
        <Footer/>
      </div>
    </div>
  )
}

export default NotFoundPage
