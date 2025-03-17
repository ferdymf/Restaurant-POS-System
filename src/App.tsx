import React, { useState, useRef } from 'react';
import { ShoppingCart, Package, CreditCard, Trash2, Plus, Minus, X, Wallet, Receipt, Cast, Coffee, Pizza, Beer, IceCream, ChefHat, Clock, Users, Star } from 'lucide-react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  description: string;
}

interface CartItem extends Product {
  quantity: number;
}

interface PaymentMethod {
  id: string;
  name: string;
  icon: React.ReactNode;
}

interface Category {
  id: string;
  name: string;
  icon: React.ReactNode;
}

function App() {
  const [showPOS, setShowPOS] = useState(false);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [showPayment, setShowPayment] = useState(false);
  const [selectedPayment, setSelectedPayment] = useState<string>('');
  const [receivedAmount, setReceivedAmount] = useState<string>('');
  const [paymentComplete, setPaymentComplete] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [addedToCart, setAddedToCart] = useState<number | null>(null);
  
  const homePageRef = useRef(null);
  const posPageRef = useRef(null);

  const categories: Category[] = [
    { id: 'all', name: 'All Items', icon: <Package className="h-6 w-6" /> },
    { id: 'drinks', name: 'Drinks', icon: <Coffee className="h-6 w-6" /> },
    { id: 'main', name: 'Main Course', icon: <Pizza className="h-6 w-6" /> },
    { id: 'beverages', name: 'Beverages', icon: <Beer className="h-6 w-6" /> },
    { id: 'desserts', name: 'Desserts', icon: <IceCream className="h-6 w-6" /> }
  ];

  const features = [
    {
      icon: <ChefHat className="h-12 w-12 text-blue-600" />,
      title: "Premium Quality",
      description: "Experience the finest ingredients and expert preparation in every dish"
    },
    {
      icon: <Clock className="h-12 w-12 text-blue-600" />,
      title: "Fast Service",
      description: "Quick and efficient service without compromising on quality"
    },
    {
      icon: <Users className="h-12 w-12 text-blue-600" />,
      title: "Friendly Staff",
      description: "Our well-trained staff ensures a pleasant dining experience"
    },
    {
      icon: <Star className="h-12 w-12 text-blue-600" />,
      title: "Best Value",
      description: "Exceptional quality at competitive prices"
    }
  ];

  const products: Product[] = [
    {
      id: 1,
      name: "Espresso",
      price: 25000,
      category: "drinks",
      description: "Rich and bold single shot of pure coffee essence",
      image:
        "https://images.unsplash.com/photo-1579992357154-faf4bde95b3d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      name: "Cappuccino",
      price: 30000,
      category: "drinks",
      description: "Perfect balance of espresso with steamed milk and foam",
      image:
        "https://images.unsplash.com/photo-1572442388796-11668a67e53d?q=80&w=2135&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 3,
      name: "Matcha Latte",
      price: 32000,
      category: "drinks",
      description: "Premium Japanese matcha with steamed milk",
      image:
        "https://images.unsplash.com/photo-1515823064-d6e0c04616a7?w=400&auto=format&fit=crop&q=60",
    },
    {
      id: 4,
      name: "Vietnamese Coffee",
      price: 28000,
      category: "drinks",
      description: "Traditional drip coffee with condensed milk",
      image:
        "https://images.unsplash.com/photo-1558722141-76ef6ca013be?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 5,
      name: "Beef Rendang",
      price: 85000,
      category: "main",
      description: "Slow-cooked beef in rich coconut curry",
      image:
        "https://images.unsplash.com/photo-1620700668269-d3ad2a88f27e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 6,
      name: "Nasi Goreng Special",
      price: 45000,
      category: "main",
      description: "Indonesian fried rice with shrimp and chicken",
      image:
        "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=400&auto=format&fit=crop&q=60",
    },
    {
      id: 7,
      name: "Sate Ayam",
      price: 35000,
      category: "main",
      description: "Grilled chicken skewers with peanut sauce",
      image:
        "https://images.unsplash.com/photo-1529563021893-cc83c992d75d?w=400&auto=format&fit=crop&q=60",
    },
    {
      id: 8,
      name: "Gado-gado",
      price: 30000,
      category: "main",
      description: "Mixed vegetables with peanut sauce dressing",
      image:
        "https://images.unsplash.com/photo-1707269561481-a4a0370a980a?q=80&w=1952&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 9,
      name: "Soto Ayam",
      price: 32000,
      category: "main",
      description: "Traditional Indonesian chicken soup",
      image:
        "https://images.unsplash.com/photo-1572656631137-7935297eff55?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 10,
      name: "Mie Goreng",
      price: 28000,
      category: "main",
      description: "Stir-fried noodles with vegetables and chicken",
      image:
        "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=400&auto=format&fit=crop&q=60",
    },
    {
      id: 11,
      name: "Es Teh Manis",
      price: 12000,
      category: "beverages",
      description: "Sweet iced tea, Indonesian style",
      image:
        "https://images.unsplash.com/photo-1499638673689-79a0b5115d87?w=400&auto=format&fit=crop&q=60",
    },
    {
      id: 12,
      name: "Es Jeruk",
      price: 15000,
      category: "beverages",
      description: "Fresh orange juice with ice",
      image:
        "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?w=400&auto=format&fit=crop&q=60",
    },
    {
      id: 13,
      name: "Es Kelapa Muda",
      price: 18000,
      category: "beverages",
      description: "Fresh young coconut water with flesh",
      image:
        "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=400&auto=format&fit=crop&q=60",
    },
    {
      id: 14,
      name: "Es Campur",
      price: 25000,
      category: "desserts",
      description: "Mixed ice dessert with various toppings",
      image:
        "https://sahabatcoconutoil.com/wp-content/uploads/2024/09/Blog-2024-09-09T112020.891-768x684.png",
    },
    {
      id: 15,
      name: "Pisang Goreng",
      price: 20000,
      category: "desserts",
      description: "Crispy fried banana fritters",
      image:
        "https://images.pexels.com/photos/25630042/pexels-photo-25630042/free-photo-of-food-on-a-table.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 16,
      name: "Klepon",
      price: 15000,
      category: "desserts",
      description: "Sweet rice balls with palm sugar filling",
      image:
        "https://images.pexels.com/photos/7429251/pexels-photo-7429251.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 17,
      name: "Martabak Manis",
      price: 50000,
      category: "desserts",
      description: "Sweet thick pancake with various toppings",
      image:
        "https://akcdn.detik.net.id/visual/2023/07/31/1410628072_169.jpeg?w=750&q=90",
    },
    {
      id: 18,
      name: "Bubur Sumsum",
      price: 18000,
      category: "desserts",
      description: "Rice porridge with palm sugar sauce",
      image:
        "https://cdn.rri.co.id/berita/Meulaboh/o/1715678442448-resepku_yummy/4uglemag5tf98jn.jpeg",
    },
  ];

  const paymentMethods: PaymentMethod[] = [
    { id: 'cash', name: 'Cash', icon: <Cast className="h-6 w-6" /> },
    { id: 'card', name: 'Credit Card', icon: <CreditCard className="h-6 w-6" /> },
    { id: 'ewallet', name: 'E-Wallet', icon: <Wallet className="h-6 w-6" /> }
  ];

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  const addToCart = (product: Product) => {
    setCart(currentCart => {
      const existingItem = currentCart.find(item => item.id === product.id);
      if (existingItem) {
        return currentCart.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...currentCart, { ...product, quantity: 1 }];
    });
    setAddedToCart(product.id);
    setTimeout(() => setAddedToCart(null), 1000);
  };

  const removeFromCart = (productId: number) => {
    setCart(currentCart => currentCart.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId: number, delta: number) => {
    setCart(currentCart =>
      currentCart.map(item => {
        if (item.id === productId) {
          const newQuantity = item.quantity + delta;
          return newQuantity > 0
            ? { ...item, quantity: newQuantity }
            : item;
        }
        return item;
      }).filter(item => item.quantity > 0)
    );
  };

  const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR'
    }).format(price);
  };

  const handlePayment = () => {
    if (!selectedPayment) return;
    
    if (selectedPayment === 'cash') {
      const received = parseFloat(receivedAmount.replace(/[^0-9.-]+/g, ''));
      if (received < total) return;
    }
    
    setPaymentComplete(true);
    setTimeout(() => {
      setShowPayment(false);
      setPaymentComplete(false);
      setSelectedPayment('');
      setReceivedAmount('');
      setCart([]);
    }, 2000);
  };

  const getChange = () => {
    if (!receivedAmount) return 0;
    const received = parseFloat(receivedAmount.replace(/[^0-9.-]+/g, ''));
    return Math.max(0, received - total);
  };

  return (
    <div className="min-h-screen">
      <CSSTransition
        in={!showPOS}
        timeout={300}
        classNames="page-transition"
        unmountOnExit
        nodeRef={homePageRef}
      >
        <div ref={homePageRef} className="min-h-screen bg-white">
          {/* Hero Section */}
          <div className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white">
            <div className="max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
              <div className="text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-6">Welcome to Our Restaurant</h1>
                <p className="text-xl md:text-2xl mb-8">Experience the perfect blend of taste and technology</p>
                <button
                  onClick={() => setShowPOS(true)}
                  className="bg-white text-blue-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-colors duration-300"
                >
                  Order Now
                </button>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
          </div>

          {/* Features Section */}
          <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900">Why Choose Us</h2>
              <p className="mt-4 text-lg text-gray-600">Discover what makes our restaurant special</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg text-center">
                  <div className="flex justify-center mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Featured Menu Section */}
          <div className="bg-gray-50 py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900">Featured Menu</h2>
                <p className="mt-4 text-lg text-gray-600">A taste of our most popular dishes</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {products.slice(0, 3).map(product => (
                  <div key={product.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
                    <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-gray-900">{product.name}</h3>
                      <p className="text-gray-600 mt-2">{formatPrice(product.price)}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="text-center mt-12">
                <button
                  onClick={() => setShowPOS(true)}
                  className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors duration-300"
                >
                  View Full Menu
                </button>
              </div>
            </div>
          </div>

          {/* Footer */}
          <footer className="bg-gray-900 text-white py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Opening Hours</h3>
                  <p>Monday - Friday: 8:00 AM - 10:00 PM</p>
                  <p>Saturday - Sunday: 9:00 AM - 11:00 PM</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
                  <p>123 Restaurant Street</p>
                  <p>City, Country</p>
                  <p>Phone: (123) 456-7890</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
                  <div className="flex space-x-4">
                    <a href="#" className="hover:text-blue-400 transition-colors">Instagram</a>
                    <a href="#" className="hover:text-blue-400 transition-colors">Facebook</a>
                    <a href="#" className="hover:text-blue-400 transition-colors">Twitter</a>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </CSSTransition>

      <CSSTransition
        in={showPOS}
        timeout={300}
        classNames="page-transition"
        unmountOnExit
        nodeRef={posPageRef}
      >
        <div ref={posPageRef} className="min-h-screen bg-gray-100">
          <nav className="bg-white shadow-lg">
            <div className="max-w-7xl mx-auto px-4 py-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Package className="h-8 w-8 text-blue-600" />
                  <span className="ml-2 text-xl font-semibold text-gray-800">POS System</span>
                </div>
                <button
                  onClick={() => setShowPOS(false)}
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Back to Home
                </button>
              </div>
            </div>
          </nav>

          <div className="max-w-7xl mx-auto px-4 py-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Products Section */}
              <div className="lg:col-span-2">
                <div className="bg-white rounded-lg shadow-lg p-6">
                  {/* Categories */}
                  <div className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">Categories</h2>
                    <div className="flex space-x-4 overflow-x-auto pb-2">
                      {categories.map(category => (
                        <button
                          key={category.id}
                          onClick={() => setSelectedCategory(category.id)}
                          className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                            selectedCategory === category.id
                              ? 'bg-blue-600 text-white'
                              : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                          }`}
                        >
                          {category.icon}
                          <span>{category.name}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Products Grid */}
                  <div className="menu-grid-container">
                    <TransitionGroup className="menu-grid">
                      {filteredProducts.map(product => (
                        <CSSTransition
                          key={product.id}
                          timeout={300}
                          classNames="menu-item-transition"
                        >
                          <div 
                            className={`menu-item bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 ${
                              addedToCart === product.id ? 'added-to-cart' : ''
                            }`}
                          >
                            <div className="relative overflow-hidden">
                              <img 
                                src={product.image} 
                                alt={product.name} 
                                className="w-full h-48 object-cover transition-transform duration-300"
                              />
                              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <p className="text-white text-center px-4 transform translate-y-4 hover:translate-y-0 transition-transform duration-300">
                                  {product.description}
                                </p>
                              </div>
                            </div>
                            <div className="p-4">
                              <h3 className="text-lg font-semibold">{product.name}</h3>
                              <p className="text-gray-600 text-sm mt-1">{product.description}</p>
                              <p className="text-blue-600 font-semibold mt-2">{formatPrice(product.price)}</p>
                              <button
                                onClick={() => addToCart(product)}
                                className="add-to-cart-button mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-all duration-300 flex items-center justify-center space-x-2"
                              >
                                <ShoppingCart className="h-5 w-5" />
                                <span>Add to Cart</span>
                              </button>
                            </div>
                          </div>
                        </CSSTransition>
                      ))}
                    </TransitionGroup>
                  </div>
                </div>
              </div>

              {/* Cart Section */}
              <div className="lg:col-span-1">
                <div className="bg-white rounded-lg shadow-lg p-6 sticky top-8">
                  <div className="flex items-center mb-6">
                    <ShoppingCart className="h-6 w-6 text-blue-600" />
                    <h2 className="text-2xl font-semibold ml-2">Cart</h2>
                  </div>

                  {cart.length === 0 ? (
                    <p className="text-gray-500 text-center py-8">Your cart is empty</p>
                  ) : (
                    <>
                      <div className="space-y-4 mb-6">
                        {cart.map(item => (
                          <div key={item.id} className="flex items-center justify-between border-b pb-4">
                            <div>
                              <h3 className="font-medium">{item.name}</h3>
                              <p className="text-gray-600">{formatPrice(item.price)}</p>
                            </div>
                            <div className="flex items-center space-x-2">
                              <button
                                onClick={() => updateQuantity(item.id, -1)}
                                className="p-1 rounded-full hover:bg-gray-100 transition-colors"
                              >
                                <Minus className="h-4 w-4" />
                              </button>
                              <span className="w-8 text-center">{item.quantity}</span>
                              <button
                                onClick={() => updateQuantity(item.id, 1)}
                                className="p-1 rounded-full hover:bg-gray-100 transition-colors"
                              >
                                <Plus className="h-4 w-4" />
                              </button>
                              <button
                                onClick={() => removeFromCart(item.id)}
                                className="p-1 text-red-500 rounded-full hover:bg-red-50 transition-colors"
                              >
                                <Trash2 className="h-4 w-4" />
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="border-t pt-4">
                        <div className="flex justify-between items-center mb-6">
                          <span className="text-lg font-semibold">Total:</span>
                          <span className="text-xl font-bold text-blue-600">{formatPrice(total)}</span>
                        </div>
                        <button
                          onClick={() => setShowPayment(true)}
                          className="w-full bg-green-600 text-white py-3 rounded-lg flex items-center justify-center space-x-2 hover:bg-green-700 transition-colors"
                        >
                          <CreditCard className="h-5 w-5" />
                          <span>Checkout</span>
                        </button>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Payment Modal */}
          {showPayment && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
              <div className="bg-white rounded-lg max-w-md w-full p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-semibold">Payment</h2>
                  <button
                    onClick={() => setShowPayment(false)}
                    className="p-1 hover:bg-gray-100 rounded-full transition-colors"
                  >
                    <X className="h-6 w-6" />
                  </button>
                </div>

                {paymentComplete ? (
                  <div className="text-center py-8">
                    <Receipt className="h-16 w-16 text-green-500 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-green-600 mb-2">Payment Successful!</h3>
                    <p className="text-gray-600">Thank you for your purchase</p>
                  </div>
                ) : (
                  <>
                    <div className="mb-6">
                      <h3 className="font-semibold mb-3">Select Payment Method</h3>
                      <div className="grid grid-cols-3 gap-4">
                        {paymentMethods.map(method => (
                          <button
                            key={method.id}
                            onClick={() => setSelectedPayment(method.id)}
                            className={`p-4 border rounded-lg flex flex-col items-center justify-center gap-2 transition-all duration-300 ${
                              selectedPayment === method.id
                                ? 'border-blue-500 bg-blue-50'
                                : 'hover:bg-gray-50'
                            }`}
                          >
                            {method.icon}
                            <span className="text-sm">{method.name}</span>
                          </button>
                        ))}
                      </div>
                    </div>

                    {selectedPayment === 'cash' && (
                      <div className="mb-6">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Received Amount
                        </label>
                        <input
                          type="text"
                          value={receivedAmount}
                          onChange={(e) => setReceivedAmount(e.target.value)}
                          className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                          placeholder="Enter amount"
                        />
                        {receivedAmount && (
                          <div className="mt-2 text-sm text-gray-600">
                            Change: {formatPrice(getChange())}
                          </div>
                        )}
                      </div>
                    )}

                    <div className="space-y-4">
                      <div className="flex justify-between text-lg font-semibold">
                        <span>Total Amount:</span>
                        <span>{formatPrice(total)}</span>
                      </div>
                      <button
                        onClick={handlePayment}
                        disabled={!selectedPayment || (selectedPayment === 'cash' && getChange() < 0)}
                        className={`w-full py-3 rounded-lg flex items-center justify-center space-x-2 transition-all duration-300 ${
                          selectedPayment && !(selectedPayment === 'cash' && getChange() < 0)
                            ? 'bg-green-600 hover:bg-green-700 text-white'
                            : 'bg-gray-300 cursor-not-allowed text-gray-500'
                        }`}
                      >
                        <CreditCard className="h-5 w-5" />
                        <span>Process Payment</span>
                      </button>
                    </div>
                  </>
                )}
              </div>
            </div>
          )}
        </div>
      </CSSTransition>
    </div>
  );
}

export default App;