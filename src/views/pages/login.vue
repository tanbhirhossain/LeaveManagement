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
      }
    },
    methods: {
      async login() {
        try {
          const response = await fetch('http://116.193.223.197/api/login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              emp_id: this.emp_id, // Adjusted to match the API field name
              password: this.password
            })
          });
  
          if (response.ok) {
            // Login successful, handle success case (redirect to dashboard, etc.)
            console.log('Login successful');
          } else {
            // Login failed, handle error case (display error message, etc.)
            console.error('Login failed');
          }
        } catch (error) {
          console.error('Error:', error);
        }
      }
    }
  }
  </script>
  