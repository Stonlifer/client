import ArrowIcon from '@mui/icons-material/ArrowOutward'
import Tooltip from '@mui/material/Tooltip'
import GlobeIcon from '@mui/icons-material/Language'
import SustainIcon from '@mui/icons-material/AllInclusiveOutlined'
import Spin from '../assets/spin.svg'

function Hero() {
  return (
    <div className="flex h-[calc(100vh-5rem)] pb-6 pt-3">
      <div className="flex w-1/2 items-center">
        <div className="flex flex-col items-center">
          <h1 className="w-3/4 whitespace-pre font-serif text-7xl font-bold leading-[0.95] xl:text-8xl">
            Reflect Who
            <br />
            You are with
            <br />
            Our
            <span className="absolute -ml-3 -rotate-3 text-accent"> Style</span>
          </h1>

          <p className="mt-10 w-3/4 text-lg text-primary">
            this is a test website created for the task of creating a clothing
            e-commerce website using React JS and Laravel. this is a test
            website created for the task of creating
          </p>

          <h2 className="mt-6 w-3/4 text-lg  text-primary">
            Our Brand Partners
          </h2>

          <div className="mt-6 grid w-3/4 grid-cols-4">
            <img src="/adidas.svg" alt="adidas" />
            <img src="/nike.svg" alt="nike" />
            <img src="/puma.svg" alt="puma" />
            <img src="/ua.svg" alt="Under Armour" />
          </div>
        </div>
      </div>

      <div className="h-full w-1/2 overflow-hidden rounded-3xl">
        <button
          type="button"
          className="group group absolute top-[60%] flex h-32 w-32 -translate-x-[50%] rounded-full bg-primary transition-colors duration-700 hover:bg-dark"
        >
          <ArrowIcon
            className="m-auto text-white transition-all group-hover:animate-pulse"
            sx={{ fontSize: 94 }}
          />

          <img
            src={Spin}
            className="spinner absolute h-full w-full p-1"
            alt="signature"
          />
        </button>
        <img
          src="/hero.webp"
          alt="hero"
          className="h-auto min-h-full w-full object-cover object-center"
        />
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

function BestSeller() {
  return (
    <div>
      <h1 className="font-serif text-4xl font-bold xl:text-5xl">
        Our bestseller
      </h1>

      <div className="my-8 grid grid-cols-3 gap-5">
        <ProductCard product={PRODUCTS[0]} />
        <ProductCard product={PRODUCTS[1]} />
        <ProductCard product={PRODUCTS[2]} />
      </div>
    </div>
  )
}

function Statement() {
  return (
    <div className="grid grid-cols-3 gap-5 ">
      <div className="col-span-2 h-[36rem]  w-full rounded-3xl border bg-accent">
        <div className="flex h-4/6  w-full border-b-4 border-dark px-12">
          <h1 className="my-auto whitespace-pre text-[5rem] font-bold leading-[0.95] text-dark">
            WE’RE CHANGING
            <br />
            THE WAY CLOTHES
            <br />
            ARE MADE.
            <br />
          </h1>
        </div>

        <div className="grid h-2/6 w-full grid-cols-2">
          <div className="m-auto ">
            <div className="flex items-center gap-x-2">
              <div className="flex h-10 w-10 rounded-full bg-dark">
                <GlobeIcon
                  className="m-auto text-white "
                  sx={{ fontSize: 24 }}
                />
              </div>

              <h3 className="text-xl font-semibold">MISSION</h3>
            </div>

            <p className="mt-2 whitespace-pre-wrap leading-snug text-dark">
              This is a test website made by Mazyar
              <br />
              using React Js and laravel. This is a test website made
              <br />
              by Mazyar.
            </p>
          </div>

          <div className="m-auto ">
            <div className="flex items-center gap-x-2">
              <div className="flex h-10 w-10 rounded-full bg-dark">
                <SustainIcon
                  className="m-auto text-white "
                  sx={{ fontSize: 24 }}
                />
              </div>

              <h3 className="text-xl font-semibold">SUSTAINABILITY</h3>
            </div>

            <p className="mt-2 whitespace-pre-wrap leading-snug text-dark">
              This is a test website made by Mazyar
              <br />
              using React Js and laravel. This is a test website made
              <br />
              by Mazyar.
            </p>
          </div>
        </div>
      </div>

      <div className="relative">
        <img
          src="/model.jpg"
          alt="model"
          className="h-[36rem] w-full rounded-3xl border object-cover object-center drop-shadow-xl grayscale"
        />

        <div className="absolute top-0 h-full w-full rounded-3xl bg-primary opacity-50 saturate-150" />
      </div>
    </div>
  )
}

function Home() {
  return (
    <div className="flex flex-col gap-8 pb-8">
      <Hero />
      <BestSeller />
      <Statement />
    </div>
  )
}

export default Home

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
