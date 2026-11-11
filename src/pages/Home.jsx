import ItemList from '../components/ItemList'
import { response } from '../response'

export default function Home() {
  return (
    <section>
      <p className="eyebrow">Home</p>
      <h1>Team directory</h1>
      <p className="lede">
        The original order, exactly as it appears in <code>response.js</code>.
      </p>
      <ItemList items={response} />
    </section>
  )
}
