<style global lang="postcss">

    @tailwind base;
    @tailwind components;
    @tailwind utilities;
    
</style>

<script lang="ts">
    import NavBar from "$lib/NavBar.svelte";

</script>

<NavBar></NavBar>
<div class="bg-red-400 h-10 w-full p-2 font-bold">
  This website is under construction, to view the old website, please see my github.
</div>
<slot></slot>


