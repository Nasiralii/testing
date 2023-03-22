import React from 'react'

function Header() {
  return (
    <div className='bg-gray-500 p-4 py-8'>
        <div className='flex justify-between items-center'>
            <div>Logo</div>
            <ul className='flex gap-4 '>
                <li>Home</li>
                <li>About</li>
                <li>Galley</li>
            </ul>
        </div>
    </div>
  )
}

export default Header