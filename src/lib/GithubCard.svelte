<script lang="ts">

    export let projects: githubCard[]

    export interface githubCard {
        name: string;
        html_url: string;
        language: string;
        stars: number;
        forks: number;
        issues: number;
        avatar_url: string;
        user_url: string;
        description: string;
    }

</script>


<div class="grid grid-cols-2 gap-4">
    {#each projects as project}
        <a href={project.html_url} class="flex flex-col p-10 space-y-4 bg-slate-50 rounded-xl">
            <div class="font-medium text-md text-gray-700">
                {project.language}
            </div>
            <div class="font-extrabold text-4xl break-words">
                {project.name}
            </div>
            <div>
                {project.description}
            </div>
        </a>

    {/each}
</div>