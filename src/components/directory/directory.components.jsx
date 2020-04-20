import React from 'react';
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";
import {selectionDirectorySections} from '../../redux/directory/directory.selector'
import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.sass'

const Directory = ({sections}) => (
            <div className="directory-menu">
                {
                    sections.map(({ id, ...menuItemProps}) => (
                        <MenuItem key={id} {...menuItemProps} />
                    ))
                }
            </div>
        )
const mapStateToProps = createStructuredSelector({
    sections : selectionDirectorySections
})
export default connect(mapStateToProps)(Directory)