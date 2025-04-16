export default function Header() {
  return (
    <header className="bg-gray-900 border-b border-gray-800 p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <h1 className="text-2xl font-bold text-gray-100">Nidavellir</h1>
          <span className="text-sm px-2 py-1 rounded-full bg-gray-800">v0.1.0</span>
        </div>
        <div className="flex items-center space-x-4">
          <button className="px-4 py-2 rounded-md bg-gray-800 hover:bg-gray-700 transition-colors">
            Online Mode
          </button>
          <button className="px-4 py-2 rounded-md bg-gray-800 hover:bg-gray-700 transition-colors">
            Settings
          </button>
        </div>
      </div>
    </header>
  )
}