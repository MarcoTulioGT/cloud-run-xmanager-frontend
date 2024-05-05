const API_URL = 'http://localhost:4001';
const API_URL_GCP = 'https://cloud-run-xmanager-backend-2rnykusuka-uc.a.run.app';

async function httpGetInvoices(){
    const response = await fetch(`${API_URL}/products`);
    return await response.json();
}

async function httpGetInvoicesByDateRange(dateStart, dateEnd){
    console.log(dateStart)
    console.log(dateEnd)
    const response = await fetch(`${API_URL_GCP}/invoices?dateStart=`+dateStart+`&dateEnd=`+dateEnd);
    return await response.json();
}

export {
    httpGetInvoices,
    httpGetInvoicesByDateRange
}