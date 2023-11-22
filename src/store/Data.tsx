import { createSlice } from '@reduxjs/toolkit'

export type dataTypes = {
  name: string
  model: string
  url: string
  position: {
    x: number
    y: number
    z: number
  }
  readonly: boolean
  ace: boolean
  jobs: string
  grades: string
  interactionDistance: string
}

interface InitStateTypes {
  active: boolean
  showEditData: boolean
  currentEditCardData: dataTypes | null
  cardData: dataTypes | null
  data: dataTypes[]
}

const initialState: InitStateTypes = {
  active: false,
  showEditData: false,
  currentEditCardData: null,
  cardData: null,
  data: [
    {
      name: 'Testing Id 2348459521',
      model: 'recore-prop-whiteboard large',
      url: '-',
      position: {
        x: 4120.0,
        y: -1016.0,
        z: -1016.0,
      },
      readonly: false,
      ace: false,
      jobs: '-',
      grades: '-',
      interactionDistance: '2',
    },
  ],
}

function findIndexByPropertyValue(
  arr: dataTypes[],
  propName: string | number | symbol,
  propValue: string
) {
  return arr.findIndex((obj) => obj[propName as keyof dataTypes] === propValue)
}

export const utilSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    pushData: (state, actions) => {
      state.data.push(actions.payload)
    },
    deleteData: (state, actions) => {
      state.data.indexOf(actions.payload)
      const index = findIndexByPropertyValue(
        state.data,
        'name',
        actions.payload.name
      )
      if (index !== -1) {
        state.data.splice(index, 1)
      }
    },
    gettingFilterName: (state, actions) => {
      state.data = actions.payload
    },
    cardActive: (state, payload) => {
      state.active = true
      state.cardData = payload.payload
    },
    toggleActive: (state) => {
      state.active = false
    },
    showEditData: (state, payload) => {
      state.showEditData = !state.showEditData
      state.currentEditCardData = payload.payload
    },
    updateData: (state, payload) => {
      const data: dataTypes[] = JSON.parse(JSON.stringify(state.data))

      state.data = data.filter((item) => {
        item.name === payload.payload.name
      })
      state.data.push(payload.payload)
    },
  },
})

export default utilSlice.reducer

export const {
  gettingFilterName,
  cardActive,
  toggleActive,
  pushData,
  deleteData,
  showEditData,
  updateData,
} = utilSlice.actions
