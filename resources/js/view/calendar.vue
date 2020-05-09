<template>
    <div>
        <FullCalendar defaultView="dayGridMonth" :plugins="calendarPlugins" :events="events" />
    </div>
</template>
<script>
    import FullCalendar from '@fullcalendar/vue'
    import dayGridPlugin from '@fullcalendar/daygrid'

    export default {
        components: {
            FullCalendar
        },
        data() {
            return {
                calendarPlugins: [dayGridPlugin],
                events: null
            }
        },
        mounted() {
          this.getEvent();
        },
        methods: {
            getEvent() {
                axios.get('/api/get-event').then(response => {
                    this.events = response.data
                })
            }
        },
    }

</script>

<style lang='scss'>
    @import '~@fullcalendar/core/main.css';
    @import '~@fullcalendar/daygrid/main.css';
</style>
