import { AirdropCardProps } from "types"

const AirdropCard = (props: AirdropCardProps) => {
  const { airdrop, isSnapPoint } = props
  return (
    <div className={`flex-shrink-0 ${isSnapPoint && "snap-start"} w-full md:w-96 h-60 p-6 flex flex-col justify-between`}>
      <div className="flex flex-row gap-6 items-center">
        <img
          src="https://crew3-production.s3.eu-west-3.amazonaws.com/public/fp-joks46hu6vopq6jgo-dg9rsiu1is_-logo.png"
          className="w-12 h-12 rounded-xl"
          alt=""
        />
        <div className="text-2xl font-medium">{airdrop.name}</div>
      </div>
      <div className="text-sm text-ellipsis overflow-hidden line-clamp-3">{airdrop.description}</div>
      <div className="flex flex-row gap-2">
        <div className="rounded-xl px-2.5 py-1.5 border-2 w-fit text-xs">2k P</div>
        <div className="rounded-xl px-2.5 py-1.5 border-2 w-fit text-xs">2k P</div>
      </div>
    </div>
  )
}

export default AirdropCard
