import heroimg from './images/image-header-desktop.jpg'

function App() {
 
  return (
   <div className="bg-purple-700 flex flex-row w-full max-w-4xl justify-between mx-auto my-44 rounded-xl overflow-hidden">
    <div className="bg-[#1c1938] flex flex-col px-12 py-10">
      <h1 className='text-4xl    my-4 text-white font-bold'>Get <span className="text-[#a25acb]">insight</span> that help your buisness grow.</h1>
      <p className=' mt-4 text-sm text-gray-500  font-semibold '>Discover the benefits of data analytics and make 
        better decisions regarding revenue, customer experience, 
        and overall efficiency
      </p>
      <div className='mt-16 flex flex-row items-center justify-between text-white  '>
        <h1 className='font-semibold text-2xl '>10k+
          <p className='text-xs font-semibold text-gray-400'>COMPANIES</p>
        </h1>
        <h1 className='font-semibold text-2xl'>314
          <p className='text-xs font-semibold text-gray-400'>TEMPLATES</p>
        </h1>
        <h1 className='font-semibold text-2xl'>12M+
          <p className='text-xs font-semibold text-gray-400'>QUERIES</p>
        </h1>
      </div>
    </div>
    
    <img src={heroimg} alt="" className='w-1/2 opacity-40 ' />
   </div>
  )
}

export default App
