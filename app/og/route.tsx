import { ImageResponse } from 'next/og'

export function GET(request: Request) {
  let url = new URL(request.url)
  let title = url.searchParams.get('title') || 'Matt Thorne'

  return new ImageResponse(
    (
      <div tw="flex flex-col w-full h-full items-center justify-center bg-white">
        <div tw="flex flex-col w-full py-12 px-4 p-8">
          <h1 tw="text-4xl font-bold tracking-tight text-left mb-0">
            {title}
          </h1>
          <h2 tw="text-2xl tracking-tight text-left mt-0">
            Matt Thorne
          </h2>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  )
}
