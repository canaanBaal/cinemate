import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white shadow dark:bg-gray-800 md:flex md:items-center md:justify-between md:p-6">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">Cinemate© 2030 <Link to="/" className="hover:underline">Cinemate™</Link>. All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
            <li>
                <a href="https://github.com/canaanBaal" target="_blank" rel="noreferrer" className="mr-4 hover:underline md:mr-6 ">Instagram</a>
            </li>
            <li>
                <a href="https://github.com/canaanBaal" target="_blank" rel="noreferrer" className="mr-4 hover:underline md:mr-6">LinkedIn</a>
            </li>
            <li>
                <a href="https://github.com/canaanBaal" target="_blank" rel="noreferrer" className="mr-4 hover:underline md:mr-6">Youtube</a>
            </li>
            <li>
                <a href="https://github.com/canaanBaal" target="_blank" rel="noreferrer" className="hover:underline">Github</a>
            </li>
        </ul>
    </footer>
  )
}

export default Footer

// extracted from the footer tag  rounded-lg m-4