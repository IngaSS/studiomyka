<template>
  <footer>
    <div class="postFooter">
      <p class="upp">&copy; 2019 кулинарная студия мукÁ</p>
      <p>Политика обработки персональных данных</p>
    </div>
  </footer>
</template>

<style>
.postFooter {
  max-width: 85%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
}

footer {
  margin-top: 3%;
  background-color: black;
}

.postFooter p {
  color: white;
  line-height: 3;
  font-family: "Fira Sans", sans-serif;
  margin-bottom: 0 !important;
}

.upp {
  text-transform: uppercase;
}

@media (min-width: 415px) and (max-width: 640px) {
  .postFooter p {
    color: white;
    font-size: 12px;
    line-height: 3;
    font-family: "Fira Sans", sans-serif;
  }
}

@media (min-width: 320px) and (max-width: 414px) {
  .postFooter {
    flex-direction: column;
  }

  .postFooter p {
    color: white;
    font-size: 10px;
    line-height: 2;
    font-family: "Fira Sans", sans-serif;
  }
}
</style>

