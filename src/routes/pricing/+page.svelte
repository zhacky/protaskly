<script lang="ts">
	const freePlanFeatures = [
		"Access to core task tracking tools",
		"Create and manage up to 3 projects",
		"Add up to 10 collaborators per project",
		"Basic notifications and reminders",
		"Community support"
	];

	const proPlanFeatures = [
		"Unlimited projects and collaborators",
		"Advanced task prioritization and filtering",
		"Customizable dashboards",
		"Enhanced notifications (email and in-app)",
		"Priority customer support"
	];

	const enterprisePlanFeatures = [
		"Role-based access controls",
		"Project templates and automation",
		"Advanced analytics and reporting",
		"Dedicated account manager",
		"Integration with third-party tools"
	];

</script>

<div class="bg-gray-100 min-h-screen">

	<section id="pricing" class="bg-gray-100 py-12">
		<div class="container mx-auto px-4">
			<h2 class="text-4xl font-bold text-center font-style mb-4">Pricing Plans</h2>
			<p class="mb-8 font-style text-center text-xl">Loved by teams everywhere, Protaskly makes it simple and helps you stay organized and get more done.
				<br> Discover the perfect plan for you today.</p>
			<div class="grid grid-cols-1 md:grid-cols-3 space-y-6">
				<div class="pricing-plan bg-white p-6 rounded-3xl shadow-md space-y-5">
					<div class="icon-container-free text-blue-500 flex justify-items-start"><i class="fas fa-gift"></i></div>
					<div class="font-bold text-2xl flex justify-items-start text-content">Free Plan</div>
					<p class="text-sm font-bold mb-4 flex justify-items-start pt-1">$0/month</p>
					<p>Designed for individuals and small teams looking to kickstart their task management journey with simplicity and efficiency.</p>
					<ul class="features-list">
						{#each freePlanFeatures as feature}
							<li class="feature-item">
								<span class="check-icon">✔</span> {feature}
							</li>
						{/each}
					</ul>
					<div class="text-center">
					<button class="bg-gray-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-3xl mt-4">Get Started</button>
					</div>
				</div>
				<div class="pricing-plan bg-white p-6 rounded-3xl shadow-md space-y-5">
					<div class="icon-container-pro text-blue-500 flex justify-items-start"><i class="fas fa-rocket"></i></div>
					<div class="font-bold text-2xl flex justify-items-start text-content">Pro Plan</div>
					<p class="text-sm font-bold mb-4 flex justify-items-start pt-1">$5/month</p>
					<p>Perfect for growing teams seeking powerful tools and advanced features to optimize workflows and boost productivity.</p>
					<ul class="features-list">
						{#each proPlanFeatures as feature}
							<li class="feature-item">
								<span class="check-icon">✔</span> {feature}
							</li>
						{/each}
					</ul>
					<div class="text-center">
						<button class="bg-gray-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-3xl mt-4">Get Started</button>
					</div>
				</div>

				<div class="pricing-plan bg-white p-6 rounded-3xl shadow-md space-y-5">
					<div class="icon-container-enterprise text-blue-500 flex justify-items-start"><i class="fas fa-building"></i></div>
					<div class="font-bold text-2xl flex justify-items-start text-content">Enterprise Plan</div>
					<p class="text-sm font-bold mb-4 flex justify-items-start pt-1">$10/month</p>
					<p>Tailored for organizations requiring a scalable, fully customizable solution to meet their unique needs and drive efficiency.</p>
					<ul class="features-list">
						{#each enterprisePlanFeatures as feature}
							<li class="feature-item">
								<span class="check-icon">✔</span> {feature}
							</li>
						{/each}
					</ul>
					<div class="text-center">
						<button class="bg-gray-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-3xl mt-4">Get Started</button>
					</div>
				</div>
			</div>
		</div>
	</section>
</div>

<style>
    .pricing-plan {
        max-width: 400px;
        margin: 0 auto;
        padding: 20px;
        border: 1px solid #ccc;
        text-align: left;
        transition: transform 0.3s ease, box-shadow 0.3s ease;
    }
    .pricing-plan:hover {
        transform: scale(1.05);
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    }
    .features-list {
        list-style: none;
        padding: 0;
        margin: 0;
    }
    .feature-item {
        display: flex;
        align-items: center;
        margin-bottom: 10px;
    }
    .check-icon {
        color: green;
        margin-right: 8px;
    }
    .grid {
        align-items: stretch;
    }

		.font-style {
				font-family: Bahnschrift;
		}

    .icon-container-free i {
        animation: rotate 2s linear infinite;
    }


    .icon-container-pro i {
        animation: bounce 1s ease-in-out infinite;
    }


    .icon-container-enterprise i {
        animation: pulse 1.5s ease-in-out infinite;
    }

    .text-content {
        color: #351c75;
    }

    @keyframes rotate {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }


    @keyframes bounce {
        0%, 100% {
            transform: translateY(0);
        }
        50% {
            transform: translateY(-10px);
        }
    }


    @keyframes pulse {
        0% {
            transform: scale(1);
        }
        50% {
            transform: scale(1.1);
        }
        100% {
            transform: scale(1);
        }
    }


    .icon-container-free, .icon-container-pro, .icon-container-enterprise {
        text-align: center;
        margin-bottom: 1rem;
        font-size: 3rem;
    }
</style>