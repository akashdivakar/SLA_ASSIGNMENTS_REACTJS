import { useState } from "react";

function CustomerList() {
  const [customers, setCustomers] = useState(["Alice", "Bob", "Charlie"]);
  const [customerName, setCustomerName] = useState("");
  const [btnText, setBtnText] = useState("Add Customer");

  const handleAddCustomer = () => {
    if (customerName.trim() !== "") {
      setCustomers([...customers, customerName]);
      setCustomerName("");
      setBtnText("Added! ✓");
      setTimeout(() => setBtnText("Add Customer"), 1500);
    }
  };

  const handleDeleteCustomer = (indexToDelete) => {
    const updatedList = customers.filter((_, index) => index !== indexToDelete);
    setCustomers(updatedList);
  };

  return (
    <div>
      <h3>3. Customer List (useState with Array)</h3>
      <input
        type="text"
        placeholder="Enter customer name..."
        value={customerName}
        onChange={(e) => setCustomerName(e.target.value)}
      />{" "}
      <button onClick={handleAddCustomer}>{btnText}</button>

      <ul>
        {customers.map((customer, index) => (
          <li key={index}>
            {customer}{" "}
            <button onClick={() => handleDeleteCustomer(index)}>🗑️ Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CustomerList;
