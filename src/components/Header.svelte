<script>
	const links = [
		{
			text: "Home",
			link: "/",
			icon: "home",
		},
		{
			text: "How It Works",
			link: "/how-it-works/",
			icon: "about",
		},
		{
			text: "Commands",
			link: "/commands/",
			icon: "blog",
		},
		{
			text: "Context Library",
			link: "/context-library/",
			icon: "work",
		},
		{
			text: "Setup",
			link: "/docs/",
			icon: "services",
		},
		{
			text: "GitHub",
			link: "https://github.com/Courtny/design-os",
			icon: "github",
			external: true,
		},
	];
</script>

<header class="layout__header">
	<div class="skip-link-wrapper">
		<a class="button--ui visually-hidden" href="#main">
			<span class="button--ui__content">Skip to main content</span>
		</a>
	</div>
	<nav class="nav" aria-label="Main">
		<ul class="nav__list">
			{#each links as link}
				<li class="nav__item">
					<a
						class="nav__link"
						href={link.link}
						{...(link.external
							? { target: "_blank", rel: "noopener noreferrer" }
							: {})}>
						{#if link.icon}
							<svg class="nav__icon">
								<use href={`#icon-${link.icon}`} />
							</svg>
						{:else}
							<div class="nav__icon" />
						{/if}
						<span class="nav__link-text">{link.text}</span>
					</a>
				</li>
			{/each}
		</ul>
	</nav>
</header>

<style lang="scss">
	@import "../styles/_mixins.scss";

	.skip-link-wrapper {
		position: fixed;
		inset-block-start: 0;
		inset-inline-start: 0;
		z-index: 100;
	}

	.nav__list {
		margin: 0;
		padding: 0;
		list-style: none;
	}

	.nav__link {
		position: relative;
		display: block;
		padding: 0;
		text-decoration: none;
		text-align: center;
		@include focus();
	}

	.nav__item + .nav__item {
		margin-block-start: 0.5rem;
	}

	.nav__icon {
		display: block;
		inline-size: 2rem;
		block-size: 2rem;
		margin: 0 auto;
	}

	.nav__link-text {
		display: inline-block;
		margin-block-start: 0.25rem;
		padding: 0 0.25rem 0;
		font-size: 1rem;
		line-height: 1.3;
		background-color: var(--color-nav-link-bg);
		color: var(--color-nav-link-text);
	}

	@media (min-height: 40em) {
		.nav__item + .nav__item {
			margin-block-start: 1rem;
		}
	}

	@media (min-height: 48em) {
		.nav__icon {
			inline-size: 3rem;
			block-size: 3rem;
		}
	}
</style>
