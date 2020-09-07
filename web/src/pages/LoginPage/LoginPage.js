import { Link, routes } from '@redwoodjs/router'

const LoginPage = () => {
  return (
    <>
      <h1>LoginPage</h1>
      <p>Find me in "./web/src/pages/LoginPage/LoginPage.js"</p>
      <p>
        My default route is named "login", link to me with `
        <Link to={routes.login()}>Login</Link>`
      </p>
    </>
  )
}

export default LoginPage
