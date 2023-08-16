<script setup>
    import { PhInfo } from "@phosphor-icons/vue"
    import { ref } from "vue"
    import { AUTH_CREDENTIALS } from "@/helpers/credentials"

    const visible = ref(false)
    const toggleVisibility = () => visible.value = !visible.value
</script>

<template>
    <div class="absolute bottom-6 right-6 flex flex-col items-end gap-3">
        <div v-if="visible" class="bg-zinc-200 text-zinc-800 px-5 py-4 rounded-2xl flex flex-col gap-2">
            <p class="uppercase font-bold">Correct Email</p>
            <input type="text" :value="AUTH_CREDENTIALS.email" class="bg-zinc-800 text-[#f1f2f6] py-2 px-4 rounded-md" readonly />
            <p class="uppercase font-bold">Correct Password</p>
            <input type="text" :value="AUTH_CREDENTIALS.password" class="bg-zinc-800 text-[#f1f2f6] py-2 px-4 rounded-md" readonly />
        </div>

        <button class="bg-emerald-600 p-2 rounded-full" v-on:click="toggleVisibility">
            <PhInfo :size="40" />
        </button>
    </div>
</template>
