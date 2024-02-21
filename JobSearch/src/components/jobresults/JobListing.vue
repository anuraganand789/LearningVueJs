<template>
	<li class="mb-7">
					<RouterLink 
						:to="jobPageLink" 
						class="mx-auto block rounded border-solid border-brandGray2 bg-white hover:shadow-gray"	
					>
						<div class="mx-8 border-b border-solid border-brandGray2 pt-5 pb-2">
							<h2 class="mb-2 text-2xl">{{ title }}</h2>
							<div class="flex flex-row align-middle">
								<div class="mr-5">
									<span>{{	organization }}</span>
								</div>

								<div>
									<ul>
										<li
											v-for="location of locations"
											:key="location"
											class="mr-5 inline-block"
										>
											<span> {{ location }} </span>
										</li>
									</ul>
								</div>
							</div>
						</div>
						<div class="px-8 py-4">
							<div>
								<h3 class="mt-1 mb-2">Qualifications:</h3>
								<div>
									<ul class="list-disc pl-8">
										<li v-for="qualification of minimumQualifications" :key="qualification"> {{ qualification }}</li>
									</ul>
								</div>
							</div>
							<div class="mt-2 text-center">
								<RouterLink :to="jobPageLink" class="text-brandBlue1">Expand</RouterLink>
							</div>
						</div>
					</RouterLink>
				</li>
</template>

<script>
	export default {
		name	:	"JobListing",
		props: [
			"id"											, 
			"title"										, 
			"organization"						, 
			"degree"									, 
			"jobtype"									, 
			"locations"								, 
			"minimumQualifications"		, 
			"preferredQualifications"	,
			"description"							, 
			"dateAdded"								,
		],
		computed:	{
			jobPageLink() {
				return `/jobs/results/${this.id}`;
			}
		},
	}
</script>