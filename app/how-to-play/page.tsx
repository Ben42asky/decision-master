import Link from "next/link";
import Button from '@/components/ui/button'; // Updated import

export default function HowToPlay() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-[#0d3c26] px-4 py-8 text-center">
      <h1 className="mb-6">How to Play</h1>
      <ul className="list-disc text-left mb-6 space-y-2 max-w-2xl">
        <li>
          <strong>Start with any scenario:</strong> Choose from various environments to test your decision-making.
        </li>
        <li>
          <strong>Make decisions:</strong> Each correct decision awards 20 points, while other choices award 10 points.
        </li>
        <li>
          <strong>Reach 100 points:</strong> Accumulate points to become a Decision Master!
        </li>
        <li>
          <strong>Learn and improve:</strong> Get feedback on your decisions to make better choices.
        </li>
      </ul>
      <Link href="/environments">
        <Button size="lg" className="bg-[#0d3c26] text-white hover:bg-[#daf2ce] hover:text-[#0d3c26]">
          Start Game
        </Button>
      </Link>
    </div>
  );
}