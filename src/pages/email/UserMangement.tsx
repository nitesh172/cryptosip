import useQuery from 'hooks/useQuery'
import ResetPassword from 'components/Blocks/auth/ResetPassword'
import EmailVerification from 'components/Blocks/auth/EmailVerification'

const Usermgmt = () => {
  const query = useQuery()
  const mode = query.get('mode')

  let Component = () => <></>

  switch (mode) {
    case "resetPassword":
        Component = ResetPassword
        break;
    case "verifyEmail":
        Component = EmailVerification
        break;
    default:
        break;
  }

  return <Component />
}

export default Usermgmt
