const titleFallback = 'Home';

export const load = async ({ url: { href, pathname } }) => {
	const firstUrlSegment = pathname.split('/')[1] || titleFallback;
	const title = firstUrlSegment.slice(0, 1).toUpperCase() + firstUrlSegment.slice(1);
	const headerImg = ['Music'].includes(title) ? title : titleFallback;
	return {
		title,
		headerImg,
		href,
		pathname,
	};
}