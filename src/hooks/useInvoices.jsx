import { useCallback, useEffect, useState } from "react";

import { httpGetInvoices, httpGetInvoicesByDateRange} from "./request";

function useInvoices() {
    const [invoices, saveInvoices] = useState([]);
  
    const getInvoices = useCallback(async () => {
      const fetchedInvoices= await httpGetInvoices();
      saveInvoices(fetchedInvoices);
    }, []);
  
    useEffect(() => {
        getInvoices();

    }, [getInvoices]);
  
    return invoices;
  }
  
  export default useInvoices;