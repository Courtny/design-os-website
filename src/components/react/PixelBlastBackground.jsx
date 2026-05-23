import { useEffect, useState } from "react";
import PixelBlast from "./PixelBlast.jsx";
import "./PixelBlastBackground.css";

const DEFAULT_THEME = {
	color: "#9c7a9d",
	patternDensity: 1.1,
	edgeFade: 0.25,
};

function readPixelBlastTheme() {
	if (typeof document === "undefined") {
		return DEFAULT_THEME;
	}

	const styles = getComputedStyle(document.documentElement);
	const color = styles.getPropertyValue("--color-pixel-blast").trim();
	const patternDensity = parseFloat(
		styles.getPropertyValue("--color-pixel-blast-density").trim(),
	);
	const edgeFade = parseFloat(
		styles.getPropertyValue("--color-pixel-blast-edge-fade").trim(),
	);

	return {
		color: color || DEFAULT_THEME.color,
		patternDensity: Number.isFinite(patternDensity)
			? patternDensity
			: DEFAULT_THEME.patternDensity,
		edgeFade: Number.isFinite(edgeFade) ? edgeFade : DEFAULT_THEME.edgeFade,
	};
}

function usePixelBlastTheme() {
	const [theme, setTheme] = useState(DEFAULT_THEME);

	useEffect(() => {
		const update = () => setTheme(readPixelBlastTheme());

		update();

		const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
		mediaQuery.addEventListener("change", update);

		const observer = new MutationObserver(update);
		observer.observe(document.documentElement, {
			attributes: true,
			attributeFilter: ["data-user-scheme"],
		});

		return () => {
			mediaQuery.removeEventListener("change", update);
			observer.disconnect();
		};
	}, []);

	return theme;
}

function useMotionAllowed() {
	const [motionAllowed, setMotionAllowed] = useState(true);

	useEffect(() => {
		const check = () => {
			const userMotion =
				document.documentElement.getAttribute("data-user-motion");
			const systemReduced = window.matchMedia(
				"(prefers-reduced-motion: reduce)",
			).matches;

			let allowed = true;
			if (userMotion === "disabled") {
				allowed = false;
			} else if (userMotion === "enabled") {
				allowed = true;
			} else if (systemReduced) {
				allowed = false;
			}

			setMotionAllowed(allowed);
		};

		check();

		const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
		mediaQuery.addEventListener("change", check);

		const observer = new MutationObserver(check);
		observer.observe(document.documentElement, {
			attributes: true,
			attributeFilter: ["data-user-motion"],
		});

		return () => {
			mediaQuery.removeEventListener("change", check);
			observer.disconnect();
		};
	}, []);

	return motionAllowed;
}

export default function PixelBlastBackground() {
	const motionAllowed = useMotionAllowed();
	const { color, patternDensity, edgeFade } = usePixelBlastTheme();

	if (!motionAllowed) {
		return null;
	}

	return (
		<div className="pixel-blast-background" aria-hidden="true">
			<PixelBlast
				color={color}
				transparent={true}
				pixelSize={4}
				patternScale={2}
				patternDensity={patternDensity}
				enableRipples={true}
				edgeFade={edgeFade}
				speed={0.5}
			/>
		</div>
	);
}
