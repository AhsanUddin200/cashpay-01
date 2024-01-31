
import money from '../assets/money.png'
import Banner from '../shared/Banner'

const Home = () => {
  return (
    <div className='md:px-12 p-4 max-w-screen2xl mx-auto mt-20' id='home'>
    <Banner image={money} 
    heading="Transect your money without delay."
    subheading="Modern money transfers are swift and charge-free, revolutionizing digital finance. Users now experience seamless, cost-effective transactions in seconds, marking a significant advancement in managing funds efficiently."
    btn1={'Transect Money'} btn2={'Get Loan'} />
    </div>
  )
}

export default Home
