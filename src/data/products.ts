import type { ImageMetadata } from "astro";

export interface Product {
  id: string;
  name: string;
  nameEn: string;
  tagline: string;
  description: string;
  year: string;
  category: string;
  /** Full-bleed or cover image (remote placeholder for demo) */
  image: ImageMetadata;
  accent: string;
  url?: string;
}

import productsImage1 from "../assets/products/tobias-reich-CI8UPpze-V4-unsplash.jpg";
import productsImage2 from "../assets/products/milad-fakurian-0GwQPWhZ9GQ-unsplash.jpg";
import productsImage3 from "../assets/products/nadja-uzelac-0FckORbGMhU-unsplash.jpg";
import productsImage4 from "../assets/products/rodion-kutsaiev-pVoEPpLw818-unsplash.jpg";
import productsImage5 from "../assets/products/freestocks-Y9mWkERHYCU-unsplash.jpg";
import productsImage6 from "../assets/products/lorenzo-herrera-p0j-mE6mGo4-unsplash.jpg";

export const products: Product[] = [
  {
    id: "genshin",
    name: "提尔玛特",
    nameEn: "xxx",
    tagline: "在提尔玛特大陆，开启未知的冒险",
    description:
      "开放世界冒险游戏。在七国交织的幻想大陆中自由探索，邂逅同伴，揭开尘世的秘密。",
    year: "2020",
    category: "开放世界 · 动作 RPG",
    image: productsImage1,
    accent: "#6eb5ff",
    url: "404",
  },
  {
    id: "hsr",
    name: "深空列车",
    nameEn: "xxx",
    tagline: "踏上深空列车，驶向未知星海",
    description:
      "回合制策略 RPG。穿越不同星球，结识开拓者同伴，书写属于银河的旅途。",
    year: "2021",
    category: "回合制 · 策略 RPG",
    image: productsImage2,
    accent: "#c4a1ff",
    url: "404",
  },
  {
    id: "zzz",
    name: "地球零",
    nameEn: "xxx",
    tagline: "在新世界，成就顶尖科研强国",
    description:
      "都市奇幻动作游戏。穿梭立异维度「空洞」，与伙伴并肩作战，守护这座未来都市。",
    year: "2022",
    category: "动作 · 都市奇幻",
    image: productsImage3,
    accent: "#ff6b8a",
    url: "404",
  },
  {
    id: "hi3",
    name: "环绕3",
    nameEn: "xxx",
    tagline: "与神奇伙伴一同，对抗未知神秘力量",
    description:
      "3D 动作游戏。驾驶环绕出击，体验高燃战斗与深刻剧情交织的神秘世界。",
    year: "2023",
    category: "动作 · 战斗",
    image: productsImage4,
    accent: "#ff8fab",
    url: "404",
  },
  {
    id: "tot",
    name: "白色蒲",
    nameEn: "xxx",
    tagline: "以爱情之名，成就美好未来！",
    description: "恋爱推理游戏。成为大富翁，与爱人书写专属的情感故事。",
    year: "2024",
    category: "恋爱 · 剧情",
    image: productsImage5,
    accent: "#7ec8e3",
    url: "404",
  },
  {
    id: "bh2",
    name: "奇妙学园2",
    nameEn: "xxx",
    tagline: "少女们的奇妙物语",
    description:
      "横版射击游戏。奇妙系列经典之作，以独特画风与爽快射击体验陪伴玩家多年。",
    year: "2025",
    category: "横版 · 射击",
    image: productsImage6,
    accent: "#5ad4c8",
    url: "404",
  },
];
