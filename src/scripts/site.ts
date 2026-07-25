const themeKey = 'mh-theme';

function getTheme() {
	return document.documentElement.getAttribute('data-theme') === 'light' ? 'light' : 'dark';
}

function setTheme(theme: 'light' | 'dark') {
	document.documentElement.setAttribute('data-theme', theme);
	localStorage.setItem(themeKey, theme);
}

document.querySelectorAll('[data-theme-toggle]').forEach((button) => {
	button.addEventListener('click', () => {
		setTheme(getTheme() === 'dark' ? 'light' : 'dark');
	});
});

const header = document.querySelector<HTMLElement>('[data-header]');
const onScroll = () => {
	header?.classList.toggle('is-scrolled', window.scrollY > 8);
};
onScroll();
window.addEventListener('scroll', onScroll, { passive: true });

const nav = document.querySelector('[data-nav]');
const toggle = document.querySelector('[data-nav-toggle]');

toggle?.addEventListener('click', () => {
	const open = nav?.classList.toggle('is-open');
	toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
	toggle.setAttribute('aria-label', open ? '关闭导航菜单' : '打开导航菜单');
});

nav?.querySelectorAll('a').forEach((link) => {
	link.addEventListener('click', () => {
		nav.classList.remove('is-open');
		toggle?.setAttribute('aria-expanded', 'false');
		toggle?.setAttribute('aria-label', '打开导航菜单');
	});
});

const revealEls = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window && revealEls.length) {
	const observer = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					entry.target.classList.add('is-visible');
					observer.unobserve(entry.target);
				}
			});
		},
		{ threshold: 0.16, rootMargin: '0px 0px -8% 0px' },
	);
	revealEls.forEach((el) => observer.observe(el));
} else {
	revealEls.forEach((el) => el.classList.add('is-visible'));
}

/** 首页：全屏分段吸附 + 锚点导航高亮 */
function initHomePanels() {
	if (!document.body.classList.contains('page-home')) return;

	const sections = [...document.querySelectorAll<HTMLElement>('[data-home-section]')];
	const navLinks = [...document.querySelectorAll<HTMLAnchorElement>('[data-nav-section]')];
	const heroVideo = document.querySelector<HTMLVideoElement>('[data-hero-video]');
	if (!sections.length || !header) return;

	const tryPlayVideo = () => {
		if (!heroVideo) return;
		heroVideo.muted = true;
		heroVideo.defaultMuted = true;
		heroVideo.playsInline = true;
		const play = () => {
			const result = heroVideo.play();
			if (result && typeof result.catch === 'function') result.catch(() => undefined);
		};
		if (heroVideo.readyState >= 2) play();
		else heroVideo.addEventListener('canplay', play, { once: true });
	};

	tryPlayVideo();
	document.addEventListener('visibilitychange', () => {
		if (!document.hidden) tryPlayVideo();
	});

	let index = 0;
	let locking = false;
	let touchStartY = 0;
	const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

	const setNavActive = (sectionId: string) => {
		navLinks.forEach((link) => {
			const active = link.dataset.navSection === sectionId;
			if (active) link.setAttribute('aria-current', 'page');
			else link.removeAttribute('aria-current');
		});
	};

	const setRevealed = (value: boolean) => {
		header.classList.toggle('is-revealed', value);
		document.body.classList.toggle('home-past-intro', value);
	};

	const goTo = (nextIndex: number, updateHash = true) => {
		const target = Math.max(0, Math.min(sections.length - 1, nextIndex));
		const el = sections[target];
		if (!el) return;

		locking = true;
		index = target;
		setRevealed(index > 0);
		setNavActive(el.dataset.homeSection || '');

		const top = Math.round(el.getBoundingClientRect().top + window.scrollY);
		window.scrollTo({ top, behavior: reduceMotion ? 'auto' : 'smooth' });

		if (updateHash) {
			const id = el.id;
			history.replaceState(null, '', id ? `#${id}` : window.location.pathname);
		}

		window.setTimeout(() => {
			locking = false;
			// 校正：动画结束后对齐一次，避免首段高度偏差
			const corrected = Math.round(el.getBoundingClientRect().top + window.scrollY);
			if (Math.abs(window.scrollY - corrected) > 2) {
				window.scrollTo({ top: corrected, behavior: 'auto' });
			}
		}, reduceMotion ? 50 : 850);
	};

	const nearestIndex = () => {
		const mid = window.scrollY + window.innerHeight / 2;
		let best = 0;
		let bestDist = Infinity;
		sections.forEach((el, i) => {
			const center = el.getBoundingClientRect().top + window.scrollY + el.offsetHeight / 2;
			const dist = Math.abs(center - mid);
			if (dist < bestDist) {
				bestDist = dist;
				best = i;
			}
		});
		return best;
	};

	index = nearestIndex();
	setRevealed(index > 0);
	setNavActive(sections[index]?.dataset.homeSection || 'home');

	const hashId = window.location.hash.replace(/^#/, '');
	if (hashId) {
		const hashIndex = sections.findIndex((el) => el.id === hashId);
		if (hashIndex >= 0) goTo(hashIndex, false);
	}

	window.addEventListener(
		'wheel',
		(event) => {
			if (locking) {
				event.preventDefault();
				return;
			}
			if (Math.abs(event.deltaY) < 6) return;

			// 最后一屏继续下滚：交给页面滚到页脚
			if (index === sections.length - 1 && event.deltaY > 0) return;
			if (index === 0 && event.deltaY < 0) return;

			event.preventDefault();
			goTo(index + (event.deltaY > 0 ? 1 : -1));
		},
		{ passive: false },
	);

	window.addEventListener(
		'touchstart',
		(event) => {
			touchStartY = event.changedTouches[0]?.clientY ?? 0;
		},
		{ passive: true },
	);

	window.addEventListener(
		'touchend',
		(event) => {
			if (locking) return;
			const endY = event.changedTouches[0]?.clientY ?? touchStartY;
			const delta = touchStartY - endY;
			if (Math.abs(delta) < 50) return;
			goTo(index + (delta > 0 ? 1 : -1));
		},
		{ passive: true },
	);

	navLinks.forEach((link) => {
		link.addEventListener('click', (event) => {
			const sectionId = link.dataset.navSection;
			if (!sectionId) return;
			const targetIndex = sections.findIndex((el) => el.dataset.homeSection === sectionId);
			if (targetIndex < 0) return;
			event.preventDefault();
			goTo(targetIndex);
			nav?.classList.remove('is-open');
			toggle?.setAttribute('aria-expanded', 'false');
		});
	});

	window.addEventListener('keydown', (event) => {
		if (locking) return;
		if (event.key === 'ArrowDown' || event.key === 'PageDown') {
			event.preventDefault();
			goTo(index + 1);
		}
		if (event.key === 'ArrowUp' || event.key === 'PageUp') {
			event.preventDefault();
			goTo(index - 1);
		}
		if (event.key === 'Home') {
			event.preventDefault();
			goTo(0);
		}
		if (event.key === 'End') {
			event.preventDefault();
			goTo(sections.length - 1);
		}
	});

	window.addEventListener(
		'resize',
		() => {
			if (!locking) goTo(index, false);
		},
		{ passive: true },
	);

	window.addEventListener(
		'scroll',
		() => {
			if (locking) return;
			const next = nearestIndex();
			if (next === index) return;
			index = next;
			setRevealed(index > 0);
			setNavActive(sections[index]?.dataset.homeSection || '');
		},
		{ passive: true },
	);
}

initHomePanels();
