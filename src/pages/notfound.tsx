import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div className="flex-col md:flex">
      <div className="border-b">
        <div className="flex h-16 items-center px-4"></div>
      </div>
      <div className="flex-1 space-y-4 p-8 pt-6">
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">ErrorPage</h2>
        </div>
        <ul>
          <li>
            <Link to="/">Go back to home</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default NotFound
