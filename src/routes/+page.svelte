<script lang="ts">
	import Header from './Header.svelte';
	import Footer from './Footer.svelte';

	const features = [
		{
			title: "Time-saving",
			description: "Streamline your tasks and workflows to save valuable time every day.",
			icon: "⏱️"
		},
		{
			title: "Collaboration",
			description: "Work seamlessly with your team to achieve more together.",
			icon: "🤝"
		},
		{
			title: "Everything You Need",
			description: "All the tools you're looking for in one easy-to-use platform.",
			icon: "✨"
		}
	];

</script>
<section class="bg-center bg-no-repeat bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/conference.jpg')] bg-gray-700 bg-blend-multiply">
	<Header/>
	<div class="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-30">
		<h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-7xl">Make Your Work Easier</h1>
		<p class="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">Protaskly helps you stay on top of your tasks, work better with your team, and keep everything you need in one place..</p>
		<div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
			<button type="button" class="text-white text-xl bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-bold rounded-lg px-5 py-2.5 text-center me-2 mb-2">Get Started. It's FREE!</button>
		</div>
	</div>
</section>

<section class="py-10 px-4 md:px-8 lg:px-16 bg-white">
	<div class="max-w-5xl mx-auto">
		<h2 class="text-3xl font-bold text-center text-gray-700 pt-8 mb-8">Why Choose Protaskly?</h2>
		<div class="grid gap-6 md:grid-cols-3">
			{#each features as feature (feature.title)}
				<div class="bg-white shadow-lg rounded-3xl border-box p-6 hover:shadow-xl transition-shadow duration-300">
					<div class="text-4xl text-indigo-600 mb-4">{feature.icon}</div>
					<h3 class="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
					<p class="text-gray-600">{feature.description}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<section id="features" class="py-9 bg-white">
	<div class="container mx-auto px-4 text-gray-700">
		<h2 class="text-3xl font-bold text-center pt08 mb-8">Key Features</h2>
		<div class="grid grid-cols-1 md:grid-cols-3 gap-3">
			<div class="bg-white border-box p-6 rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-300">
				<i class="fa-solid fa-list-check text-3xl mb-4 text-blue-500"></i>
				<h3 class="text-xl font-semibold">Task Management</h3>
				<p>Create, organize, and prioritize tasks with ease. Assign tasks to team members, set deadlines, and track progress.</p>
			</div>
			<div class="bg-white border-box p-6 rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-300">
				<i class="fa-solid fa-calendar-days text-lg mb-4 text-blue-500"></i>
				<h3 class="text-xl font-semibold">Scheduling</h3>
				<p>Plan your projects and schedule tasks efficiently. Use our calendar view to visualize deadlines and manage your time effectively.</p>
			</div>
			<div class="bg-white border-box p-6 rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-300">
				<i class="fa-solid fa-chart-line text-3xl mb-4 text-blue-500"></i>
				<h3 class="text-xl font-semibold">Progress Tracking</h3>
				<p>Monitor your team's progress and identify potential roadblocks. Generate reports to analyze performance and optimize workflows.</p>
			</div>
		</div>
	</div>
</section>
<p class="bg-white text-3xl font-bold text-center pt-8 pb-8">See What Our Users Are Saying</p>
<section class="bg-white flex justify-center pb-10">
	<div class="grid border-box rounded-2xl md:grid-cols-2 w-10/12">
		<figure class="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-ss-lg md:border-e dark:bg-gray-800 dark:border-gray-700">
			<blockquote class="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
				<h3 class="text-lg font-semibold text-gray-900 dark:text-white">Very easy this was to integrate</h3>
				<p class="my-4">If you care for your time, I hands down would go with this."</p>
			</blockquote>
			<figcaption class="flex items-center justify-center ">
				<img class="rounded-full w-9 h-9" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png" alt="profile nelson">
				<div class="space-y-0.5 font-medium dark:text-white text-left rtl:text-right ms-3">
					<div>Nikki Green</div>
					<div class="text-sm text-gray-500 dark:text-gray-400 ">Developer at Nexgen Software</div>
				</div>
			</figcaption>
		</figure>
		<figure class="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 md:rounded-se-lg dark:bg-gray-800 dark:border-gray-700">
			<blockquote class="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
				<h3 class="text-lg font-semibold text-gray-900 dark:text-white">Solid foundation for any project</h3>
				<p class="my-4">Designing with Figma components that can be easily translated to the utility classes of Tailwind CSS is a huge timesaver!"</p>
			</blockquote>
			<figcaption class="flex items-center justify-center ">
				<img class="rounded-full w-9 h-9" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png" alt="profile casas">
				<div class="space-y-0.5 font-medium dark:text-white text-left rtl:text-right ms-3">
					<div>Liza Rodriguez</div>
					<div class="text-sm text-gray-500 dark:text-gray-400">Lead designer at Red Lemon LLC</div>
				</div>
			</figcaption>
		</figure>
		<figure class="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 md:rounded-es-lg md:border-b-0 md:border-e dark:bg-gray-800 dark:border-gray-700">
			<blockquote class="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
				<h3 class="text-lg font-semibold text-gray-900 dark:text-white">Mindblowing workflow</h3>
				<p class="my-4">Aesthetically, the well designed components are beautiful and will undoubtedly level up your next application."</p>
			</blockquote>
			<figcaption class="flex items-center justify-center ">
				<img class="rounded-full w-9 h-9" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png" alt="profile leos">
				<div class="space-y-0.5 font-medium dark:text-white text-left rtl:text-right ms-3">
					<div>John Lopez</div>
					<div class="text-sm text-gray-500 dark:text-gray-400">Software Engineer at Engagis</div>
				</div>
			</figcaption>
		</figure>
		<figure class="flex flex-col items-center justify-center p-8 text-center bg-white border-gray-200 rounded-b-lg md:rounded-se-lg md:border-b-0 md:border- e dark:bg-gray-800 dark:border-gray-700">
			<blockquote class="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
				<h3 class="text-lg font-semibold text-gray-900 dark:text-white">Efficient Collaborating</h3>
				<p class="my-4">You have many examples that can be used to create a fast prototype for your team."</p>
			</blockquote>
			<figcaption class="flex items-center justify-center ">
				<img class="rounded-full w-9 h-9" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/joseph-mcfall.png" alt="profile mcfall">
				<div class="space-y-0.5 font-medium dark:text-white text-left rtl:text-right ms-3">
					<div>Joseph Ortiz</div>
					<div class="text-sm text-gray-500 dark:text-gray-400">CTO at People Index</div>
				</div>
			</figcaption>
		</figure>
	</div>

</section>
<Footer/>


<style>
    .border-box {
        border: 1px solid #ccc;
    }
</style>
