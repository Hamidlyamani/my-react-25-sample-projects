
import './style.css'
import Menu from "./Menu";

export type menu = {
    id: number;
    title: string,
    url: string,
    children?:menu[]
 }


const data = [
    {
        id: 1,
        title: 'home',
        url: "#",
        children: [
            {
                id: 1,
                title: 'home 1',
                url: "#",
            },
            {
                id: 2,
                title: 'home 2',
                url: "#",
            },
            {
                id: 3,
                title: 'home 3',
                url: "#",
            }
        ]
    },
    {
        id: 4,
        title: 'profile',
        url: "#",
        children:[
            {
                id: 5,
                title: 'profile 1',
                url: "#",
            },
            {
                id: 6,
                title: 'profile 2',
                url: "#",
            },
            {
                id: 7,
                title: 'profile 3',
                url: "#",
            }
        ]
    },
    {
        id: 8,
        title: 'statistics',
        url: "#",
        children: [
            {
                id: 9,
                title: 'statistics 1',
                url: "#",
            },
            {
                id: 10,
                title: 'statistics 2',
                url: "#",
                children: [{
                    id: 11,
                    title: 'form 1',
                    url: "#",
                }, {
                    id: 12,
                    title: 'form 2',
                    url: "#",
                    children: [{
                        id: 13,
                        title: 'form 1',
                        url: "#",
                    }, {
                        id: 14,
                        title: 'form 2',
                        url: "#",
                    }, {
                        id: 15,
                        title: 'form 3',
                        url: "#",
                    }]          
                }, {
                    id: 16,
                    title: 'form 3',
                    url: "#",
                }]
            },
            {
                id: 17,
                title: 'statistics 3',
                url: "#",
            }
        ]
    }
]
export default function Dropdwon() {



    return (
        <div className="sidebar">
            <Menu data={data} />
        </div>
    )
}
