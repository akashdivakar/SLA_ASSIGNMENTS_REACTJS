// Assignment: Project 3 (Prop Children - Day 39) - Task 3: Product Availability (&& Operator)
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
