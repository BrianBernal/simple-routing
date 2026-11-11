import ItemList from '../components/ItemList'
import { response } from '../response'

export default function About() {
  const items = [...response].sort((a, b) => a.name.localeCompare(b.name))

  return (
    <section>
      <p className="eyebrow">About</p>
      <h1>Team directory</h1>
      <p className="lede">
        The same list from <code>response.js</code>, sorted by name.
      </p>
      <ItemList items={items} />
    </section>
  )
}
