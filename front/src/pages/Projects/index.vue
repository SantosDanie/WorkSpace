<template>
	<Dashboard>
		<div class="row pb-3">
			<div class="col-12 text-right">
				<router-link :to="{name: 'PageCreate'}" class="btn btn-primary btn-sm">
					Create Projet
				</router-link>
			</div>
		</div>
		<div class="row">
			<div class="col-3" v-for="(card, index) in 4" :key="index">
				<div class="card">
					<img src="https://mir-s3-cdn-cf.behance.net/project_modules/hd/82c3b811161431.560f2c3234f3e.jpg">
					<div class="card-footer">
						<div class="logo">
							<img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAHcAdwMBIgACEQEDEQH/xAAcAAEAAgIDAQAAAAAAAAAAAAAAAQgGBwMEBQL/xAAxEAACAQMCBQIDBwUAAAAAAAAAAQIDBAUGEQcSITFBcYETUWEIFEJSgpGhFSIyM7H/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8A3gASAIJIAAAAAAAAAAAAAAAAAkEEgAABBJBIEAGA8VuIMNG2NO3sYwrZa6i3ShPrGlHtzyXn6Lz7AZ7uiSunCO8zuquI9C/ymQu7qFnTqV6rnN8kd4uKSj2XWXZLwyxYAAAAAAAAAAAAAAOOvcUbePNXrU6UfnOSiv5NccXeJD0nSjjMTyTy9eHM5yW8beH5mvMn4Xu/G9dMplL/AC11K6yd5Xuq8m251puT9vkvoBdOlVp1oc9GpCpF/ihJNGg9e6C1dq7iDkLi3suSyco06NzcVFCnGEYpdPLW+/ZPuatw2dy2DrqviMhcWk9938Ko0peq7P3Pcy/EnV+Xtlb3earRpbbSVCMaXP6uKTf/AACwOhsBgNBY3+nLJWrvqzUritVqxhOrLwkm+iXhGZQnCcVKElKL7OL3TKQSk5NuT3be7b8mSaL1bntOZGj/AEW4rTU5qP3LrOFZt/48nzf06gW9B1sbXr3Nhb17q1naV6lOMqlvOSk6cmusd10ex2QAAAAAAAAAfTv2B81E5U5xXdpoCnOssrUzeqcrkar3de5k4/SCe0V7RSR4py3NKVC5q0pveVObi/VPY4gAAAG7Ps7aZt7id7qO5hGpUt6n3a23W/JLlTnL12kl7s0mWJ+zlf06ulchYc0fjW966jiu/JOMdn+8ZfsBtkAAAAAAAAAAAABUnilhpYTXWWt+VqnVrO4pfJxqf3dPRtr2MTLD/aA0nLJ4ijqCyp81xj4uNxsusqDe+/6Xu/STfgry+gEAAAZDofVd9o/NwyNkviQa5K9CT2jVh8vo/Kfgx47FjZ3GQvKNnZ0pVbivNU6dOK6yk+yAt9o/VOO1diFksU6qpxn8OpCrBxlTmkm4vw+jXVbrqe4eHorT9LS+mbHEUmpSo096s1+Oo+sn+7e302PcAAAAAAAAAAAD5qQjUhKE4xlGS2lGS3TXlMrnxH4S5PFZCte6btal7i6rc1RormqW7/Ly95R+TXo/m7HACqGA4Xauzc1yYudnS81b7elFezXM/ZGUXfAXPU7dztcpj69ZL/W+eG/o9iw4AqJd8PtXWt391qYC+lUb2Tp0+eL/AFLdfybm4RcMp6cazWdhB5WUdqNFNSVtF92325326dl6m1QAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH/2Q==">
						</div>
						<h6 class="fw-bold">project Name</h6>
					</div>
				</div>
			</div>
		</div>
	</Dashboard>
</template>

<script setup lang="ts">
	import Dashboard from '@/components/Dashboard.vue'
</script>

<style lang="scss">
	.card {
		img {
			width: 100%;
			height: 150px;
			object-fit: cover;
			vertical-align: baseline;
		}

		.card-footer {
			position: relative;
			padding-top: 30px;
			.logo {
				width: 50px;
				height: 50px;
				position: absolute;
				top: -25px;
				border: 1px solid gray;
				border-radius: 50%;
				overflow: hidden;
				img {
					width: 100%;
					height: 100%;
				}
			}
		}
	}
</style>