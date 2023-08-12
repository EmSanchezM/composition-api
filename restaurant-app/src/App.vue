<script setup lang="ts">
import Header from "./components/Header.vue"
import Information from "./components/Information.vue"
import About from "./components/About.vue"
import Footer from "./components/Footer.vue"
</script>

<template>
  <Header />
  <Information />
  <About />
  <main class="products container">
    <h2>Productos</h2>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur labore possimus blanditiis provident eum illo?
      Ex, ullam earum. Dolorem fugit fuga enim maiores repellat iste placeat nihil minus odio quod?
      Esse officiis eius facilis adipisci quam tempore nisi necessitatibus cupiditate nobis, commodi dicta, incidunt quasi
      qui aliquid magni maxime repellat? Earum aliquam autem magni facilis voluptatum in repudiandae, reprehenderit iure.
      A, ab fugiat! Esse officiis rerum aspernatur quos! Eius cupiditate perspiciatis quaerat sint voluptatem delectus at
      explicabo architecto veniam, qui nemo distinctio voluptatum inventore totam accusantium exercitationem! Libero,
      laboriosam commodi!
    </p>
    <article class="product__information">
      <section class="product__card">
        <img src="./assets/images/pr1.jpg" alt="ensalada">
        <h3>Ensalada</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt at quidem maxime assumenda iusto repudiandae,
          corrupti asperiores ullam doloribus recusandae? Iste ad neque, alias maiores ea cupiditate nobis quia vitae?
          Assumenda, quia. Obcaecati sunt perspiciatis deleniti unde totam repudiandae culpa molestiae, tempora ipsum sed
          dolorum? Tenetur recusandae dolorem unde doloribus explicabo incidunt cumque repudiandae, nihil commodi
          aspernatur itaque corporis ducimus!
        </p>
        <span>LPS. 15.00</span>
      </section>
      <section class="product__card">
        <img src="./assets/images/pr2.jpg" alt="ensalada">
        <h3>Ensalada</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt at quidem maxime assumenda iusto repudiandae,
          corrupti asperiores ullam doloribus recusandae? Iste ad neque, alias maiores ea cupiditate nobis quia vitae?
          Assumenda, quia. Obcaecati sunt perspiciatis deleniti unde totam repudiandae culpa molestiae, tempora ipsum sed
          dolorum? Tenetur recusandae dolorem unde doloribus explicabo incidunt cumque repudiandae, nihil commodi
          aspernatur itaque corporis ducimus!
        </p>
        <span>LPS. 15.00</span>
      </section>
      <section class="product__card">
        <img src="./assets/images/pr3.jpg" alt="ensalada">
        <h3>Ensalada</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt at quidem maxime assumenda iusto repudiandae,
          corrupti asperiores ullam doloribus recusandae? Iste ad neque, alias maiores ea cupiditate nobis quia vitae?
          Assumenda, quia. Obcaecati sunt perspiciatis deleniti unde totam repudiandae culpa molestiae, tempora ipsum sed
          dolorum? Tenetur recusandae dolorem unde doloribus explicabo incidunt cumque repudiandae, nihil commodi
          aspernatur itaque corporis ducimus!
        </p>
        <span>LPS. 15.00</span>
      </section>
      <section class="product__card">
        <img src="./assets/images/pr1.jpg" alt="ensalada">
        <h3>Ensalada</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt at quidem maxime assumenda iusto repudiandae,
          corrupti asperiores ullam doloribus recusandae? Iste ad neque, alias maiores ea cupiditate nobis quia vitae?
          Assumenda, quia. Obcaecati sunt perspiciatis deleniti unde totam repudiandae culpa molestiae, tempora ipsum sed
          dolorum? Tenetur recusandae dolorem unde doloribus explicabo incidunt cumque repudiandae, nihil commodi
          aspernatur itaque corporis ducimus!
        </p>
        <span>LPS. 15.00</span>
      </section>
      <section class="product__card">
        <img src="./assets/images/pr2.jpg" alt="ensalada">
        <h3>Ensalada</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt at quidem maxime assumenda iusto repudiandae,
          corrupti asperiores ullam doloribus recusandae? Iste ad neque, alias maiores ea cupiditate nobis quia vitae?
          Assumenda, quia. Obcaecati sunt perspiciatis deleniti unde totam repudiandae culpa molestiae, tempora ipsum sed
          dolorum? Tenetur recusandae dolorem unde doloribus explicabo incidunt cumque repudiandae, nihil commodi
          aspernatur itaque corporis ducimus!
        </p>
        <span>LPS. 15.00</span>
      </section>
      <section class="product__card">
        <img src="./assets/images/pr3.jpg" alt="ensalada">
        <h3>Ensalada</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt at quidem maxime assumenda iusto repudiandae,
          corrupti asperiores ullam doloribus recusandae? Iste ad neque, alias maiores ea cupiditate nobis quia vitae?
          Assumenda, quia. Obcaecati sunt perspiciatis deleniti unde totam repudiandae culpa molestiae, tempora ipsum sed
          dolorum? Tenetur recusandae dolorem unde doloribus explicabo incidunt cumque repudiandae, nihil commodi
          aspernatur itaque corporis ducimus!
        </p>
        <span>LPS. 15.00</span>
      </section>
    </article>
  </main>
  <hr>
  <Footer />
</template>

<style scoped>
.products {
  padding: 80px 0px;
  text-align: center;
}

.products h2 {
  font-size: 45px;
  color: #303030;
  margin-bottom: 30px;
}

.products p {
  font-size: 18px;
  color: #545454;
  margin-bottom: 70px;
  padding: 0 200px;
}

.product__information {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: auto;
  gap: 3rem;
}

.product__card {
  padding-bottom: 35px;
  text-align: center;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  border-radius: 25px;
}

.product__card img {
  width: 100%;
  height: 250px;
  border-radius: 25px 25px 0 0;
}

.product__card h3 {
  font-size: 20px;
  color: #303030;
  margin-top: 15px;
}

.product__card p {
  font-size: 16px;
  padding: 30px;
  color: #545454;
  margin: 0;
}

.product__card span {
  background-color: #FF9F00;
  padding: 10px;
  color: #fff;
  border-radius: 15px;
}

hr {
  border: 1px solid #EEE;
}

@media(max-width: 991px) {
  .products {
    padding: 30px;
    text-align: center;
  }

  .products h2 {
    font-size: 40px;
  }

  .products p {
    padding: 0;
    margin-bottom: 40px;
  }

  .product__information {
    grid-template-columns: repeat(1, 1fr);
  }

  .product__card p {
    padding: 30px;
  }
}

</style>
