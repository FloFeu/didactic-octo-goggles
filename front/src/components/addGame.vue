<template>
  <section>
    <form>
      <div><label for="name">Nom du jeu : </label><input type="text" /></div>
      <div>
        <label for="genre">Genre du jeu :</label>
        <select name="genre" id="genre">
            <option value="">-- Genre --</option>
            <option value="Action">Action/Aventure</option>
            <option value="FPS">FPS</option>
            <option value="MMO">MMO</option>
        </select>
      </div>
      <div>
        <label for="plateforme">Plateforme :</label>
        <select name="plateforme" id="plateforme">
          <option value="">-- Plateforme --</option>
          <option value="PC">PC</option>
          <option value="PS4/PS5">PS4 / PS5</option>
          <option value="xBox One/xBox Series">xBox One/xBox Series</option>
        </select>
      </div>
      
    </form>
  </section>
</template>

<script>
export default {};
</script>

<style>
</style>