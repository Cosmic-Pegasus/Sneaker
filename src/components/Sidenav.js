import React from 'react'
import './Style.css'
import Navbar from './Navbar';
import { Link } from 'react-router-dom';

export default function Sidenav() {
  return (
    <>
      <Navbar position="fixed" />
      <div className="min-h-screen flex flex-row bg-gray-100" style={{ marginTop: '5.9%', position: 'fixed', backgroundColor: 'rgb(39, 70, 63)' }}>
        <div className="flex flex-col w-56 bg-white rounded-r-3xl overflow-hidden" style={{}}>
          <ul className="flex flex-col py-4">
            <li>
              <h1 className='heading'>Filters</h1>
            </li>
            <li>
              <Link to="/men" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><svg style={{ color: 'whitesmoke' }} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-stop-circle-fill" viewBox="0 0 16 16">
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.5 5A1.5 1.5 0 0 0 5 6.5v3A1.5 1.5 0 0 0 6.5 11h3A1.5 1.5 0 0 0 11 9.5v-3A1.5 1.5 0 0 0 9.5 5h-3z" />
                </svg></span>
                <span className="text-sm font-medium">Men</span>
              </Link>
            </li>
            <li>
              <Link to="/women" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><svg style={{ color: 'whitesmoke' }} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-stop-circle-fill" viewBox="0 0 16 16">
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.5 5A1.5 1.5 0 0 0 5 6.5v3A1.5 1.5 0 0 0 6.5 11h3A1.5 1.5 0 0 0 11 9.5v-3A1.5 1.5 0 0 0 9.5 5h-3z" />
                </svg></span>
                <span className="text-sm font-medium">Women</span>
              </Link>
            </li>

            <li>


              <div>
                <div>
                  <div className="dropdown relative">
                    <Link type="button"
                      id="dropdownMenuButton1"
                      data-bs-toggle="dropdown"
                      aria-expanded="false" to="#" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                      <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><svg style={{ color: 'whitesmoke' }} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-stop-circle-fill" viewBox="0 0 16 16">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.5 5A1.5 1.5 0 0 0 5 6.5v3A1.5 1.5 0 0 0 6.5 11h3A1.5 1.5 0 0 0 11 9.5v-3A1.5 1.5 0 0 0 9.5 5h-3z" />
                      </svg></span>
                      <span className="text-sm font-medium">Brands</span>
                    </Link>


                    <ul
                      className="
dropdown-menu
min-w-max
absolute
hidden
bg-white
text-base
z-50
float-left
py-2
list-none
text-left
rounded-lg
shadow-lg
mt-1
hidden
m-0
bg-clip-padding
border-none
"
                      aria-labelledby="dropdownMenuButton1"
                    >
                      <li>
                        <Link
                          className="
dropdown-item
text-sm
py-2
px-4
font-normal
block
w-full
whitespace-nowrap
bg-transparent
text-gray-700
hover:bg-gray-100
"
                          to="#"
                        >Nike</Link
                        >
                      </li>
                      <li>
                        <Link
                          className="
dropdown-item
text-sm
py-2
px-4
font-normal
block
w-full
whitespace-nowrap
bg-transparent
text-gray-700
hover:bg-gray-100
"
                          to="#"
                        >Adidas</Link>
                      </li>
                      <li>
                        <Link
                          className="
dropdown-item
text-sm
py-2
px-4
font-normal
block
w-full
whitespace-nowrap
bg-transparent
text-gray-700
hover:bg-gray-100
"
                          to="#"
                        >Jordan</Link
                        >
                      </li>
                      <li>
                        <Link
                          className="
dropdown-item
text-sm
py-2
px-4
font-normal
block
w-full
whitespace-nowrap
bg-transparent
text-gray-700
hover:bg-gray-100
"
                          to="#"
                        >Converse</Link
                        >
                      </li>
                      <li>
                        <Link
                          className="
dropdown-item
text-sm
py-2
px-4
font-normal
block
w-full
whitespace-nowrap
bg-transparent
text-gray-700
hover:bg-gray-100
"
                          to="#"
                        >Reebok</Link
                        >
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>

            <li>
              <Link to="#" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><svg style={{ color: 'whitesmoke' }} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-stop-circle-fill" viewBox="0 0 16 16">
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.5 5A1.5 1.5 0 0 0 5 6.5v3A1.5 1.5 0 0 0 6.5 11h3A1.5 1.5 0 0 0 11 9.5v-3A1.5 1.5 0 0 0 9.5 5h-3z" />
                </svg></span>
                <span className="text-sm font-medium">Hots</span>
              </Link>
            </li>
            <li>
              <Link to="#" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><svg style={{ color: 'whitesmoke' }} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-stop-circle-fill" viewBox="0 0 16 16">
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.5 5A1.5 1.5 0 0 0 5 6.5v3A1.5 1.5 0 0 0 6.5 11h3A1.5 1.5 0 0 0 11 9.5v-3A1.5 1.5 0 0 0 9.5 5h-3z" />
                </svg></span>
                <span className="text-sm font-medium">New Arrival</span>
              </Link>
            </li>
            <li>
              <Link to="#" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><svg style={{ color: 'whitesmoke' }} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-stop-circle-fill" viewBox="0 0 16 16">
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.5 5A1.5 1.5 0 0 0 5 6.5v3A1.5 1.5 0 0 0 6.5 11h3A1.5 1.5 0 0 0 11 9.5v-3A1.5 1.5 0 0 0 9.5 5h-3z" />
                </svg></span>
                <span className="text-sm font-medium">Sports</span>
              </Link>
            </li>
            <li>
              <Link to="#" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><svg style={{ color: 'whitesmoke' }} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-stop-circle-fill" viewBox="0 0 16 16">
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.5 5A1.5 1.5 0 0 0 5 6.5v3A1.5 1.5 0 0 0 6.5 11h3A1.5 1.5 0 0 0 11 9.5v-3A1.5 1.5 0 0 0 9.5 5h-3z" />
                </svg></span>
                <span className="text-sm font-medium">Casual</span>
              </Link>
            </li>
            <li>
              <Link to="#" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><svg style={{ color: 'whitesmoke' }} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-stop-circle-fill" viewBox="0 0 16 16">
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.5 5A1.5 1.5 0 0 0 5 6.5v3A1.5 1.5 0 0 0 6.5 11h3A1.5 1.5 0 0 0 11 9.5v-3A1.5 1.5 0 0 0 9.5 5h-3z" />
                </svg></span>
                <span className="text-sm font-medium">Logout</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}
