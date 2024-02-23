<script lang="ts">
import GithubCard from '$lib/GithubCard.svelte';


import { fly } from 'svelte/transition'
let counter = 0
let names = ['Vincent Xie', 'icanc (on the internet)']

function increment() {
    if (counter < names.length - 1) {
        counter++
    } else {
        counter = 0
    }
}
export let data
console.log(data)
//setInterval(increment, 200)
</script>

<!-- this is me section -->
<div class="bg-indigo-50">
    <div class="flex flex-col sm:flex-row mx-auto container">
        <div>
            <img src="home-banner.png" alt="when the amogus is sus">
        </div>
        <div class="flex flex-col items-center">
            <div class="flex flex-col gap-10 ">
                <div class="text-lg font-bold mt-40">
                    This is me
                </div>
                <div class="text-7xl font-extrabold" on:click={increment} transition:fly="{{ y: 200, duration: 1000 }}">
                    {names[counter]}
                </div>
                <div class="text-md text-gray-600">
                    Searching for jobs...
                </div>
                <div class="flex flex-row">
                    <div class="bg-gradient-to-r from-purple-400 to-blue-400 py-4 px-8 rounded-xl text-white font-bold">
                        Discover Now
                    </div>
                </div>
                
            </div>
        </div>
    </div>
    
</div>
<!-- this is the github projects section -->
<div>
    <div class="mx-auto container mt-10">
        <div class="flex flex-col ">
            <div class="text-2xl font-bold my-10">
                Github Projects
            </div>
            <GithubCard projects={data.results}/>
        </div>
    </div> 
</div>

<!--this is the features area (memeable af)-->

<div class="flex flex-col mx-auto container mt-10">
    <div class="my-10 text-2xl">
        About Myself
    </div>
    <div class="flex flex-row">
        <div class="flex flex-row h-full bg-slate-50 p-10 rounded-xl">
            <!--theres gonan be a few blocks of things here-->
            <div class="flex flex-col">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div class="font-bold text-2xl">
                    total networth
                </div>
            </div>
        </div>
        <!--this will be the language proficiency section-->
        <div class="flex flex-col grow justify-center p-2 space-y-2">
            <div class="text-right font-bold" >
                Javascript
            </div>

            <div class="">
                <div class="w-full h-3 bg-gray-100 rounded-xl p-0.5">
                    <div class="w-8/12 h-2 bg-purple-400 rounded-xl bg-gradient-to-r from-purple-400 to-blue-400"></div>
                </div>

            </div>

        </div>
    </div>

</div>
