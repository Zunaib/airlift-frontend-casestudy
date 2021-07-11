import Products from "../components/product/Products";

const Frozen = () => {
  return (
    <Products
      categorySlug="meat-frozen"
      productsPerPage={25}
      pageTitle="Meat (Frozen)"
      breadCrumbs={["Home", "Meat (Frozen)"]}
      tags={["Mutton", "Beef", "Chicken", "Fish"]}
    />
  );
};

export default Frozen;
