import Image from "next/image";
import { Textarea } from "./components/ui/textarea";
import { Button } from "./components/ui/button";


// Main page component for entry point.
export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center">

        {/* Logo image for the transcription service */}
        <Image
          className="dark:invert"
          src="/transcriptcard.png"
          alt="Transcription logo"
          width={550}
          height={150}
          priority
        />
        {/* Main content area with title and button */}
        <div className="flex flex-col items-center gap-4 w-full max-w-3xl">
          <h1 className="text-2xl font-bold">AI Transcription Service</h1>
          <Button>
            Start Transcription
          </Button>
        </div>
        <div className="text-center">
          <p className="text-sm text-gray-600">
            <span className="font-semibold">Note:</span> Transcription will begin when the host starts it. 
            The transcript will appear below in real-time.
          </p>
        </div>

        {/* Textarea for displaying the transcription */}
        {/* This textarea will be updated with the transcription text as it comes in */}
        <Textarea
          placeholder="When transcription starts, the transcript will appear here..."
        />
      </main>
    </div>
  );
}
