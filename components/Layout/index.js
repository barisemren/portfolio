import Header from "../Header";

export default function index({children}) {
  return (
    <section>
        <Header/>
        {children}
    </section>
  )
}
