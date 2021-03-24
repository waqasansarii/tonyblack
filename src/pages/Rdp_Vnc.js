import React from 'react'
import Error from '../components/error/error'
import Footer from '../components/footer/footer'
import Heading from '../components/heading/heading'
import MainNavbarComp from '../components/navbar'
import Table from '../components/table/table'
import {RDP_VNC_TableData} from '../data/tableData'
import Rdp_Vnc_Filter from '../components/rdp_vnc_comp/filter'

const Rdp_Vnc = () => {
    return (
        <div>
            <MainNavbarComp />
            <Heading head='VNC/DS'/>
            <Rdp_Vnc_Filter />
            <Table  head={RDP_VNC_TableData} body={RDP_VNC_TableData} />
            <Error error='•  No Result' />
            <Footer />
        </div>
    )
}

export default Rdp_Vnc
