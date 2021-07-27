const data = {
  products: [
    {
      id: "wf",
      name: "Workflow",
      price: "199.99",
      basePrice: "199.99",
      image:
        "https://cdn.pixabay.com/photo/2016/02/19/11/19/office-1209640_960_720.jpg",
    },
    {
      id: "docgen",
      name: "Document Generation",
      price: "9.99",
      basePrice: "9.99",
      image:
        "https://cdn.pixabay.com/photo/2016/11/19/21/01/analysis-1841158_960_720.jpg",
    },
    {
      id: "form",
      name: "Form",
      price: "99.99",
      basePrice: "99.99",
      image:
        "https://cdn.pixabay.com/photo/2016/10/10/13/42/agree-1728448_960_720.jpg",
    },
  ],
  promoCodes: [
    {
      code: "FF9543D1",
      targetItems: [
        {
          id: "docgen",
          min: 10,
          newPrice: "8.99",
        },
      ],
    },
  ],
};
export default data;
