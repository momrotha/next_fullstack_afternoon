

export default function page () {
  return (
    <div>
      <h1 className='text-center text-3xl text-gray-500 p-10'>Contact</h1> 
      <form action="post">
        <div className='flex flex-col items-center'>
          <input type="text" placeholder='Name' className='border-2 border-gray-300 p-2 m-2 w-1/2' />
          <input type="email" placeholder='Email' className='border-2 border-gray-300 p-2 m-2 w-1/2' />
          <textarea placeholder='Message' className='border-2 border-gray-300 p-2 m-2 w-1/2 h-32'></textarea>
          <button type="submit" className='bg-blue-600 hover:bg-blue-700 cursor-pointer text-white p-2 m-2 w-1/2 rounded'>Send</button>
        </div>
      </form>
    </div>
  )
}


