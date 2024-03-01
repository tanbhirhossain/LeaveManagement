<template>
    <div class="relative flex flex-col justify-center h-screen overflow-hidden">
      <div class="w-full p-6 m-auto bg-white rounded-md shadow-md ring-2 ring-gray-800/50 lg:max-w-lg">
        <h1 class="text-3xl font-semibold text-center text-gray-700">AMZ LMS</h1>
        <form @submit.prevent="login" class="space-y-4">
          <div>
            <label class="label">
              <span class="text-base label-text">Employee ID</span>
            </label>
            <input v-model="emp_id" type="text" placeholder="Employee ID" class="w-full input input-bordered" />
          </div>
          <div>
            <label class="label">
              <span class="text-base label-text">Password</span>
            </label>
            <input v-model="password" type="password" placeholder="Enter Password" class="w-full input input-bordered" />
          </div>
          <a href="#" class="text-xs text-gray-600 hover:underline hover:text-blue-600">Forget Password?</a>
          <div>
            <button type="submit" class="btn btn-block">Login</button>
          </div>
        </form>
      </div>
    </div>
  </template>
  

  <script>
  export default {
    data() {
      return {
        emp_id: '',
        password: ''
      };
    },
    methods: {
      async login() {
        try {
          const response = await fetch('http://localhost/OFFICE/HRMBACK/public/api/login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              emp_id: this.emp_id,
              password: this.password
            })
          });
          
          if (response.ok) {
            const data = await response.json();
            localStorage.setItem('userData', JSON.stringify(data.user));

            // Store token in local storage or Vuex store
            localStorage.setItem('token', data.token);
            // Redirect to the home page or any other authenticated route
            this.$router.push('/');
          } else {
            // Handle login failure
            console.error('Login failed');
          }
        } catch (error) {
          console.error('Login failed', error);
        }
      }
    }
  };
  </script>