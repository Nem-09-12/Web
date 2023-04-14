import { useState } from "react";

function FilterableProductTable({products}) {
  const [filterText, setFilterText] = useState('')
  const [inStockOnly, setInStockOnly] = useState(false)

  return (
  <div>
    <SearchBar
      filterText = {filterText}
      inStockOnly = {inStockOnly}
      onFilterTextchane = {setFilterText}
      onInStockOnly = {setInStockOnly}
    />

    <ProductTable
      products={products}
      filterText = {filterText}
      inStockOnly = {inStockOnly}
      />
  </div>
  )
}

function SearchBar({
    filterText,
    inStockOnly,
    onFilterTextchane,
    onInStockOnly
  }) {
  
  return (
    <form>
      <input 
        type='text' 
        value={filterText}
        placeholder="Search.."
        onChange={(e) => onFilterTextchane(e.target.value)}
      />
      <label>
        <input 
          type='checkbox'
          checked = {inStockOnly}
          onChange={(e) => onInStockOnly(e.target.checked)}
        />
        {' '}
        Only show product in stock
      </label>
    </form>
  )
}
function ProductTable({products, filterText, inStockOnly}) {
  const row = []
  let lastCategory = null
  
  products.forEach((product) => {

    if (
      product.name.toLowerCase().indexOf(
        filterText.toLowerCase()
      ) === -1
    ) {
      return;
    }
    console.log("1")
    if (inStockOnly && !product.stocked) {
      return;
    }
    console.log("1")
    if (product.category != lastCategory) {
      row.push(
        <ProductCategoryRow 
          category={product.category}
          key={product.category}
        />
      )
    }
  
    row.push(
      <ProductRow 
        product={product}
        key={product.name}
        />
    )
    console.log(row)
    lastCategory = product.category
  })

  return (
    <table>

      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>

      <tbody>
          {row}
      </tbody>

    </table>
  )
}

function ProductCategoryRow({category}) {

  return (
    <tr>
      <th colSpan='2'>{category}</th>
    </tr>
  )
}

function ProductRow({product}) {
  const name = product.stocked ? product.name : 
    <span style={{color: 'red'}}>
      {product.name}
    </span> 

  return (
    <tr>
      <td>{name}</td>
      <td>{product.price}</td>
    </tr>
  )
}

const PRODUCTS = [
  { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
  { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
  { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
  { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
  { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
  { category: "Vegetables", price: "$1", stocked: true, name: "Peas" }
]

function Thiking() {
  
  return (
    <FilterableProductTable products={PRODUCTS}/>
    )
  }
export default Thiking