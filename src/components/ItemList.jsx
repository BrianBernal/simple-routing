export default function ItemList({ items }) {
  return (
    <ul className="item-list">
      {items.map((item) => (
        <li key={item.id} className="item">
          <span className="item-name">{item.name}</span>
          <span className="item-role">{item.role}</span>
        </li>
      ))}
    </ul>
  )
}
