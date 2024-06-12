<script lang="ts">
	import Bounded from '$lib/components/Bounded.svelte';
	import ButtonLink from '$lib/components/ButtonLink.svelte';
	import TriangleGrid from '$lib/components/TriangleGrid.svelte';
	import type { Content } from '@prismicio/client';
	import { PrismicImage, PrismicLink, PrismicRichText } from '@prismicio/svelte';

	export let slice: Content.HeroSlice;
</script>

<Bounded data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
	<div class="relative flex flex-col items-center justify-center text-center align-middle">
		<TriangleGrid />
		{#if slice.primary.heading}
			<h1 class="mx-auto max-w-3xl text-balance text-5xl font-medium md:text-7xl">
				<PrismicRichText field={slice.primary.heading} />
			</h1>
		{/if}
		{#if slice.primary.body}
			<p class="mx-auto mt-6 max-w-md text-balance text-gray-300">
				<PrismicRichText field={slice.primary.body} />
			</p>
		{/if}
		{#if slice.primary.button_link}
			<ButtonLink class="mt-8" field={slice.primary.button_link}
				>{slice.primary.button_label}</ButtonLink
			>
		{/if}
		{#if slice.primary.image}
			<div class="glass-container mt-16 w-fit items-center justify-center">
				<div
					class="absolute left-1/3 top-0 -z-10 h-2/3 w-2/3 bg-violet-700/50 mix-blend-screen blur-[120px] filter"
				/>
				<div
					class="absolute left-0 top-1/3 -z-10 h-2/3 w-2/3 bg-orange-700/50 mix-blend-screen blur-[120px] filter"
				/>
				<PrismicImage class="rounded-lg" field={slice.primary.image} />
			</div>
		{/if}
	</div>
</Bounded>
