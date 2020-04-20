import {createSelector} from 'reselect'

const selectDirectory = state => state.directory

export const selectionDirectorySections = createSelector(
    [selectDirectory],
    directory => directory.sections
)

