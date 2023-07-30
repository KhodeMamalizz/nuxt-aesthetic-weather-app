import { useStore } from "~/stores"

export const useHomeService = () => {
    
// state

    const store = useStore()

// methods

    const setHomeCurrentData = (data: any) => {
        store.setCurrentData(data)
    }

    const setHomeForecastData = (data: any) => {
        store.setForecastData(data)
    }

    const setHomeSearchData = (data: any) => {
        store.setSearchData(data)
    }
    const addSavedLocations = (data: any) => {
        store.setSavedLocations(data)
    }


// computed

    const homeCurrentData = computed(() => store.getCurrentData)
    const homeforecastData = computed(() => store.getForecastData)
    const homeSearchData = computed(() => store.getSearchData)
    const homeSavedLoctions = computed(() => store.getSevedLocations)




    return {
        setHomeCurrentData,
        homeCurrentData,
        setHomeForecastData,
        homeforecastData,
        setHomeSearchData,
        homeSearchData,
        addSavedLocations,
        homeSavedLoctions
    }
}