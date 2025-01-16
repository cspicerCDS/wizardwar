"use client"
import ProductCard from '@/components/product-card'
import { useState } from 'react'
import { Search } from 'lucide-react'

interface Product {
  img: string
  name: string
  description?: string
  price: number | string
  discount?: number
  tags?: string[]
  url: string
}

const Products = () => {

  const sampleProducts = [
    {
      img: 'https://images.unsplash.com/photo-1709884735646-897b57461d61?q=80&w=3028&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"',
      name: 'Basic Product',
      price: 99.99,
      tags: ['new'],
      url: '/products/1'
    },
    {
      img: 'https://images.unsplash.com/photo-1694426432470-08d8226772c0?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      name: 'Premium Product',
      description: 'This is a detailed description of our premium product',
      price: '149.99',
      discount: 15,
      tags: ['premium', 'bestseller', 'limited'],
      url: '/products/2'
    },
    {
      img: 'https://images.unsplash.com/photo-1722942440739-eb79d3c8dcc0?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      name: 'Simple Item',
      price: 29.99,
      url: '/products/3'
    },
    {
      img: 'https://images.unsplash.com/photo-1722942440739-eb79d3c8dcc0?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      name: 'Deluxe Package',
      description: 'Our most comprehensive offering',
      price: '299.99',
      discount: 25,
      url: '/products/4'
    },
    {
      img: 'https://images.unsplash.com/photo-1709884735646-897b57461d61?q=80&w=3028&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"',
      name: 'Standard Item',
      price: 79.99,
      url: '/products/5'
    },
    {
      img: 'https://images.unsplash.com/photo-1694426432470-08d8226772c0?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      name: 'Special Edition',
      description: 'Limited time offer',
      price: '199.99',
      discount: 10,
      url: '/products/6'
    },
    {
      img: 'https://images.unsplash.com/photo-1722942440739-eb79d3c8dcc0?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      name: 'Basic Plus',
      price: 119.99,
      tags: ['featured'],
      url: '/products/7'
    },
    {
      img: 'https://images.unsplash.com/photo-1709884735646-897b57461d61?q=80&w=3028&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"',
      name: 'Pro Package',
      description: 'For professionals',
      price: '399.99',
      discount: 20,
      tags: ['pro', 'bundle'],
      url: '/products/8'
    },
    {
      img: 'https://images.unsplash.com/photo-1694426432470-08d8226772c0?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      name: 'Starter Kit',
      price: 49.99,
      url: '/products/9'
    },
    {
      img: 'https://images.unsplash.com/photo-1722942440739-eb79d3c8dcc0?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      name: 'Ultimate Bundle',
      description: 'Everything you need',
      price: '599.99',
      discount: 30,
      url: '/products/10'
    },
    {
      img: 'https://images.unsplash.com/photo-1722942440739-eb79d3c8dcc0?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      name: 'Eco Bundle',
      description: 'Environmentally friendly package',
      price: '129.99',
      discount: 10,
      tags: ['eco', 'sustainable'],
      url: '/products/11'
    },
    {
      img: 'https://images.unsplash.com/photo-1709884735646-897b57461d61?q=80&w=3028&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      name: 'Travel Kit',
      price: 89.99,
      tags: ['travel'],
      url: '/products/12'
    },
    {
      img: 'https://images.unsplash.com/photo-1694426432470-08d8226772c0?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      name: 'Limited Edition Set',
      description: 'Only available for a short time',
      price: '249.99',
      discount: 15,
      tags: ['limited', 'exclusive'],
      url: '/products/13'
    },
    {
      img: 'https://images.unsplash.com/photo-1722942440739-eb79d3c8dcc0?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      name: 'Student Package',
      price: 69.99,
      tags: ['student', 'budget'],
      url: '/products/14'
    },
    {
      img: 'https://images.unsplash.com/photo-1709884735646-897b57461d61?q=80&w=3028&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      name: 'Family Bundle',
      description: 'Perfect for the whole family',
      price: '349.99',
      discount: 20,
      tags: ['family', 'value'],
      url: '/products/15'
    },
    {
      img: 'https://images.unsplash.com/photo-1694426432470-08d8226772c0?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      name: 'Mini Version',
      price: 39.99,
      url: '/products/16'
    },
    {
      img: 'https://images.unsplash.com/photo-1722942440739-eb79d3c8dcc0?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      name: 'Professional Kit',
      description: 'Industry standard equipment',
      price: '499.99',
      discount: 12,
      tags: ['professional', 'premium'],
      url: '/products/17'
    },
    {
      img: 'https://images.unsplash.com/photo-1709884735646-897b57461d61?q=80&w=3028&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      name: 'Seasonal Special',
      price: 159.99,
      tags: ['seasonal', 'limited'],
      url: '/products/18'
    },
    {
      img: 'https://images.unsplash.com/photo-1694426432470-08d8226772c0?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      name: 'Gift Package',
      description: 'The perfect present',
      price: '199.99',
      discount: 5,
      tags: ['gift', 'special'],
      url: '/products/19'
    },
    {
      img: 'https://images.unsplash.com/photo-1722942440739-eb79d3c8dcc0?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      name: 'Compact Solution',
      price: 79.99,
      tags: ['compact'],
      url: '/products/20'
    }
  ]
    const [searchTerm, setSearchTerm] = useState("");
    const filteredProducts = sampleProducts
    .filter((product: Product) => {
      const searchLower = searchTerm.toLowerCase();
      return (
        product.name.toLowerCase().includes(searchLower) ||
        (product.description?.toLowerCase() || '').includes(searchLower) ||
        (product.tags?.some(tag => tag.toLowerCase().includes(searchLower)) || false)
      );
    })
    .sort((a: Product, b: Product) => a.name.localeCompare(b.name));

  return (
    <>  
    <label htmlFor="search" className="text-neutral-400 mx-5 my-2">Search products</label>
    <div className="w-full flex flex-col sm:flex-row gap-4">

    <div className="relative flex-grow mx-5 mb-2">
      <input
        type="text"
        placeholder="Search products..."
        className="p-2 pl-9 rounded w-full border border-neutral-400"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <Search className="h-4 w-4 absolute left-2.5 top-1/2 transform -translate-y-1/2" />
    </div></div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
    {filteredProducts.map((product, index) => (
        <ProductCard
          key={index}
          {...product}
        />
      ))}
    </div>
    </>
  )
}

export default Products
