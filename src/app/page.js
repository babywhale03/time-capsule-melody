import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-background bg-[url('/media/sea_background.png')] bg-cover bg-center bg-no-repeat">
      <Link href="/" className="relative flex justify-center pt-5">
          <img src="/media/logo.png" alt="logo" className="m-auto w-70% px-15" />
      </Link>
      <div className="flex justify-center items-center min-h-[500px] px-10 py-8">
        <div className="flex flex-col gap-4 w-full max-w-[600px]">
          <Link href="/record">
            <button className="h-40 text-lg w-full bg-[url('/media/button_background.png')] bg-contain bg-center bg-no-repeat text-black">노래 추가하기</button>
          </Link>
          <Link href="/memory">
            <button className="h-40 text-lg w-full bg-[url('/media/button_background.png')] bg-contain bg-center bg-no-repeat text-black">노래 모아보기</button>
          </Link>
          <Link href="/friends">
            <button className="h-40 text-lg w-full bg-[url('/media/button_background.png')] bg-contain bg-center bg-no-repeat text-black">나와 함께한 사람들</button>
          </Link>
          <Link href="/emotion">
            <button className="h-40 text-lg w-full bg-[url('/media/button_background.png')] bg-contain bg-center bg-no-repeat text-black">감정 히스토리</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
