import { AirdropCardProps } from "types"

const AirdropCard = (props: AirdropCardProps) => {
  const { airdrop, isSnapPoint } = props
  return (
    <div className={`flex-shrink-0 bg-white border ${isSnapPoint && "snap-start"} w-full md:w-96 h-60 p-6 flex flex-col justify-between`}>
      <div className="flex flex-row gap-6 items-center">
        <img
          src={airdrop.image}
          className="w-12 h-12"
          alt=""
        />
        <div className="text-2xl font-medium">{airdrop.name}</div>
      </div>
      <div className="text-sm text-ellipsis overflow-hidden line-clamp-3">{airdrop.description}</div>
      <div className="flex flex-row gap-2">
        <div className="px-2.5 py-1.5 border w-fit text-xs">2k P</div>
        <div className="px-2.5 py-1.5 border w-fit text-xs">2k P</div>
      </div>
    </div>
  )
}

export default AirdropCard
