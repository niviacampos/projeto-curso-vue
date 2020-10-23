<template>
    <v-container fluid>
        <v-row>
            <v-col
                cols="12"
                md="4"
                lg="3"
            >
                <h1 class="font-weight-caption">Estantes</h1>
            </v-col>
        </v-row>

        <library-list />
    </v-container>
</template>

<script>
    export default {
        name: 'LibraryListPage',
    };
</script>
