export interface ICourseCard {
    title: string
    text: string
    subscribersQty: string
    subscribers: ISubscribers[]
    id: number
}

interface ISubscribers {
    name: string
    id: number
}

export interface IHeroCard {
    title: string
    text: string
    id: number
}