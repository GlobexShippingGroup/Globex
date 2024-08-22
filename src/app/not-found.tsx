import { GeistMono as FontMono} from 'geist/font/mono';
import Link from 'next/link';
export default function NotFound() {
    return (
      <>
        <main className={`relative isolate min-h-full ${FontMono.className}`}>
          <img
            alt=""
            src="https://images.unsplash.com/photo-1602984338060-bfddce132ebc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="absolute inset-0 -z-10 h-full w-full object-cover object-top"
          />
          <div className="mx-auto max-w-7xl px-6 py-32 text-center sm:py-40 lg:px-8">
            <p className="text-base font-semibold leading-8 text-white">404</p>
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-5xl">Page not found</h1>
            <p className="mt-4 text-base text-white/70 sm:mt-6">Looks like you're lost in the ocean. Go back to the shore by clicking the button below.</p>
            <div className="mt-10 flex justify-center">
              <Link href="/" className="text-sm font-semibold leading-7 text-white">
                <span aria-hidden="true">&larr;</span> Back to home
              </Link>
            </div>
          </div>
        </main>
      </>
    )
  }
  