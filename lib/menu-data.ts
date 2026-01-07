export type MenuItem = {
  id: string
  name: string
  price: number
  category: "burgers" | "twisters" | "sliders" | "sides" | "fries"
  image: string
  description?: string
  isPair?: boolean
}

export const menuItems: MenuItem[] = [
  // Burgers
  { 
    id: "b1", 
    name: "Crispy Burger", 
    price: 640, 
    category: "burgers", 
    image: "https://i.postimg.cc/1RbqxFd1/Whats-App-Image-2026-01-07-at-5-00-02-AM.jpg"
  },
  { 
    id: "b2", 
    name: "Double Crispy", 
    price: 790, 
    category: "burgers", 
    image: "https://i.postimg.cc/Kvrv9gSV/Whats-App-Image-2026-01-07-at-4-57-52-AM.jpg"
  },
  { 
    id: "b3", 
    name: "Grill Burger", 
    price: 690, 
    category: "burgers", 
    image: "https://i.postimg.cc/zDc982z1/Whats-App-Image-2026-01-07-at-2-33-25-AM.jpg"
  },
  { 
    id: "b4", 
    name: "Crunchy Mozzarella", 
    price: 790, 
    category: "burgers", 
    image: "https://i.postimg.cc/vZ2yjrPq/Whats-App-Image-2026-01-07-at-4-57-57-AM.jpg"
  },
  { 
    id: "b5", 
    name: "Classic Beef", 
    price: 620, 
    category: "burgers", 
    image: "https://i.postimg.cc/8P1VzK9W/Whats-App-Image-2026-01-07-at-4-57-56-AM.jpg"
  },
  { 
    id: "b6", 
    name: "Boom Beef", 
    price: 650, 
    category: "burgers", 
    image: "https://i.postimg.cc/sxsb1x6M/Whats-App-Image-2026-01-07-at-4-57-52-AM-(1).jpg"
  },
  { 
    id: "b7", 
    name: "Double Boom", 
    price: 930, 
    category: "burgers", 
    image: "https://i.postimg.cc/hjq53hqx/Whats-App-Image-2026-01-07-at-4-57-52-AM-(2).jpg"
  },
  { 
    id: "b8", 
    name: "Truffle Beef", 
    price: 1090, 
    category: "burgers", 
    image: "https://i.postimg.cc/1X3MLq7c/Whats-App-Image-2026-01-07-at-4-57-58-AM.jpg"
  },
  { 
    id: "b9", 
    name: "Buffalo Burger", 
    price: 690, 
    category: "burgers", 
    image: "https://i.postimg.cc/VkCmq2RC/Whats-App-Image-2026-01-07-at-4-57-56-AM-(3).jpg"
  },
  { 
    id: "b10", 
    name: "Cheesy Beef", 
    price: 750, 
    category: "burgers", 
    image: "https://i.postimg.cc/CMRhMZqn/Whats-App-Image-2026-01-07-at-4-57-57-AM-(3).jpg"
  },

  // Twisters
  { 
    id: "t1", 
    name: "B.B.Q Twister", 
    price: 590, 
    category: "twisters", 
    image: "https://i.postimg.cc/nzDQMcjh/Whats-App-Image-2026-01-07-at-4-57-56-AM-(1).jpg"
  },
  { 
    id: "t2", 
    name: "Flaming Twister", 
    price: 590, 
    category: "twisters", 
    image: "https://i.postimg.cc/nzDQMcjh/Whats-App-Image-2026-01-07-at-4-57-56-AM-(1).jpg"
  },
  { 
    id: "t3", 
    name: "Jalapeno Twister", 
    price: 650, 
    category: "twisters", 
    image: "https://i.postimg.cc/nzDQMcjh/Whats-App-Image-2026-01-07-at-4-57-56-AM-(1).jpg"
  },

  // Sliders
  { 
    id: "s1", 
    name: "Doritos Slider", 
    price: 760, 
    category: "sliders", 
    isPair: true, 
    image: "https://i.postimg.cc/7LC5QYNP/Whats-App-Image-2026-01-07-at-4-57-54-AM.jpg"
  },
  { 
    id: "s2", 
    name: "Cheetos Slider", 
    price: 760, 
    category: "sliders", 
    isPair: true, 
    image: "https://i.postimg.cc/6QGQfb9b/Whats-App-Image-2026-01-07-at-4-57-55-AM.jpg"
  },
  { 
    id: "s3", 
    name: "Mix Slider", 
    price: 790, 
    category: "sliders", 
    isPair: true, 
    image: "https://i.postimg.cc/ZKR4LsH0/Whats-App-Image-2026-01-07-at-4-57-54-AM-(1).jpg"
  },
  { 
    id: "s4", 
    name: "Original Slider", 
    price: 660, 
    category: "sliders", 
    isPair: true, 
    image: "https://i.postimg.cc/N01c03Gq/Whats-App-Image-2026-01-07-at-4-57-55-AM-(2).jpg"
  },
  { 
    id: "s5", 
    name: "Grill Slider", 
    price: 720, 
    category: "sliders", 
    isPair: true, 
    image: "https://i.postimg.cc/BZPrwkkn/Gemini-Generated-Image-45bzrv45bzrv45bz.png"
  },
  { 
    id: "s6", 
    name: "Volcano Slider", 
    price: 690, 
    category: "sliders", 
    isPair: true, 
    image: "https://i.postimg.cc/qMyVQfns/Whats-App-Image-2026-01-07-at-4-57-54-AM-(3).jpg"
  },

  // Sides
  { 
    id: "sd1", 
    name: "Dynamite Chicken", 
    price: 450, 
    category: "sides", 
    image: "https://i.postimg.cc/XvvzRtZf/Whats-App-Image-2026-01-07-at-4-57-58-AM-(1).jpg"
  },
  { 
    id: "sd2", 
    name: "4 Pcs Chicken Strips", 
    price: 470, 
    category: "sides", 
    image: "https://i.postimg.cc/wMYFjrBP/Whats-App-Image-2026-01-07-at-4-57-59-AM.jpg"
  },
  { 
    id: "sd3", 
    name: "Nuggets (6 Pcs)", 
    price: 330, 
    category: "sides", 
    image: "https://i.postimg.cc/DyCRS532/Whats-App-Image-2026-01-07-at-4-57-55-AM-(6).jpg"
  },
  { 
    id: "sd4", 
    name: "Nuggets (9 Pcs)", 
    price: 390, 
    category: "sides", 
    image: "https://i.postimg.cc/DyCRS532/Whats-App-Image-2026-01-07-at-4-57-55-AM-(6).jpg"
  },

  // Fries
  { 
    id: "f1", 
    name: "Regular Fries", 
    price: 340, 
    category: "fries", 
    image: "https://i.postimg.cc/C1QfZW75/Whats-App-Image-2026-01-07-at-4-57-53-AM-(1).jpg"
  },
  { 
    id: "f2", 
    name: "Cajun Fries", 
    price: 370, 
    category: "fries", 
    image: "https://i.postimg.cc/C1QfZW75/Whats-App-Image-2026-01-07-at-4-57-53-AM-(1).jpg"
  },
  { 
    id: "f3", 
    name: "Flame Fries", 
    price: 440, 
    category: "fries", 
    image: "https://i.postimg.cc/Vs0FqRt0/Whats-App-Image-2026-01-07-at-4-57-53-AM-(2).jpg"
  },
  { 
    id: "f4", 
    name: "Dynamite Fries", 
    price: 620, 
    category: "fries", 
    image: "https://i.postimg.cc/dQC8k0MV/Whats-App-Image-2026-01-07-at-4-57-53-AM-(3).jpg"
  },
]

export const branches = [
  { name: "Satellite Town", phone: "0307-1007097" },
  { name: "Mumtaz Market", phone: "0327-9100076" },
  { name: "Rahwali", phone: "0301-0602020" },
]
