import "./App.css";
import { CatalogueProvider } from "./Providers/catalogue";
import { CartProvider } from "./Providers/cart";
import ProductList from "./components/Product-list";

function App() {
  return (
    <div className="App">
      <CatalogueProvider>
        <CartProvider>
          <ProductList type="catalogue" />
          <ProductList type="cart" />
        </CartProvider>
      </CatalogueProvider>
    </div>
  );
}

export default App;
