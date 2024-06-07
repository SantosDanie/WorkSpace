<template>
	<div class="container-project-details">
		<div class="project-heading">
			<div class="logo">
				<img src="" alt="">
			</div>
			<div class="description">
				<h3>Project Title</h3>
				<p>
					<a href="#0">https://example.com</a>
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M352 0c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9L370.7 96 201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L416 141.3l41.4 41.4c9.2 9.2 22.9 11.9 34.9 6.9s19.8-16.6 19.8-29.6V32c0-17.7-14.3-32-32-32H352zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z"/></svg>
				</p>
			</div>
		</div>
		<div class="container-cards">
			<div class="card-project">
				<div class="project-progress">
					<div id="progress-bar--container">
						<svg viewBox="0 0 100 100">
							<circle stroke="#EAEAEA" stroke-width="5.5" cx="50" cy="50" r="30" fill="none"/>
							<circle id="progress--circle" stroke="#28411B" stroke-width="5.5" cx="50" cy="50" r="30" fill="none" pathLength="100"/>
							<text id="progress--text" x="50" y="48" text-anchor="middle" dominant-baseline="middle">0%</text>
							<text id="progress--text" class="progress--text--second" x="50" y="55" text-anchor="middle" dominant-baseline="middle">COMPLETED</text>
						</svg>
					</div>
				</div>
			</div>
			<div class="card-project">
				<div class="project-calendar">

				</div>
			</div>
			<div class="card-project">
				<div class="project-comments">

				</div>
			</div>
			<div class="card-project">
				<div class="project-tasks">

				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
	
</script>

<style lang="scss">
	.container-cards {
		display: flex;
		margin-left: -10px;
		margin-right: -10px;
	}

	.card-project {
		padding: 10px;
		margin: 10px 10px;
		border-radius: 5px;
		box-shadow: 0 0 3px gray;
	}

	// $accentColor: #EAEAEA;
	// $primaryColor: #28411B;
	// $primaryFont: "JetBrains Mono";
	
	#progress-bar--container {
		display: flex;
		justify-content: center;
	}

	// svg { transform: rotate(-90deg); }
	#meter--ranger { width: 100%; }
	#progress-bar--container svg { width: 400px; }

	#progress--circle {
		stroke-dasharray: 100;
		stroke-dashoffset: 100;
		stroke-linecap: round;
	}

	// #progress--text {
	// 	font-family: $primaryFont;
	// 	fill: $primaryColor;
	// 	font-weight: 750;
	// 	font-size: 5.5px;
	// 	transform-origin: center;
	// 	transform: rotate(90deg);
	// }

	// .meter-info {
	// 	box-sizing: border-box;
	// 	font-family: $primaryFont;
	// 	font-weight: bold;
	// 	display: flex;
	// 	flex-direction: column;
	// 	justify-content: center;
	// 	align-items: center;
	// 	background-color: $primaryFont;
	// 	padding: 30px 20px;
	// }
</style>