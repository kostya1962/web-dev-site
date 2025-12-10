<script setup lang="ts">
</script>

<template>
    <div>
        <h1>Войти в аккаунт</h1>
        <form action="" class="login-form">
            <div class="login-form__fileds">
                <InputFiled variant="gray" placeholder="Email"/>
                <InputFiled variant="gray" type="password" placeholder="Пароль" />
            </div>
            <div class="login-form__actions">
                <ActionButton>
                    Вход
                </ActionButton>
                <NuxtLink to="/auth/restore">Забыли пароль?</NuxtLink>
            </div>
            
        </form>
    </div>
</template>

<style scoped>
    .login-form{
        display: flex;
        gap: 70px;
        flex-direction: column;
        margin: 0 auto;
        max-width: 500px;
        margin-top: 64px;
    }

    .login-form__fileds{
        display:flex;
        flex-direction: column;
        gap: 46px;
    }

    .login-form__actions{
        display: flex;
        flex-direction: column;
        gap: 22px;
    }

    .login-form__actions a{
        text-decoration: none;
        margin: 0 auto;
        color: var(--color-black);
    }

    .login-form__actions a:hover{
        color: var(--color-black-hover);
    }
</style>