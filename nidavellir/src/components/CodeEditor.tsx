"use client"
import { useEffect, useRef } from "react"
import Editor from "@monaco-editor/react"

export default function CodeEditor() {
  return (
    <div className="h-full rounded-lg overflow-hidden border border-gray-800">
      <div className="bg-gray-900 border-b border-gray-800 p-3">
        <h2 className="text-sm font-semibold">Code Editor</h2>
      </div>
      <Editor
        height="calc(100% - 41px)"
        defaultLanguage="javascript"
        defaultValue="// Welcome to Nidavellir Code Editor"
        theme="vs-dark"
        options={{
          minimap: { enabled: false },
          fontSize: 14,
          lineNumbers: "on",
          roundedSelection: false,
          scrollBeyondLastLine: false,
          padding: { top: 10 },
          readOnly: false
        }}
      />
    </div>
  )
}