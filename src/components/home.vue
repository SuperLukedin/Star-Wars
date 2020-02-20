<template>
  <v-app>
    <v-container>
    <div class="search">
      <v-text-field 
        label="Search people here"
        v-model="search"
      >
      </v-text-field>
    </div>
    <v-row>  
      <v-col cols=6>
        <p class="display-1"> Star Wars People </p>
        <div v-if="search.length === 0">
          <div v-for="(item, i) in people" :key="i">
            <div class="tile">
              <v-btn
                color="#1aaad6"
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
            max-width="500"
          > 
            <v-card-text class="card-text">
              <p class="display-1"> {{ selectedName }} </p>
                <div class="content">
                  {{ selected }}
                </div>
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
      selectedName: '',
      search: '',
      filteredPeople: []
    }
  },
  created () {
    this.$http.get("https://swapi.co/api/people/").then(response => {
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
      this.selectedName = item.name
      this.selected = JSON.stringify(item)
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

<style>
  .tile {
    margin: 15px auto
  }
  .card {
    margin: auto auto;
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
  .card-text {
    display: flex;
    flex-direction: column;
    width: 400px;
    align-items: center;
  }
  .content {
    width: 100%;
  }
</style>
