import Chat from "@/components/Chat";
import CodeEditor from "@/components/CodeEditor";
import Terminal from "@/components/Terminal";
import Header from "@/components/Header";

export default function Home() {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="flex-1 flex overflow-hidden">
        <div className="w-2/3 p-4">
          <CodeEditor />
        </div>
        <div className="w-1/3 flex flex-col">
          <div className="flex-1 p-4">
            <Chat />
          </div>
          <div className="h-80 p-4">
            <Terminal />
          </div>
        </div>
      </main>
    </div>
  );
}
