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
              </div>
            </div>
          </div>
        </div>
        </div>
</template>

<script>
import Dcard from '@/components/Dcard.vue'
    export default{
        name: 'Home',
        components: {Dcard}
    }
</script>