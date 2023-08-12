<template>
    <header class="header">
        <img src="../assets/images/bg.svg" alt="patern" class="header__pattern">
        <img class="condiment__image" src="../assets/images/especies.png" alt="condiment image">
        <section class="menu container">
            <a href="#" class="logo">Food</a>
            <input type="checkbox" id="menu" class="input__menu">
            <label for="menu"><img src="../assets/images/menu.png" class="menu__icon" alt="menu icon"></label>
            <nav class="navigation__bar">
                <ul class="navigation__list">
                    <li class="navigation__list-item"><a href="#">Inicio</a></li>
                    <li class="navigation__list-item"><a href="#">Servicios</a></li>
                    <li class="navigation__list-item"><a href="#">Productos</a></li>
                    <li class="navigation__list-item"><a href="#">Contacto</a></li>
                </ul>
            </nav>
        </section>
        <article class="header__content container">
            <section class="header__information">
                <div class="header__text">
                    <h2>Tu comida favorita a domicilio, caliente y fresca</h2>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium earum veniam sit deserunt quo.
                        Corporis aspernatur quas porro a architecto, exercitationem nisi, iusto, ullam ex blanditiis
                        recusandae labore! Quod, placeat.
                        Cupiditate aperiam aliquam, hic vitae officiis, fuga nostrum ipsum tenetur officia deserunt, tempore
                        quos rem doloribus suscipit sit nulla sint mollitia. Magnam, neque eos doloremque natus explicabo
                        corrupti nesciunt! Culpa?
                        Modi laudantium temporibus provident ratione debitis architecto harum asperiores aliquid, beatae sit
                        odio deleniti voluptates soluta possimus fugit veritatis totam esse error nemo. Natus quas numquam
                        inventore libero architecto ex!
                    </p>
                    <a href="#" class="header__moreinfo">Más información</a>
                </div>
                <div class="header__image">
                    <img src="../assets/images/ensalada-1.png" alt="ensalada">
            </div>
        </section>
    </article>
    </header>
</template>

<script setup lang="ts"></script>

<style scoped>
    .header {
        display: flex;
        position: relative;
    }

    .menu {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .logo {
        color: #303030;
        font-size: 25px;
        font-weight: 800;
    }

    .menu .navigation__bar ul li {
        position: relative;  
        float: left;   
    }

    .menu .navigation__bar ul li a {
        font-size: 18px;
        padding: 20px;
        color: #303030;
        display: block;
        font-weight: 600; 
    }

    .input__menu {
        display: none;
    }

    .menu__icon {
        width: 25px;
    }

    .menu label {
        cursor: pointer;
        display: none;
    }

    .header__pattern {
        position: absolute;
        width: 700px;
        z-index: -1;
        right: 0;
    }

    .condiment__image {
        position: absolute;
        top: 700px;
        bottom: 0;
        width: 350px;
    }

    .header__information {
        display: flex;
        align-items: center;
        margin-top: 100px;
    }

    .header__text {
        width: 50%;
        padding-right: 35px;
    }

    .header__text h2 {
        font-size: 55px;
        line-height: 70px;
        font-weight: 600;
        color: black;
        margin-bottom: 25px;
        text-transform: capitalize;
    }

    .header__text p {
        font-size: 16px;
        color: #545454;
        margin-bottom: 35px;
    }

    .header__moreinfo {
        display: inline-block;
        background-color: #FF9F0D;
        padding: 13px 30px;
        border-radius: 25px;
        color: #fff;
        text-transform: capitalize;
        box-shadow: 0 0 20px rgba(0,0,0,0.2);
    }

    .header__moreinfo:hover {
        background-color: #EE9003;
    }

    .header__image {
        width: 50%;
    }

    .header__image img {
        width: 650px;
    }

    @media(max-width: 991px) {
        .menu { 
           padding: 30px; 
        }

        .menu label {
            display: initial;
        }

        .menu .navigation__bar {
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background-color: #303030;
            display: none;
        }

        .menu .navigation__bar ul li {
            width: 100%;
        }

        .menu .navigation__bar ul li a {
            color: #fff;
        }

        .menu .navigation__bar ul li a:hover {
            color: #bebebe;
        }

        .input__menu:checked ~ .navigation__bar {
            display: initial;
        }

        .header__pattern {
            width: 500px;
        }

        .condiment__image {
            display: none;
        }

        .header__information {
            flex-direction: column;
            padding: 30px;
        }

        .header__text {
            width: 100%;
            text-align: center;
            padding: 0;
        }

        .header__text h2 {
            font-size: 40px;
            line-height: 50px;
        }

        .header__image {
            width: 100%;
            text-align: center;
            padding-top: 35px;
        }

        .header__image img {
            width: 300px;
        }
    }

</style>