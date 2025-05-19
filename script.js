const products = [
  {
    name: "Butter Croissant",
    category: "pastries",
    dietary: [],
    price: 3.50,
    rating: 4.5,
    description: "Flaky, golden croissant baked fresh daily with premium butter. Made with organic flour and local honey.",
    image: "https://images.pexels.com/photos/808941/pexels-photo-808941.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    name: "Chocolate Cake",
    category: "cakes",
    dietary: [],
    price: 25.00,
    rating: 5.0,
    description: "Decadent chocolate cake with rich ganache and moist layers. Perfect for celebrations.",
    image: "https://images.pexels.com/photos/1707251/pexels-photo-1707251.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    name: "Assorted Macarons",
    category: "cookies",
    dietary: ["gluten-free"],
    price: 12.00,
    rating: 4.0,
    description: "Delicate macarons in vibrant flavors, perfect for gifting. Gluten-free and made with almond flour.",
    image: "https://images.pexels.com/photos/1126359/pexels-photo-1126359.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    name: "Sourdough Baguette",
    category: "pastries",
    dietary: [],
    price: 4.00,
    rating: 4.8,
    description: "Crisp, chewy baguette with a tangy sourdough flavor. Crafted with a 48-hour fermentation process.",
    image: "https://images.pexels.com/photos/1387076/pexels-photo-1387076.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    name: "Vanilla Cupcake",
    category: "cakes",
    dietary: [],
    price: 3.00,
    rating: 4.3,
    description: "Light vanilla cupcake topped with creamy buttercream. Made with Madagascar vanilla.",
    image: "https://images.pexels.com/photos/1055272/pexels-photo-1055272.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    name: "Oatmeal Raisin Cookie",
    category: "cookies",
    dietary: [],
    price: 2.50,
    rating: 4.2,
    description: "Chewy cookie packed with oats and sweet raisins. A wholesome treat for all ages.",
    image: "https://images.pexels.com/photos/3762062/pexels-photo-3762062.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    name: "Pain au Chocolat",
    category: "pastries",
    dietary: [],
    price: 4.50,
    rating: 4.7,
    description: "Buttery pastry filled with rich dark chocolate. Made with 70% cocoa for a deep flavor.",
    image: "https://images.pexels.com/photos/3892469/pexels-photo-3892469.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    name: "Red Velvet Cake",
    category: "cakes",
    dietary: [],
    price: 28.00,
    rating: 4.9,
    description: "Moist red velvet cake with cream cheese frosting. A classic Southern delight.",
    image: "https://images.pexels.com/photos/132694/pexels-photo-132694.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    name: "Gluten-Free Brownie",
    category: "cookies",
    dietary: ["gluten-free"],
    price: 3.50,
    rating: 4.4,
    description: "Fudgy brownie made with gluten-free ingredients. Rich and indulgent for all to enjoy.",
    image: "https://images.pexels.com/photos/1691920/pexels-photo-1691920.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    name: "Almond Danish",
    category: "pastries",
    dietary: [],
    price: 5.00,
    rating: 4.6,
    description: "Flaky danish with sweet almond paste and icing. Topped with toasted almonds.",
    image: "https://images.pexels.com/photos/2061927/pexels-photo-2061927.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    name: "Lemon Tart",
    category: "cakes",
    dietary: [],
    price: 6.00,
    rating: 4.5,
    description: "Tangy lemon curd in a buttery shortcrust pastry. Made with fresh, zesty lemons.",
    image: "https://images.pexels.com/photos/461060/pexels-photo-461060.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    name: "Chocolate Chip Cookie",
    category: "cookies",
    dietary: [],
    price: 2.00,
    rating: 4.8,
    description: "Classic cookie with gooey chocolate chips. Baked with brown butter for extra depth.",
    image: "https://images.pexels.com/photos/230325/pexels-photo-230325.jpeg?auto=compress&cs=tinysrgb&w=600"
  }
];

// Validate product data
function validateProducts(products) {
  return products.every(product => {
    const isValid = product.name && typeof product.name === 'string' &&
                    product.category && typeof product.category === 'string' &&
                    product.dietary && Array.isArray(product.dietary) &&
                    product.price && typeof product.price === 'number' &&
                    product.rating && typeof product.rating === 'number' &&
                    product.description && typeof product.description === 'string' &&
                    product.image && typeof product.image === 'string';
    if (!isValid) {
      console.error('Invalid product data:', product);
    }
    return isValid;
  });
}

// Ensure DOM is fully loaded before running scripts
document.addEventListener('DOMContentLoaded', () => {
  // GSAP Animations
  gsap.registerPlugin(ScrollTrigger);

  // Optimized Hero Parallax
  gsap.to('.hero-bg', {
    scrollTrigger: {
      trigger: '.hero-section',
      scrub: 0.5,
      start: 'top top',
      end: 'bottom top'
    },
    yPercent: 15,
    scale: 1.2,
    ease: 'none'
  });

  // Hero Text Animation
  gsap.from('.animate-hero', {
    opacity: 0,
    y: 60,
    duration: 1.2,
    stagger: 0.3,
    ease: 'power3.out'
  });

  // Section Animations
  gsap.utils.toArray(['#shop', '#footer']).forEach(section => {
    gsap.from(section, {
      opacity: 0,
      y: 80,
      duration: 1,
      scrollTrigger: {
        trigger: section,
        start: 'top 80%',
        toggleActions: 'play none none none'
      }
    });
  });

  // Sticky Navbar
  const navbar = document.getElementById('navbar');
  const sticky = navbar.offsetTop;
  window.addEventListener('scroll', () => {
    if (window.pageYOffset > sticky) {
      navbar.classList.add('sticky');
    } else {
      navbar.classList.remove('sticky');
    }
  });

  // Product Rendering
  const productGrid = document.getElementById('product-grid');
  const categoryTabs = document.querySelectorAll('.category-tab');
  let currentPage = 1;
  const productsPerPage = 4;
  let filteredProducts = [...products];

  function renderProducts(productsToRender) {
    try {
      if (!productGrid) throw new Error('Product grid element not found');
      productGrid.innerHTML = '';
      const start = (currentPage - 1) * productsPerPage;
      const end = start + productsPerPage;
      const paginatedProducts = productsToRender.slice(start, end);

      paginatedProducts.forEach((product, index) => {
        try {
          const stars = Math.floor(product.rating);
          const halfStar = product.rating % 1 >= 0.5 ? '<i class="fas fa-star-half-alt text-gold"></i>' : '';
          const emptyStars = 5 - stars - (halfStar ? 1 : 0);
          const ratingStars = '<i class="fas fa-star text-gold"></i>'.repeat(stars) + halfStar + '<i class="far fa-star text-gold"></i>'.repeat(emptyStars);
          
          const productEl = document.createElement('div');
          productEl.className = 'product-card';
          productEl.setAttribute('data-category', product.category);
          productEl.setAttribute('data-dietary', product.dietary.join(','));
          productEl.innerHTML = `
            <img src="${product.image}" alt="${product.name} - ${product.description}" class="product-img">
            <div>
              <h3>${product.name}</h3>
              <div class="rating">
                ${ratingStars}
                <span>(${product.rating})</span>
              </div>
              <p>${product.description}</p>
              ${product.dietary.length > 0 ? `<p class="dietary">${product.dietary.map(d => d.charAt(0).toUpperCase() + d.slice(1)).join(', ')}</p>` : ''}
              <p class="price">$${product.price.toFixed(2)}</p>
              <div class="flavor-select">
                <label for="flavor-${product.name.replace(/\s+/g, '-')}-${index}">Flavor:</label>
                <select id="flavor-${product.name.replace(/\s+/g, '-')}-${index}">
                  <option value="original">Original</option>
                  <option value="chocolate">Chocolate</option>
                  <option value="vanilla">Vanilla</option>
                </select>
              </div>
              <div class="actions">
                <button class="add-to-cart" 
                  data-name="${product.name}" data-price="${product.price}" data-image="${product.image}" data-flavor="original">Add to Cart</button>
                <button class="add-to-wishlist" 
                  data-name="${product.name}" data-price="${product.price}" data-image="${product.image}">
                  <i class="fas fa-heart"></i>
                </button>
              </div>
            </div>
          `;
          productGrid.appendChild(productEl);

          // Update cart flavor on selection
          const flavorSelect = productEl.querySelector(`#flavor-${product.name.replace(/\s+/g, '-')}-${index}`);
          flavorSelect.addEventListener('change', () => {
            const addToCartBtn = productEl.querySelector('.add-to-cart');
            addToCartBtn.setAttribute('data-flavor', flavorSelect.value);
          });
        } catch (error) {
          console.error(`Error rendering product at index ${index}:`, error, product);
        }
      });
      updatePagination();
    } catch (error) {
      console.error('Error in renderProducts:', error);
      productGrid.innerHTML = '<p style="text-align: center; color: #dc2626;">Failed to load products. Check console for details.</p>';
    }
  }

  function updatePagination() {
    try {
      const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
      const pagination = document.getElementById('pagination');
      if (!pagination) throw new Error('Pagination element not found');
      pagination.innerHTML = '';
      for (let i = 1; i <= totalPages; i++) {
        const button = document.createElement('button');
        button.textContent = i;
        button.className = i === currentPage ? 'active' : '';
        button.addEventListener('click', () => {
          currentPage = i;
          renderProducts(filteredProducts);
        });
        pagination.appendChild(button);
      }
    } catch (error) {
      console.error('Error in updatePagination:', error);
    }
  }

  // Category Tabs
  if (categoryTabs) {
    categoryTabs.forEach(tab => {
      tab.addEventListener('click', () => {
        categoryTabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        const category = tab.getAttribute('data-category');
        filteredProducts = category === 'all' ? [...products] : products.filter(p => p.category === category);
        currentPage = 1;
        renderProducts(filteredProducts);
      });
    });
  } else {
    console.error('Category tabs not found');
  }

  // Filtering and Sorting
  function applyFilters() {
    try {
      const dietaryFilter = document.getElementById('dietary-filter');
      const sortBy = document.getElementById('sort-by');
      const searchBar = document.getElementById('search-bar');

      if (!dietaryFilter || !sortBy || !searchBar) {
        throw new Error('Filter elements not found');
      }

      const dietary = dietaryFilter.value;
      const sort = sortBy.value;
      const search = searchBar.value.toLowerCase();
      let tempProducts = [...products];

      // Apply category filter from active tab
      const activeTab = document.querySelector('.category-tab.active');
      const category = activeTab ? activeTab.getAttribute('data-category') : 'all';
      if (category !== 'all') tempProducts = tempProducts.filter(p => p.category === category);

      // Apply dietary and search filters
      tempProducts = tempProducts.filter(product => {
        const matchesDietary = dietary === 'all' || product.dietary.includes(dietary);
        const matchesSearch = product.name.toLowerCase().includes(search) || product.description.toLowerCase().includes(search);
        return matchesDietary && matchesSearch;
      });

      // Apply sorting
      if (sort === 'price-low') tempProducts.sort((a, b) => a.price - b.price);
      else if (sort === 'price-high') tempProducts.sort((a, b) => b.price - a.price);

      filteredProducts = tempProducts;
      currentPage = 1;
      renderProducts(filteredProducts);
    } catch (error) {
      console.error('Error in applyFilters:', error);
      if (productGrid) {
        productGrid.innerHTML = '<p style="text-align: center; color: #dc2626;">Failed to filter products. Check console for details.</p>';
      }
    }
  }

  const dietaryFilter = document.getElementById('dietary-filter');
  const sortBy = document.getElementById('sort-by');
  const searchBar = document.getElementById('search-bar');

  if (dietaryFilter) dietaryFilter.addEventListener('change', applyFilters);
  if (sortBy) sortBy.addEventListener('change', applyFilters);
  if (searchBar) searchBar.addEventListener('input', applyFilters);

  // Cart Functionality
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  const cartSidebar = document.getElementById('cart-sidebar');
  const cartBtn = document.getElementById('cart-btn');
  const closeCart = document.getElementById('close-cart');
  const cartItems = document.getElementById('cart-items');
  const cartTotal = document.getElementById('cart-total');
  const cartCount = document.getElementById('cart-count');

  function updateCart() {
    try {
      if (!cartItems || !cartTotal || !cartCount) throw new Error('Cart elements not found');
      cartItems.innerHTML = '';
      let total = 0;
      cart.forEach((item, index) => {
        total += item.price * item.quantity;
        const itemEl = document.createElement('div');
        itemEl.className = 'cart-item';
        itemEl.innerHTML = `
          <img src="${item.image}" alt="${item.name}">
          <div>
            <h4>${item.name} (${item.flavor})</h4>
            <p>$${item.price.toFixed(2)}</p>
            <div class="quantity-control">
              <button class="decrease-quantity" data-index="${index}">-</button>
              <span>${item.quantity}</span>
              <button class="increase-quantity" data-index="${index}">+</button>
            </div>
          </div>
          <button class="remove-item" data-index="${index}"><i class="fas fa-trash"></i></button>
        `;
        cartItems.appendChild(itemEl);
      });
      cartTotal.textContent = total.toFixed(2);
      cartCount.textContent = cart.reduce((sum, item) => sum + item.quantity, 0);
      cartCount.classList.toggle('hidden', cart.length === 0);
      localStorage.setItem('cart', JSON.stringify(cart));

      document.querySelectorAll('.decrease-quantity').forEach(btn => {
        btn.addEventListener('click', () => {
          const index = btn.getAttribute('data-index');
          if (cart[index].quantity > 1) cart[index].quantity -= 1;
          else cart.splice(index, 1);
          updateCart();
        });
      });
      document.querySelectorAll('.increase-quantity').forEach(btn => {
        btn.addEventListener('click', () => {
          const index = btn.getAttribute('data-index');
          cart[index].quantity += 1;
          updateCart();
        });
      });
      document.querySelectorAll('.remove-item').forEach(btn => {
        btn.addEventListener('click', () => {
          const index = btn.getAttribute('data-index');
          cart.splice(index, 1);
          updateCart();
        });
      });
    } catch (error) {
      console.error('Error updating cart:', error);
    }
  }

  if (cartBtn) cartBtn.addEventListener('click', () => cartSidebar.classList.add('active'));
  if (closeCart) closeCart.addEventListener('click', () => cartSidebar.classList.remove('active'));

  // Wishlist Functionality
  let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
  const wishlistSidebar = document.getElementById('wishlist-sidebar');
  const wishlistBtn = document.getElementById('wishlist-btn');
  const closeWishlist = document.getElementById('close-wishlist');
  const wishlistItems = document.getElementById('wishlist-items');
  const wishlistCount = document.getElementById('wishlist-count');

  function updateWishlist() {
    try {
      if (!wishlistItems || !wishlistCount) throw new Error('Wishlist elements not found');
      wishlistItems.innerHTML = '';
      wishlist.forEach((item, index) => {
        const itemEl = document.createElement('div');
        itemEl.className = 'wishlist-item';
        itemEl.innerHTML = `
          <img src="${item.image}" alt="${item.name}">
          <div>
            <h4>${item.name}</h4>
            <p>$${item.price.toFixed(2)}</p>
          </div>
          <button class="add-to-cart-from-wishlist" 
            data-name="${item.name}" data-price="${item.price}" data-image="${item.image}" data-flavor="original">Add to Cart</button>
          <button class="remove-wishlist" data-index="${index}"><i class="fas fa-trash"></i></button>
        `;
        wishlistItems.appendChild(itemEl);
      });
      wishlistCount.textContent = wishlist.length;
      wishlistCount.classList.toggle('hidden', wishlist.length === 0);
      localStorage.setItem('wishlist', JSON.stringify(wishlist));

      document.querySelectorAll('.add-to-cart-from-wishlist').forEach(btn => {
        btn.addEventListener('click', () => {
          const name = btn.getAttribute('data-name');
          const price = parseFloat(btn.getAttribute('data-price'));
          const image = btn.getAttribute('data-image');
          const flavor = btn.getAttribute('data-flavor');
          const existingItem = cart.find(item => item.name === name && item.flavor === flavor);
          if (existingItem) existingItem.quantity += 1;
          else cart.push({ name, price, image, flavor, quantity: 1 });
          updateCart();
        });
      });
      document.querySelectorAll('.remove-wishlist').forEach(btn => {
        btn.addEventListener('click', () => {
          const index = btn.getAttribute('data-index');
          wishlist.splice(index, 1);
          updateWishlist();
        });
      });
    } catch (error) {
      console.error('Error updating wishlist:', error);
    }
  }

  if (wishlistBtn) wishlistBtn.addEventListener('click', () => wishlistSidebar.classList.add('active'));
  if (closeWishlist) closeWishlist.addEventListener('click', () => wishlistSidebar.classList.remove('active'));

  // Event Delegation for Product Actions
  if (productGrid) {
    productGrid.addEventListener('click', e => {
      try {
        if (e.target.closest('.add-to-cart')) {
          const btn = e.target.closest('.add-to-cart');
          const name = btn.getAttribute('data-name');
          const price = parseFloat(btn.getAttribute('data-price'));
          const image = btn.getAttribute('data-image');
          const flavor = btn.getAttribute('data-flavor');
          const existingItem = cart.find(item => item.name === name && item.flavor === flavor);
          if (existingItem) existingItem.quantity += 1;
          else cart.push({ name, price, image, flavor, quantity: 1 });
          updateCart();
          cartSidebar.classList.add('active');
        } else if (e.target.closest('.add-to-wishlist')) {
          const btn = e.target.closest('.add-to-wishlist');
          const name = btn.getAttribute('data-name');
          const price = parseFloat(btn.getAttribute('data-price'));
          const image = btn.getAttribute('data-image');
          if (!wishlist.find(item => item.name === name)) {
            wishlist.push({ name, price, image });
            updateWishlist();
          }
        }
      } catch (error) {
        console.error('Error handling product action:', error);
      }
    });
  }

  // Checkout Button
  const checkoutBtn = document.getElementById('checkout-btn');
  if (checkoutBtn) {
    checkoutBtn.addEventListener('click', () => {
      if (cart.length > 0) alert(`Proceeding to checkout. Total: $${cartTotal.textContent}`);
      else alert('Your cart is empty!');
    });
  }

  // Initialize
  try {
    if (!validateProducts(products)) {
      throw new Error('Product data validation failed');
    }
    updateCart();
    updateWishlist();
    const defaultTab = document.querySelector('.category-tab');
    if (defaultTab) {
      defaultTab.classList.add('active');
      applyFilters();
    } else {
      throw new Error('Default category tab not found');
    }
  } catch (error) {
    console.error('Error during initialization:', error);
    if (productGrid) {
      productGrid.innerHTML = '<p style="text-align: center; color: #dc2626;">Initialization failed. Check console for details.</p>';
    }
  }
});