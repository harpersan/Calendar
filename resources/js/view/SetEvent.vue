<template>
    <div class="bg-gray-100 tracking-wider tracking-normal">
        <div class="flex w-full">
            <nav id="header" class="fixed w-full z-10 top-0 bg-white border-b border-gray-400">
                <div class="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-4">
                    <div class="pl-4 flex items-center">
                        <svg class="h-5 pr-3 fill-current text-purple-500" xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20">
                            <path
                                d="M0 2C0 .9.9 0 2 0h16a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm14 12h4V2H2v12h4c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2zM5 9l2-2 2 2 4-4 2 2-6 6-4-4z" />
                        </svg>
                        <a class="text-gray-900 text-base no-underline hover:no-underline font-extrabold text-xl"
                            href="#">
                            Calendar
                        </a>
                    </div>
                </div>
            </nav>
            <!--Container-->
            <div class="container w-full flex flex-wrap mx-auto px-2 pt-8 lg:pt-16 mt-16">
                <div class="w-full lg:w-1/3 lg:pr-6 text-xl text-gray-800 leading-normal">
                    <div class="w-full sticky inset-0 hidden h-64 lg:h-auto overflow-x-hidden overflow-y-auto lg:overflow-y-hidden lg:block mt-0 border border-gray-400 lg:border-transparent bg-white shadow lg:shadow-none lg:bg-transparent z-20"
                        style="top:5em;">
                        <form action="" class="h-screen" @submit.prevent="onSubmit">
                            <div class="bg-white shadow rounded p-6">
                                <div
                                    class="border focus-within:border-blue-500 focus-within:text-blue-500 transition-all duration-500 relative rounded p-1">
                                    <div class="-mt-4 absolute tracking-wider px-1 uppercase text-xs">
                                        <p>
                                            <label for="name" class="bg-white text-gray-600 px-1">Event</label>
                                        </p>
                                    </div>
                                    <p>
                                        <input v-model="event" id="name" autocomplete="false" tabindex="0" type="text"
                                            class="py-1 px-1 text-gray-900 outline-none block h-full w-full text-sm">
                                    </p>
                                </div>


                                <div
                                    class="border focus-within:border-blue-500 focus-within:text-blue-500 transition-all duration-500 relative rounded p-1 mt-5">
                                    <div class="-mt-4 absolute tracking-wider px-1 uppercase text-xs">
                                        <p>
                                            <label for="name" class="bg-white text-gray-600 px-1">From</label>
                                        </p>
                                    </div>
                                    <p>
                                        <datepicker v-model="date_from"
                                            input-class="py-1 px-1 text-gray-900 outline-none block h-full w-full text-sm">
                                        </datepicker>
                                    </p>
                                </div>
                                <div
                                    class="border focus-within:border-blue-500 focus-within:text-blue-500 transition-all duration-500 relative rounded p-1 mt-5">
                                    <div class="-mt-4 absolute tracking-wider px-1 uppercase text-xs">
                                        <p>
                                            <label for="name" class="bg-white text-gray-600 px-1">To</label>
                                        </p>
                                    </div>
                                    <p>
                                        <datepicker v-model="date_to"
                                            input-class="py-1 px-1 text-gray-900 outline-none block h-full w-full text-sm">
                                        </datepicker>
                                    </p>
                                </div>

                                <div class="flex justify-around mt-4">
                                    <label class="flex justify-start items-start items-center">
                                        <div
                                            class="bg-white border-2 rounded border-gray-400 w-4 h-4 flex flex-shrink-0 justify-center items-center mr-1 focus-within:border-blue-500">
                                            <input v-model="days['Monday']" type="checkbox" class="opacity-0 absolute">
                                            <svg class="fill-current hidden w-4 h-4 text-green-500 pointer-events-none"
                                                viewBox="0 0 20 20">
                                                <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" /></svg>
                                        </div>
                                        <div class="select-none text-sm">Mon</div>
                                    </label>
                                    <label class="flex justify-start items-start items-center">
                                        <div
                                            class="bg-white border-2 rounded border-gray-400 w-4 h-4 flex flex-shrink-0 justify-center items-center mr-1 focus-within:border-blue-500">
                                            <input v-model="days['Tuesday']" type="checkbox" class="opacity-0 absolute">
                                            <svg class="fill-current hidden w-4 h-4 text-green-500 pointer-events-none"
                                                viewBox="0 0 20 20">
                                                <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" /></svg>
                                        </div>
                                        <div class="select-none text-sm">Tue</div>
                                    </label>
                                    <label class="flex justify-start items-start items-center">
                                        <div
                                            class="bg-white border-2 rounded border-gray-400 w-4 h-4 flex flex-shrink-0 justify-center items-center mr-1 focus-within:border-blue-500">
                                            <input v-model="days['Wednesday']" type="checkbox"
                                                class="opacity-0 absolute">
                                            <svg class="fill-current hidden w-4 h-4 text-green-500 pointer-events-none"
                                                viewBox="0 0 20 20">
                                                <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" /></svg>
                                        </div>
                                        <div class="select-none text-sm">Wed</div>
                                    </label>
                                    <label class="flex justify-start items-start items-center">
                                        <div
                                            class="bg-white border-2 rounded border-gray-400 w-4 h-4 flex flex-shrink-0 justify-center items-center mr-1 focus-within:border-blue-500">
                                            <input v-model="days['Thursday']" type="checkbox"
                                                class="opacity-0 absolute">
                                            <svg class="fill-current hidden w-4 h-4 text-green-500 pointer-events-none"
                                                viewBox="0 0 20 20">
                                                <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" /></svg>
                                        </div>
                                        <div class="select-none text-sm">Thu</div>
                                    </label>
                                    <label class="flex justify-start items-start items-center">
                                        <div
                                            class="bg-white border-2 rounded border-gray-400 w-4 h-4 flex flex-shrink-0 justify-center items-center mr-1 focus-within:border-blue-500">
                                            <input v-model="days['Friday']" type="checkbox" class="opacity-0 absolute">
                                            <svg class="fill-current hidden w-4 h-4 text-green-500 pointer-events-none"
                                                viewBox="0 0 20 20">
                                                <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" /></svg>
                                        </div>
                                        <div class="select-none text-sm">Fri</div>
                                    </label>
                                    <label class="flex justify-start items-start items-center">
                                        <div
                                            class="bg-white border-2 rounded border-gray-400 w-4 h-4 flex flex-shrink-0 justify-center items-center mr-1 focus-within:border-blue-500">
                                            <input v-model="days['Saturday']" type="checkbox"
                                                class="opacity-0 absolute">
                                            <svg class="fill-current hidden w-4 h-4 text-green-500 pointer-events-none"
                                                viewBox="0 0 20 20">
                                                <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" /></svg>
                                        </div>
                                        <div class="select-none text-sm">Sat</div>
                                    </label>
                                    <label class="flex justify-start items-start items-center">
                                        <div
                                            class="bg-white border-2 rounded border-gray-400 w-4 h-4 flex flex-shrink-0 justify-center items-center mr-1 focus-within:border-blue-500">
                                            <input v-model="days['Sunday']" type="checkbox" class="opacity-0 absolute">
                                            <svg class="fill-current hidden w-4 h-4 text-green-500 pointer-events-none"
                                                viewBox="0 0 20 20">
                                                <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" /></svg>
                                        </div>
                                        <div class="select-none text-sm">Sun</div>
                                    </label>
                                </div>


                                <div class="border-t mt-6 pt-3">
                                    <button type="submit"
                                        class="rounded text-gray-100 px-3 py-1 bg-blue-500 hover:shadow-inner hover:bg-blue-700 transition-all duration-300">
                                        Save
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div
                    class="w-full lg:w-4/6 p-8 mt-6 lg:mt-0 text-gray-900 leading-normal bg-white border border-gray-400 border-rounded">
                    <calendar ref="calendar"></calendar>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import Datepicker from 'vuejs-datepicker';
    import Calendar from './calendar.vue'
    export default {
        components: {
            Datepicker,
            Calendar
        },

        data() {
            return {
                date_from: '',
                date_to: '',
                days: {},
                event: ''
            }
        },

        methods: {
            onSubmit() {
                axios.post('/api/create-event', {
                    from: this.date_from,
                    to: this.date_to,
                    event: this.event,
                    days: this.days
                }).then(response => {
                    this.$refs.calendar.getEvent();
                    toastr['success']('Event successfully save');
                })
            }
        },
    }

</script>

<style scoped>
    input:checked+svg {
        display: block;
    }

</style>
