interface ImageSlider {
  url: string;
}
export const LandingpageImage: ImageSlider[] = [
  {
    url: "https://plus.unsplash.com/premium_photo-1669704098750-7cd22c35422b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bW9kZWx8ZW58MHx8MHx8fDA%3D",
  },
  {
    url: "https://images.unsplash.com/photo-1648270694882-a89bf37abd37?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWVuJTIwbW9kZWx8ZW58MHx8MHx8fDA%3D",
  },
  {
    url: "https://plus.unsplash.com/premium_photo-1670948083554-dde9411f3d1c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bWVuJTIwbW9kZWx8ZW58MHx8MHx8fDA%3D",
  },
];
export const ImageSlider: ImageSlider[] = [
  {
    url: "https://images.unsplash.com/photo-1503342394128-c104d54dba01?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fE1vZGVsJTIwZHAlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    url: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fE1vZGVsJTIwZHAlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    url: "https://images.unsplash.com/photo-1521577352947-9bb58764b69a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fE1vZGVsJTIwZHAlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    url: "https://images.unsplash.com/photo-1462804993656-fac4ff489837?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fE1vZGVsJTIwZHAlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    url: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8TW9kZWwlMjBkcCUyMGltYWdlfGVufDB8fDB8fHww",
  },
  {
    url: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8TW9kZWwlMjBkcCUyMGltYWdlfGVufDB8fDB8fHww",
  },
];

type AlphabetLetter =
  | "A"
  | "B"
  | "C"
  | "D"
  | "E"
  | "F"
  | "G"
  | "H"
  | "I"
  | "J"
  | "K"
  | "L"
  | "M"
  | "N"
  | "O"
  | "P"
  | "Q"
  | "R"
  | "S"
  | "T"
  | "U"
  | "V"
  | "W"
  | "X"
  | "Y"
  | "Z";

export const Alphabet: AlphabetLetter[] = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

interface HoverImage {
  name: string;
  photo: string;
  tag: string;
  date: string;
}

export const HoverList: HoverImage[] = [
  {
    name: "Women fashion",
    photo:
      "https://plus.unsplash.com/premium_photo-1682095661711-f5d67d0e75a9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d29tZW4lMjBtb2RlbHxlbnwwfHwwfHx8MA%3D%3D",
    tag: "Arean Homee",
    date: "23th March 2023",
  },
  {
    name: "Men fashion",
    photo:
      "https://images.unsplash.com/photo-1515907467242-93cd67ebc7d6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bWFsZSUyMG1vZGVsfGVufDB8fDB8fHww",
    tag: "Khadim & tom ford",
    date: "25 Jan 2020",
  },
  {
    name: "Pet fashion",
    photo:
      "https://images.unsplash.com/photo-1517423568366-8b83523034fd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHBldCUyMGZhc2hpb258ZW58MHx8MHx8fDA%3D",
    tag: "Tom Fordnn",
    date: "02 Nov 2017",
  },
  {
    name: "Exclusive fashion",
    photo:
      "https://images.unsplash.com/photo-1632525230528-ec17c49bc168?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGV4Y2x1c2l2ZSUyMGZhc2hpb258ZW58MHx8MHx8fDA%3D",
    tag: "Khadimm & Son",
    date: "10 Oct 2015",
  },
];

export interface HoverCard {
  name: string;
  photo: string;
}

export const HoverCardList: HoverCard[] = [
  {
    name: "Women fashion",
    photo:
      "https://plus.unsplash.com/premium_photo-1682095661711-f5d67d0e75a9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d29tZW4lMjBtb2RlbHxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    name: "Men fashion",
    photo:
      "https://images.unsplash.com/photo-1515907467242-93cd67ebc7d6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bWFsZSUyMG1vZGVsfGVufDB8fDB8fHww",
  },
  {
    name: "Pet fashion",
    photo:
      "https://images.unsplash.com/photo-1517423568366-8b83523034fd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHBldCUyMGZhc2hpb258ZW58MHx8MHx8fDA%3D",
  },
  {
    name: "Women fashion",
    photo:
      "https://plus.unsplash.com/premium_photo-1682095661711-f5d67d0e75a9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d29tZW4lMjBtb2RlbHxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    name: "Men fashion",
    photo:
      "https://images.unsplash.com/photo-1515907467242-93cd67ebc7d6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bWFsZSUyMG1vZGVsfGVufDB8fDB8fHww",
  },
  {
    name: "Pet fashion",
    photo:
      "https://images.unsplash.com/photo-1517423568366-8b83523034fd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHBldCUyMGZhc2hpb258ZW58MHx8MHx8fDA%3D",
  },
  {
    name: "Women fashion",
    photo:
      "https://plus.unsplash.com/premium_photo-1682095661711-f5d67d0e75a9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d29tZW4lMjBtb2RlbHxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    name: "Men fashion",
    photo:
      "https://images.unsplash.com/photo-1515907467242-93cd67ebc7d6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bWFsZSUyMG1vZGVsfGVufDB8fDB8fHww",
  },
  {
    name: "Pet fashion",
    photo:
      "https://images.unsplash.com/photo-1517423568366-8b83523034fd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHBldCUyMGZhc2hpb258ZW58MHx8MHx8fDA%3D",
  },
];
