<template>
    <footer class="footer container">
        <article class="footer__links">
            <section class="footer__link">
                <h3>Food</h3>
                <div class="socials">
                    <img src="../assets/images/s1.svg" alt="social network">
                    <img src="../assets/images/s2.svg" alt="social network">
                    <img src="../assets/images/s3.svg" alt="social network">
                    <img src="../assets/images/s4.svg" alt="social network">
                </div>
            </section>
            <section class="footer__link">
                <h3>Lorem</h3>
                <ul>
                    <li><a href="#">Lorem</a></li>
                    <li><a href="#">Lorem</a></li>
                    <li><a href="#">Lorem</a></li>
                    <li><a href="#">Lorem</a></li>
                </ul>
            </section>
            <section class="footer__link">
                <h3>Lorem</h3>
                <ul>
                    <li><a href="#">Lorem</a></li>
                    <li><a href="#">Lorem</a></li>
                    <li><a href="#">Lorem</a></li>
                    <li><a href="#">Lorem</a></li>
                </ul>
            </section>
            <section class="footer__link">
                <h3>Lorem</h3>
                <ul>
                    <li><a href="#">Lorem</a></li>
                    <li><a href="#">Lorem</a></li>
                    <li><a href="#">Lorem</a></li>
                    <li><a href="#">Lorem</a></li>
                </ul>
            </section>
        </article>
    </footer>
</template>

<style scoped>
    .footer {
        padding: 100px 0;
    }

    .footer__links {
        display: flex;
        justify-content: space-between;
    }
    
    .footer__link h3 {
        font-size: 20px;
        color: #303030;
        margin-bottom: 20px;
    }

    .socials img {
        margin-right: 15px;
    }

    a {
        font-size: 16px;
        display: block;
        margin-bottom: 10px;
        color: #545454;
    }

    @media(max-width: 991px) {
        .footer {
            padding: 30px;
        }

        .footer__links {
            flex-direction: column;
            align-items: center;
            text-align: center;
        }

        .socials {
            margin-bottom: 25px;
        }
    }
</style>