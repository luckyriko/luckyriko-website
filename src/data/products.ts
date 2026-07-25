export interface Product {
	id: string;
	name: string;
	nameEn: string;
	tagline: string;
	description: string;
	year: string;
	category: string;
	/** Full-bleed or cover image (remote placeholder for demo) */
	image: string;
	accent: string;
	url?: string;
}

export const products: Product[] = [
	{
		id: 'genshin',
		name: '原神',
		nameEn: 'Genshin Impact',
		tagline: '在提瓦特大陆，开启未知的冒险',
		description:
			'开放世界冒险游戏。在七国交织的幻想大陆中自由探索，邂逅同伴，揭开尘世的秘密。',
		year: '2020',
		category: '开放世界 · 动作 RPG',
		image:
			'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1600&q=80',
		accent: '#6eb5ff',
		url: 'https://ys.mihoyo.com/',
	},
	{
		id: 'hsr',
		name: '崩坏：星穹铁道',
		nameEn: 'Honkai: Star Rail',
		tagline: '踏上星穹列车，驶向未知星海',
		description:
			'回合制策略 RPG。穿越不同星球，结识开拓者同伴，书写属于银河的旅途。',
		year: '2023',
		category: '回合制 · 策略 RPG',
		image:
			'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&w=1600&q=80',
		accent: '#c4a1ff',
		url: 'https://hsr.mihoyo.com/',
	},
	{
		id: 'zzz',
		name: '绝区零',
		nameEn: 'Zenless Zone Zero',
		tagline: '在新艾利都，成为顶尖代理人',
		description:
			'都市奇幻动作游戏。穿梭立异维度「空洞」，与伙伴并肩作战，守护这座未来都市。',
		year: '2024',
		category: '动作 · 都市奇幻',
		image:
			'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?auto=format&fit=crop&w=1600&q=80',
		accent: '#ff6b8a',
		url: 'https://zzz.mihoyo.com/',
	},
	{
		id: 'hi3',
		name: '崩坏3',
		nameEn: 'Honkai Impact 3rd',
		tagline: '与女武神一同，对抗崩坏',
		description:
			'3D 动作游戏。驾驶女武神出击，体验高燃战斗与深刻剧情交织的崩坏世界。',
		year: '2016',
		category: '动作 · 三消战斗',
		image:
			'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&w=1600&q=80',
		accent: '#ff8fab',
		url: 'https://www.bh3.com/',
	},
	{
		id: 'tot',
		name: '未定事件簿',
		nameEn: 'Tears of Themis',
		tagline: '以律法之名，追寻真相',
		description:
			'恋爱推理游戏。成为律师，与搭档解开案件谜团，书写专属的情感故事。',
		year: '2020',
		category: '恋爱 · 推理',
		image:
			'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1600&q=80',
		accent: '#7ec8e3',
		url: 'https://tot.mihoyo.com/',
	},
	{
		id: 'bh2',
		name: '崩坏学园2',
		nameEn: 'Honkai Gakuen 2',
		tagline: '少女们的崩坏物语',
		description:
			'横版射击游戏。崩坏系列经典之作，以独特画风与爽快射击体验陪伴玩家多年。',
		year: '2014',
		category: '横版 · 射击',
		image:
			'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1600&q=80',
		accent: '#5ad4c8',
	},
];
