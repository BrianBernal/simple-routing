import ItemList from '../components/ItemList'
import { response } from '../response'

export default function Projects() {
  const items = [...response].reverse()

  return (
    <section>
      <p className="eyebrow">Projects</p>
      <h1>Team directory</h1>
      <p className="lede">
        The same list from <code>response.js</code>, reversed.
      </p>
      <ItemList items={items} />
    </section>
  )
}
