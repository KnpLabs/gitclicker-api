import { Response } from 'express'

export function handleError(e: unknown, res: Response): void {
  if (e instanceof Error) {
    res.status(500).send(e.message)
  } else {
    res.status(500).send('An unknown error occurred')
  }
}