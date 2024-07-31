<template>
    <Form v-slot="{ values }" :validation-schema="schema" method="post" @submit.preven="onSubmit"
        class="w-1/2 p-8 mt-10 mx-auto shadow-md rounded-md border-t-8 border-slate-700">
        <h1 class="text-3xl font-semibold mb-4">Login</h1>
        <div class="flex flex-col gap-4">
            <label class="flex flex-col gap-2">
                Email:
                <Field class="border p-1 rounded-sm" name="email" type="email" />
                <ErrorMessage class="text-red-400" name="email" />
            </label>
            <label class="flex flex-col gap-2">
                Password:
                <Field class="border p-1 rounded-sm" name="password" type="password" />
                <ErrorMessage class="text-red-400" name="password" />
            </label>
            <button class="bg-slate-700 text-white rounded-sm w-fit px-3 py-1">Submit</button>
        </div>


        <!-- <pre>{{ values }}</pre> -->
    </Form>
</template>
<script setup>
    import { Form, Field, ErrorMessage } from 'vee-validate';
    import Axios from "../utils/axios"
    import * as yup from 'yup';

    const schema = yup.object({
        email: yup.string().required("Email is required").email("Email is invalid"),
        password: yup.string().required("Password is required"), // More validation will be needed later
    });

    async function onSubmit(values) {
        const request = await Axios.post("/auth/login/", values)
        if (request.status_code === 200) {
            // TODO: Change this when upgrading to httpOnly cookie authentication
            const response = await request.data
            localStorage.setItem("access-token", response.token)
            localStorage.setItem("refresh-token", response.refreshToken)
        }

    }
</script>