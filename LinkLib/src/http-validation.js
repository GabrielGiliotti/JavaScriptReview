function linkExtraction(linkList) {
    return linkList.map((obj) => Object.values(obj).join());
}

async function statusCheck(urlList) {
    const arrStatus = await Promise.all(
        urlList.map(async (url) => {
            const response = await fetch(url, { method: 'HEAD' });
            return response.status;
        })
    );
    
    return arrStatus;
}

export default async function validatedList(list) {
    const links = linkExtraction(list);
    const status = await statusCheck(links);
    return status;
}