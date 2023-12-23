const products = [
  {
    _id: "1",
    title: "T-shirt",
    variation: [
      {
        color: "red",
        image:
          "https://png.pngtree.com/element_our/png/20180828/yellow-t-shirt-mockup-png_72954.jpg",
      },
      {
        color: "blue",
        image:
          "https://seanese.com/cdn/shop/products/mockup-084fa717_2048x.jpg?v=1500319426",
      },
      {
        color: "green",
        image:
          "https://png.pngtree.com/element_our/png/20180828/yellow-t-shirt-mockup-png_72954.jpg",
      },
    ],
    price: 520,
    size: [{ sizeName: "xs" }, { sizeName: "lg" }, { sizeName: "m" }],
  },
  {
    _id: "2",
    title: "T-shirt",
    variation: [
      {
        color: "green",
        image:
          "https://png.pngtree.com/element_our/png/20180828/yellow-t-shirt-mockup-png_72954.jpg",
      },
      {
        color: "yellow",
        image:
          "https://png.pngtree.com/element_our/png/20180828/yellow-t-shirt-mockup-png_72954.jpg",
      },
    ],
    size: [{ sizeName: "s" }, { sizeName: "xl" }],
    price: 550,
  },
  {
    _id: "3",
    title: "T-shirt",
    variation: [
      {
        color: "black",
        image:
          "https://seanese.com/cdn/shop/products/mockup-084fa717_2048x.jpg?v=1500319426",
      },
      {
        color: "green",
        image:
          "https://png.pngtree.com/element_our/png/20180828/yellow-t-shirt-mockup-png_72954.jpg",
      },
    ],
    size: [{ sizeName: "m" }, { sizeName: "xxl" }],
    price: 480,
  },
  {
    _id: "4",
    title: "T-shirt",
    variation: [
      {
        color: "purple",
        image:
          "https://png.pngtree.com/element_our/png/20180828/yellow-t-shirt-mockup-png_72954.jpg",
      },
      {
        color: "orange",
        image:
          "https://png.pngtree.com/element_our/png/20180828/yellow-t-shirt-mockup-png_72954.jpg",
      },
    ],
    size: [{ sizeName: "l" }, { sizeName: "m" }, { sizeName: "s" }],
    price: 490,
  },
];

export default products;
