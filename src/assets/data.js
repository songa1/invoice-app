export const data = [
  {
    code: "RT_14566",
    client: {
      name: "Clinton",
      email: "cl@email.com",
    },
    address: {
      from: "123 Main St",
      to: "123 Main St",
    },
    invoiceDate: new Date(2000, 1, 1),
    description: "Buying website",
    items: ["Fanta", "Soda", "Beer"],
    status: "paid",
    price: 1800,
  },
  {
    code: "RT_24564",
    client: {
      name: "Clinton",
      email: "cl@email.com",
    },
    address: {
      from: "123 Main St",
      to: "123 Main St",
    },
    invoiceDate: new Date(2010, 10, 17),
    description: "Bar's commodities",
    items: ["Oil", "Salt", "Mutzig"],
    status: "draft",
    price: 800,
  },
  {
    code: "RT_27563",
    client: {
      name: "Clinton",
      email: "cl@email.com",
    },
    address: {
      from: "123 Main St",
      to: "123 Main St",
    },
    invoiceDate: new Date(2019, 12, 17),
    description: "New orders",
    items: [],
    status: "pending",
    price: 8000,
  },
];
