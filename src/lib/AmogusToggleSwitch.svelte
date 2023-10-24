<script>
    //console.log(writable)
    import {amogusMode} from '$lib/states'
    amogusMode.set("") //dark will apply the dark class, none is no class
    $: console.log($amogusMode + "bruh")
    let changeMode = () => ($amogusMode === "")? amogusMode.set("dark") : amogusMode.set('')
</script>

<div class="relative">    
    <div class="block bg-gray-300 dark:bg-gray-600 w-14 h-8 rounded-full" on:click="{changeMode}"></div>
    
    <div class="dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition" class:translate-x-full="{$amogusMode === 'dark'}" on:click="{changeMode}"></div>
</div>