﻿import React, {Fragment} from 'react'
import {connect} from 'react-redux';
import {Listbox, Transition} from '@headlessui/react'
import {CheckIcon, ChevronDownIcon} from '@heroicons/react/solid'
import * as actionCreators from "../../../store/actionCreators/newTicketActionCreator";

const severityOptions = [
    { severity: 'Minor', description: 'Minor loss of function' },
    { severity: 'Major', description: 'Major loss of function' },
    { severity: 'Critical', description: 'Application crash, loss of data' },
    { severity: 'Trivial', description: 'Some UI enhancements' },
    { severity: 'Blocker', description: 'No further testing work can be done' },
    { severity: 'Enhancement', description: 'New feature or enhancement request' }
];

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSelectChange: (selected) => dispatch(actionCreators.setSeverity(selected))
    };
}

const mapStateToProps = (state) => {
    return {
        severity: {
            severity : state.newTicketReducer.severity.severity,
            description: state.newTicketReducer.severity.description
        }
    };
}

function SeverityDropDown(props) {
    return (
        <div className="mt-2">
            <label htmlFor="severity" className="block text-sm font-medium text-gray-700">
                Severity
            </label>
            <Listbox value={props.severity.severity} onChange={(e) => props.onSelectChange(e)} id="severity">
                {({open}) => (
                    <>
                    <Listbox.Label className="sr-only">change issue severity</Listbox.Label>
                    <div className="relative">
                        <div className="inline-flex shadow-sm rounded-md divide-x divide-sky-600">
                            <div className="relative z-0 inline-flex shadow-sm rounded-md divide-x divide-sky-600">
                                <div className="relative inline-flex items-center bg-sky-500 py-2 pl-3 pr-4 border
                                    border-transparent rounded-l-md shadow-sm text-white">
                                    <p className="ml-2.5 text-sm font-medium">{props.severity.severity}</p>
                                </div>
                                <Listbox.Button
                                    className="relative inline-flex items-center bg-sky-500 p-2 rounded-l-none
                                         rounded-r-md text-sm font-medium text-white hover:bg-sky-600 focus:outline-none
                                         focus:z-10 focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50
                                         focus:ring-sky-500">
                                    <span className="sr-only">change issue severity</span>
                                    <ChevronDownIcon className="h-5 w-5 text-white" aria-hidden="true"/>
                                </Listbox.Button>
                            </div>
                        </div>

                        <Transition
                            show={open}
                            as={Fragment}
                            leave="transition ease-in duration-100"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <Listbox.Options
                                className="origin-top-right absolute z-10 left-0 mt-2 w-72 rounded-md shadow-lg
                                    overflow-hidden bg-white divide-y divide-gray-200 ring-1 ring-black ring-opacity-5
                                    focus:outline-none">
                                {severityOptions.map((option) => (
                                    <Listbox.Option
                                        key={option.severity}
                                        className={({active}) => classNames(active ? 'text-white bg-sky-500'
                                            : 'text-gray-900', 'cursor-default select-none relative p-4 text-sm')}
                                        value={option}
                                    >
                                        {({selected, active}) => (
                                            <div className="flex flex-col">
                                                <div className="flex justify-between">
                                                    <p className={selected ? 'font-semibold' : 'font-normal'}>{option.severity}</p>
                                                    {selected ? (
                                                        <span className={active ? 'text-white' : 'text-sky-500'}>
                                                            <CheckIcon className="h-5 w-5" aria-hidden="true"/>
                                                        </span>) : null}
                                                </div>
                                                <p className={classNames(active ? 'text-sky-200' : 'text-gray-500', 'mt-2')}>
                                                    {option.description}
                                                </p>
                                            </div>)}
                                    </Listbox.Option>))}
                            </Listbox.Options>
                        </Transition>
                    </div>
                </>)}
            </Listbox>
        </div>)
}
export default connect(mapStateToProps, mapDispatchToProps)(SeverityDropDown);