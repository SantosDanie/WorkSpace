<template>
    <div id="wrapper">
		<div class="bg-light sidebar sidebar-light" id="accordionSidebar">
			<div class="sidebar-container">
				<ul class="sidebar-links m-0 p-0">
					<router-link :to="{name: 'home'}" class="sidebar-brand d-flex flex-column h-auto align-items-center justify-content-center">
						<div class="logo">
							<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 222.1 213.7" style="enable-background:new 0 0 222.1 213.7;" xml:space="preserve">
								<g id="OBJECTS">
									<g>
										<g class="st2">
											<path d="M63.3,43.8l-41.5,71.9c-23.6,40.9,5.9,91.9,53.1,91.9h83.1c47.2,0,76.7-51.1,53.1-91.9l-41.5-71.9 C145.9,2.9,86.9,2.9,63.3,43.8z"/>
											<path d="M169.4,43.8c-0.8-1.4-1.7-2.8-2.6-4.1c-14.2,34.1-54,104.1-147.5,132.9c9.6,20.2,29.9,35.1,55.4,35.1h83.1 c47.2,0,76.7-51.1,53.1-91.9L169.4,43.8z"/>
											<circle cx="116.4" cy="122.5" r="39.1"/>
											<circle cx="116.4" cy="77.1" r="14.9"/>
											<path d="M75.2,92.3c-2.3,0-4.6-0.6-6.7-1.8c-6.5-3.7-8.7-12-4.9-18.4l11.2-19.4c8.7-15.1,24.3-24.1,41.7-24.1 c17.4,0,33,9,41.7,24.1L169.2,72c3.7,6.5,1.5,14.7-4.9,18.4c-6.5,3.7-14.7,1.5-18.4-4.9l-11.2-19.4c-3.8-6.6-10.7-10.6-18.3-10.6 c-7.6,0-14.5,3.9-18.3,10.6L86.9,85.5C84.4,89.8,79.8,92.3,75.2,92.3z"/>
											<ellipse transform="matrix(0.866 -0.5 0.5 0.866 -62.1877 57.9972)" cx="77.1" cy="145" rx="14.9" ry="14.9"/>
											<path d="M99.2,193.4H76.8c-17.4,0-33-9-41.7-24.1c-8.7-15.1-8.7-33,0-48.1l11.2-19.4c3.7-6.5,12-8.7,18.4-4.9 c6.5,3.7,8.7,12,4.9,18.4l-11.2,19.4c-3.8,6.6-3.8,14.5,0,21.1c3.8,6.6,10.7,10.6,18.3,10.6h22.4c7.5,0,13.5,6,13.5,13.5 C112.7,187.3,106.6,193.4,99.2,193.4z"/>
											<ellipse transform="matrix(0.5 -0.866 0.866 0.5 -47.8121 207.2724)" cx="155.6" cy="145" rx="14.9" ry="14.9"/>
											<path d="M156,193.4h-22.4c-7.5,0-13.5-6-13.5-13.5c0-7.5,6-13.5,13.5-13.5H156c7.6,0,14.5-3.9,18.3-10.6c3.8-6.6,3.8-14.5,0-21.1 L163,115.3c-3.7-6.5-1.5-14.7,4.9-18.4c6.5-3.7,14.7-1.5,18.4,4.9l11.2,19.4c8.7,15.1,8.7,33,0,48.1 C188.9,184.4,173.4,193.4,156,193.4z"/>
										</g>
										<g>
											<g>
												<g>
													<path class="st3" d="M53.3,33.8l-41.5,71.9c-23.6,40.9,5.9,91.9,53.1,91.9h83.1c47.2,0,76.7-51.1,53.1-91.9l-41.5-71.9 C135.9-7.1,76.9-7.1,53.3,33.8z"/>
													<path class="st4" d="M159.4,33.8c-0.8-1.4-1.7-2.8-2.6-4.1c-14.2,34.1-54,104.1-147.5,132.9c9.6,20.2,29.9,35.1,55.4,35.1h83.1 c47.2,0,76.7-51.1,53.1-91.9L159.4,33.8z"/>
												</g>
												<circle class="st5" cx="106.4" cy="112.5" r="39.1"/>
												<g>
													<g>
														<circle class="st6" cx="106.4" cy="67.1" r="14.9"/>
														<path class="st6" d="M65.2,82.3c-2.3,0-4.6-0.6-6.7-1.8c-6.5-3.7-8.7-12-4.9-18.4l11.2-19.4c8.7-15.1,24.3-24.1,41.7-24.1 c17.4,0,33,9,41.7,24.1L159.2,62c3.7,6.5,1.5,14.7-4.9,18.4c-6.5,3.7-14.7,1.5-18.4-4.9l-11.2-19.4 c-3.8-6.6-10.7-10.6-18.3-10.6c-7.6,0-14.5,3.9-18.3,10.6L76.9,75.5C74.4,79.8,69.8,82.3,65.2,82.3z"/>
													</g>
													<g>
														<g>
															<ellipse transform="matrix(0.866 -0.5 0.5 0.866 -58.5275 51.6574)" class="st7" cx="67.1" cy="135" rx="14.9" ry="14.9"/>
														</g>
														<g>
															<path class="st7" d="M89.2,183.4H66.8c-17.4,0-33-9-41.7-24.1c-8.7-15.1-8.7-33,0-48.1l11.2-19.4c3.7-6.5,12-8.7,18.4-4.9 c6.5,3.7,8.7,12,4.9,18.4l-11.2,19.4c-3.8,6.6-3.8,14.5,0,21.1c3.8,6.6,10.7,10.6,18.3,10.6h22.4c7.5,0,13.5,6,13.5,13.5 C102.7,177.3,96.6,183.4,89.2,183.4z"/>
														</g>
													</g>
													<g>
														<ellipse transform="matrix(0.5 -0.866 0.866 0.5 -44.1518 193.6122)" class="st8" cx="145.6" cy="135" rx="14.9" ry="14.9"/>
														<path class="st8" d="M146,183.4h-22.4c-7.5,0-13.5-6-13.5-13.5c0-7.5,6-13.5,13.5-13.5H146c7.6,0,14.5-3.9,18.3-10.6 c3.8-6.6,3.8-14.5,0-21.1L153,105.3c-3.7-6.5-1.5-14.7,4.9-18.4c6.5-3.7,14.7-1.5,18.4,4.9l11.2,19.4c8.7,15.1,8.7,33,0,48.1 C178.9,174.4,163.4,183.4,146,183.4z"/>
													</g>
												</g>
											</g>
										</g>
									</g>
								</g>
							</svg>
						</div>
						<div class="sidebar-brand-text mx-3">Code4guate</div>
					</router-link>
					<hr class="sidebar-divider my-0">
		
					<li class="nav-item">
						<router-link :to="{name: 'medias'}" class="nav-link py-2">
							<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"><path d="M160 32c-35.3 0-64 28.7-64 64V320c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H160zM396 138.7l96 144c4.9 7.4 5.4 16.8 1.2 24.6S480.9 320 472 320H328 280 200c-9.2 0-17.6-5.3-21.6-13.6s-2.9-18.2 2.9-25.4l64-80c4.6-5.7 11.4-9 18.7-9s14.2 3.3 18.7 9l17.3 21.6 56-84C360.5 132 368 128 376 128s15.5 4 20 10.7zM192 128a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zM48 120c0-13.3-10.7-24-24-24S0 106.7 0 120V344c0 75.1 60.9 136 136 136H456c13.3 0 24-10.7 24-24s-10.7-24-24-24H136c-48.6 0-88-39.4-88-88V120z"/></svg>
							<span class="ps-1">Medias</span>
						</router-link>
					</li>
					
					<li class="nav-item">
						<router-link :to="{name: 'team'}" class="nav-link py-2">
							<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 640 512"><path d="M144 0a80 80 0 1 1 0 160A80 80 0 1 1 144 0zM512 0a80 80 0 1 1 0 160A80 80 0 1 1 512 0zM0 298.7C0 239.8 47.8 192 106.7 192h42.7c15.9 0 31 3.5 44.6 9.7c-1.3 7.2-1.9 14.7-1.9 22.3c0 38.2 16.8 72.5 43.3 96c-.2 0-.4 0-.7 0H21.3C9.6 320 0 310.4 0 298.7zM405.3 320c-.2 0-.4 0-.7 0c26.6-23.5 43.3-57.8 43.3-96c0-7.6-.7-15-1.9-22.3c13.6-6.3 28.7-9.7 44.6-9.7h42.7C592.2 192 640 239.8 640 298.7c0 11.8-9.6 21.3-21.3 21.3H405.3zM224 224a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zM128 485.3C128 411.7 187.7 352 261.3 352H378.7C452.3 352 512 411.7 512 485.3c0 14.7-11.9 26.7-26.7 26.7H154.7c-14.7 0-26.7-11.9-26.7-26.7z"/></svg>
							<span class="ps-1">Team</span>
						</router-link>
					</li>
		
					<li class="nav-item">
						<router-link :to="{name: 'calendar'}" class="nav-link py-2">
							<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H64C28.7 64 0 92.7 0 128v16 48V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V192 144 128c0-35.3-28.7-64-64-64H344V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H152V24zM48 192H400V448c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V192z"/></svg>
							<span class="ps-1">Calendar</span>
						</router-link>
					</li>
		
					<div class="sidebar-heading d-flex w-100 align-items-center justify-content-between my-2">
						<span>WorkSpace</span>
					</div>
	
					<li class="nav-item">
						<router-link :to="{name: 'page'}" class="nav-link py-2">
							<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"><path d="M320 464c8.8 0 16-7.2 16-16V160H256c-17.7 0-32-14.3-32-32V48H64c-8.8 0-16 7.2-16 16V448c0 8.8 7.2 16 16 16H320zM0 64C0 28.7 28.7 0 64 0H229.5c17 0 33.3 6.7 45.3 18.7l90.5 90.5c12 12 18.7 28.3 18.7 45.3V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64z"/></svg>
							<span class="ps-2">Page</span>
						</router-link>
					</li>
					<li class="nav-item">
						<router-link :to="{name: 'projects'}" class="nav-link py-2">
							<svg xmlns="http://www.w3.org/2000/svg" height="1em"  viewBox="0 0 512 512"><path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM96 96H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H96c-17.7 0-32-14.3-32-32s14.3-32 32-32z"/></svg>
							<span class="ps-2">Project</span>
						</router-link>
					</li>
				</ul>
	
				<div class="userDetails">
					<ul>
						<li class="nav-item dropdown no-arrow" :class="isOpen==true ? `show`: ''">
							<a ref="dropdownBtn" class="dropdown-toggle"  @click="isOpen = !isOpen" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
								<img class="img-profile rounded-circle mr-2" :src="get_gravatarThumbnail(user.email, 50)">
								<span class="mr-2 d-none d-lg-inline text-gray-600 small fw-bold">{{ user.username }}</span>
							</a>
							<div ref="dropdownMenu" class="dropdown-menu dropdown-menu-right shadow animated--grow-in" :class="isOpen==true ? `show`: ''" aria-labelledby="userDropdown">
								<router-link :to="{name: 'profile'}" class="dropdown-item">
									<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
										<path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z"/>
									</svg>
									Profile
								</router-link>
	
								<router-link :to="{name: 'settings'}" class="dropdown-item">
									<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 640 512"><path d="M308.5 135.3c7.1-6.3 9.9-16.2 6.2-25c-2.3-5.3-4.8-10.5-7.6-15.5L304 89.4c-3-5-6.3-9.9-9.8-14.6c-5.7-7.6-15.7-10.1-24.7-7.1l-28.2 9.3c-10.7-8.8-23-16-36.2-20.9L199 27.1c-1.9-9.3-9.1-16.7-18.5-17.8C173.9 8.4 167.2 8 160.4 8h-.7c-6.8 0-13.5 .4-20.1 1.2c-9.4 1.1-16.6 8.6-18.5 17.8L115 56.1c-13.3 5-25.5 12.1-36.2 20.9L50.5 67.8c-9-3-19-.5-24.7 7.1c-3.5 4.7-6.8 9.6-9.9 14.6l-3 5.3c-2.8 5-5.3 10.2-7.6 15.6c-3.7 8.7-.9 18.6 6.2 25l22.2 19.8C32.6 161.9 32 168.9 32 176s.6 14.1 1.7 20.9L11.5 216.7c-7.1 6.3-9.9 16.2-6.2 25c2.3 5.3 4.8 10.5 7.6 15.6l3 5.2c3 5.1 6.3 9.9 9.9 14.6c5.7 7.6 15.7 10.1 24.7 7.1l28.2-9.3c10.7 8.8 23 16 36.2 20.9l6.1 29.1c1.9 9.3 9.1 16.7 18.5 17.8c6.7 .8 13.5 1.2 20.4 1.2s13.7-.4 20.4-1.2c9.4-1.1 16.6-8.6 18.5-17.8l6.1-29.1c13.3-5 25.5-12.1 36.2-20.9l28.2 9.3c9 3 19 .5 24.7-7.1c3.5-4.7 6.8-9.5 9.8-14.6l3.1-5.4c2.8-5 5.3-10.2 7.6-15.5c3.7-8.7 .9-18.6-6.2-25l-22.2-19.8c1.1-6.8 1.7-13.8 1.7-20.9s-.6-14.1-1.7-20.9l22.2-19.8zM112 176a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zM504.7 500.5c6.3 7.1 16.2 9.9 25 6.2c5.3-2.3 10.5-4.8 15.5-7.6l5.4-3.1c5-3 9.9-6.3 14.6-9.8c7.6-5.7 10.1-15.7 7.1-24.7l-9.3-28.2c8.8-10.7 16-23 20.9-36.2l29.1-6.1c9.3-1.9 16.7-9.1 17.8-18.5c.8-6.7 1.2-13.5 1.2-20.4s-.4-13.7-1.2-20.4c-1.1-9.4-8.6-16.6-17.8-18.5L583.9 307c-5-13.3-12.1-25.5-20.9-36.2l9.3-28.2c3-9 .5-19-7.1-24.7c-4.7-3.5-9.6-6.8-14.6-9.9l-5.3-3c-5-2.8-10.2-5.3-15.6-7.6c-8.7-3.7-18.6-.9-25 6.2l-19.8 22.2c-6.8-1.1-13.8-1.7-20.9-1.7s-14.1 .6-20.9 1.7l-19.8-22.2c-6.3-7.1-16.2-9.9-25-6.2c-5.3 2.3-10.5 4.8-15.6 7.6l-5.2 3c-5.1 3-9.9 6.3-14.6 9.9c-7.6 5.7-10.1 15.7-7.1 24.7l9.3 28.2c-8.8 10.7-16 23-20.9 36.2L315.1 313c-9.3 1.9-16.7 9.1-17.8 18.5c-.8 6.7-1.2 13.5-1.2 20.4s.4 13.7 1.2 20.4c1.1 9.4 8.6 16.6 17.8 18.5l29.1 6.1c5 13.3 12.1 25.5 20.9 36.2l-9.3 28.2c-3 9-.5 19 7.1 24.7c4.7 3.5 9.5 6.8 14.6 9.8l5.4 3.1c5 2.8 10.2 5.3 15.5 7.6c8.7 3.7 18.6 .9 25-6.2l19.8-22.2c6.8 1.1 13.8 1.7 20.9 1.7s14.1-.6 20.9-1.7l19.8 22.2zM464 304a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/></svg>
									Settings
								</router-link>
								
								<router-link :to="{name: 'activityLog'}" class="dropdown-item">
									<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-list-ul" viewBox="0 0 16 16">
										<path fill-rule="evenodd" d="M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm-3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
									</svg>
									Activity Log
								</router-link>
								<div class="dropdown-divider"></div>
								<a class="dropdown-item" href="#" @click="logout">
									<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"/></svg>
									Logout
								</a>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</div>

		<div id="content-wrapper" class="d-flex flex-column bg-white">
			<div id="content">
				<div class="content-dash h-100">
					<slot></slot>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
	import { useAuthStore }		from '@/stores/auth';
	import { computed, ref }	from 'vue';
	import { useRouter }		from 'vue-router';

	const router				= useRouter();
	const authStore 			= useAuthStore();
	const user					= computed(() => authStore.user);
	const isOpen				= ref<Boolean>(false);
	const dropdownMenu			= ref<HTMLDivElement>()
	const dropdownBtn			= ref<HTMLDivElement>()

	async function logout() {
		await authStore.logout()
		.then(() => router.replace({name: 'login'}))
		.catch(err => console.log(err.message))
	}

	document.addEventListener('click', (e:Event) => {
		if (!isOpen.value) return
		if (!(dropdownBtn.value && dropdownBtn.value.contains(e.target as Node)) && !(dropdownMenu.value && dropdownMenu.value.contains(e.target as Node)) ) {
			isOpen.value = false;
		}
	})
	
	function get_gravatarThumbnail(email: any, size: string | number) {
		let MD5=function(s: string){function L(k: number,d: number){return(k<<d)|(k>>>(32-d))}function K(G: number,k: number){var I,d,F,H,x;F=(G&2147483648);H=(k&2147483648);I=(G&1073741824);d=(k&1073741824);x=(G&1073741823)+(k&1073741823);if(I&d){return(x^2147483648^F^H)}if(I|d){if(x&1073741824){return(x^3221225472^F^H)}else{return(x^1073741824^F^H)}}else{return(x^F^H)}}function r(d: number,F: number,k: number){return(d&F)|((~d)&k)}function q(d: number,F: number,k: number){return(d&k)|(F&(~k))}function p(d: number,F: number,k: number){return(d^F^k)}function n(d: number,F: number,k: number){return(F^(d|(~k)))}function u(G: number,F: number,aa: number,Z: number,k: any,H: number,I: number){G=K(G,K(K(r(F,aa,Z),k),I));return K(L(G,H),F)}function f(G: number,F: number,aa: number,Z: number,k: any,H: number,I: number){G=K(G,K(K(q(F,aa,Z),k),I));return K(L(G,H),F)}function D(G: number,F: number,aa: number,Z: number,k: any,H: number,I: number){G=K(G,K(K(p(F,aa,Z),k),I));return K(L(G,H),F)}function t(G: number,F: number,aa: number,Z: number,k: any,H: number,I: number){G=K(G,K(K(n(F,aa,Z),k),I));return K(L(G,H),F)}function e(G: string){var Z;var F=G.length;var x=F+8;var k=(x-(x%64))/64;var I=(k+1)*16;var aa=Array(I-1);var d=0;var H=0;while(H<F){Z=(H-(H%4))/4;d=(H%4)*8;aa[Z]=(aa[Z]|(G.charCodeAt(H)<<d));H++}Z=(H-(H%4))/4;d=(H%4)*8;aa[Z]=aa[Z]|(128<<d);aa[I-2]=F<<3;aa[I-1]=F>>>29;return aa}function B(x: number){var k="",F="",G,d;for(d=0;d<=3;d++){G=(x>>>(d*8))&255;F="0"+G.toString(16);k=k+F.substr(F.length-2,2)}return k}function J(k: string){k=k.replace(/rn/g,"n");var d="";for(var F=0;F<k.length;F++){var x=k.charCodeAt(F);if(x<128){d+=String.fromCharCode(x)}else{if((x>127)&&(x<2048)){d+=String.fromCharCode((x>>6)|192);d+=String.fromCharCode((x&63)|128)}else{d+=String.fromCharCode((x>>12)|224);d+=String.fromCharCode(((x>>6)&63)|128);d+=String.fromCharCode((x&63)|128)}}}return d}var C=Array();var P,h,E,v,g,Y,X,W,V;var S=7,Q=12,N=17,M=22;var A=5,z=9,y=14,w=20;var o=4,m=11,l=16,j=23;var U=6,T=10,R=15,O=21;s=J(s);C=e(s);Y=1732584193;X=4023233417;W=2562383102;V=271733878;for(P=0;P<C.length;P+=16){h=Y;E=X;v=W;g=V;Y=u(Y,X,W,V,C[P+0],S,3614090360);V=u(V,Y,X,W,C[P+1],Q,3905402710);W=u(W,V,Y,X,C[P+2],N,606105819);X=u(X,W,V,Y,C[P+3],M,3250441966);Y=u(Y,X,W,V,C[P+4],S,4118548399);V=u(V,Y,X,W,C[P+5],Q,1200080426);W=u(W,V,Y,X,C[P+6],N,2821735955);X=u(X,W,V,Y,C[P+7],M,4249261313);Y=u(Y,X,W,V,C[P+8],S,1770035416);V=u(V,Y,X,W,C[P+9],Q,2336552879);W=u(W,V,Y,X,C[P+10],N,4294925233);X=u(X,W,V,Y,C[P+11],M,2304563134);Y=u(Y,X,W,V,C[P+12],S,1804603682);V=u(V,Y,X,W,C[P+13],Q,4254626195);W=u(W,V,Y,X,C[P+14],N,2792965006);X=u(X,W,V,Y,C[P+15],M,1236535329);Y=f(Y,X,W,V,C[P+1],A,4129170786);V=f(V,Y,X,W,C[P+6],z,3225465664);W=f(W,V,Y,X,C[P+11],y,643717713);X=f(X,W,V,Y,C[P+0],w,3921069994);Y=f(Y,X,W,V,C[P+5],A,3593408605);V=f(V,Y,X,W,C[P+10],z,38016083);W=f(W,V,Y,X,C[P+15],y,3634488961);X=f(X,W,V,Y,C[P+4],w,3889429448);Y=f(Y,X,W,V,C[P+9],A,568446438);V=f(V,Y,X,W,C[P+14],z,3275163606);W=f(W,V,Y,X,C[P+3],y,4107603335);X=f(X,W,V,Y,C[P+8],w,1163531501);Y=f(Y,X,W,V,C[P+13],A,2850285829);V=f(V,Y,X,W,C[P+2],z,4243563512);W=f(W,V,Y,X,C[P+7],y,1735328473);X=f(X,W,V,Y,C[P+12],w,2368359562);Y=D(Y,X,W,V,C[P+5],o,4294588738);V=D(V,Y,X,W,C[P+8],m,2272392833);W=D(W,V,Y,X,C[P+11],l,1839030562);X=D(X,W,V,Y,C[P+14],j,4259657740);Y=D(Y,X,W,V,C[P+1],o,2763975236);V=D(V,Y,X,W,C[P+4],m,1272893353);W=D(W,V,Y,X,C[P+7],l,4139469664);X=D(X,W,V,Y,C[P+10],j,3200236656);Y=D(Y,X,W,V,C[P+13],o,681279174);V=D(V,Y,X,W,C[P+0],m,3936430074);W=D(W,V,Y,X,C[P+3],l,3572445317);X=D(X,W,V,Y,C[P+6],j,76029189);Y=D(Y,X,W,V,C[P+9],o,3654602809);V=D(V,Y,X,W,C[P+12],m,3873151461);W=D(W,V,Y,X,C[P+15],l,530742520);X=D(X,W,V,Y,C[P+2],j,3299628645);Y=t(Y,X,W,V,C[P+0],U,4096336452);V=t(V,Y,X,W,C[P+7],T,1126891415);W=t(W,V,Y,X,C[P+14],R,2878612391);X=t(X,W,V,Y,C[P+5],O,4237533241);Y=t(Y,X,W,V,C[P+12],U,1700485571);V=t(V,Y,X,W,C[P+3],T,2399980690);W=t(W,V,Y,X,C[P+10],R,4293915773);X=t(X,W,V,Y,C[P+1],O,2240044497);Y=t(Y,X,W,V,C[P+8],U,1873313359);V=t(V,Y,X,W,C[P+15],T,4264355552);W=t(W,V,Y,X,C[P+6],R,2734768916);X=t(X,W,V,Y,C[P+13],O,1309151649);Y=t(Y,X,W,V,C[P+4],U,4149444226);V=t(V,Y,X,W,C[P+11],T,3174756917);W=t(W,V,Y,X,C[P+2],R,718787259);X=t(X,W,V,Y,C[P+9],O,3951481745);Y=K(Y,h);X=K(X,E);W=K(W,v);V=K(V,g)}var i=B(Y)+B(X)+B(W)+B(V);return i.toLowerCase()};
		let size_image = size || 80;
		return 'http://www.gravatar.com/avatar/' + MD5(email) + '.jpg?s=' + size_image;
	}
</script>

<style lang="scss">
	.st0{display:none;}
	.st1{display:inline;fill:#26213D;}
	.st2{opacity:0.18;}
	.st3{fill:#675AA6;}
	.st4{fill:#564896;}
	.st5{fill:#26213D;}
	.st6{fill:#FFFFFF;}
	.st7{fill:#00E0AC;}
	.st8{fill:#FFC209;}
</style>