export default {
  name: "order",
  type: "document",
  title: "Orders",
  fields: [
    {
      name: "customer",
      type: "object",
      title: "Customer Information",
      fields: [
        { name: "fullName", type: "string", title: "Full Name" },
        { name: "email", type: "string", title: "Email" },
        { name: "address", type: "string", title: "Address" },
        { name: "city", type: "string", title: "City" },
        { name: "country", type: "string", title: "Country" },
        { name: "postalCode", type: "string", title: "Postal Code" },
      ],
    },
    {
      name: "cartItems",
      type: "array",
      title: "Cart Items",
      of: [
        {
          type: "object",
          fields: [
              
            { name: "name", type: "string", title: "Product Name" },
            { 
              name: "price", 
              type: "number", 
              title: "Price",
              validation: (Rule: { min: (arg0: number) => { (): any; new(): any; error: { (arg0: string): any; new(): any; }; }; }) => Rule.min(0).error("Price cannot be negative"),
            },
            { name: "imageUrl", type: "url", title: "Image URL"}, // Changed from string to url
            { name: "quantity", type: "number", title: "Quantity" },
          ],
        },
      ],
    },
    {
      name: "totalAmount",
      type: "number",
      title: "Total Amount",
      validation: (Rule: { min: (arg0: number) => { (): any; new(): any; error: { (arg0: string): any; new(): any; }; }; }) => Rule.min(1).error("Total amount must be at least 1"),
    },
    {
      name: "paymentMethod",
      type: "string",
      title: "Payment Method",
    },
    {
      name: "status",
      type: "string",
      title: "Order Status",
      options: {
        list: [
          { title: "Pending", value: "pending" },
          { title: "Processing", value: "processing" },
          { title: "Shipped", value: "shipped" },
          { title: "Delivered", value: "delivered" },
          { title: "Cancelled", value: "cancelled" },
        ],
      },
    },
    {
      name: "createdAt",
      type: "datetime",
      title: "Order Date",
      initialValue: () => new Date().toISOString(), // Auto set current date
    },
  ],
};
