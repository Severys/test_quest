<template>
	<div class="hello">
		<h1>
			LeadHit
		</h1>
		<input 
			type="text" 
			class="input_id"
			placeholder="Введите свой ID"
			v-model="input_id"
		>
		<div class="error"
			v-if="hasError && hasError.length"
			>
			{{hasError}}
		</div>
		<button class="btn"
			@click="filter">Войти
		</button>
	</div>
</template>

<script>
import axios from 'axios'

export default {
	name: 'VAuthor',
	data() {
		return {
			input_id: '',
			hasError: '',
			request: {
				url: 'https://track-api.leadhit.io/client/test_auth',
				headers: {
					'Api-Key':'5f8475902b0be670555f1bb3:eEZn8u05G3bzRpdL7RiHCvrYAYo',
					'Leadhit-Site-Id': ''
				}

			}
		}
	},
	computed:{
		getinputlength(){
			return this.input_id.length === 24
		}},
	methods:{
		filter() { 
			if (!this.getinputlength){
				this.hasError = 'id сайта должен содержать 24 символа'
			}else {
				this.request.headers['Leadhit-Site-Id'] = this.input_id
				axios.get(this.request.url,{
					headers: this.request.headers
				})
				.then(response => {
					if(response.data.message === 'ok') {
						this.gotoAnalytics()
					}
				})
				.catch(error => {
						this.hasError = error.message
				})
			}
		},
		gotoAnalytics() {
			this.$router.push({
				name: 'about',
			})
		}
	}
}
</script>

<style lang="scss">
 .hello {
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: 100px;
}
 .input_id {
	width: 50%;
	height: 30px;
 }
 .btn {
	margin-top: 50px;
	width: 100px;
	font-size: 15px;
 }
 .error {
	color: red;
 }
</style>
