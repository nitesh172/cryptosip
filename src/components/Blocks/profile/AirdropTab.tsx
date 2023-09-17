import { AirdropTabProps } from 'types'

const AirdropTab = (props: AirdropTabProps) => {
  const { airdropRef } = props
  return <div ref={airdropRef}>AirdropTab</div>
}

export default AirdropTab
