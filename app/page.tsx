import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center h-screen bg-white text-center">
      {/* Logo */}
      <div className="flex items-center gap-x-48">
        <Image src="/man.png" alt="Svogo Logo" width={200} height={200} />

        {/* Main Content */}
        <div className="flex flex-col items-center justify-center mt-10 max-w-2xl">
          <h1 className="text-4xl font-bold text-black">
            Learn any language with
            <span className="text-[#6060FD]"> Svogo</span>
          </h1>
          <p className="text-lg  p-6 ">
            Svogo is your ultimate word-saving app, supporting 10 different
            languages to enhance your learning experience. With Svogo, you can
            discover new words, immerse yourself in stories, and test your
            knowledge—all in one place. Whether you&apos;re brushing up on
            vocabulary or exploring new languages, Svogo offers an interactive
            and engaging way to reach your language goals.
          </p>

          <Link
            href="https://apps.apple.com/us/app/svogo-learn-language/id6514315379"
            passHref
          >
            <button className="mt-6 bg-[#6060FD] text-white py-3 px-6 rounded-full text-lg font-semibold hover:bg-blue-600 transition-colors">
              Get Started
            </button>
          </Link>

          <p className="mt-4 text-gray-500 text-sm">
            &quot;Loved by users around the world&quot;
          </p>
        </div>
      </div>
      <div className="flex space-x-8 mt-48  p-4 rounded-lg ">
        <Link href="/privacy">
          <p className="text-black font-semibold hover:text-[#ffce45] transition-colors">
            Privacy
          </p>
        </Link>
        <Link href="/terms">
          <p className="text-black font-semibold hover:text-[#ffce45] transition-colors">
            Terms
          </p>
        </Link>
      </div>
    </main>
  );
}
