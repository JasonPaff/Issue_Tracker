﻿import React, {useEffect} from "react";
import {connect} from "react-redux";
import openTicketsTableSorter from "../../../utils/OpenTicketsTableSorter";
import OpenTicketFilterBar from "../openTickets/OpenTicketFilterBar";
import OpenTicketInfoColumnHeaders from "../openTickets/OpenTicketInfoColumnHeaders";
import OpenTicketInfoRows from "../openTickets/OpenTicketInfoRows";
import OpenTicketInfoTableHeader from "../openTickets/OpenTicketInfoTableHeader";

const mapStateToProps = (state) => {
    return {
        selectedSort: state.openTicketReducer.selectedSort,
        isSortAscending: state.openTicketReducer.isSortAscending
    }
}

function ClosedTicketInfo(props) {

    useEffect(() => {
        openTicketsTableSorter(props.tickets, props.selectedSort, props.isSortAscending);
    }, [props.tickets, props.selectedSort, props.isSortAscending]);

    return (
        <div className="px-4 sm:px-6 lg:px-8">
            <OpenTicketInfoTableHeader/>
            <div className="mt-8 flex flex-col">
                <OpenTicketFilterBar/>
                <div className="-my-2 -mx-4 sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 align-middle">
                        <div className="shadow-sm ring-1 ring-black ring-opacity-5">
                            <table className="min-w-full border-separate" style={{ borderSpacing: 0}}>
                                <OpenTicketInfoColumnHeaders/>
                                <OpenTicketInfoRows tickets={props.tickets}/>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default connect(mapStateToProps)(ClosedTicketInfo);