export interface Carditem {
  id?: number;
  image: string;
  title: string;
  description: string;
  inStok: boolean;
}

export interface MusicPlaylist {
  id: number;
  image: string;
  songName: string;
  SingerName: string;
  favorite: boolean;
}

export const cardData: Carditem[] = [
  {
    id: 1,
    image:
      "https://plus.unsplash.com/premium_photo-1661322640130-f6a1e2c36653?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Apple",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    inStok: false,
  },
  {
    id: 2,
    image:
      "https://plus.unsplash.com/premium_photo-1724255863045-2ad716767715?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFuZ298ZW58MHx8MHx8fDA%3D",
    title: "Mango",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    inStok: false,
  },
  {
    id: 3,
    image:
      "https://plus.unsplash.com/premium_photo-1671013032586-3e9a5c49ce3c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fG9yYW5nZXxlbnwwfHwwfHx8MA%3D%3D",
    title: "Orange",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    inStok: false,
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1617112848923-cc2234396a8d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGFwYXlhfGVufDB8fDB8fHww",
    title: "Papaya",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    inStok: false,
  },
  {
    id: 5,
    image:
      "https://images.unsplash.com/photo-1604425009198-26ab86fc4f8b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z3JhcHMlMjBmcnV0ZXN8ZW58MHx8MHx8fDA%3D",
    title: "Graps",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    inStok: false,
  },
];

export const musicPlaylist: MusicPlaylist[] = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1494232410401-ad00d5433cfa?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    songName: "Jhol",
    SingerName: "Cocke studio",
    favorite: false,
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1494232410401-ad00d5433cfa?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    songName: "Jhol-2",
    SingerName: "Cocke studio-2",
    favorite: false,
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1494232410401-ad00d5433cfa?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    songName: "Jhol-3",
    SingerName: "Cocke studio -3",
    favorite: false,
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1494232410401-ad00d5433cfa?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    songName: "Jhol-4",
    SingerName: "Cocke studio-4",
    favorite: false,
  },
  {
    id: 5,
    image:
      "https://images.unsplash.com/photo-1494232410401-ad00d5433cfa?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    songName: "Jhol-5",
    SingerName: "Cocke studio-5",
    favorite: false,
  },
];
