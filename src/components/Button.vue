<template>
    <button 
        v-bind:style="{background: color}" 
        class="btn"
        v-on:click="onClick()"
        >
        {{text}}
        
    </button>
</template>

<script>
    export default {
        name: 'Button',
        props: {
            text: String,
            color: String
        },
        methods:{
            onClick(){
                this.$emit('btn-click')
            }
        }
    }
</script>