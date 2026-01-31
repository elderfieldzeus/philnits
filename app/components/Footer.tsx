import Image from "next/image"

export default function Footer() {
    return (
      <footer className="mt-4 bg-primary p-6 pb-4 text-xl">
        <Image
          className="mx-auto h-6 w-auto"
          src="/cisco-logo-white.png"
          alt="White transparent picture of the CISCO logo"
          width={120}
          height={24}
        />
  
        <p className="pt-2 text-center text-sm text-white">
          <span>
            © {new Date().getFullYear()}{" "}
            <a
              href="https://github.com/elderfieldzeus/philnits"
              className="rounded-md underline ring-white focus:outline-none focus:ring-1 focus:ring-opacity-75"
              target="_blank"
              rel="noopener noreferrer"
            >
              Project PhilNITS Mock
            </a>{" "}
            | An Open Source Initiative by DCISM Students & CISCO{" "}
          </span>
        </p>
      </footer>
    )
  }
