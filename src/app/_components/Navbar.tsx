import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";

export default function Navbar() {
     return (
        <nav className="w-full flex items-center justify-between p-4 text-xl font-semibold border-b"> 
          <div>Gallery</div>
          <div className="flex justify-end items-center p-4 gap-4 h-16 ">
              <SignedOut>
                  <SignInButton />
                  <SignUpButton />
                </SignedOut>
                <SignedIn>
                  <UserButton />
                </SignedIn>
          </div>
        </nav>
      )
}