import Image from "next/image";
import { Textarea } from "./components/ui/textarea";


export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">

      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/transcriptcard.png"
          alt="Transcription logo"
          width={550}
          height={150}
          priority
        />
        <header className="row-start-1 flex items-center justify-between w-full max-w-3xl">
          <h1 className="text-2xl font-bold">AI Transcription Service</h1>
            <button className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto">
              Start Transcription
            </button>
        </header>
        <ol className="font-mono list-inside list-decimal text-sm/6 text-center sm:text-left">
          <li className="mb-2 tracking-[-.01em]">
            You will be notified when transcription has started.
          </li>
          <li className="tracking-[-.01em]">
            A copy of the transcription can be requested from the host.
          </li>
        </ol>

        <Textarea
          placeholder="When Transcription starts, the transcript will appear here..."
        />

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
            href="https://developer.pexip.com/docs/infinity/web/plugins/webapp-3/plugin-api/widgets/index.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Read our docs
          </a>
        </div>
      </main>
    </div>
  );
}
