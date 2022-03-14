import '../styles/globals.css'

function MyApp({ Component, pageProps }) {


  return (

    <>
      <h1>My App</h1>
      <Component {...pageProps} />
    </>

  )
}

export default MyApp
