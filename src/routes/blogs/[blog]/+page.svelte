<!-- this file takes a param which corresponds to the file name, and display it to markdown -->


<script>
    export let data
    let blog = data.rawJSON

</script>
<div class="w-full ">
    <div id="blogCard" class="bg-gray-50 dark:bg-gray-700 rounded-xl p-8 w-full">
        <div class="font-bold text-3xl pb-4 dark:text-gray-100">
            {blog.title}
        </div>
        <div class="font-medium text-lg pb-4 dark:text-gray-100">
            {blog.date}
        </div>
        <div class="font-medium text-base pb-4 text-gray-600 dark:text-gray-200">
            {blog.desc}
        </div>
        <div class="prose lg:prose-xl sm:prose-sm dark:text-gray-100 dark:prose-dark">
            {@html blog.body}
        </div>

    </div>
</div>