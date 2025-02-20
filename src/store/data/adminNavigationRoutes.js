﻿import {
    ArchiveIcon,
    PresentationChartLineIcon, TicketIcon,
} from "@heroicons/react/solid";

export const primaryNavigations = [
    {name: 'Ticket Stats', location: 'stats', icon: PresentationChartLineIcon, current: true},
    {name: 'View Tickets', location: 'openTickets', icon: TicketIcon, current: false},
    {name: 'Assign Tickets', location: 'closedTickets', icon: ArchiveIcon, current: false}
];