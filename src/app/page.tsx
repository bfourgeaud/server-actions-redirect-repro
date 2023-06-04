import { RedirectActionButton, RedirectErrorActionButton } from "./buttons";

export default async function Redirects() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center space-y-4 p-24">
      <RedirectActionButton />
      <RedirectErrorActionButton />
    </main>
  )
}
