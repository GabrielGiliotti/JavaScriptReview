function linkExtraction(linkList) {
    return linkList.map((obj) => Object.values(obj).join());
}

async function statusCheck(urlList) {
    const arrStatus = await Promise.all(
        urlList.map(async (url) => {
            try {
                const response = await fetch(url, { method: 'HEAD' });
                return `${response.status} - ${response.statusText}`;
            }
            catch (error) {
                return exceptionHandler(error);
            }
        })
    );
    
    return arrStatus;
}

function exceptionHandler(error) {
    let response;

    if(error.cause.code === "ENOTFOUND") {
        response = 'Link not found';
    } else {
        response = 'Something is wrong';
    }
    return response;
}

export default async function validatedList(list) {
    const links = linkExtraction(list);
    const status = await statusCheck(links);
    return list.map((obj, index) => ({
        ...obj,
        status: status[index]
    }));
}