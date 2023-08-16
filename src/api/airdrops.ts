import { where } from "@firebase/firestore"
import { setAirdrops } from "redux/slices/airdropSlice"
import { getDocuments } from "utils/firebase/functions"

const fetchAirdrop = async (dispatch: Function) => {
  let data = await getDocuments("Airdrops", [where("removed", "!=", true)])
  dispatch(setAirdrops(data))
}

export { fetchAirdrop }
