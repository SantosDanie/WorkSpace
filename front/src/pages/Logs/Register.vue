<template>
	  <div class="container">
		<div class="card o-hidden border-0 shadow-lg my-5">
			<div class="card-body p-0">
				<div class="row">
					<div class="col-lg-5 d-none d-lg-block bg-register-image"></div>
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