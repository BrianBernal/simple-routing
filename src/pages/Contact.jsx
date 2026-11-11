import ItemList from '../components/ItemList'
import { response } from '../response'

export default function Contact() {
  const items = [...response.slice(3), ...response.slice(0, 3)]

  return (
    <section>
      <p className="eyebrow">Contact</p>
      <h1>Team directory</h1>
      <p className="lede">
        The same list from <code>response.js</code>, rotated by three.
      </p>
      <ItemList items={items} />
    </section>
  )
}
