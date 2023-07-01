import type { Provider } from "@supabase/supabase-js"

import GitHub from "~uiParts/Icon/GitHub"
import Google from "~uiParts/Icon/Google"

type Props = {
  onOAuthLogin: (provider: Provider, scopes?: string) => void
}

function Login(props: Props) {
  return (
    <>
      <div className="py-5" />

      <button
        className="bg-blue-500 hover:bg-blue-700 relative flex justify-center items-center text-white font-bold py-2 px-4 rounded-full"
        onClick={() => {
          props.onOAuthLogin("google")
        }}>
        <div className="absolute left-3">
          <Google />
        </div>
        Googleでログイン
      </button>
      <br />
      <button
        className="bg-gray-500 hover:bg-gray-700 relative flex justify-center items-center text-white font-bold py-2 px-4 rounded-full"
        onClick={() => {
          props.onOAuthLogin("github")
        }}>
        <div className="absolute left-3">
          <GitHub />
        </div>
        GitHubでログイン
      </button>
      <br />
    </>
  )
}

export default Login
