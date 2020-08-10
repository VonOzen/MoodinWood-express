export const SET_APP_IS_LOADING = 'SET_APP_IS_LOADING'
export const SET_NAV_OPEN = 'SET_NAV_OPEN'

export const setAppIsLoading = isLoading => ({
  type: SET_APP_IS_LOADING,
  payload: isLoading,
})

export const setNavOpen = isNavOpen => ({
  type: SET_NAV_OPEN,
  payload: isNavOpen,
})
