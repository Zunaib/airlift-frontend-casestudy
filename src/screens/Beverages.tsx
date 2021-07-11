import Products from "../components/product/Products";

const Beverages = () => {
  return (
    <Products
      categorySlug="beverages"
      productsPerPage={25}
      pageTitle="Beverages"
      breadCrumbs={["Home", "Beverages"]}
      tags={["Juices and Drinks", "Soft Drinks", "Water", "Tea & Coffee"]}
    />
  );
};

export default Beverages;
