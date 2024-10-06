import React from 'react'

const brands = [
  { name: 'EPSON', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Epson_logo.svg/2560px-Epson_logo.svg.png' },
  { name: 'HP', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/HP_logo_2012.svg/2048px-HP_logo_2012.svg.png' },
  { name: 'DELL', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Dell_Logo.png/1200px-Dell_Logo.png' },
  { name: 'Apple', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/488px-Apple_logo_black.svg.png' },
  { name: 'Mi', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Xiaomi_logo.svg/2048px-Xiaomi_logo.svg.png' },
  { name: 'Logitech', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Logitech_logo.svg/2560px-Logitech_logo.svg.png' },
  { name: 'JBL', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/JBL_logo.svg/2560px-JBL_logo.svg.png' },
  { name: 'ASUS', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/ASUS_Logo.svg/2560px-ASUS_Logo.svg.png' }
]

const SelectedBrands: React.FC = () => {
  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold mb-4">Selected Brands</h2>
      <div className="flex flex-wrap justify-center items-center gap-8">
        {brands.map((brand) => (
          <div key={brand.name} className="w-24 h-24 flex items-center justify-center">
            <img src={brand.logo} alt={brand.name} className="max-w-full max-h-full object-contain" />
          </div>
        ))}
      </div>
    </div>
  )
}

export default SelectedBrands