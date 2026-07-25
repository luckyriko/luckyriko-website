export interface NewsItem {
	slug: string;
	title: string;
	summary: string;
	date: string;
	category: string;
	image: string;
	body: string[];
}

export const news: NewsItem[] = [
	{
		slug: 'global-expansion-2025',
		title: '米哈游持续推进全球化布局',
		summary: '公司在技术研发与内容出海方面持续投入，为全球玩家带来高品质互动体验。',
		date: '2025-11-18',
		category: '公司动态',
		image:
			'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80',
		body: [
			'米哈游始终以「技术宅拯救世界」为使命，持续在卡通渲染、人工智能、云游戏等前沿领域深耕。',
			'面向全球市场，我们不断优化本地化体验与社区运营，让更多玩家感受原创 IP 的魅力。',
			'未来，米哈游将继续探索技术与内容的边界，为用户创造超出预期的产品与服务。',
		],
	},
	{
		slug: 'tech-innovation-lab',
		title: '前沿技术实验室成果亮相',
		summary: '渲染与 AI 相关研究成果落地产品管线，提升内容生产效率与画面表现力。',
		date: '2025-09-02',
		category: '技术',
		image:
			'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80',
		body: [
			'米哈游技术团队长期关注实时渲染、程序化内容生成与智能辅助创作等方向。',
			'最新成果已逐步应用于多款产品，帮助美术与程序团队更高效地协作交付。',
			'我们将持续开放内部技术交流，吸引更多志同道合的技术宅加入。',
		],
	},
	{
		slug: 'campus-recruiting-2026',
		title: '2026 届校园招聘正式启动',
		summary: '面向程序、美术、策划、运营等多类岗位开放校招与实习机会。',
		date: '2025-08-15',
		category: '招聘',
		image:
			'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80',
		body: [
			'我们诚邀对游戏与二次元文化充满热情的同学加入米哈游。',
			'岗位覆盖程序与技术、美术与表现、产品策划、市场商务、质量管理、国际化与运营等方向。',
			'详细职位与投递方式请访问招聘官网，开启你的技术宅之旅。',
		],
	},
	{
		slug: 'community-charity',
		title: '公益计划：用创造力回馈社会',
		summary: '米哈游持续开展公益合作，关注教育与文化创意领域的社会价值。',
		date: '2025-06-20',
		category: '公益',
		image:
			'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&w=1200&q=80',
		body: [
			'作为互联网文创企业，我们希望以内容与技术的力量，为更多人带来积极影响。',
			'公益项目覆盖青少年教育、文化传播等方向，并与合作伙伴共同推动长期计划。',
			'感谢玩家与社区伙伴的支持，让善意得以被看见、被传递。',
		],
	},
];

export function getNewsBySlug(slug: string) {
	return news.find((item) => item.slug === slug);
}
