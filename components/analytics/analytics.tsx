import * as env from './.env.js'

// log the pageview with their URL
export const pageview = (url: string) => {
    (window as any).gtag('config', env.GOOGLEALAYTICS, {
        page_path: url,
    })
}

// log specific events happening.
export const event = ({ action, params }: { action: string, params: any }) => {
    (window as any).gtag('event', action, params)
}