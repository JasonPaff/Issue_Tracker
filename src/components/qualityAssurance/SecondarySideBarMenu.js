﻿import classNameJoiner from "../../utils/ClassNameJoiner";
import {connect} from "react-redux";
import * as actionCreators from "../../store/actionCreators/navActionCreator";
import {useEffect} from "react";

const mapDispatchToProps = (dispatch) => {
    return {
        setLocation: (location) => dispatch(actionCreators.setLocation(location)),
    }
}

const mapStateToProps = (state) => {
    return {
        location: state.navReducer.location
    }
}

function SecondarySideBarMenu(props) {
    useEffect(() => {
    }, [props.location])

    return (
        <div className="px-2 space-y-1">
            {props.navigations.map((item) => (
                <a key={item.name}
                   onClick={() => props.setLocation(item.location)}
                   aria-current={item.current ? 'page' : undefined}
                   className={classNameJoiner(
                       item.current ? 'bg-cyan-800 text-white'
                           : 'text-cyan-100 hover:text-white hover:bg-cyan-600',
                       'group flex items-center px-2 py-2 text-sm leading-6 font-medium rounded-md'
                   )}
                >
                    <item.icon className="mr-4 flex-shrink-0 h-6 w-6 text-cyan-200" aria-hidden="true"/>
                    {item.name}
                </a>
            ))}
        </div>
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(SecondarySideBarMenu);