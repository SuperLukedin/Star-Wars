<template>
  <v-app>
    <v-container>
    <div class="search">
      <v-text-field 
        label="Search"
        v-model="search"
      >
      </v-text-field>
    </div>
    <v-row>
      <v-col cols=6>
        <div v-if="search.length === 0">
          <div v-for="(item, i) in people" :key="i">
            <div class="tile">
              <v-btn
                color="primary"
                class="button"
                @click="selectPeople(item)" 
                min-width=300
                min-height=50
              >
                {{ item.name }}
              </v-btn>
            </div> 
          </div>
        </div>
        <div v-else>
          <div v-for="(item, i) in filteredPeople" :key="i">
            <div class="tile">
              <v-btn
                color="primary"
                class="button"
                @click="selectPeople(item)" 
                min-width=300
                min-height=50
              >
                {{ item.name }}
              </v-btn>
            </div> 
          </div>
        </div>
          
      </v-col>
      <div v-if="selected" class="card">
        <v-card
          class="mx-auto"
          max-width="344"
        > 
          <v-card-text>
            <v-card-title>{{ selected.name }}</v-card-title>
            <v-card-text>
              <div class="text--primary">
                {{ selected }}
              </div>
            </v-card-text>
            
          </v-card-text>
        </v-card>
      </div>
    </v-row>
  </v-container>
  </v-app>
  
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'starWars',
  data() {
    return {
      selected: null,
      search: '',
      filteredPeople: []
    }
  },
  created () {
    this.$http.get("https://swapi.co/api/starships/").then(response => {
      response
      this.$store.commit('setPeople', response.body.results)
    })
  },
  computed: {
    ...mapGetters({
      people: 'getPeople'
    })
  },
  methods: {
    selectPeople (item) {
      this.selected = item
    }
  },
  watch: {
    search () {
      this.filteredPeople = this.people.filter(p => {
        return p.name.toLowerCase().includes(this.search.toLowerCase())
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .tile {
    margin: 15px auto
  }
  .card {
    margin: auto auto
  }
  .v-content__wrap {
    background-color: antiquewhite
  }
  .search {
    margin: 40px auto;
    width: 400px;
    position: relative;
  }
  .v-application--wrap {
    background-color: aliceblue
  }
</style>
