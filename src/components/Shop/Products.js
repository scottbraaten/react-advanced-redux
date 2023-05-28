import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const dummy_array = [
  { id: "a1", price: 3, title: "Concert tickets", description: "fun to be at" },
  { id: "a2", price: 42, title: "Saxophone", description: "good brass" },
  {
    id: "a3",
    price: 32,
    title: "Best earphones",
    description: "look nowhere else",
  },
  {
    id: "a4",
    price: 31,
    title: "Microsoft Word",
    description: "trust me, it's worth it",
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {dummy_array.map((item) => (
          <ProductItem
            key={item.id}
            id={item.id}
            price={item.price}
            title={item.title}
            description={item.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
