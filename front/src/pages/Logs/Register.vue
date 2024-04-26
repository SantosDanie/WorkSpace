<template>
	<div class="container">
		<div class="card o-hidden border-0 shadow-lg my-5">
			<div class="card-body p-0">
				<div class="row">
					<div class="col-lg-5 d-none d-lg-block">
						<div class="register-vector">
							
						</div>
					</div>
					<div class="col-lg-7">
						<div class="p-5">
							<div class="text-center">
								<h1 class="h4 text-gray-900 mb-4">Create an Account!</h1>
							</div>
							<form class="user" @submit.prevent="submit">
								<div class="form-group row">
									<div class="col-12">
										<input type="text" v-model="registerData.username" class="form-control form-control-user" id="UserName" placeholder="First Name">
									</div>
								</div>
								<div class="form-group row">
									<div class="col-sm-6 mb-3 mb-sm-0">
										<input type="text" v-model="registerData.first_name" class="form-control form-control-user" id="FirstName" placeholder="First Name">
									</div>
									<div class="col-sm-6">
										<input type="text" v-model="registerData.last_name" class="form-control form-control-user" id="LastName" placeholder="Last Name">
									</div>
								</div>
								<div class="form-group">
									<input type="email" v-model="registerData.email" class="form-control form-control-user" id="InputEmail" placeholder="Email Address">
								</div>
								<div class="form-group row">
									<div class="col-sm-6 mb-3 mb-sm-0">
										<input type="password" v-model="registerData.password" class="form-control form-control-user" id="InputPassword" placeholder="Password">
									</div>
									<div class="col-sm-6">
										<input type="password" v-model="registerData.password_confirm" class="form-control form-control-user" id="RepeatPassword" placeholder="Repeat Password">
									</div>
								</div>
								<p v-if="errorMessage" class="error-message text-danger mb-4">{{ errorMessage }}</p>
								<input type="submit" class="btn btn-primary btn-user btn-block" value="Register Account">
								<hr>
								<!-- <a href="index.html" class="btn btn-google btn-user btn-block">
									<i class="fab fa-google fa-fw"></i> Register with Google
								</a>
								<a href="index.html" class="btn btn-facebook btn-user btn-block">
									<i class="fab fa-facebook-f fa-fw"></i> Register with Facebook
								</a> -->
							</form>
							<hr>
							<div class="text-center">
								<router-link :to="{name: 'forgot_pass'}" class="small">Forgot Password?</router-link>
							</div>
							<div class="text-center">
								<router-link :to="{name: 'login'}" class="small">Already have an account? Login!</router-link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
	import { useAuthStore, type RegisterData } from '@/stores/auth';
	import { reactive, ref } from 'vue';
	import { useRouter } from 'vue-router';

	const authStore = useAuthStore()
	const router = useRouter()

	const registerData = reactive<RegisterData>({
		username: "",
		email: "",
		first_name: "",
		last_name: "",
		password: "",
		password_confirm: "",
	})

	const errorMessage = ref<string>("")

	async function submit() {
		await authStore.register(registerData)
		.then(() => router.replace({ name: "login" }))
		.catch(err => errorMessage.value = err.message)
	}
</script>

<style lang="scss">
	.register-vector{
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		height: 100%;
		.st0{fill:#FFFFFF;}
		.st1{fill:url(#SVGID_1_);}
		.st2{fill:#BDD0FB;}
		.st3{fill:url(#SVGID_2_);}
		.st4{fill:#91B3FA;}
		.st5{fill:url(#SVGID_3_);}
		.st6{fill:url(#SVGID_4_);}
		.st7{opacity:0.6;}
		.st8{opacity:0.6;fill:#FFFFFF;}
		.st9{fill:url(#SVGID_5_);}
		.st10{clip-path:url(#SVGID_7_);fill:#FFFFFF;}
		.st11{clip-path:url(#SVGID_7_);}
		.st12{fill:url(#SVGID_8_);}
		.st13{fill:url(#SVGID_9_);}
		.st14{fill:url(#SVGID_10_);}
		.st15{fill:url(#SVGID_11_);}
		.st16{fill:url(#SVGID_12_);}
		.st17{fill:url(#SVGID_13_);}
		.st18{fill:url(#SVGID_14_);}
		.st19{fill:url(#SVGID_15_);}
		.st20{fill:url(#SVGID_16_);}
		.st21{fill:url(#SVGID_17_);}
		.st22{fill:url(#SVGID_18_);}
		.st23{fill:url(#SVGID_19_);}
		.st24{fill:url(#SVGID_20_);}
		.st25{fill:url(#SVGID_21_);}
		.st26{fill:url(#SVGID_22_);}
		.st27{fill:url(#SVGID_23_);}
		.st28{fill:url(#SVGID_24_);}
		.st29{fill:url(#SVGID_25_);}
		.st30{fill:url(#SVGID_26_);}
		.st31{fill:url(#SVGID_27_);}
	}
</style>