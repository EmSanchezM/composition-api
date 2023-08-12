<template>
    <article class="information container">
        <section class="information__restaurant">
            <img src="../assets/images/time.svg" alt="reloj icono">
            <h4>Horario</h4>
            <p>Lunes a viernes 9am a 8pm</p>
        </section>
        <section class="information__restaurant">
            <img src="../assets/images/gps.svg" alt="gps icono">
            <h4>Ubicacion</h4>
            <p>Honduras</p>
        </section>
        <section class="information__restaurant">
            <img src="../assets/images/phone.svg" alt="telefono icono">
            <h4>Telefono</h4>
            <p>+50422561520</p>
        </section>
    </article>
</template>

<script setup lang="ts"></script>

<style scoped>
    .information {
       padding: 100px;
       display: flex;
       justify-content: space-between; 
    }

    .information__restaurant {
        width: 300px;
        padding: 15px 25px;
        text-align: center;
        box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
        border-radius: 20px;
    }
    .information__restaurant img {
        width: 35px;
    }

    .information__restaurant h4 {
        font-size: 18px;
        color: #303030;
        margin-bottom: 10px;
    }

    .information__restaurant p {
        font-size: 16px;
        color: #545454;
    }

    @media(max-width: 991px) {
        .information {
            padding: 0;
            flex-direction: column;
            align-items: center;
        }

        .information__restaurant {
           margin-bottom: 20px; 
        }
    }
</style>