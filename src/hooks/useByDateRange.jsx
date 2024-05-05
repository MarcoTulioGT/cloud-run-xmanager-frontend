import { useCallback, useEffect, useState } from "react";

import { httpGetInvoicesByDateRange} from "./request";

function useByDateRange(dateStart, dateEnd) {
  console.log("useByDateRange")

    const [invoices, saveInvoices] = useState([]);
  
    const getInvoices = useCallback(async () => {
      const fetchedInvoices= await httpGetInvoicesByDateRange(dateStart, dateEnd);
      saveInvoices(fetchedInvoices);
    }, [dateStart, dateEnd]);
  
    useEffect(() => {

        getInvoices();

    }, [getInvoices]);

    return invoices;
  }
  
  export default useByDateRange;