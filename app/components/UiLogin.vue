<template>
  <div class="max-w-md p-6 mx-auto border rounded-md bg-zinc-950 border-zinc-800">
    <div class="mb-6 text-center">
      <NuxtLink to="/">
        <h4 class="text-base font-bold tracking-tighter text-brand">
          {{ loginSignup === 'login' ? 'Login' : 'Signup' }}
        </h4>
      </NuxtLink>
    </div>
    <FormKit
      type="form"
      id="login"
      class="w-full"
      :form-class="submitted ? 'hide' : 'show'"
      submit-label="Register"
      :config="{ validationVisibility: 'submit' }"
      @submit="submitHandler"
      :actions="false"
      :incomplete-message="false"
      #default="{ value }"
    >
      <FormKit
        type="email"
        name="email"
        label="Email"
        placeholder="Your email"
        validation="required"
        :classes="formStyle"
      />

      <!-- Login -->
      <div v-if="loginSignup === 'login'">
        <FormKit
          type="password"
          name="password"
          label="Password"
          placeholder="Your password"
          validation="required"
          :classes="formStyle"
        />
        <!-- <NuxtLink to="/" class="block w-full text-xs text-right text-zinc-400 hover:text-brand">Forgot password
        </NuxtLink> -->
      </div>
      <!-- Signup -->
      <div
        v-else
        class="double"
      >
        <FormKit
          type="password"
          name="password"
          label="Password"
          validation="required|length:6|matches:/[^a-zA-Z]/"
          :validation-messages="{
            matches: 'Please include at least one symbol',
          }"
          placeholder="Your password"
          :classes="formStyle"
        />
        <FormKit
          type="password"
          name="password_confirm"
          label="Confirm password"
          placeholder="Confirm password"
          validation="required|confirm"
          :classes="formStyle"
        />
      </div>
      <FormKit
        type="submit"
        label="Login"
        outer-class="mt-10"
        input-class="w-full px-4 py-2 font-semibold text-center rounded bg-brand text-zinc-900"
      />
      <!-- <pre wrap>{{ value }}</pre> -->
    </FormKit>
    <!-- <div class="mt-4 mb-8 text-xs font-medium text-center">
      Don't have an account? <button @click="loginSignup === 'login' ? loginSignup = 'signup' : loginSignup = 'login'"
        class="text-brand">Create
        account</button>
    </div> -->
    <!-- <div v-if="submitted">
          <h2>Submission successful!</h2>
        </div> -->
  </div>
</template>

<script setup>
const user = useSupabaseUser()
const client = useSupabaseClient()
const router = useRouter()
const submitError = ref(false)
const submitErrorMessage = ref("")

const loginSignup = ref('login')
const cover = ref(false)
const submitted = ref(false)

const submitHandler = async (form) => {
  // console.log(form)
  const { data, error } = await client.auth.signInWithPassword({
    email: form.email,
    password: form.password
  })
  if (error) {
    submitError.value = true
    submitErrorMessage.value = error
  }
  navigateTo('/admin')
  // if (loginSignup === 'login') {
  //   const { error } = await client.auth.signIn({
  //     email: form.email,
  //     password: form.password
  //   })
  //   if (error) {
  //     submitError.value = true
  //     submitErrorMessage.value = error
  //   }
  //   router.push('/admin')
  // }
  // if (loginSignup === 'signup' && form.password === form.password_confirm) {
  //   const { error } = await client.auth.signUp({
  //     email: form.email,
  //     password: form.password,
  //     options: {
  //       data: {
  //         role: 'admin'
  //       }
  //     }
  //   })
  //   if (error) {
  //     submitError.value = true
  //     submitErrorMessage.value = error
  //   }
  // }
}


</script>