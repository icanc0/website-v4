<script>

import AmogusToggleSwitch from '$lib/AmogusToggleSwitch.svelte'

</script>

<div class="flex flex-row bg-gray-800">
    
    <div class="flex flex-row p-2  w-full gap-2">
        <div class="h-full w-10">
            <img src="amogus.png" alt="when the amogus is sus"> 
        </div>
        <div class="font-bold px-3 py-2 text-white">
            Vincent Xie
        </div>
        <a href="/" class="px-3 py-2 bg-gray-900 font-bold text-gray-100 rounded-md">
            home
        </a>
        <a href="/blog" class="px-3 py-2 bg-gray-800 hover:bg-gray-700 font-bold text-gray-100 rounded-md">
            blog
        </a>
        <a href="/" class="px-3 py-2 bg-gray-800 hover:bg-gray-700 font-bold text-gray-100 rounded-md">
            amogus
        </a>
        <a href="/" class="px-3 py-2 bg-gray-800 hover:bg-gray-700 font-bold text-gray-100 rounded-md">
            amogus
        </a>
    </div>
    <div class="flex flex-row py-2 px-6 right-0 items-center">
        <AmogusToggleSwitch></AmogusToggleSwitch>
    </div>
</div>

