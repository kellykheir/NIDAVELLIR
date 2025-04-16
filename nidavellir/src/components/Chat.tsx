export default function Chat() {
  return (
    <div className="h-full flex flex-col bg-gray-900 rounded-lg border border-gray-800">
      <div className="p-3 border-b border-gray-800">
        <h2 className="text-sm font-semibold">Chat</h2>
      </div>
      <div className="flex-1 p-4 overflow-y-auto">
        <div className="space-y-4">
          <div className="bg-gray-800 rounded-lg p-3">
            <p className="text-sm">Welcome to Nidavellir! How can I help you today?</p>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-800 p-4">
        <div className="flex space-x-2">
          <input
            type="text"
            placeholder="Type your message..."
            className="flex-1 bg-gray-800 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="px-4 py-2 bg-blue-600 rounded-md hover:bg-blue-700 transition-colors">
            Send
          </button>
        </div>
      </div>
    </div>
  )
}