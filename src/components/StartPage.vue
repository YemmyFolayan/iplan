<template>
    <div id="content">
      <v-container grid-list-xl class="pa-0">
        <v-layout row>
          <v-flex v-if="ready" xs12 sm10 offset-sm1 md8 offset-md2>
            <v-card v-if="noTodos" flat>
              <v-card-title><span style="font-size: 2em">No ToDos</span></v-card-title>
              <v-card-text>You have yet to create any ToDo.</v-card-text>
              <v-card-actions>
                <v-btn flat to="/create/todo" class="blue--text">Create</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
        <v-layout row>
          <v-flex xs12 sm10 offset-sm1 md8 offset-md2>
            <v-card v-if="!noTodos && ready" flat>
              <v-card-title><span style="font-size: 2em">Upcoming ToDos</span></v-card-title>
              <v-card-text>
                <ToDos v-if="upcomingTodos != ''" :ids="upcomingTodos" :hideAddButton="true"></ToDos>
                <span v-else>Nothing left to do!</span>
              </v-card-text>
              <v-card-actions>
                <v-btn flat to="/todos" class="blue--text">View All</v-btn>
                <v-btn flat to="/create/todo" class="pink--text">Create One</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
        <v-layout row>
          <v-flex xs12 sm10 offset-sm1 md8 offset-md2>
            <v-card v-if="!noGoals && ready" flat>
              <v-card-title><span style="font-size: 2em">Upcoming Goals</span></v-card-title>
              <v-card-text>
                <Goals v-if="upcomingGoals != ''" :ids="upcomingGoals"></Goals>
                <span v-else>No goals in the near future!</span>
              </v-card-text>
              <v-card-actions>
                <v-btn flat to="/goals" class="blue--text">View All</v-btn>
                <v-btn flat to="/todos" class="pink--text">Create One</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </div>
</template>

<script>
import ToDos from './ToDos'
import Goals from './Goals'
export default {
    name: 'startPage',
    created() {
      this.$root.$data.database.whenReady(() => {
        this.noTodos = this.$root.$data.database.getTodos().count() < 1
        this.noGoals = this.$root.$data.database.getGoals().count() < 1
        this.ready = true
        if (this.noTodos) return
        var upcomingTodosData = this.$root.$data.database.getTodos()
                              .chain()
                              // do not include results without a dueDate
                              .find({"dueDate": {"$ne": null}, "done": {"$ne": true}})
                              .simplesort('dueDate')
                              //.simplesort('dueTime')
                              .limit(5)
                              .data()
        if (this.$root.$data.debug) console.log(upcomingTodosData)
        var upcomingTodosArray = []
        upcomingTodosData.forEach((data, i) => upcomingTodosArray.push(data._id))
        this.upcomingTodos = upcomingTodosArray.join(",")
        // grab up to five goals, sorted by due date and display them
        var upcomingGoalsData = this.$root.$data.database.getGoals()
                              .chain()
                              // do not include results without a dueDate
                              .find({"dueDate": {"$ne": null}})
                              .simplesort('dueDate')
                              .limit(5)
                              .data()
        if (this.$root.$data.debug) console.log(upcomingGoalsData)
        var upcomingGoalsArray = []
        upcomingGoalsData.forEach((data, i) => upcomingGoalsArray.push(data._id))
        this.upcomingGoals = upcomingGoalsArray.join(",")
      })
    },
    data() {
      return {
        ready: false,
        noTodos: false,
        noGoals: false,
        upcomingTodos: "",
        upcomingGoals: ""
      }
    },
    methods: {
    },
    components: {
      ToDos,
      Goals
    }
}
</script>

<style scoped>

</style>