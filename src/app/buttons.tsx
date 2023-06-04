"use client"

import { useTransition } from "react"
import { redirectAction, redirectErrorAction } from "./actions"

export function RedirectActionButton() {
  const [isPending, startTransition] = useTransition()

  return (
    <button onClick={() => startTransition(() => redirectAction())} disabled={isPending} className="btn">
      Redirect Action -- Working
    </button>
  )
}

export function RedirectErrorActionButton() {
  const [isPending, startTransition] = useTransition()

  return (
    <button onClick={() => startTransition(async () => {
      const result = await redirectErrorAction()
      console.log(result)
    })} disabled={isPending} className="btn">
      Redirect Action -- This throws an error
    </button>
  )
}