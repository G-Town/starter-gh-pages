export const DISHES =
  [
    {
      id: 0,
      name: 'Name',
      image: process.env.PUBLIC_URL + '/assets/images/red1.jpg',
      category: 'mains',
      label: 'Hot',
      price: '4.99',
      featured: true,
      description: 'Description'
    },
    {
      id: 1,
      name: 'Zucchipakoda',
      image: process.env.PUBLIC_URL + '/assets/images/zucchipakoda.png',
      category: 'appetizer',
      label: '',
      price: '1.99',
      featured: false,
      description: 'Deep fried Zucchini coated with mildly spiced Chickpea flour batter accompanied with a sweet-tangy tamarind sauce'
    },
    {
      id: 2,
      name: 'Vadonut',
      image: process.env.PUBLIC_URL + '/assets/images/vadonut.png',
      category: 'appetizer',
      label: 'New',
      price: '1.99',
      featured: false,
      description: 'A quintessential ConFusion experience, is it a vada or is it a donut?'
    },
    {
      id: 3,
      name: 'ElaiCheese Cake',
      image: process.env.PUBLIC_URL + '/assets/images/elaicheesecake.png',
      category: 'dessert',
      label: '',
      price: '2.99',
      featured: false,
      description: 'A delectable, semi-sweet New York Style Cheese Cake, with Graham cracker crust and spiced with Indian cardamoms'
    }
  ];