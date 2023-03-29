import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    
<footer className=" bg-white shadow dark:bg-gray-800">
    <div className="w-full mx-auto container md:p-6 p-4 md:flex md:items-center md:justify-between">
      <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <Link to="/" className="hover:underline">Cinemate™</Link>. All Rights Reserved.
    </span>
    <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
            <Link to="#" className="mr-4 hover:underline md:mr-6 ">Instagram</Link>
        </li>
        <li>
            <Link to="#" className="mr-4 hover:underline md:mr-6">Facebook</Link>
        </li>
        <li>
            <Link to="#" className="mr-4 hover:underline md:mr-6">LinkedIn</Link>
        </li>
        <li>
            <Link to="#" className="hover:underline">Github</Link>
        </li>
    </ul>
    </div>
</footer>

  )
}

export default Footer