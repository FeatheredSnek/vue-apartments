const testData = [
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
    customColors: false,
    customMods: true,
    secure: true,
    description: 
      'Aquis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  },
  {
    code: '03b',
    available: false,
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

export {testData, perkValues}