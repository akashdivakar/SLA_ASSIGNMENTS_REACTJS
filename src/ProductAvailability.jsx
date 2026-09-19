function ProductAvailability() {
  const isAvailable = true;

  return (
    <div>
      <h3>Mobile Phone</h3>
      {isAvailable && <p>Available Now</p>}
    </div>
  );
}

export default ProductAvailability;
