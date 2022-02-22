// data imports
import { testData } from './data.js'
import { perkValues } from './data.js'

//js
const app = Vue.createApp({
  data () {
    return {
      static: [...testData],
      filters: {
        type: null,
        maxPrice: null,
        minSize: null,
        bedrooms: null,
        bathroom: null,
        storage: null
      },
      selected: null,
      perks: {
        furnishing: false,
        billing: false
      },
      perkValues: {...perkValues},
      displayFilters: false
    }
  },
  computed: {
    filteredResults () {
      return this.static.filter(function (el) {
        let typeCheck, priceCheck, sizeCheck, bedroomsCheck, bathroomCheck, storageCheck
        if (el.type === this.type || this.type === null) typeCheck = true
        if (el.basePrice <= this.maxPrice || this.maxPrice === null) priceCheck = true
        if (el.size >= this.minSize || this.minSize === null) sizeCheck = true
        if (el.bedrooms == this.bedrooms || this.bedrooms === null) bedroomsCheck = true
        if (el.bathroom === this.bathroom || this.bathroom === null) bathroomCheck = true
        if (el.storage === this.storage || this.storage === null) storageCheck = true
        return (typeCheck && priceCheck && sizeCheck && bedroomsCheck && bathroomCheck && storageCheck)
      }, this.filters)
    },
    filterCount () {
      let count = 0
      for (let fieldName in this.filters) {
        if (this.filters[fieldName] !== null) count += 1
      }
      if (count === 0) {
        return 'No filters'
      }
      else if (count === 1) {
        return '1 filter'
      }
      else {
        return `${count} filters`
      }
    },
    selectedData () {
      if (this.selected !== null) {
        return this.static[this.selected]
      }
      else {
        // returns empty object so all the properties are blank (undefined)
        return {}
      }
    },
    calculatedPrice () {
      let price = this.selectedData.basePrice
      for (let fieldName in this.perks) {
        if (this.perks[fieldName] === true) {
          price += this.perkValues[fieldName]
        }
      }
      return price
    }
  },
  methods: {
    resetFilters () {
      for (let fieldName in this.filters) {
        this.filters[fieldName] = null
      }
      this.displayFilters = false
    },
    selectApartment (code) {
      this.selected = this.static.findIndex(el => el.code === code)
    },
    toggleFiltersDisplay () {
      this.displayFilters = !this.displayFilters
    }
  }
})

app.mount('#app')