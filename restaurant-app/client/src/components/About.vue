<template>
    <article class="about">
        <img class="about__pattern" src="../assets/images/bg-2.svg" alt="patron 2">
        <div class="about__information container">
            <section class="about__image">
                <img src="../assets/images/ensalada-2.png" alt="ensalada">
            </section>
            <section class="about__content">
                <span>Premiun</span>
                <h4>La mejor calidad, alimentos frescos del día</h4>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero in, consequuntur molestias
                    exercitationem
                    voluptates facilis fuga vitae, sequi doloribus distinctio, similique tenetur iste odit? Rem ut quis
                    aspernatur dolor eius.
                    Deleniti aliquid optio tempora blanditiis aperiam ipsum minima, eaque ad unde nam vel incidunt fugit
                    voluptatibus sed sequi laborum ut quod totam itaque inventore? Quidem laborum ipsum aliquam nesciunt ex?
                </p>
                <a href="#" class="about__moreInfo">Más información</a>
            </section>
        </div>
    </article>
</template>

<style scoped>
.about {
    position: relative;
}

.about__pattern {
    position: absolute;
    top: 0;
    left: 0;
    width: 400px;
    z-index: -1;
}

.about__information {
    padding: 100px 0;
    display: flex;
    align-items: center;
}

.about__image {
    width: 50%;
}

.about__image img {
    width: 650px;
}

.about__content {
    width: 50%;
}

.about__content span {
    font-size: 16px;
    color: #FF9F00;
    font-weight: 700;
    margin-bottom: 25px;
}

.about__content h4 {
    font-size: 45px;
    color: #303030;
    margin-bottom: 30px;
}

.about__content p {
    font-size: 18px;
    color: #545454;
    margin-bottom: 50px;   
}

.about__moreInfo {
    display: inline-block;
    background-color: #FF9F0D;
    padding: 13px 30px;
    border-radius: 25px;
    color: #fff;
    text-transform: capitalize;
    box-shadow: 0 0 20px rgba(0,0,0,0.2);
}

.about__moreInfo:hover {
    background-color: #EE9003;
}

@media(max-width: 991px) {
    .about {
        padding: 30px;
    }

    .about__pattern {
        top: 80px;
        width: 200px;
    }

    .about__information {
        padding: 0;
        flex-direction: column;
        align-items: center;
        text-align: center;
    }

    .about__image {
        width: 100%;
    }

    .about__image img {
        width: 300px;
    }

    .about__content {
        width: 100%;
    }

    .about__content h4 {
        font-size: 40px;
        line-height: 50px;
        margin-bottom: 10px;
    }

    .about__content p {
        margin-bottom: 20px;
    }
}

</style>