import usePlanets from "../../hooks/useInvoices";
import useByDateRange from "../../hooks/useByDateRange";
import React, { useState } from 'react';
import "./table.styles.scss";
import Select from 'react-select';


const columns = ["invoice_id", "invoice_no", "total", "invoice_date", "create_date", "status"]


function edit(params) {
    alert("EDIT")
}




const Table = () =>{
    var today = new Date()
    //const data = usePlanets();


    const [dateStart, setDateStart] = useState(today.toLocaleDateString('en-CA', {timeZone: "America/Guatemala"}))
    const [dateEnd, setDateEnd] = useState(today.toLocaleDateString('en-CA', {timeZone: "America/Guatemala"}))
    const [rangeDate, setDateRange] = useState('Month');
    const [filterField, setFilterField] = useState('all')
    const [textSearch, setTextSearch] = useState('')
    const [sortBy, setSortBy] = useState('');
    const [sortOrder, setSortOrder] = useState('asc');
    const data = useByDateRange(dateStart, dateEnd);

    const handleRangeDate = e => {
      let fecha = e.target.value;
      let fechaName = e.target.name;
      console.log(dateStart)
      if (fechaName == 'end'){
        setDateEnd(fecha);
      }else if(fechaName == 'initial'){
      setDateStart(fecha);
      }
    }
 
    const handleSelectedDateStatic = e => {
      let dateStaticOption = e
      setDateRange(dateStaticOption)
      switch(dateStaticOption){
      case 'all':
        var threeYearsAgo = new Date(today);
        threeYearsAgo.setFullYear(today.getFullYear() - 5);
        setDateStart(threeYearsAgo.toLocaleDateString('en-CA', {timeZone: "America/Guatemala"}))
        setDateEnd(today.toLocaleDateString('en-CA', {timeZone: "America/Guatemala"}))
        break;
      case 'thismonth':
        var thismonth = new Date(today);
        thismonth.setDate(1);
        setDateStart(thismonth.toLocaleDateString('en-CA', {timeZone: "America/Guatemala"}))
        setDateEnd(today.toLocaleDateString('en-CA', {timeZone: "America/Guatemala"}))
        break;
      case 'lastmonth':
        var oneMonthAgoIni = new Date(today);
        oneMonthAgoIni.setMonth(oneMonthAgoIni.getMonth()-1);
        var oneMonthAgoEnd = new Date(oneMonthAgoIni.getFullYear(), oneMonthAgoIni.getMonth() +1 , 0);   
        oneMonthAgoIni.setDate(1);
        setDateStart(oneMonthAgoIni.toLocaleDateString('en-CA', {timeZone: "America/Guatemala"}))
        setDateEnd(oneMonthAgoEnd.toLocaleDateString('en-CA', {timeZone: "America/Guatemala"}))
        break;
      case 'last3months':
        var treeMonthAgoIni = new Date(today);
        treeMonthAgoIni.setMonth(treeMonthAgoIni.getMonth()-3);
        setDateStart(treeMonthAgoIni.toLocaleDateString('en-CA', {timeZone: "America/Guatemala"}))
        setDateEnd(today.toLocaleDateString('en-CA', {timeZone: "America/Guatemala"}))
        break;
      case 'thisyear':
        var thisyear = new Date(today);
        var thisyear = new Date(thisyear.getFullYear(), 0 , 1);  
        setDateStart(thisyear.toLocaleDateString('en-CA', {timeZone: "America/Guatemala"}))
        setDateEnd(today.toLocaleDateString('en-CA', {timeZone: "America/Guatemala"}))
        break;
      case 'lastyear':
        var lastyearEnd = new Date(today);
        var lastyearIni = new Date(today);
        lastyearEnd = new Date(lastyearIni.getFullYear(), 0 , 0); 
        lastyearIni = new Date(lastyearIni.getFullYear()-1, 0 , 1);  
        setDateStart(lastyearIni.toLocaleDateString('en-CA', {timeZone: "America/Guatemala"}))
        setDateEnd(lastyearEnd.toLocaleDateString('en-CA', {timeZone: "America/Guatemala"}))
        break;
      
      default:
        setDateStart(today.toLocaleDateString('en-CA', {timeZone: "America/Guatemala"}))
        setDateEnd(today.toLocaleDateString('en-CA', {timeZone: "America/Guatemala"}))
      }
    }

    const handleSelectedFilter = e => {
      setFilterField(e)
    }

    const handleSelectedSort = e =>{
      console.log(e)
      setSortBy(e)
      setSortOrder('asc');
    }

    const handleSearch = e => {
      setTextSearch(e.target.value)
    }

    const handleSearchClean = () => {
      setTextSearch('')

    }

 
    const handleSort = (key) => {
      if (sortBy === key) {
        setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
      } else {
        setSortBy(key);
        setSortOrder('asc');
      }
    };


    const filterField2 = [... new Set(data.map( value => value.status))];


    var filteredData = []
    
    filteredData = data.filter(item => {
           
      const filterOne = textSearch === '' || Object.values(item).some(value =>
        value.toString().toLowerCase().includes(textSearch.toLowerCase()));

     const filterTwo = filterField === 'all' || Object.values(item).some(value =>
        value.toString().toLowerCase().includes(filterField.toLowerCase()));

      return filterOne && filterTwo;
    })
    .sort((a, b) => {
      if (sortBy) {

        const compareValueA = typeof a[sortBy] === 'string' ? a[sortBy].toLowerCase() : a[sortBy].toString();
        const compareValueB = typeof b[sortBy] === 'string' ? b[sortBy].toLowerCase() : b[sortBy].toString();

        if (sortOrder === 'asc') {
          return compareValueA.localeCompare(compareValueB);
        } else {
          return compareValueB.localeCompare(compareValueA);
        }
      } else {
        return 0;
      }
    });




    return (
    <>
    <h1 className="table-title">Invoices</h1>
    <hr className="line"/>
    <div className="table-base">
        <div className="table-search">       
        <div className="search-word" >
        <input className="input-table" type="text" name="search"  value={textSearch}  onChange={handleSearch}/>
        <button className="search-button" onClick={handleSearchClean}>
        <span class="material-symbols-outlined">backspace</span>
        </button>
         </div>
         <div className="search-filter">
         <div>
                <select 
                name="selectedDateStatic" 
                className="select-rangedate" 
                value={rangeDate}
                onChange={e => handleSelectedDateStatic(e.target.value)}
                >
                  <option value="dates" selected>Dates</option>
                    <option value="all">All</option>
                    <option value="thismonth">This Month</option>
                    <option value="lastmonth">Last Month</option>
                    <option value="last3months">Last 3 Months</option>
                    <option value="thisyear">This Year</option>
                    <option value="lastyear">Last Year</option>
                </select>
            </div>

          
          <input  className="select-dates" type="date" id="start" name="initial" value={dateStart} onChange={handleRangeDate} />
         <input  className="select-dates" type="date" id="end" name="end" value={dateEnd} onChange={handleRangeDate}/>


         {/*<svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 -960 960 960" width="20"><path d="M415-323.5V-341h129.5v17.5H415Zm-129.5-148V-489h388v17.5h-388ZM201-619v-17.5h558v17.5H201Z"/></svg>*/} 
<select  
name="selectedFilter"
className="select-rangedate"
value= {filterField}
onChange={e => handleSelectedFilter(e.target.value)}
>
  <option value="all" selected>Status: All</option>
{filterField2.map((val, key) => {
                return(
                  <option value={val}>{val}</option>
                )
            })}
</select>


{/*<svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 -960 960 960" width="20"><path d="M369.5-471v-302L237-640.5 225-654l153.5-153 153 152.5-12 13.5L387-773v302h-17.5ZM581-153 428-306l12-13.5L572.5-187v-302H590v302l132-132.5 12 13.5-153 153Z"/></svg>*/} 

<select  
name="selectedSort"
className="select-rangedate"  
value={sortBy}
onChange={e => handleSelectedSort(e.target.value)}
>
<option value="all" selected>Order: N/A</option>
{columns.map((val, key) => {
                return(
                  <option value={val}>{val}</option>
                )
            })}
</select>



        </div>

         </div>
        <table className="table">
            <thead>
            <tr>
            {columns.map((val, key) => {
                return(
                <th key={key}>
                  <button className="button-sort-column" onClick={() => handleSort(val)}>           
                  {val} {sortBy === val && (sortOrder === 'asc' ? '▲' : '▼') }
                  </button>
                  </th>
                )
            })}
            </tr>
            </thead>
            <tbody>
            {filteredData.map((val, key) => {
                return(
                <tr key={key}>
                    <td className="table-td">{val.invoice_id}</td>
                    <td className="table-td">{val.invoice_no}</td>
                    <td className="table-td">{val.total}</td>
                    <td className="table-td">{val.invoice_date}</td>
                    <td className="table-td">{val.create_date}</td>
                    <td className="table-td">{val.status}</td>
                   {/* <td className="table-td" onClick={() => edit()}> Edit</td> */}
                </tr>
                )
            })}
            </tbody>
    <tfoot className="table-foot">
    <tr>
        <td>
    <button className="pagination-table-data_r"><span className="material-symbols-outlined">first_page</span></button>
    <button className="pagination-table-data"><span className="material-symbols-outlined">navigate_before</span></button>
    <button className="pagination-table-data"><span className="material-symbols-outlined">navigate_next</span></button>
    <button className="pagination-table-data_l"><span className="material-symbols-outlined">last_page</span></button>
    <select className="pagination-table-size" name="item_page">
        <option value="10" selected>10</option>
        <option value="10">20</option>
        <option value="10">50</option>
    </select>
    <span className="tfoot-items">items per page</span>
    </td>
    <td colSpan="3" className="tfoot-items">
      
    </td>
  
    <td colSpan="1s" className="tfoot-items">
        1 - {filteredData.length} of {filteredData.length} items
    </td>
    </tr>
  </tfoot>
</table>
    </div>
    </>
    );
}

export default Table;