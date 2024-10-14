import {dashboard, expense, transactions, trend} from '../utils/icons'
export const menuItems = [
    {
        id: 1,
        title: 'DashBoard',
        icon:dashboard,
        link:'/dashboard'
    },
    {
        id: 2,
        title: 'View Transactions',
        icon:transactions,
        link:'/dashboard'
    },
    {
        id: 3,
        title: 'Incomes',
        icon:trend,
        link:'/dashboard'
    },
    {
        id: 4,
        title: 'Expenses',
        icon: expense,
        link:'/dashboard'
    }
]