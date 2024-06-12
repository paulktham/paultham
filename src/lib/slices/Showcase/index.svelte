<script lang="ts">
	import Bounded from '$lib/components/Bounded.svelte';
	import ButtonLink from '$lib/components/ButtonLink.svelte';
	import type { Content } from '@prismicio/client';
	import { PrismicImage, PrismicRichText } from '@prismicio/svelte';
	import clsx from 'clsx';
	import IconGear from '~icons/ph/gear-bold';
	import IconEye from '~icons/ph/eye-duotone';
	import { SvelteComponent } from 'svelte';
	import { components } from '..';

	export let slice: Content.ShowcaseSlice;
	const icons = {
		gear: IconGear,
		cycle: IconEye
	};
</script>

<Bounded data-slice-type={slice.slice_type} data-slice-variation={slice.variation} class="relative">
	<div
		class="max-w-2x1 absolute -z-10 aspect-video w-full rounded-full bg-violet-500/40 mix-blend-screen blur-[120px] filter"
	></div>
	{#if slice.primary.heading}
		<h2 class="md:text-7x1 text-balance text-center text-5xl font-medium">
			<PrismicRichText field={slice.primary.heading} />
		</h2>{/if}
	<div
		class="relative mt-16 grid items-center gap-8 rounded-xl border-violet-50/20 bg-gradient-to-b from-gray-50/15 to-gray-50/5 px-8 py-8 backdrop-blur-sm lg:grid-cols-3 lg:gap-0 lg:py-12"
	>
		<div class="grid-background"></div>
		<div>
			{#if slice.primary.icon}
				<div class="w-fit rounded-lg bg-violet-800 p-4 text-3xl">
					<svelte:component this={icons[slice.primary.icon]} />
				</div>
			{/if}
			{#if slice.primary.subheading}
				<h3 class="font-normals mt-6 text-2xl">
					<PrismicRichText field={slice.primary.subheading} />
				</h3>
			{/if}
			{#if slice.primary.body}
				<div class="prose prose-invert mt-4 max-w-xl">
					<PrismicRichText field={slice.primary.body} />
				</div>
			{/if}
			{#if slice.primary.button}
				<ButtonLink field={slice.primary.button} class="mt-6"
					>{slice.primary.button_text}</ButtonLink
				>
			{/if}
		</div>
		<PrismicImage
			field={slice.primary.image}
			class={clsx(
				'opacity-90 shadow-2xl lg:col-span-2 lg:pt-0',
				slice.variation === 'reverse'
					? 'lg:order-1 lg:translate-x-[15%]'
					: 'lg:-order-1 lg:translate-x-[-15%]'
			)}
			sizes="(max-width: 768px) 100vw, 50vw"
		/>
	</div>
</Bounded>

<style>
	.grid-background {
		background-image: url('/static/assests/grid-pattern.png');
		position: absolute;
		inset: 0;
		background-repeat: repeat;
		z-index: -1;
		background-position: center;
		opacity: 0.15;
		mask-image: radial-gradient(circle at 60% 50%, black 10%, transparent 40%);
	}
</style>
