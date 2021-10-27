import React from 'react'
import {Link} from 'react-router-dom';

export const Navbar = ({darkTheme,setDarkTheme}) => {
  return (
    <div className = "p-5 pb-0  flex flex-wrap sm:justify-between justify-center item-center border-b dark:border-gery-700 border-grey-200">
      <div className = "flex justify-between  items-center space-x-5 w-screen">
        <Link to="/">
          <p className = "text-2xl font-semibold py-1 px-2 bg-blue-500 rounded dark:bg-gray-500 dark:text-gray-900">
              SearchOne🔎
          </p>
        </Link>
        <button type = "button" onClick = {()=>setDarkTheme(!darkTheme)}className = "text-xl dark: bg-gray-50 dark:text-gray-900 bg-white border rounded-full px-2 py-2 hover:shadow-lg">
          {darkTheme? 'Light' : 'Dark'}

        </button>

      </div>
    </div>
  )
}
