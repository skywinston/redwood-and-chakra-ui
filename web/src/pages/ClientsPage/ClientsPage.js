import { Link, routes } from '@redwoodjs/router'

const ClientsPage = () => {
  return (
    <>
      <h1>ClientsPage</h1>
      <p>Find me in "./web/src/pages/ClientsPage/ClientsPage.js"</p>
      <p>
        My default route is named "clients", link to me with `
        <Link to={routes.clients()}>Clients</Link>`
      </p>
    </>
  )
}

export default ClientsPage
