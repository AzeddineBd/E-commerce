import NavBar from "../components/NavBar";
import Button from "../components/Button";
import Footer from "../components/Footer";
import Quantity from "../components/Quantity";
import { useCart } from "../context/useCart";
import { Link } from "react-router-dom";

const ViewCart = () => {
  const { cartItems, setCartItems } = useCart();
  const updateQuantity = (id, newQty) => {
    const updatedCart = cartItems.map((item) =>
      item.id === id ? { ...item, quantity: newQty } : item
    );
    setCartItems(updatedCart);
  };

  const subTotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const deletProduct = (id) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <div className="container mx-auto md:pt-32 pt-24 flex-grow">
        <div>
          <div className="text-center mb-20">
            <h1 className="md:text-3xl text-xl whitespace-nowrap font-medium mb-6">
              Your cart items
            </h1>
            <a href="/" className="text-[var(--primary-color)] underline">
              Back to home
            </a>
          </div>

          {/* Table For Desktop*/}

          <div className="md:block hidden mb-8">
            <table className="w-full text-center">
              {/* Head */}

              <thead className="border-b border-[var(--border-color)]">
                <tr>
                  <th scope="col" className="px-6 py-3 font-medium text-lg">
                    Product
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 font-medium text-lg"
                  ></th>
                  <th scope="col" className="px-6 py-3 font-medium text-lg">
                    Price
                  </th>
                  <th scope="col" className="px-6 py-3 font-medium text-lg">
                    Quantity
                  </th>
                  <th scope="col" className="px-6 py-3 font-medium text-lg">
                    Total
                  </th>
                </tr>
              </thead>

              {/* Body */}

              <tbody>
                {cartItems.map((item, index) => (
                  <tr
                    key={index}
                    className="border-b border-[var(--border-color)]"
                  >
                    <td>
                      <img
                        src={`../public/assets/products_img/${item.image}`}
                        alt="Product Image"
                        className="max-w-40 px-4 py-2"
                      />
                    </td>
                    <td
                      scope="row"
                      className="px-3 py-2 font-medium whitespace-nowrap text-start"
                    >
                      <span className="block">{item.name}</span>
                      <button
                        onClick={() => deletProduct(item.id)}
                        className="text-[var(--primary-color)] underline cursor-pointer"
                      >
                        Remove
                      </button>
                    </td>
                    <td className="px-3 py-2">{item.price}</td>
                    <td className="px-3 py-2">
                      <Quantity
                        value={item.quantity}
                        onChange={(newQty) => updateQuantity(item.id, newQty)}
                      />
                    </td>
                    {/* fix total */}
                    <td className="px-3 py-2">
                      ${(item.price * item.quantity).toFixed(2)}
                    </td>
                  </tr>
                ))}

                {/* Line 3 */}

                <tr>
                  <td></td>
                  <td
                    scope="row"
                    className="px-3 py-2 font-medium whitespace-nowrap"
                  ></td>
                  <td className="px-3 py-2 font-semibold whitespace-nowrap">
                    Sub-total
                  </td>
                  <td className="px-3 py-2 font-semibold">
                    ${subTotal.toFixed(2)}
                  </td>
                  <td className="px-3 py-2">
                    <Link to="/auth">
                      <Button>Check-out</Button>
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table>
            <p className="text-end text-sm text-[var(--text-muted-color)] pt-4">
              Tax and shipping cost will be calculated later
            </p>
          </div>

          {/* Table for Mobile */}

          <div className="md:hidden block">
            <table className="w-full mx-auto">
              {/* Table Head */}

              <thead className="text-center">
                <tr className="border-b border-[var(--border-color)]">
                  <th scope="col" className="px-3 py-4 font-medium text-md">
                    Product
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-4 font-medium text-lg"
                  ></th>
                  <th scope="col" className="px-3 py-4 font-medium text-md">
                    Price
                  </th>
                </tr>
              </thead>

              {/* Table Body */}

              <tbody>
                {cartItems.map((item, index) => (
                  <tr
                    key={index}
                    className="border-b border-[var(--border-color)]"
                  >
                    <td>
                      <img
                        src={`../public/assets/products_img/${item.image}`}
                        alt="Product Image"
                        className="max-w-32 px-4 py-4"
                      />
                    </td>
                    <td
                      scope="row"
                      className="px-3 py-4 font-medium text-sm text-start"
                    >
                      <span className="block ">{item.name}</span>
                      <button
                        onClick={() => deletProduct(item.id)}
                        className="text-[var(--primary-color)] underline"
                      >
                        Remove
                      </button>
                    </td>
                    <td className="px-3 py-4">
                      <p>${(item.price * item.quantity).toFixed(2)}</p>

                      <Quantity
                        value={item.quantity}
                        onChange={(newQty) => updateQuantity(item.id, newQty)}
                      />
                    </td>
                  </tr>
                ))}
                <tr className="text-center w-full ">
                  <td className="px-3 py-4 font-semibold text-md">Sub-total</td>
                  <td></td>
                  <td className="px-3 py-4 font-semibold text-md">
                    ${subTotal.toFixed(2)}
                  </td>
                </tr>
              </tbody>
            </table>
            <p className="w-full text-center text-sm text-[var(--text-muted-color)]">
              Tax and shipping cost will be calculated later
            </p>
            <div className="text-center py-4">
              <Link to="/auth">
                <Button size="large">Check-out</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer className="mt-auto" />
    </div>
  );
};

export default ViewCart;
