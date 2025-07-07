export type CardState = {
    id: number,
    title: string,
    date: string,
    contentSummery: string
    contentA: string,
    contentB: string,
    contentC: string
    img_url: string,
}

export type CardSet = {
    CardSet: CardState[]
}