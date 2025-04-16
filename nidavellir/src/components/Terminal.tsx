export default function Terminal() {
  return (
    <div className="h-full flex flex-col bg-gray-900 rounded-lg border border-gray-800">
      <div className="p-3 border-b border-gray-800">
        <div className="flex items-center justify-between">
          <h2 className="text-sm font-semibold">Terminal</h2>
          <div className="flex items-center space-x-1">
            <div className="h-3 w-3 rounded-full bg-red-500" />
            <div className="h-3 w-3 rounded-full bg-yellow-500" />
            <div className="h-3 w-3 rounded-full bg-green-500" />
          </div>
        </div>
      </div>
      <div className="flex-1 p-4 font-mono text-sm overflow-y-auto">
        <p className="text-gray-300">$ nidavellir --version</p>
        <p className="text-green-400">Nidavellir v0.1.0</p>
        <p className="text-gray-300 mt-2">$ _</p>
      </div>
    </div>
  )
}