// Learn more about Begin HTTP functions: https://docs.begin.com/en/functions/http/
import { PrismaClient } from '@prisma/client'

const client = new PrismaClient()
export async function handler(req: object) {
  const albums = await client.album.findMany({ first: 5 })
  return {
    status: 200,
    headers: {
      'content-type': 'application/json',
    },
    body: { albums },
  }
}
