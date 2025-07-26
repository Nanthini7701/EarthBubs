
    const products = [
      {
        name: "Diaper Combo",
        price: 1300,
        mrp: 1850,
        image: "https://i.imgur.com/D1dSkqK.jpg"
      },
      {
        name: "Marcus",
        price: 1199,
        mrp: 1466,
        image: "https://i.imgur.com/vdD2WWJ.jpg"
      },
      {
        name: "Halemons Floral",
        price: 1399,
        mrp: 1466,
        image: "https://i.imgur.com/YL1AFSn.jpg"
      },
      {
        name: "Natural Soap",
        price: 599,
        mrp: 600,
        image: "https://i.imgur.com/UfC7H2D.jpg"
      },
      {
        name: "Lavern",
        price: 9399,
        mrp: 10466,
        image: "https://i.imgur.com/hmFGb6Z.jpg"
      },
      {
        name: "Philips",
        price: 599,
        mrp: 600,
        image: "https://i.imgur.com/hqZTdcg.jpg"
      }
    ];

    function renderCards(productList) {
      const container = document.getElementById("productGrid");
      container.innerHTML = "";
      productList.forEach(product => {
        container.innerHTML += `
          <div class="card">
            <div class="new-tag">NEW</div>
            <img src="${product.image}" alt="${product.name}">
            <button class="buy-button">Buy</button>
            <div class="card-content">
              <h3>${product.name}</h3>
              <div class="stars">★★★★★</div>
              <div class="price-section">
                <del>₹${product.mrp.toFixed(2)}</del>
                <strong>₹${product.price.toFixed(2)}</strong>
              </div>
            </div>
          </div>
        `;
      });
    }

    function toggleFilter() {
      const menu = document.getElementById("filterMenu");
      menu.style.display = menu.style.display === "block" ? "none" : "block";
    }

    function sortProducts(type) {
      let sorted = [...products];
      if (type === 'low') {
        sorted.sort((a, b) => a.price - b.price);
      } else if (type === 'high') {
        sorted.sort((a, b) => b.price - a.price);
      }
      renderCards(sorted);
      toggleFilter();
    }

    // Initial load
    renderCards(products);

     let currentPage = 1;
    const buttons = document.querySelectorAll(".pagination button");

    function goToPage(num) {
      currentPage = num;
      buttons.forEach(btn => btn.classList.remove("active"));
      buttons[num].classList.add("active");
    }

    function prevPage() {
      if (currentPage > 1) {
        goToPage(currentPage - 1);
      }
    }

    function nextPage() {
      if (currentPage < 5) {
        goToPage(currentPage + 1);
      }
    }