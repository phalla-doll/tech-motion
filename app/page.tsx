import Image from 'next/image';
import {
  Search,
  User,
  ShoppingCart,
  ChevronDown,
  X,
  Plus,
  Minus,
  ChevronLeft,
  ChevronRight,
  Check,
  Globe,
  Phone
} from 'lucide-react';

export default function Page() {
  return (
    <div className="min-h-screen bg-white text-zinc-900 font-sans">
      <TopBanner />
      <Header />
      <main>
        <Hero />
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <CategoryRow />
          <FilterBar />
          
          <div className="flex flex-col lg:flex-row gap-8 mt-8">
            <aside className="w-full lg:w-64 shrink-0">
              <Sidebar />
            </aside>
            <div className="flex-1">
              <ProductGrid />
              <Pagination />
            </div>
          </div>

          <PromoBanners />
          <SeoText />
          <SimilarTerms />
          <RecentlyViewed />
        </div>
      </main>
      <Footer />
    </div>
  );
}

function TopBanner() {
  return (
    <div className="bg-zinc-100 py-2 px-4 flex justify-center items-center relative text-xs text-zinc-600">
      <p>
        Servicing? Now at 200+ stores or we'll come to you. <a href="#" className="underline hover:text-zinc-900">Learn more</a>
      </p>
      <button className="absolute right-4 top-1/2 -translate-y-1/2 hover:text-zinc-900">
        <X className="w-4 h-4" />
      </button>
    </div>
  );
}

function Header() {
  return (
    <header className="border-b border-zinc-200">
      <div className="bg-zinc-900 text-zinc-300 text-xs py-2 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <nav className="flex gap-4 sm:gap-6">
          <a href="#" className="hover:text-white">About us</a>
          <a href="#" className="hover:text-white">Services</a>
          <a href="#" className="hover:text-white">Store finder</a>
          <a href="#" className="hover:text-white">Buying guide</a>
          <a href="#" className="hover:text-white">Blog</a>
          <a href="#" className="hover:text-white">Help</a>
          <a href="#" className="hover:text-white">Contacts</a>
        </nav>
        <div className="flex items-center gap-6">
          <a href="tel:0800200888" className="flex items-center gap-2 hover:text-white">
            <Phone className="w-3 h-3" />
            0 800 200 888
          </a>
          <button className="flex items-center gap-1 hover:text-white">
            <Globe className="w-3 h-3" />
            EN
            <ChevronDown className="w-3 h-3" />
          </button>
        </div>
      </div>
      
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-12">
          <a href="#" className="text-2xl font-medium tracking-tighter italic">TECHMOTION</a>
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            <a href="#" className="hover:text-zinc-600">Laptops</a>
            <a href="#" className="hover:text-zinc-600">Desktops</a>
            <a href="#" className="hover:text-zinc-600">Components</a>
            <a href="#" className="hover:text-zinc-600">Peripherals</a>
            <a href="#" className="hover:text-zinc-600">Monitors</a>
            <a href="#" className="hover:text-zinc-600">Networking</a>
            <a href="#" className="hover:text-zinc-600">Outlet</a>
            <a href="#" className="text-red-500 hover:text-red-600 flex items-center gap-1">Sale <span className="text-[10px]">🔥</span></a>
          </nav>
        </div>
        
        <div className="flex items-center gap-6">
          <button className="hover:text-zinc-600"><Search className="w-5 h-5" /></button>
          <button className="hover:text-zinc-600"><User className="w-5 h-5" /></button>
          <button className="flex items-center gap-2 hover:text-zinc-600">
            <div className="relative">
              <ShoppingCart className="w-5 h-5" />
              <span className="absolute -top-1.5 -right-1.5 bg-red-500 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">1</span>
            </div>
            <span className="text-sm font-medium">$1,499.99</span>
          </button>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <div className="relative h-[400px] w-full bg-zinc-900 overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1587202372634-32705e3bf49c?auto=format&fit=crop&q=80&w=2000"
        alt="Gaming Setup"
        fill
        className="object-cover opacity-60"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent" />
      
      <div className="relative max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
        <div className="text-zinc-300 text-xs mb-6 flex items-center gap-2">
          <a href="#" className="hover:text-white">Home</a>
          <ChevronRight className="w-3 h-3" />
          <span className="text-white">Gaming PCs</span>
        </div>
        
        <h1 className="text-4xl sm:text-5xl font-medium text-white mb-4">Gaming PCs</h1>
        <p className="text-zinc-300 max-w-2xl text-sm sm:text-base leading-relaxed mb-8">
          Gaming PCs are designed for high-performance gaming, offering powerful processors, dedicated graphics cards, and reliable cooling to handle demanding titles, tackling intensive workloads, or exploring virtual worlds, they provide great control, stability, and comfort for every session.
        </p>
        
        <button className="bg-white text-zinc-900 px-6 py-3 text-sm font-medium rounded-full hover:bg-zinc-100 transition-colors w-fit">
          See all PCs
        </button>
      </div>
    </div>
  );
}

const categories = [
  { name: 'Gaming', image: 'https://images.unsplash.com/photo-1600861194942-f883de0dfe96?auto=format&fit=crop&q=80&w=400' },
  { name: 'Creator', image: 'https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&q=80&w=400' },
  { name: 'Office', image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=400' },
  { name: 'Workstation', image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&q=80&w=400' },
  { name: 'Mini PC', image: 'https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?auto=format&fit=crop&q=80&w=400' },
  { name: 'Custom Builds', image: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&q=80&w=400' },
];

function CategoryRow() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 mb-8">
      {categories.map((cat) => (
        <a key={cat.name} href="#" className="group block">
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-2 bg-zinc-100">
            <Image
              src={cat.image}
              alt={cat.name}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          <span className="text-sm font-medium group-hover:text-zinc-600">{cat.name}</span>
        </a>
      ))}
    </div>
  );
}

function FilterBar() {
  const activeFilters = ['Intel Core i7', 'Black', 'Silver', 'Green', 'Yellow', 'Red', '$499 - $10,500'];
  
  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 py-4 border-y border-zinc-200">
      <div className="flex items-center gap-4 flex-wrap">
        <span className="font-medium">145 products found</span>
        <div className="flex flex-wrap gap-2">
          {activeFilters.map((filter) => (
            <span key={filter} className="inline-flex items-center gap-1 px-3 py-1 border border-zinc-200 rounded-full text-xs text-zinc-600 hover:border-zinc-300 cursor-pointer">
              {filter}
              <X className="w-3 h-3" />
            </span>
          ))}
          <button className="text-xs font-medium underline text-zinc-900 hover:text-zinc-600 ml-2">Clear filters</button>
        </div>
      </div>
      
      <div className="flex items-center gap-2 text-sm shrink-0">
        <span className="text-zinc-500">Sort by:</span>
        <button className="font-medium flex items-center gap-1 hover:text-zinc-600">
          Price (High-Low)
          <ChevronDown className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}

function Sidebar() {
  return (
    <div className="space-y-6">
      <FilterSection title="EXPLORE CATEGORIES" defaultOpen={false} />
      
      <FilterSection title="PROCESSOR" defaultOpen={true}>
        <div className="space-y-3">
          <Checkbox label="Intel Core i5" count={56} />
          <Checkbox label="Intel Core i7" count={145} checked />
          <Checkbox label="Intel Core i9" count={103} />
          <Checkbox label="AMD Ryzen 5" count={84} />
          <Checkbox label="AMD Ryzen 7" count={71} />
        </div>
      </FilterSection>
      
      <FilterSection title="USE CASE" defaultOpen={false} />
      <FilterSection title="FAMILY" defaultOpen={false} />
      <FilterSection title="LAPTOPS" defaultOpen={false} />
      
      <FilterSection title="PRICE" defaultOpen={true}>
        <div className="flex items-center gap-2">
          <div className="relative flex-1">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500 text-sm">$</span>
            <input type="text" defaultValue="499" className="w-full pl-6 pr-3 py-2 border border-zinc-200 rounded text-sm focus:outline-none focus:border-zinc-400" />
          </div>
          <span className="text-zinc-500 text-sm">to</span>
          <div className="relative flex-1">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500 text-sm">$</span>
            <input type="text" defaultValue="10,500" className="w-full pl-6 pr-3 py-2 border border-zinc-200 rounded text-sm focus:outline-none focus:border-zinc-400" />
          </div>
        </div>
      </FilterSection>
      
      <FilterSection title="BRAND" defaultOpen={false} />
      
      <FilterSection title="FRAME MATERIAL" defaultOpen={true}>
        <div className="space-y-3">
          <Checkbox label="Aluminium" count={43} />
          <Checkbox label="Carbon Fiber" count={145} checked />
          <Checkbox label="Steel" count={39} />
        </div>
      </FilterSection>
      
      <FilterSection title="STORAGE" defaultOpen={false} />
      
      <FilterSection title="COLOUR" defaultOpen={true}>
        <div className="space-y-3">
          <ColorCheckbox color="bg-zinc-900" label="Black" count={66} checked />
          <ColorCheckbox color="bg-zinc-300" label="Silver" count={19} />
          <ColorCheckbox color="bg-emerald-500" label="Green" count={12} />
        </div>
      </FilterSection>
    </div>
  );
}

function FilterSection({ title, children, defaultOpen = true }: { title: string, children?: React.ReactNode, defaultOpen?: boolean }) {
  return (
    <div className="border-b border-zinc-100 pb-6">
      <button className="flex items-center justify-between w-full text-sm font-medium tracking-wide mb-4">
        {title}
        {defaultOpen ? <Minus className="w-4 h-4 text-zinc-400" /> : <Plus className="w-4 h-4 text-zinc-400" />}
      </button>
      {defaultOpen && children && (
        <div className="mt-2">
          {children}
        </div>
      )}
    </div>
  );
}

function Checkbox({ label, count, checked = false }: { label: string, count: number, checked?: boolean }) {
  return (
    <label className="flex items-center justify-between cursor-pointer group">
      <div className="flex items-center gap-3">
        <div className={`w-4 h-4 rounded-md border flex items-center justify-center transition-colors ${checked ? 'bg-zinc-900 border-zinc-900' : 'border-zinc-300 group-hover:border-zinc-400'}`}>
          {checked && <Check className="w-3 h-3 text-white" />}
        </div>
        <span className="text-sm text-zinc-700">{label}</span>
      </div>
      <span className="text-xs text-zinc-400">{count}</span>
    </label>
  );
}

function ColorCheckbox({ color, label, count, checked = false }: { color: string, label: string, count: number, checked?: boolean }) {
  return (
    <label className="flex items-center justify-between cursor-pointer group">
      <div className="flex items-center gap-3">
        <div className={`w-5 h-5 rounded-full border-2 p-0.5 ${checked ? 'border-zinc-900' : 'border-transparent'}`}>
          <div className={`w-full h-full rounded-full ${color} border border-black/10`} />
        </div>
        <span className="text-sm text-zinc-700">{label}</span>
      </div>
      <span className="text-xs text-zinc-400">{count}</span>
    </label>
  );
}

const products = [
  {
    id: 1,
    name: 'Alienware Aurora R16',
    price: 7049,
    image: 'https://images.unsplash.com/photo-1587831990711-23ca6441447b?auto=format&fit=crop&q=80&w=600',
    badges: [{ text: 'NEW', type: 'dark' }, { text: '2025', type: 'light' }],
    colors: ['bg-emerald-500'],
  },
  {
    id: 2,
    name: 'ROG Strix G16',
    price: 6560,
    image: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&q=80&w=600',
    badges: [{ text: '2024', type: 'light' }],
    colors: ['bg-zinc-900', 'bg-zinc-100'],
  },
  {
    id: 3,
    name: 'Corsair Vengeance i7400',
    price: 6499,
    originalPrice: 7000,
    image: 'https://images.unsplash.com/photo-1547082299-de196ea013d6?auto=format&fit=crop&q=80&w=600',
    badges: [{ text: '-7%', type: 'sale' }, { text: '2024', type: 'light' }],
    colors: ['bg-zinc-900', 'bg-emerald-500'],
  },
  {
    id: 4,
    name: 'Razer Blade 16',
    price: 6249,
    image: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&q=80&w=600',
    badges: [{ text: 'NEW', type: 'dark' }, { text: '2025', type: 'light' }],
    colors: ['bg-zinc-900', 'bg-yellow-500', 'bg-orange-500', '+2'],
  },
  {
    id: 5,
    name: 'Legion Tower 7i',
    price: 5999,
    originalPrice: 10200,
    image: 'https://images.unsplash.com/photo-1593640408182-31c70c8268f5?auto=format&fit=crop&q=80&w=600',
    badges: [{ text: '-41%', type: 'sale' }, { text: '2023', type: 'light' }],
    colors: ['bg-zinc-100'],
  },
  {
    id: 6,
    name: 'MSI Titan 18 HX',
    price: 5999,
    originalPrice: 7349,
    image: 'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?auto=format&fit=crop&q=80&w=600',
    badges: [{ text: '-18%', type: 'sale' }, { text: '2023', type: 'light' }],
    colors: ['bg-zinc-900', 'bg-zinc-300', 'bg-zinc-100'],
  },
];

function ProductGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

function ProductCard({ product }: { product: any }) {
  return (
    <div className="group flex flex-col">
      <div className="relative aspect-square bg-zinc-50 rounded-2xl p-6 mb-4 overflow-hidden">
        {/* Badges */}
        <div className="absolute top-4 left-4 flex gap-2 z-10">
          {product.badges.map((badge: any, idx: number) => (
            <span
              key={idx}
              className={`text-[10px] font-medium px-2 py-1 rounded-md tracking-wide ${
                badge.type === 'dark' ? 'bg-zinc-900 text-white' :
                badge.type === 'sale' ? 'bg-red-50 text-red-600' :
                'bg-white text-zinc-600 border border-zinc-200'
              }`}
            >
              {badge.text}
            </span>
          ))}
        </div>
        
        {/* Image */}
        <div className="relative w-full h-full mix-blend-multiply">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-contain group-hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>
      
      {/* Colors & Compare */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-1.5">
          {product.colors.map((color: string, idx: number) => (
            color.startsWith('+') ? (
              <span key={idx} className="text-[10px] text-zinc-500 font-medium ml-1">{color}</span>
            ) : (
              <div key={idx} className={`w-3.5 h-3.5 rounded-full ${color} border border-black/10`} />
            )
          ))}
        </div>
        <button className="text-[10px] font-medium text-zinc-400 hover:text-zinc-900 flex items-center gap-1 tracking-wide">
          <Plus className="w-3 h-3" /> COMPARE
        </button>
      </div>
      
      {/* Title & Price */}
      <h3 className="font-medium text-zinc-900 mb-1 leading-tight">{product.name}</h3>
      <div className="flex items-center gap-2 text-sm">
        <span className={product.originalPrice ? 'text-red-600 font-medium' : 'text-zinc-900 font-medium'}>
          ${product.price.toLocaleString()}
        </span>
        {product.originalPrice && (
          <span className="text-zinc-400 line-through text-xs">
            ${product.originalPrice.toLocaleString()}
          </span>
        )}
      </div>
    </div>
  );
}

function Pagination() {
  return (
    <div className="flex flex-col items-center mt-16 mb-8">
      <div className="flex items-center gap-2 mb-4">
        <button className="w-8 h-8 flex items-center justify-center rounded-full border border-zinc-200 text-zinc-400 hover:text-zinc-900 hover:border-zinc-300">
          <ChevronLeft className="w-4 h-4" />
        </button>
        <button className="w-8 h-8 flex items-center justify-center rounded-full text-sm font-medium hover:bg-zinc-50">1</button>
        <button className="w-8 h-8 flex items-center justify-center rounded-full text-sm font-medium hover:bg-zinc-50">2</button>
        <button className="w-8 h-8 flex items-center justify-center rounded-full text-sm font-medium hover:bg-zinc-50">3</button>
        <button className="w-8 h-8 flex items-center justify-center rounded-full text-sm font-medium bg-zinc-900 text-white">4</button>
        <button className="w-8 h-8 flex items-center justify-center rounded-full text-sm font-medium hover:bg-zinc-50">5</button>
        <span className="text-zinc-400">...</span>
        <button className="w-8 h-8 flex items-center justify-center rounded-full text-sm font-medium hover:bg-zinc-50">10</button>
        <button className="w-8 h-8 flex items-center justify-center rounded-full border border-zinc-200 text-zinc-900 hover:bg-zinc-50">
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
      <p className="text-xs text-zinc-500">You have viewed 60 out of 145 products</p>
    </div>
  );
}

function PromoBanners() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-16">
      <div className="relative h-[240px] rounded-2xl overflow-hidden group cursor-pointer">
        <Image
          src="https://images.unsplash.com/photo-1593640408182-31c70c8268f5?auto=format&fit=crop&q=80&w=1000"
          alt="Find Your Perfect Setup"
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 p-8 flex flex-col justify-end">
          <h3 className="text-2xl font-medium text-white mb-2">Find Your Perfect Setup</h3>
          <span className="text-white text-sm font-medium flex items-center gap-1 underline underline-offset-4 hover:text-zinc-200 w-fit">
            Start now <ChevronRight className="w-4 h-4" />
          </span>
        </div>
      </div>
      <div className="relative h-[240px] rounded-2xl overflow-hidden group cursor-pointer">
        <Image
          src="https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&q=80&w=1000"
          alt="Find Your Specs"
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 p-8 flex flex-col justify-end">
          <h3 className="text-2xl font-medium text-white mb-2">Find Your Specs</h3>
          <span className="text-white text-sm font-medium flex items-center gap-1 underline underline-offset-4 hover:text-zinc-200 w-fit">
            Use our spec finder <ChevronRight className="w-4 h-4" />
          </span>
        </div>
      </div>
    </div>
  );
}

function SeoText() {
  return (
    <div className="max-w-4xl my-16">
      <h2 className="text-xl font-medium mb-4">Buy a Gaming PC online</h2>
      <p className="text-sm text-zinc-600 leading-relaxed mb-4">
        Looking for the perfect gaming PC to match your competitive spirit? Explore our wide selection of rigs designed for every level of gamer — from weekend warriors to seasoned esports enthusiasts. Our collection includes prebuilt desktops, custom rigs, high-performance laptops, and mini PCs to give you the best performance on any title.
      </p>
      <p className="text-sm text-zinc-600 leading-relaxed mb-4">
        When you buy a gaming PC online with us, you get:
      </p>
      <button className="text-sm font-medium underline underline-offset-4 hover:text-zinc-600">Read more</button>
    </div>
  );
}

function SimilarTerms() {
  const terms = [
    'Prebuilt gaming PCs', 'Custom PC builds', 'RTX 4090 Desktops', 'Gaming laptops', '144Hz Monitors', 'Mechanical Keyboards',
    'Intel Core i9 PCs', 'Lightweight Laptops', 'Water-cooled PCs', 'AMD Ryzen 7 Builds', 'AMD Radeon RX 7900 XTX', 'NVIDIA RTX 4080',
    'Budget gaming PCs', 'Gaming PCs under $1500', 'Workstations', 'Creator Laptops', 'Gaming PCs up to $3000', 'Gaming PCs up to $2000'
  ];
  
  return (
    <div className="my-16">
      <h3 className="text-lg font-medium mb-6">Similar search terms</h3>
      <div className="flex flex-wrap gap-3">
        {terms.map((term) => (
          <a key={term} href="#" className="px-4 py-2 border border-zinc-200 rounded-full text-xs font-medium text-zinc-700 hover:border-zinc-400 hover:bg-zinc-50 transition-colors">
            {term}
          </a>
        ))}
      </div>
    </div>
  );
}

function RecentlyViewed() {
  const recentProducts = products.slice(0, 4);
  
  return (
    <div className="my-16 pt-16 border-t border-zinc-200">
      <h3 className="text-lg font-medium mb-8">Your recently viewed items</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {recentProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="bg-[#1C1C1C] text-zinc-400 pt-16 pb-8">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-16">
          <div>
            <h2 className="text-2xl font-medium text-white mb-1">Our community</h2>
            <p className="text-2xl font-medium italic text-white">#TECHMOTION</p>
          </div>
          <div className="flex gap-2">
            {[1, 2, 3].map((i) => (
              <div key={i} className="relative w-20 h-20 rounded-2xl bg-zinc-800 overflow-hidden">
                <Image
                  src={`https://images.unsplash.com/photo-1593640408182-31c70c8268f5?auto=format&fit=crop&q=80&w=200&sig=${i}`}
                  alt="Community"
                  fill
                  className="object-cover opacity-80 hover:opacity-100 transition-opacity cursor-pointer"
                />
              </div>
            ))}
            <button className="w-20 h-20 rounded-2xl bg-zinc-800 flex items-center justify-center hover:bg-zinc-700 transition-colors">
              <ChevronRight className="w-6 h-6 text-white" />
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 lg:gap-12 mb-16">
          <div>
            <h4 className="text-xs font-medium text-white tracking-wider mb-6">PRODUCTS</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Laptops</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Desktops</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Components</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Peripherals</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Monitors</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Networking</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Clothing</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Outlet</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-xs font-medium text-white tracking-wider mb-6">SUPPORT</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Help hub</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Store finder</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Buying guide</a></li>
              <li><a href="#" className="hover:text-white transition-colors">FAQs</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-xs font-medium text-white tracking-wider mb-6">ABOUT US</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Why use</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Work with us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact us</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-xs font-medium text-white tracking-wider mb-6">FOLLOW US</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-white transition-colors flex items-center gap-3"><div className="w-4 h-4 rounded-full border border-current flex items-center justify-center text-[8px]">in</div> Instagram</a></li>
              <li><a href="#" className="hover:text-white transition-colors flex items-center gap-3"><div className="w-4 h-4 rounded-full border border-current flex items-center justify-center text-[8px]">yt</div> YouTube</a></li>
              <li><a href="#" className="hover:text-white transition-colors flex items-center gap-3"><div className="w-4 h-4 rounded-full border border-current flex items-center justify-center text-[8px]">tk</div> TikTok</a></li>
              <li><a href="#" className="hover:text-white transition-colors flex items-center gap-3"><div className="w-4 h-4 rounded-full border border-current flex items-center justify-center text-[8px]">li</div> LinkedIn</a></li>
            </ul>
          </div>
          
          <div className="col-span-2 md:col-span-1">
            <h4 className="text-xs font-medium text-white tracking-wider mb-6">SUBSCRIBE TO OUR NEWSLETTER</h4>
            <p className="text-sm mb-6 leading-relaxed">Exclusive offers, news and contents feeding your passion. No spam, just TECH!</p>
            <div className="relative">
              <input 
                type="email" 
                placeholder="Email" 
                className="w-full bg-transparent border border-zinc-700 rounded px-4 py-3 text-sm text-white focus:outline-none focus:border-zinc-500"
              />
              <button className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-white">
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-zinc-800 text-xs">
          <div className="flex items-center gap-4 mb-4 md:mb-0">
            <span className="font-medium italic text-white text-sm">TECHMOTION</span>
            <span>© Copyright - 2025. All Rights Reserved</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-8 h-5 bg-zinc-800 rounded" />
            <div className="w-8 h-5 bg-zinc-800 rounded" />
            <div className="w-8 h-5 bg-zinc-800 rounded" />
          </div>
        </div>
      </div>
    </footer>
  );
}
