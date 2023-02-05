import { useState } from 'react'
import Tooltip from '@mui/material/Tooltip'

function Shop() {
  return (
    <div className="my-10">
      <h1 className="font-serif text-4xl font-bold xl:text-5xl">
        Men Essentials
      </h1>

      <StoreFilter />

      <div className="my-8 grid grid-cols-4 gap-5">
        <ProductCard product={PRODUCTS[0]} />
      </div>
    </div>
  )
}

function ProductCard({ product }: { product: any }) {
  return (
    <div className="group relative flex cursor-pointer flex-col gap-3 ">
      <img
        src={product.image}
        alt={product.name}
        className="h-[30rem] w-full rounded-3xl border object-cover object-center drop-shadow-xl transition-all group-hover:drop-shadow-2xl"
      />
      {product.tag && (
        <div className="absolute top-[3%] left-[3%] rounded-full bg-white py-1 px-4 font-bold drop-shadow-md">
          {product.tag}
        </div>
      )}

      <div className="flex justify-between gap-4">
        <div>
          <h2 className="text-xl font-semibold">{product.name}</h2>

          <h3 className="text-xl font-bold text-accent">{product.price}</h3>
        </div>

        <div className="flex gap-2">
          {product.colors.map((color: any, i: number) => (
            <Tooltip key={i} title={color.name} placement="top">
              <div
                className="h-5 w-5 cursor-pointer rounded-full "
                style={{ backgroundColor: color.color }}
              />
            </Tooltip>
          ))}
        </div>
      </div>
    </div>
  )
}

function PillCheckBox({
  store,
  stores,
  filterHandler,
}: {
  store: string
  stores: Array<string>
  filterHandler: any
}) {
  return (
    <div>
      <input
        className="hidden"
        type="checkbox"
        value={store}
        checked={stores.includes(store)}
        name={store}
        id={store}
        onChange={filterHandler}
      />
      <label
        htmlFor={store}
        className={`cursor-pointer rounded-full py-2 px-4 font-bold uppercase transition-all ${
          stores.includes(store) ? 'bg-dark text-white' : 'bg-white text-dark'
        }`}
      >
        {store}
      </label>
    </div>
  )
}

function AllPillCheckBox({
  store,
  stores,
  filterHandler,
}: {
  store: string
  stores: Array<string>
  filterHandler: any
}) {
  return (
    <div>
      <input
        className="hidden"
        type="checkbox"
        value={store}
        checked={stores.length === 0}
        name={store}
        id={store}
        onChange={filterHandler}
      />
      <label
        htmlFor={store}
        className={`cursor-pointer rounded-full py-2 px-4 font-bold uppercase transition-all ${
          stores.length === 0 ? 'bg-dark text-white' : 'bg-white text-dark'
        }`}
      >
        {store}
      </label>
    </div>
  )
}

function StoreFilter() {
  const [filterStore, setFilterStore] = useState<Array<string>>([])

  const filterHandler = (event: any) => {
    // alert(event.target.value + ' ' + event.target.checked)
    if (event.target.checked) {
      setFilterStore([...filterStore, event.target.value])
    } else {
      setFilterStore(
        filterStore.filter((filter) => filter !== event.target.value)
      )
    }
  }

  const filterAll = (event: any) => {
    if (event.target.checked) {
      setFilterStore([])
    } else {
      setFilterStore([])
    }
  }

  return (
    <div className="mt-8 flex gap-2">
      <AllPillCheckBox
        store="All"
        stores={filterStore}
        filterHandler={filterAll}
      />
      {Stores.map((store, i) => (
        <PillCheckBox
          key={i}
          store={store}
          stores={filterStore}
          filterHandler={filterHandler}
        />
      ))}
    </div>
  )
}

const Stores = ['Adidas', 'Nike', 'Puma', 'Under Armour']

const PRODUCTS = [
  {
    tag: 'New',
    category: 'Fruits',
    name: 'SHIRTS NEW ERA',
    price: '$89.99',
    colors: [
      { name: 'Brown', color: '#463B24' },
      { name: 'Black', color: '#1A1A1A' },
      { name: 'Accent', color: '#FD900F' },
    ],
    image:
      'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/cb7112e23f094333839bad23002f5c4b_9366/Essentials_Warm-Up_3-Stripes_Track_Jacket_Black_H46099_21_model.jpg',
  },
  {
    tag: '',
    category: 'Fruits',
    name: 'SHIRTS NEW ERA',
    price: '$89.99',
    colors: [
      { name: 'Brown', color: '#463B24' },
      { name: 'Black', color: '#1A1A1A' },
      { name: 'Accent', color: '#FD900F' },
    ],
    image:
      'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/cb7112e23f094333839bad23002f5c4b_9366/Essentials_Warm-Up_3-Stripes_Track_Jacket_Black_H46099_21_model.jpg',
  },
  {
    tag: 'NEW ARRIVALS',
    category: 'Fruits',
    name: 'SHIRTS NEW ERA NEW ARRIVALS NEW ARRIVALS NEW ARRIVALS',
    price: '$89.99',
    colors: [
      { name: 'Brown', color: '#463B24' },
      { name: 'Black', color: '#1A1A1A' },
      { name: 'Accent', color: '#FD900F' },
    ],
    image:
      'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/cb7112e23f094333839bad23002f5c4b_9366/Essentials_Warm-Up_3-Stripes_Track_Jacket_Black_H46099_21_model.jpg',
  },
  { category: 'Fruits', price: '$1', stocked: true, name: 'Dragonfruit' },
  { category: 'Fruits', price: '$2', stocked: false, name: 'Passionfruit' },
  { category: 'Vegetables', price: '$2', stocked: true, name: 'Spinach' },
  { category: 'Vegetables', price: '$4', stocked: false, name: 'Pumpkin' },
  { category: 'Vegetables', price: '$1', stocked: true, name: 'Peas' },
]

export default Shop
