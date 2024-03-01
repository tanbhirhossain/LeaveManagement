<template>
    <div class="h-screen flex flex-col">
        <div class="flex-grow overflow-hidden">
          <!-- Your main content here -->
          <div class="h-full overflow-y-auto">
            <div class="grid justify-center">
              <div class="flex gap-8 flex-wrap">
                <Dcard class="mx-auto"></Dcard>
                <Dcard class="mx-auto"></Dcard>
                <Dcard class="mx-auto"></Dcard>
                <Dcard class="mx-auto"></Dcard>
                <div class="mx-auto">
                  <h1>Name: {{ userData.name }}</h1>
                  <h1>Department: {{ userData.department_code }}</h1>
                  <h1>Email: {{ userData.emp_id }}</h1>

                  <!-- Add more fields as needed -->
                </div>              </div>
            </div>
          </div>
        </div>
        </div>
</template>

<script>
import Dcard from '@/components/Dcard.vue'
    export default{
        name: 'Home',
        components: {Dcard},

        data() {
    return {
      userData: {} // Initialize an empty object to store logged-in user's data
    };
  },
  mounted() {
    // Retrieve logged-in user's data from local storage
    this.userData = JSON.parse(localStorage.getItem('userData'));
  }
      
    }
</script>