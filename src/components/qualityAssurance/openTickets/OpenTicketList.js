﻿import {useEffect, useState} from "react";
import TicketInfo from "./TicketInfo";

export default function OpenTicketList(props) {
    const [tickets, setTickets] = useState([]);

    const getTickets = async () => {
        const query = `query GetAllTickets ($name: String) {
            getAllTickets (emailFilter: $name) {
                id
                title
                severity
                priority
                type
                product
                browser
                summary
                reproductionSteps
                expectedResult
                actualResult
                createdAt
                updatedAt
                assignedTo
                status
            }
        }`;

        const headers = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer ${props.token}`
            }, body: JSON.stringify({
                query, variables: {
                    name: props.user.email
                }
            })
        }

        const request = await fetch("http://localhost:4000/graphql", headers);
        const response = await request.json();
        const ticketData = response.data.getAllTickets;
        ticketData.forEach((item) => {
            item.createdAt = new Date(item.createdAt).toLocaleString();
            item.updatedAt = new Date(item.updatedAt).toLocaleString();
        })
        setTickets(ticketData);
    }

    useEffect(() => {
        getTickets().catch(console.error)
    }, [])

    return (
      <TicketInfo tickets={tickets}/>
    );
}