//data
const rawData = [
  {
    code: '01a',
    available: true,
    type: 'suite',
    bedrooms: 2,
    basePrice: 600,
    size: 44,
    balcony: true,
    storage: true,
    bathroom: true,
    customColors: true,
    customMods: true,
    secure: true,
    description: 
      'Aquis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  },
  {
    code: '02a',
    available: true,
    type: 'studio',
    bedrooms: 1,
    basePrice: 300,
    size: 24,
    balcony: false,
    storage: true,
    bathroom: true,
    customColors: true,
    customMods: true,
    secure: true,
    description: 
      'Aquis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  },
  {
    code: '03b',
    available: true,
    type: 'suite',
    bedrooms: 2,
    basePrice: 650,
    size: 48,
    balcony: true,
    storage: true,
    bathroom: true,
    customColors: true,
    customMods: true,
    secure: true,
    description: 
      'Aquis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  }
]

const perkValues = {
  furnishing: 80,
  billing: 50
}

//js
const app = Vue.createApp({
  data () {
    return {
      static: [...rawData],
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
      perkValues: {...perkValues}
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
    },
    selectApartment (code) {
      this.selected = this.static.findIndex(el => el.code === code)
    }
  }
})

app.mount('#app')