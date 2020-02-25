// Learn more about Begin HTTP functions: https://docs.begin.com/en/functions/http/

export async function handler (req: object) {
  console.log(req)
  return {
    status: 302,
    headers: {
      'cache-control': 'no-cache, no-store, must-revalidate, max-age=0, s-maxage=0'
    },
    location: '/'
  }
}
