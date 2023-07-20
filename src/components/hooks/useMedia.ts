import { useState, useEffect } from "react";

export const useMedia = (query: string) => {
	const [matches, setMatches] = useState(window.matchMedia(query).matches);

	useEffect(() => {
		let media = window.matchMedia(query);
		if (media.matches !== matches) {
			setMatches(media.matches);
		}
		let listener = () => {
			setMatches(media.matches);
		};
		media.addEventListener("change", listener);
		return () => media.removeEventListener("change", listener);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [query]);

	return matches;
};
