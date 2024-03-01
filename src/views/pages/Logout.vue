<template>
    <div>
        Loging out.....
    </div>
</template>

<script>

export default{
    name: 'Logout',
    mounted(){
        this.logout();
    },
    methods:{
        async logout() {
            try {
                const response = await fetch('http://localhost/OFFICE/HRMBACK/public/api/logout', {
                    method: 'POST',
                    headers: {
                        'Authorization': `Beareer ${localStorage.getItem('token')}`
                    }
                });

                if(response.ok){
                    localStorage.removeItem('token');
                    localStorage.removeItem('userData');

                    this.$router.push('/login');
                }else{
                    console.log('Logout Error');
                }
            }catch (error){
                console.error('Logout Error', error);
            }

        }
    }

}

</script>