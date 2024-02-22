<script>
    export let data
</script>

<div class="w-full pt-4 px-2 sm:px-6">
    <div class="flex flex-col space-y-3  w-full">
        {#each data.blogData as blog}
            <a href="blog/{blog.path}" id="blogCard"
               class="flex flex-row bg-lmao-yellow dark:bg-gray-600 rounded-3xl p-3">
                <div class="flex flex-col justify-center items-center flex-shrink-0">
                    <img alt="pranav is so cute" src="pranav.png" class="rounded-2xl w-32 h-32 object-cover mr-4"/>
                </div>
                <div class="flex flex-col">
                    <div class="flex flex-col flex-grow">
                        <a href="blog/{blog.path}" class="font-extrabold text-md sm:text-xl md:text-2xl lg:text-4xl">
                            {blog.title}
                        </a>
                        <div class="text-gray-600 dark:text-gray-300 font-medium">
                            {blog.desc}
                        </div>
                    </div>
                    <div class="flex flex-row">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                             stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                        </svg>
                        <div class="text-gray-600 dark:text-gray-300 font-medium">
                            {blog.date}
                        </div>
                    </div>
                </div>
            </a>

        {/each}

    </div>
</div>
