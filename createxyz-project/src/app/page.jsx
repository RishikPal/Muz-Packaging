"use client";
import React from "react";

function MainComponent() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const slides = [
    {
      image:
        "https://ucarecdn.com/e975d6dd-d200-4a25-9947-fc3f79a4802e/-/format/auto/",
      alt: "Textured brown eco-friendly packaging material with natural fiber patterns",
    },
    {
      image:
        "https://ucarecdn.com/d0fd7ee1-ae1d-4d14-b83a-5f10e5eb4e82/-/format/auto/",
      alt: "Circular patterns in natural materials showing sustainable design elements",
    },
    {
      image:
        "https://ucarecdn.com/e02b8994-ed6c-40c9-9e11-530bbd49b9f2/-/format/auto/",
      alt: "Natural fiber strands drying in the sun, showcasing raw material processing",
    },
  ];
  const testimonials = [
    {
      text: "MUZ's sustainable packaging has transformed our product line. The quality is exceptional!",
      author: "Sarah Johnson, Green Foods Co.",
    },
    {
      text: "Working with MUZ has helped us reduce our environmental impact significantly.",
      author: "Michael Chen, EcoRetail",
    },
    {
      text: "The innovative designs and commitment to sustainability sets MUZ apart.",
      author: "Emma Davis, Sustainable Brands",
    },
  ];
  const [showOrderForm, setShowOrderForm] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [orderFormData, setOrderFormData] = useState({
    customer_name: "",
    email: "",
    phone: "",
    address: "",
    quantity: 1,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
      setTestimonialIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleOrderClick = (product) => {
    setSelectedProduct(product);
    setShowOrderForm(true);
  };
  const handleOrderSubmit = async (e) => {
    e.preventDefault();
    const order = {
      ...orderFormData,
      product_id: selectedProduct.id,
      status: "pending",
    };

    try {
      await create_order(order);
      setShowOrderForm(false);
      setOrderFormData({
        customer_name: "",
        email: "",
        phone: "",
        address: "",
        quantity: 1,
      });
      alert("Order placed successfully!");
    } catch (error) {
      alert("Failed to place order. Please try again.");
    }
  };

  return (
    <div className="min-h-screen font-times-new-roman">
      <head>
        <title>MUZ Packaging - Sustainable Packaging Solutions</title>
        <meta
          name="description"
          content="MUZ Packaging offers eco-friendly packaging solutions made from sustainable banana fiber. Transform your product line with our innovative designs."
        />
        <meta
          name="keywords"
          content="sustainable packaging, eco-friendly packaging, banana fiber packaging, green packaging solutions"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          property="og:title"
          content="MUZ Packaging - Sustainable Packaging Solutions"
        />
        <meta
          property="og:description"
          content="Transform your product line with our innovative, eco-friendly packaging solutions made from sustainable banana fiber."
        />
        <meta
          property="og:image"
          content="https://ucarecdn.com/b324a019-fe8d-4608-a7c9-2022d995ab00/-/format/auto/"
        />
        <link
          rel="icon"
          href="https://ucarecdn.com/b324a019-fe8d-4608-a7c9-2022d995ab00/-/format/auto/"
        />
      </head>
      <header className="fixed top-0 w-full bg-white shadow-md z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <img
                src="https://ucarecdn.com/b324a019-fe8d-4608-a7c9-2022d995ab00/-/format/auto/"
                alt="MUZ Packaging logo showing stylized MZ letters"
                className="h-12 w-12"
              />
              <div className="text-2xl font-bold text-[#2C5F2D]">
                MUZ Packaging
              </div>
            </div>
            <nav className="hidden md:flex space-x-6">
              <a href="#home" className="hover:text-[#2C5F2D]">
                Home
              </a>
              <a href="#about" className="hover:text-[#2C5F2D]">
                About Us
              </a>
              <a href="#products" className="hover:text-[#2C5F2D]">
                Products
              </a>
              <a href="#sustainability" className="hover:text-[#2C5F2D]">
                Sustainability
              </a>
              <a href="#impact" className="hover:text-[#2C5F2D]">
                Community Impact
              </a>
              <a href="#blog" className="hover:text-[#2C5F2D]">
                Blog
              </a>
              <a href="#contact" className="hover:text-[#2C5F2D]">
                Contact
              </a>
            </nav>
            <button className="md:hidden">
              <i className="fas fa-bars text-2xl"></i>
            </button>
          </div>
        </div>
      </header>

      <main className="pt-16">
        <section className="relative h-[600px] overflow-hidden">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute w-full h-full transition-opacity duration-500 ${
                currentSlide === index ? "opacity-100" : "opacity-0"
              }`}
            >
              <img
                src={slide.image}
                alt={slide.alt}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <div className="text-center text-white">
                  <h1 className="text-4xl md:text-6xl font-bold mb-6">
                    Revolutionizing Packaging with Sustainable Solutions
                  </h1>
                  <button className="bg-[#2C5F2D] text-white px-8 py-4 rounded-full text-lg font-bold shadow-[0_8px_0_rgb(35,71,36)] hover:shadow-[0_4px_0px_rgb(35,71,36)] ease-out hover:translate-y-1 transition-all">
                    Explore Our Products
                  </button>
                </div>
              </div>
            </div>
          ))}
        </section>
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">About Us</h2>
              <p className="max-w-2xl mx-auto text-gray-600">
                At MUZ, we're committed to revolutionizing the packaging
                industry through sustainable solutions. Our innovative use of
                banana fiber creates eco-friendly packaging that benefits both
                the environment and communities.
              </p>
              <button className="mt-6 text-[#2C5F2D] hover:underline">
                Learn More About Us
              </button>
            </div>
          </div>
        </section>
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <i className="fas fa-leaf text-4xl text-[#2C5F2D] mb-4"></i>
                <h3 className="text-xl font-bold mb-2">
                  Eco-Friendly Solutions
                </h3>
                <p className="text-gray-600">
                  Sustainable packaging that puts the planet first
                </p>
              </div>
              <div className="text-center">
                <i className="fas fa-lightbulb text-4xl text-[#2C5F2D] mb-4"></i>
                <h3 className="text-xl font-bold mb-2">Innovation in Design</h3>
                <p className="text-gray-600">
                  Creative solutions for modern needs
                </p>
              </div>
              <div className="text-center">
                <i className="fas fa-hands-helping text-4xl text-[#2C5F2D] mb-4"></i>
                <h3 className="text-xl font-bold mb-2">
                  Social Responsibility
                </h3>
                <p className="text-gray-600">Supporting local communities</p>
              </div>
              <div className="text-center">
                <i className="fas fa-globe-americas text-4xl text-[#2C5F2D] mb-4"></i>
                <h3 className="text-xl font-bold mb-2">Environmental Impact</h3>
                <p className="text-gray-600">Measurable positive change</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-center mb-12">
              Our Products
            </h2>
            <div className="text-center mb-8">
              <p className="text-gray-600 max-w-2xl mx-auto">
                Discover our range of eco-friendly packaging solutions made from
                sustainable banana fiber. Each product is carefully crafted to
                meet your needs while protecting our planet.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <img
                  src="https://ucarecdn.com/e975d6dd-d200-4a25-9947-fc3f79a4802e/-/format/auto/"
                  alt="Standard eco-friendly packaging box made from banana fiber"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="font-bold text-xl mb-4 text-[#2C5F2D]">
                    Standard Boxes
                  </h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center text-sm">
                      <span>Small</span>
                      <span className="font-bold">₹30–35/unit</span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span>Medium</span>
                      <span className="font-bold">₹45–50/unit</span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span>Large</span>
                      <span className="font-bold">₹70–75/unit</span>
                    </div>
                    <button
                      onClick={() =>
                        handleOrderClick({
                          id: "standard-box",
                          name: "Standard Box",
                          type: "standard",
                        })
                      }
                      className="w-full mt-4 bg-[#2C5F2D] text-white py-2 rounded-md hover:bg-[#1F4F20] transition-colors"
                    >
                      Order Now
                    </button>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <img
                  src="https://ucarecdn.com/d0fd7ee1-ae1d-4d14-b83a-5f10e5eb4e82/-/format/auto/"
                  alt="Premium eco-luxury packaging box with elegant design"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="font-bold text-xl mb-4 text-[#2C5F2D]">
                    Premium Boxes (Eco-Luxury)
                  </h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center text-sm">
                      <span>Small</span>
                      <span className="font-bold">₹50–60/unit</span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span>Medium</span>
                      <span className="font-bold">₹80–90/unit</span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span>Large</span>
                      <span className="font-bold">₹120–150/unit</span>
                    </div>
                    <button
                      onClick={() =>
                        handleOrderClick({
                          id: "premium-box",
                          name: "Premium Box",
                          type: "premium",
                        })
                      }
                      className="w-full mt-4 bg-[#2C5F2D] text-white py-2 rounded-md hover:bg-[#1F4F20] transition-colors"
                    >
                      Order Now
                    </button>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <img
                  src="https://ucarecdn.com/e02b8994-ed6c-40c9-9e11-530bbd49b9f2/-/format/auto/"
                  alt="Customizable packaging box with various design options"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="font-bold text-xl mb-4 text-[#2C5F2D]">
                    Customization Options
                  </h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center text-sm">
                      <span>Printing/Branding</span>
                      <span className="font-bold">₹5-10/unit</span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span>Water-Resistant Coating</span>
                      <span className="font-bold">₹8–12/unit</span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span>Custom Sizes/Shapes</span>
                      <span className="font-bold">₹15–20/unit</span>
                    </div>
                    <button
                      onClick={() =>
                        handleOrderClick({
                          id: "custom-box",
                          name: "Custom Box",
                          type: "custom",
                        })
                      }
                      className="w-full mt-4 bg-[#2C5F2D] text-white py-2 rounded-md hover:bg-[#1F4F20] transition-colors"
                    >
                      Customize Now
                    </button>
                  </div>
                </div>
              </div>
              <div className="bg-[#2C5F2D] text-white rounded-lg overflow-hidden shadow-md md:col-span-3 mt-8 p-8">
                <h3 className="font-bold text-2xl mb-6 text-center">
                  Bulk Order Discounts
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="text-center p-4 bg-[#1F4F20] rounded-lg">
                    <div className="text-3xl font-bold mb-2">10% OFF</div>
                    <div className="text-lg">10,000+ units</div>
                  </div>
                  <div className="text-center p-4 bg-[#1F4F20] rounded-lg">
                    <div className="text-3xl font-bold mb-2">20% OFF</div>
                    <div className="text-lg">50,000+ units</div>
                  </div>
                  <div className="text-center p-4 bg-[#1F4F20] rounded-lg">
                    <div className="text-3xl font-bold mb-2">30% OFF</div>
                    <div className="text-lg">100,000+ units</div>
                  </div>
                </div>
                <div className="text-center mt-8">
                  <button className="bg-white text-[#2C5F2D] px-8 py-3 rounded-md hover:bg-gray-100 transition-colors">
                    Contact for Bulk Orders
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              What Our Clients Say
            </h2>
            <div className="max-w-3xl mx-auto">
              <div className="text-center">
                <p className="text-xl italic mb-4">
                  {testimonials[testimonialIndex].text}
                </p>
                <p className="text-gray-600">
                  - {testimonials[testimonialIndex].author}
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {showOrderForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg p-8 max-w-md w-full">
            <h2 className="text-2xl font-bold mb-4">Place Order</h2>
            <form onSubmit={handleOrderSubmit} className="space-y-4">
              <div>
                <label className="block mb-1">Name</label>
                <input
                  type="text"
                  name="customer_name"
                  required
                  className="w-full border rounded p-2"
                  value={orderFormData.customer_name}
                  onChange={(e) =>
                    setOrderFormData({
                      ...orderFormData,
                      customer_name: e.target.value,
                    })
                  }
                />
              </div>
              <div>
                <label className="block mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full border rounded p-2"
                  value={orderFormData.email}
                  onChange={(e) =>
                    setOrderFormData({
                      ...orderFormData,
                      email: e.target.value,
                    })
                  }
                />
              </div>
              <div>
                <label className="block mb-1">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  required
                  className="w-full border rounded p-2"
                  value={orderFormData.phone}
                  onChange={(e) =>
                    setOrderFormData({
                      ...orderFormData,
                      phone: e.target.value,
                    })
                  }
                />
              </div>
              <div>
                <label className="block mb-1">Address</label>
                <textarea
                  name="address"
                  required
                  className="w-full border rounded p-2"
                  value={orderFormData.address}
                  onChange={(e) =>
                    setOrderFormData({
                      ...orderFormData,
                      address: e.target.value,
                    })
                  }
                />
              </div>
              <div>
                <label className="block mb-1">Quantity</label>
                <input
                  type="number"
                  name="quantity"
                  min="1"
                  required
                  className="w-full border rounded p-2"
                  value={orderFormData.quantity}
                  onChange={(e) =>
                    setOrderFormData({
                      ...orderFormData,
                      quantity: parseInt(e.target.value),
                    })
                  }
                />
              </div>
              <div className="flex space-x-4">
                <button
                  type="submit"
                  className="bg-[#2C5F2D] text-white px-4 py-2 rounded hover:bg-[#1F4F20]"
                >
                  Place Order
                </button>
                <button
                  type="button"
                  onClick={() => setShowOrderForm(false)}
                  className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <div className="space-y-2">
                <a href="#privacy" className="block hover:text-gray-300">
                  Privacy Policy
                </a>
                <a href="#terms" className="block hover:text-gray-300">
                  Terms of Service
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
              <div className="flex space-x-4">
                <i className="fab fa-facebook text-2xl hover:text-gray-300 cursor-pointer"></i>
                <i className="fab fa-twitter text-2xl hover:text-gray-300 cursor-pointer"></i>
                <i className="fab fa-instagram text-2xl hover:text-gray-300 cursor-pointer"></i>
                <i className="fab fa-linkedin text-2xl hover:text-gray-300 cursor-pointer"></i>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Contact Information</h3>
              <div className="space-y-2">
                <p>
                  <i className="fas fa-map-marker-alt mr-2"></i>Kolkata, West
                  Bengal
                </p>
                <p>
                  <i className="fas fa-phone mr-2"></i>+91 98830 92164
                </p>
                <p>
                  <i className="fas fa-envelope mr-2"></i>muzpackaging@gmail.com
                </p>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center">
            <p>&copy; 2025 MUZ. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default MainComponent;