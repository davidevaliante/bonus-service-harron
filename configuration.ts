export interface Config {
    streamerId : string | number 
    streamerName : string
    api : string
    primaryColor : string
    secondaryColor : string
    fontString : string
    font : string
    youtubeMetatag? : string
}

export const configuration : Config = {
    streamerId : 10,
    streamerName : 'harron',
    api : 'https://compare.topadsservices.com',
    primaryColor : '#f25d3b',
    secondaryColor : '#ff6347',
    fontString : "https://fonts.googleapis.com/css2?family=Hachi+Maru+Pop&display=swap",
    font : 'Roboto',
}

