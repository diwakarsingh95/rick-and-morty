import { NextRequest, NextResponse } from 'next/server'

export const middleware = async (req: NextRequest) => {
  const url = req.nextUrl.clone()
  url.pathname = `${url.pathname}/${url.search ? url.search : '?page=1'}`
  return NextResponse.rewrite(url)
}

export const config = {
  matcher: ['/locations', '/characters']
}
