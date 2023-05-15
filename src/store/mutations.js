export default {
  setPlanetsLoading: (state, value) => (state.planetsLoading = value),
  setPlanetsError: (state, value) => (state.planetsError = value),
  setPlanets: (state, planets) => (state.planets = planets),

  setPeopleLoading: (state, value) => (state.peopleLoading = value),
  setPeopleError: (state, value) => (state.peopleError = value),
  setPeople: (state, people) => (state.people = people)
}
